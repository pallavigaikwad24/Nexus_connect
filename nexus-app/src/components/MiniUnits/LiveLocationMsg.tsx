"use client";
import { useUser } from "@/hooks/useUser";
import { createPubnubClient } from "@/services/config/pubnub";
import { useEffect, useRef } from "react";

interface Props {
  sessionId: string;
}

export const LiveLocationMsg = ({ sessionId }: Props) => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const { user } = useUser();

  useEffect(() => {
    const channel = `live-location.${sessionId}`;
    const pubnub = createPubnubClient(user?.id || "");
    pubnub.subscribe({ channels: [channel] });

    // pubnub.addListener({
    //   message: (event) => {
    //     const { lat, lng } = event.message;

    //     if (mapRef.current) {
    //       mapRef.current.src = `${process.env.NEXT_PUBLIC_GOOGLE_URL}?q=${lat},${lng}&z=16&output=embed`;
    //     }
    //   },
    // });

    return () => {
      pubnub.unsubscribe({ channels: [channel] });
    };
  }, [sessionId]);

  return (
    <iframe
      ref={mapRef}
      width="250"
      height="150"
      loading="lazy"
      style={{ borderRadius: "8px" }}
    />
  );
};
