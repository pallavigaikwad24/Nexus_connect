import Pubnub from "pubnub";

const publishKey = process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY!;
const subscribeKey = process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY!;

export function createPubnubClient(uuid: string) {
  const pubnub = new Pubnub({
    publishKey,
    subscribeKey,
    userId: uuid,
  });
  return pubnub;
}
