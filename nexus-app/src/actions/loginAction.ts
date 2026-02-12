"use server";

import { Errors, FormState, OtpResponse } from "@/global.types";
import { getTwilioClient } from "@/services/config/twilioConfig";
import {
  fileSizeError,
  invaliError,
  requiredError,
} from "@/utils/server-utils/errorMessage";
import { profileUpload } from "./profileUpload";
import { redirect } from "next/navigation";
import { getUserByMobile } from "@/utils/server-utils/operations";
import { generateToken } from "@/utils/server-utils/authCheck";
import { setCookies } from "@/utils/server-utils/cookie";

const isDev = process.env.NODE_ENV !== "production";

export async function loginForm(_prevState: FormState, formData: FormData) {
  const mobile = formData.get("mobile") as string;
  const countryCode = formData.get("countryCode") as string;

  const errors: Errors = {};

  if (!mobile) {
    errors.mobile = requiredError("Mobile number");
  } else if (mobile.length < 10) {
    errors.mobile = invaliError("Mobile number");
  }

  if (!countryCode) {
    errors.countryCode = requiredError("Country Code");
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      error: errors,
      data: null,
    };
  }

  return {
    success: true,
    error: null,
    data: {
      mobile,
      countryCode,
    },
  };
}

// Resend Otp request

export async function sendOtpVerification(mobile: string) {
  if (isDev) {
    return { success: true, mode: "dev" };
  }

  const client = getTwilioClient();
  await client.verify.v2
    .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
    .verifications.create({
      to: mobile,
      channel: "sms",
    });

  return { success: true, mode: "prod" };
}

// send Otp verification

export async function otpVerification(
  Otp: string,
  countryCode: string,
  mobile: string,
): Promise<OtpResponse> {
  const defaultOTP = "000000";
  let approved = false;
  if (isDev && Otp === defaultOTP) {
    approved = true;
  }

  if (isDev && Otp !== defaultOTP) {
    approved = false;
  } else if (!isDev && Otp !== defaultOTP) {
    const verificationCheck = await sendOtpVerification(mobile);
    approved = verificationCheck?.success && verificationCheck?.mode == "prod";
  }

  const existingUser = await getUserByMobile(countryCode, mobile);
  
  if (!approved) {
    return { success: false, message: "Invalid OTP" };
  }

  if (existingUser)
    await setCookies(
      "user",
      JSON.stringify({
        id: existingUser?.id,
        countryCode: existingUser.countryCode,
        mobile: existingUser.mobile,
        name: existingUser.name,
      }),
    );

  return {
    success: true,
    user: existingUser
      ? {
          user: existingUser,
          token: generateToken(existingUser.id),
        }
      : null,
    isExistingUser: !!existingUser,
  };
}

// Create profile form
export async function createProfile(prevState: FormState, formData: FormData) {
  const photo = formData.get("photo") as File | null;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const mobile = formData.get("mobile") as string;
  const countryCode = formData.get("countryCode") as string;

  const profileData = {
    file: photo?.size != 0 ? photo : null,
    firstName,
    lastName,
    mobile,
    countryCode,
  };

  await profileUpload(profileData);

  const errors: Errors = {};
  const sizeLimit = 1024 * 1024 * 5; // 5mb

  if (photo && photo?.size > sizeLimit) {
    errors.photo = fileSizeError("Profile Picture");
  }

  if (!firstName) {
    errors.firstName = requiredError("First Name");
  }
  if (!lastName) {
    errors.lastName = requiredError("Last Name");
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      error: errors,
      data: null,
    };
  }

  redirect("/dashboard");
}
