"use client";

import { chatType } from "@/global.types";
import { pubnubAction } from "@/utils/client-utils/pubnubOp/pubnubAction";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { Send, Paperclip, Mic, Camera, MapPin } from "lucide-react";
import {
  Flex,
  Box,
  HStack,
  IconButton,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { sendChat, uploadFile } from "@/actions/dashboardAction";
import ChatSpace from "../ChatSpace";
import EmojiInput from "../MiniUnits/EmojiInput";
import { SendPopup } from "../MiniUnits/SendLocation";
import { getMessagesById } from "@/utils/server-utils/operations";
import toast from "react-hot-toast";
import FileUploadLoading from "../MiniUnits/FileUploadLoader";

export default function ChatFramePage({
  receiverId,
  messageList,
  userId,
}: {
  receiverId: string;
  messageList: any;
  userId: string;
}) {
  const fileRef = useRef<any>(null);
  const imgRef = useRef<any>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(messageList);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [activeReactionMessageId, setActiveReactionMessageId] = useState<
    string | null
  >(null);
  const [openPopUp, setOpenPopUp] = useState(false);

  const loadingOlder = useRef(false);
  const hasMore = useRef(true);
  const [onlineUsers, setOnlineUsers] = useState<Record<string, boolean>>({});
  const [lastSeen, setLastSeen] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();
  const [isUploading, startUploadTransition] = useTransition();

  const isLoadingOlderRef = useRef(false);

  // Pubnub Setup
  const pubnubRef = useRef<any>(null);

  const channel =
    userId && receiverId ? ["chat", userId, receiverId].sort().join("-") : "";

  useEffect(() => {
    if (!channel || !userId || !receiverId) return;

    const cleanup = pubnubAction(
      pubnubRef,
      userId,
      setMessages,
      setOnlineUsers,
      setLastSeen,
      receiverId,
      channel,
    );

    return () => {
      cleanup?.();
    };
  }, [channel, userId]);

  // Auto scrolling
  const handleScrolling = () => {
    const el = containerRef.current;
    if (!el || isLoadingOlderRef.current) return;

    const BOTTOM_THRESHOLD = 50;
    const TOP_THRESHOLD = 50;

    // Bottom detection
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setAutoScroll(distanceFromBottom < BOTTOM_THRESHOLD + 1);

    // Top detection
    if (el.scrollTop <= TOP_THRESHOLD && !isLoadingOlderRef.current) {
      isLoadingOlderRef.current = true;
      startTransition(() => {
        loadOlderMessages();
      });
    }
  };

  // Auto scrolling when allowed
  useEffect(() => {
    if (autoScroll) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, autoScroll]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      setMessage("");
      const payload = {
        message,
        messageType: "text",
        receiverId: receiverId.toString(),
        senderId: userId?.toString(),
        channel: channel,
      };
      await sendChat(payload);
    }
  };

  const handleUploadFile = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: string,
  ) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];

    try {
      startUploadTransition(async () => {
        const result = await uploadFile(file);

        const payload = {
          message: JSON.stringify({
            url: result.url,
            name: file.name,
            size: file.size,
            mimeType: file.type,
          }),
          messageType: fileType,
          receiverId: receiverId.toString(),
          senderId: userId?.toString(),
          channel: channel,
        };

        await sendChat(payload);
      });
    } catch (error: any) {
      toast.error(error.message || "File upload failed!");
      return;
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEmojiSelect = (emoji: string) => {
    const input = inputRef.current;
    if (!input) return;

    const start = input.selectionStart ?? message.length; // Cursor start position
    const end = input.selectionEnd ?? message.length; // Cursor end position

    const updated = message.slice(0, start) + emoji + message.slice(end);
    setMessage(updated);
  };

  // Lazy Laoding
  function mergeMessages(prev: any, incoming: any) {
    const map = new Map<string, chatType>();
    for (const msg of prev) {
      map.set(msg?.id || "", msg);
    }

    for (const msg of incoming) {
      map.set(msg?.id || "", msg);
    }
    return Array.from(map.values()).sort(
      (a, b) =>
        new Date(a?.createdAt || 0).getTime() -
        new Date(b?.createdAt || 0).getTime(),
    );
  }

  const loadOlderMessages = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (loadingOlder.current || !hasMore.current) return;
    if (!messages.length) return;

    loadingOlder.current = true;
    const oldestMessage = messages[0];
    const olderMessages = await getMessagesById(
      userId,
      receiverId,
      oldestMessage.id,
      20,
    );

    if (olderMessages.length === 0) {
      hasMore.current = false;
    } else {
      setMessages((prev: any) => mergeMessages(prev, olderMessages));
    }
    loadingOlder.current = false;
  };

  return (
    <>
      {/* Messages Area */}
      <Box
        ref={containerRef}
        flex={1}
        overflowY="auto"
        p={4}
        gap={4}
        onScroll={handleScrolling}
        backgroundImage={`linear-gradient(
                    rgba(255, 255, 255, 0.4),
                    rgba(255, 255, 255, 0.4)
                  ), 
                  url('/wallpaper/defaultWallpaper.jpg')`}
        backgroundRepeat="repeat"
      >
        {isPending && (
          <Box
            display="flex"
            justifyContent="center"
            zIndex={10}
            pointerEvents="none" // allows scroll beneath
          >
            <Spinner color="teal.500" size="md" width="40px" height="40px" />
          </Box>
        )}
        {messages &&
          messages.length > 0 &&
          messages.map((msg: chatType) => {
            const isSender = msg.senderId === userId;
            const isUnsafe = msg.content.isSafe === false;

            // If message is unsafe AND current user is NOT the sender → hide it
            if (isUnsafe && !isSender) {
              return null;
            }
            return (
              <Flex
                key={msg.id}
                justify={msg.senderId === userId ? "flex-end" : "flex-start"}
              >
                <ChatSpace
                  msg={msg}
                  userId={userId || ""}
                  bottomRef={bottomRef}
                  setMessages={setMessages}
                  receiverId={receiverId}
                  activeReactionMessageId={activeReactionMessageId}
                  setActiveReactionMessageId={setActiveReactionMessageId}
                />
              </Flex>
            );
          })}
      </Box>

      {/* Message Input */}
      <Box bg="white" borderTop="1px" borderColor="gray.200" p={4}>
        <HStack gap={1} align="center">
          {/* Emoji Input */}
          <EmojiInput onEmojiSelect={handleEmojiSelect} />

          <IconButton
            _hover={{ bg: "teal.600", color: "white" }}
            variant="ghost"
            onClick={() => imgRef.current?.click()}
            size={"md"}
          >
            <Camera />
            <Input
              type="file"
              accept="image/*"
              hidden
              ref={imgRef}
              onChange={(e) => handleUploadFile(e, "image")}
            />
          </IconButton>
          <IconButton
            _hover={{ bg: "teal.600", color: "white" }}
            variant="ghost"
            onClick={() => fileRef.current?.click()}
            size={"md"}
          >
            <Paperclip />
            <Input
              type="file"
              hidden
              ref={fileRef}
              onChange={(e) => handleUploadFile(e, "file")}
            />
          </IconButton>
          <IconButton
            _hover={{ bg: "teal.600", color: "white" }}
            variant="ghost"
            onClick={() => setOpenPopUp((prev) => !prev)}
            size={"md"}
          >
            <MapPin />
          </IconButton>
          <Input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message"
            bg="gray.100"
            borderRadius="full"
            height="45px"
            fontSize={"md"}
            _focus={{ bg: "gray.200", outline: "none" }}
          />
          {message.trim() ? (
            <IconButton
              onClick={handleSendMessage}
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.600" }}
              rounded="full"
              aria-label="Send message"
            >
              <Send size={20} />
            </IconButton>
          ) : (
            <IconButton variant="ghost">
              <Mic size={24} />
            </IconButton>
          )}
        </HStack>
      </Box>

      {openPopUp && (
        <SendPopup
          isOpen={openPopUp}
          onClose={() => setOpenPopUp(false)}
          receiverId={receiverId}
          channel={channel}
        />
      )}

      {isUploading && <FileUploadLoading />}
    </>
  );
}
