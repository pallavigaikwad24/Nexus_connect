"use server";

import cloudinary from "@/services/config/cloudinaryConfig";
import { pubnubInstance } from "@/services/config/pubnubServer";
import { checkScamLink } from "@/utils/server-utils/checkScamLink";
import { getCookie } from "@/utils/server-utils/cookie";
import {
  chatReactionCreate,
  chatReactionFind,
  chatReactionUpdate,
  createNewChat,
  createNewUserContact,
  getContactInfo,
} from "@/utils/server-utils/operations";

export async function sendChat(args: Record<string, any>) {
  const { message, messageType, receiverId, senderId, channel } = args;
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;

  const urlFilter = message.split(urlRegex);
  const url = urlFilter.find((part: string) => part.match(urlRegex));
  const result = url ? await checkScamLink(url) : undefined;
  const payload = {
    content: {
      text: message,
      type: messageType,
      isSafe: result ? result.isSafe : null,
    },
    receiverId,
    senderId,
  };

  const newChat = await createNewChat(payload);

  const userString = await getCookie("user");
  const user = userString ? JSON.parse(userString) : null;

  const isUserContactExists = await getContactInfo(newChat.receiverId, user.id);

  if (!isUserContactExists) {
    const newContact = await createNewUserContact(
      newChat.receiverId,
      user.countryCode,
      user.mobile,
      `${user.countryCode}-${user.mobile}`,
    );

    const sidebarPayload = {
      type: "contact:new",
      contact: {
        id: newContact.id,
        ownerId: newContact.ownerUserId,
        linkedUserId: newContact.linkedUserId,
        name: newContact.name,
        phone: newContact.phone,
        createdAt: newContact.createdAt.toISOString(),
        linkedUser: newContact.linkedUser,
      },
    };

    const pubnubObj = pubnubInstance(newContact.ownerUserId);
    pubnubObj.publish({
      channel: `contacts-${newContact.ownerUserId}`,
      message: sidebarPayload,
    });
  }

  const pubnubPayload = {
    ...newChat,
    content: JSON.stringify(payload.content),
    id: newChat.id,
    createdAt: newChat.createdAt.toISOString(),
  };

  const pubnubObj = pubnubInstance(senderId);
  pubnubObj.publish({
    channel,
    message: pubnubPayload,
  });
  return;
}

export async function uploadFile(file: File) {
  const ALLOWED_TYPES = [
    "image/png",
    "image/jpeg",
    "image/webp",
    "application/pdf",
  ];

  const limit = 5 * 1024 * 1024; // 5MB limit

  if (file.size > limit) {
    throw new Error("File size exceeds 5MB limit!");
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error("Unsupported file type!");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const isImage = file.type.startsWith("image/");

  const result: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "nextjs_uploads",
          resource_type: isImage ? "image" : "raw",
          public_id: `${Date.now()}-${crypto.randomUUID()}`,
        },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        },
      )
      .end(buffer);
  });

  const responseResult = {
    url: result.secure_url,
    publicId: result.public_id,
    name: file.name,
    size: file.size,
    type: file.type,
    resourceType: isImage ? "image" : "raw",
  };
  return responseResult;
}

export async function chatReaction(
  messageId: string,
  userId: string,
  emoji: string,
  channel: string,
) {
  let existed = await chatReactionFind(messageId, userId);

  if (existed) {
    existed = await chatReactionUpdate(existed.id, emoji);
  } else {
    existed = await chatReactionCreate(messageId, userId, emoji);
  }

  const pubnubPayload = {
    chatReaction: existed,
  };

  const pubnubObj = pubnubInstance(userId);
  pubnubObj.publish({
    channel,
    message: pubnubPayload,
  });
}
