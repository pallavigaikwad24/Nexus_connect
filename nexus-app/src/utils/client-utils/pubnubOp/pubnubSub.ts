import { chatReactionType, chatType } from "@/global.types";

export const handlePubnubMessage =
  (
    setMessages: React.Dispatch<React.SetStateAction<chatType[]>>,
    selectedChatId: string,
  ) =>
  (m: any) => {
    const payload = m.message;

    // Realtime emoji reaction update
    if (payload.chatReaction) {
      setMessages((msgs) =>
        msgs.map((msg) => {
          if (msg.id !== payload.chatReaction.messageId) return msg;

          const existingIndex = msg.chatReactions?.findIndex(
            (r: chatReactionType) =>
              r.reactorId === payload.chatReaction.reactorId,
          );

          // No reactions yet → add
          if (!msg.chatReactions || existingIndex === -1) {
            return {
              ...msg,
              chatReactions: [
                ...(msg.chatReactions ?? []),
                payload.chatReaction,
              ],
            };
          }

          // Reaction exists → update emoji
          const updatedReactions = [...msg.chatReactions];
          updatedReactions[existingIndex] = payload.chatReaction;

          return {
            ...msg,
            chatReactions: updatedReactions,
          };
        }),
      );
    }

    const contentObject = JSON.parse(payload.content);
    const msg: chatType = {
      senderId: payload.senderId,
      receiverId: selectedChatId || " ",
      content: {
        text: contentObject.text,
        type: contentObject.type,
        isSafe: contentObject.isSafe,
      },
      chatReactions: payload.chatReactions || [],
      createdAt: new Date().toISOString(),
      id: payload.id || null,
      isDeleted: false,
    };
    setMessages((msgs) => [...msgs, msg]);
  };

export const handlePubnubPresence =
  (
    setOnlineUsers: React.Dispatch<
      React.SetStateAction<Record<string, boolean>>
    >,
    setLastSeen: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  ) =>
  (p: any) => {
    const userId = p.uuid;
    if (p.action === "join") {
      setOnlineUsers((prev) => ({ ...prev, [userId]: true }));
    }

    if (p.action === "leave" || p.action === "timeout") {
      setOnlineUsers((prev) => ({ ...prev, [userId]: false }));
      setLastSeen((prev) => ({
        ...prev,
        [userId]: new Date().toISOString(),
      }));
    }
  };
