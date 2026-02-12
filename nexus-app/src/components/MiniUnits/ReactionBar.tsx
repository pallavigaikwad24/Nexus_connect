import { chatReaction } from "@/actions/dashboardAction";
import { chatType } from "@/global.types";
import { axiosPost } from "@/utils/client-utils/axiosMethods";
import { Box } from "@chakra-ui/react";

export const ReactionBar = ({
  messageId,
  userId,
  setMessages,
  receiverId,
}: {
  messageId: string | null;
  userId: string | undefined;
  setMessages: React.Dispatch<React.SetStateAction<chatType[]>>;
  receiverId: string | null;
}) => {
  const QUICK_REACTIONS = ["👍", "❤️", "😂", "😮", "😢"];

  const handleEmojiReaction = async (emoji: string) => {
    const channel =
      userId && receiverId ? ["chat", userId, receiverId].sort().join("-") : "";

    if (messageId && userId) {
      await chatReaction(messageId, userId, emoji, channel);
    }
    // await axiosPost("/chatReaction", { messageId, userId, emoji, channel });
    // await fetchMessages(userId || "", receiverId || "", setMessages);
  };
  return (
    <>
      <Box bgColor={"white"} rounded={"2xl"} width={"150px"} p={1}>
        {QUICK_REACTIONS.map((emoji) => (
          <Box
            key={emoji}
            fontSize={"lg"}
            _hover={{ bgColor: "gray.300" }}
            rounded={"2xl"}
            ml={"0.5"}
            cursor={"pointer"}
            as="button"
            onClick={() => handleEmojiReaction(emoji)}
          >
            {emoji}
          </Box>
        ))}
      </Box>
    </>
  );
};
