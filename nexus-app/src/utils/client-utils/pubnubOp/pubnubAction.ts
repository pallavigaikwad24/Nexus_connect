"use client";

import { createPubnubClient } from "@/services/config/pubnub";
import { handlePubnubMessage, handlePubnubPresence } from "./pubnubSub";
import PubNub from "pubnub";
import { chatType } from "@/global.types";

export const pubnubAction = (
  pubnubRef: React.RefObject<PubNub>,
  userID: string,
  setMessages: React.Dispatch<React.SetStateAction<chatType[]>>,
  setOnlineUsers: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
  setLastSeen: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  receiverId: string,
  channel: string,
) => {
  const pubnubActionClient = createPubnubClient(userID);

  pubnubRef.current = pubnubActionClient;
  const listener = {
    message: handlePubnubMessage(setMessages, receiverId || ""),
    presence: handlePubnubPresence(setOnlineUsers, setLastSeen),
  };

  pubnubRef.current.addListener(listener);
  pubnubRef.current.subscribe({
    channels: [
      channel, // chat messages
      `presence-${receiverId}`, // global presence
    ],
    withPresence: true,
  });

  return () => {
    pubnubRef?.current.unsubscribe({
      channels: [
        channel, // chat messages
        `presence-${receiverId}`, // global presence
      ],
    });

    pubnubActionClient.removeListener(listener);
  };
};
