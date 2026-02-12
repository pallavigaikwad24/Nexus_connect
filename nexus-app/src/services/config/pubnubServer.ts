import PubNub from "pubnub";

const publishKey = process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY!;
const subscribeKey = process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY!;
const secretKey = process.env.PUBNUB_SECRET_KEY!;

export const pubnubInstance = (userId: string) =>
  new PubNub({
    publishKey,
    subscribeKey,
    secretKey,
    userId,
    presenceTimeout: 300, // Default 300s
    heartbeatInterval: 120, // Default 60s
  });
