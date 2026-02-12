import twilio, { Twilio } from "twilio";

let twilioClient: Twilio | null = null;

export function getTwilioClient() {
  if (!twilioClient) {
    if (
      !process.env.TWILIO_ACCOUNT_SID ||
      !process.env.TWILIO_AUTH_TOKEN ||
      !process.env.TWILIO_PHONE_NUMBER
    ) {
      throw new Error("Twilio environment variables are not configured");
    }

    twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }

  return twilioClient;
}
