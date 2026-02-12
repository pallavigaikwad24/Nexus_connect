"use server";

import { chatType, profileUserInterface } from "@/global.types";
import { prisma } from "@/services/config/prisma";
import {
  contactInfoKey,
  contactListKey,
  getUserKey,
  userByMobileKey,
} from "./cacheKeys";
import { redis } from "@/services/config/redisConnection";
import { getCookie } from "./cookie";

export async function getCountry() {
  return prisma.countryCode.findMany();
}

export async function getUserByMobile(countryCode: string, mobile: string) {
  const key = userByMobileKey(countryCode, mobile);
  const userFromCache = await redis.get(key);

  if (userFromCache) {
    return JSON.parse(userFromCache);
  }

  const user = await prisma.user.findFirst({
    where: { countryCode, mobile },
  });

  if (user) {
    await redis.set(key, JSON.stringify(user), "EX", 60 * 60 * 24); // Cache for 24 hours
  }

  return user;
}

export async function getUserById(userId: string) {
  const key = getUserKey(userId);

  const userCache = await redis.get(key);
  if (userCache) {
    return JSON.parse(userCache);
  }

  const userInfo = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (userInfo) {
    await redis.set(key, JSON.stringify(userInfo), "EX", 60 * 60 * 24); // Cache for 24 hours
  }

  return userInfo;
}

export async function createNewUser(data: profileUserInterface) {
  return prisma.user.create({
    data: {
      ...data,
      profilePicture: `${data?.profilePicture}`,
    },
  });
}

export async function createNewChat(payload: chatType) {
  return prisma.chat.create({
    data: {
      content: {
        text: payload.content.text,
        type: payload.content.type,
        isSafe: payload.content.isSafe,
      },
      receiverId: payload.receiverId,
      senderId: payload.senderId,
    },
  });
}

export async function findUser(where: Record<string, string>) {
  return prisma.user.findFirst({ where });
}

export async function findUserContact(phone: string) {
  return prisma.userContact.findFirst({
    where: { phone },
    include: {
      linkedUser: true,
    },
  });
}

export async function updateUserContact(phone: string, userId: string) {
  const user = await getCookie("user");
  const ownerId = user ? JSON.parse(user).id : null;
  await prisma.userContact.updateMany({
    where: { phone },
    data: { linkedUserId: userId },
  });
  await redis.del(contactListKey(ownerId));
  return;
}

export async function updateUserContactName(phone: string, name: string) {
  const user = await getCookie("user");
  const userId = user ? JSON.parse(user).id : null;
  await prisma.userContact.updateMany({
    where: { phone },
    data: { name },
  });
  await redis.del(contactListKey(userId));
  return;
}

export async function getMessagesById(
  senderId: string,
  receiverId: string,
  cursor?: string,
  limit: number = 20,
) {
  return prisma.chat.findMany({
    where: {
      OR: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
      isDeleted: false,
    },
    include: {
      chatReactions: true,
    },
    orderBy: { createdAt: "desc" },
    take: limit,
    skip: cursor ? 1 : 0,
    cursor: cursor ? { id: cursor } : undefined,
  });
}

export async function getContactList(userId: string) {
  const key = contactListKey(userId);
  const contactListCache = await redis.get(key);

  if (contactListCache) {
    return JSON.parse(contactListCache);
  }

  const userContacts = await prisma.userContact.findMany({
    where: userId ? { ownerUserId: userId } : undefined,
    include: {
      linkedUser: true,
    },
  });

  if (userContacts) {
    await redis.set(key, JSON.stringify(userContacts), "EX", 60 * 60 * 24); // Cache for 24 hours
  }

  return userContacts;
}

export async function getContactInfo(
  ownerUserId: string,
  linkedUserId: string,
) {
  const key = contactInfoKey(ownerUserId, linkedUserId);
  const contactInfoCache = await redis.get(key);

  if (contactInfoCache) {
    return JSON.parse(contactInfoCache);
  }
  const contactInfo = await prisma.userContact.findFirst({
    where: { ownerUserId, linkedUserId },
    include: {
      linkedUser: true,
    },
  });
  if (contactInfo) {
    await redis.set(key, JSON.stringify(contactInfo), "EX", 60 * 60 * 24); // Cache for 24 hours
  }
  return contactInfo;
}

export async function createNewUserContact(
  ownerUserId: string,
  countryCode: string,
  mobile: string,
  name: string,
) {
  const isUserExists = await prisma.user.findFirst({
    where: { countryCode, mobile },
  });

  const contact = await prisma.userContact.create({
    data: {
      ownerUserId,
      phone: `${countryCode}-${mobile}`,
      name,
      linkedUserId: isUserExists ? isUserExists.id : null,
    },
    include: {
      linkedUser: true,
    },
  });
  await redis.del(contactListKey(ownerUserId));
  return contact;
}

export async function chatReactionFind(messageId: string, userId: string) {
  return prisma.chatReaction.findFirst({
    where: { messageId, reactorId: userId },
  });
}
export async function chatReactionUpdate(id: string, emoji: string) {
  return prisma.chatReaction.update({
    where: { id },
    data: { emoji },
  });
}
export async function chatReactionCreate(
  messageId: string,
  userId: string,
  emoji: string,
) {
  return prisma.chatReaction.create({
    data: { messageId, reactorId: userId, emoji },
  });
}
