"use server";

import { Errors, FormState } from "@/global.types";
import { pubnubInstance } from "@/services/config/pubnubServer";
import { getTwilioClient } from "@/services/config/twilioConfig";
import { getCookie } from "@/utils/server-utils/cookie";
import { invaliError, requiredError } from "@/utils/server-utils/errorMessage";
import { createNewUserContact } from "@/utils/server-utils/operations";
import { revalidatePath } from "next/cache";

export async function createNewUserContactForm(
  _prevState: FormState | undefined,
  formData: FormData,
) {
  const user = await getCookie("user");
  const userId = user ? JSON.parse(user).id : null;

  const conactName = formData.get("contactName") as string;
  const mobileNumber = formData.get("mobileNumber") as string;
  const countryCode = formData.get("countryCode") as string;

  const errors: Errors = {};

  if (!conactName) {
    errors.contactName = requiredError("Contact Name");
  }
  if (!mobileNumber.trim()) {
    errors.mobileNumber = requiredError("Mobile Number");
  }

  if (mobileNumber.length < 10) {
    errors.mobileNumber = invaliError("Mobile Number");
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      error: errors,
      data: null,
    };
  }

  const newContact = await createNewUserContact(
    userId,
    countryCode,
    mobileNumber,
    conactName,
  );

  revalidatePath("/chat-frame");

  return {
    success: true,
    error: null,
    data: newContact,
  };
}

export async function sendMessageInvite(
  name: string,
  countryCode: string,
  mobile: string,
) {
  const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/login`;
  const to = `${countryCode}${mobile}`;
  const body = `${name} invited you to join a chat. Tap the link to get started: ${inviteUrl}`;

  if (process.env.NODE_ENV === "production") {
    const client = getTwilioClient();

    await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER!,
      to,
      body,
    });

    return "Ivite Send Successfully!";
  }

  return "Invite send dev mode!";
}
