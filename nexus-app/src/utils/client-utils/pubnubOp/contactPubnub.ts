"use client";

import { createPubnubClient } from "@/services/config/pubnub";
import PubNub from "pubnub";
import { userContactInfoInterface } from "@/global.types";

export const pubnubSidebarAction = (
  pubnubRef: React.RefObject<PubNub>,
  userId: string,
  setContacts: React.Dispatch<React.SetStateAction<userContactInfoInterface[]>>,
) => {
  const pubnubClient = createPubnubClient(userId);
  pubnubRef.current = pubnubClient;

  const listener = {
    message: (event: any) => {
      const msg = event.message;

      console.log("msg::", msg);

      if (msg.type === "contact:new") {
        setContacts((prev) => {
          if (prev.some((c) => c.id === msg.contact.id)) {
            return prev;
          }
          return [msg.contact, ...prev];
        });
      }

      if (msg.type === "contact:remove") {
        setContacts((prev) => prev.filter((c) => c.id !== msg.contactId));
      }
    },
  };

  pubnubClient.addListener(listener);
  pubnubClient.subscribe({
    channels: [`contacts-${userId}`],
  });

  return () => {
    pubnubClient.unsubscribe({
      channels: [`contacts-${userId}`],
    });
    pubnubClient.removeListener(listener);
  };
};
