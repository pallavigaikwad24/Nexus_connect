import { Flex, Box, Text, HStack, IconButton } from "@chakra-ui/react";
import { AlertCircleIcon, Ban } from "lucide-react";
import { chatType, MessageType, userInfoInterface } from "@/global.types";
import { handleTime } from "@/utils/client-utils/chatHelpers";
import FileMsg from "./MiniUnits/fileMsg";
import { ReactionBar } from "./MiniUnits/ReactionBar";
import { ImageMsg } from "./MiniUnits/ImageMsg";
import { LiveLocationMsg } from "./MiniUnits/LiveLocationMsg";

interface ChatSpaceProps {
  msg: chatType;
  userId: string;
  bottomRef: any;
  setMessages: React.Dispatch<React.SetStateAction<chatType[]>>;
  receiverId: string | null;
  activeReactionMessageId: string | null;
  setActiveReactionMessageId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export default function ChatSpace({
  msg,
  userId,
  bottomRef,
  setMessages,
  receiverId,
  activeReactionMessageId,
  setActiveReactionMessageId,
}: ChatSpaceProps) {
  const isReactionOpen = activeReactionMessageId === msg.id;

  // const [openReactionBar, setOpenReactionBar] = useState(false);
  const renderMessage = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;

    // Split the text into an array of strings and URL matches
    const parts = text.split(urlRegex);
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part.startsWith("www") ? `https://${part}` : part}
            style={{ color: "#01fc37ff", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const emojiCounts = msg.chatReactions?.reduce<Record<string, number>>(
    (acc, reaction) => {
      acc[reaction.emoji] = (acc[reaction.emoji] || 0) + 1;
      return acc;
    },
    {},
  );

  return (
    <>
      <Flex flexDir={"column"} position={"relative"}>
        <Box>
          {msg.content.isSafe == false && msg.senderId === userId && (
            <HStack color="red.500" fontSize="xs" fontWeight="bold">
              <AlertCircleIcon size={14} />
              <Text>Suspicious Link Detected</Text>
            </HStack>
          )}
          <Box
            maxW={{ base: "xs", md: "md", lg: "lg" }}
            mt={2}
            px={4}
            py={2}
            mb={5}
            rounded="lg"
            onMouseEnter={() => setActiveReactionMessageId(msg?.id || "")}
            onMouseLeave={() => setActiveReactionMessageId(null)}
            bg={msg.senderId === userId ? "teal.500" : "white"}
            color={msg.senderId === userId ? "white" : "gray.800"}
            boxShadow={msg.senderId === userId ? "none" : "sm"}
            position={"relative"}
          >
            {isReactionOpen && (
              <Box
                position={"absolute"}
                top={0}
                zIndex={1}
                right={msg.senderId === userId ? 0 : "auto"}
                left={msg.senderId !== userId ? 0 : "auto"}
              >
                <ReactionBar
                  messageId={msg.id || ""}
                  userId={userId}
                  setMessages={setMessages}
                  receiverId={receiverId}
                />
              </Box>
            )}

            {/* Text Message */}
            {msg.content?.type === MessageType.TEXT && (
              <Text fontSize="md">{renderMessage(msg.content.text)}</Text>
            )}

            {/* Current location share */}
            {msg.content?.type == MessageType.LOCATION && (
              <iframe
                width="250"
                height="150"
                loading="lazy"
                src={`${process.env.NEXT_PUBLIC_GOOGLE_URL}?q=${
                  JSON.parse(msg.content?.text).lat
                },${JSON.parse(msg.content?.text).long}&z=15&output=embed`}
              />
            )}

            {/* Live Location */}
            {msg.content?.type === MessageType.LIVE_LOCATION && (
              <LiveLocationMsg
                sessionId={JSON.parse(msg.content.text).sessionId}
              />
            )}

            {/* File type */}
            {(msg.content?.type === MessageType.FILE ||
              (msg.content?.type === MessageType.IMAGE &&
                !JSON.parse(msg.content.text).mimeType.startsWith(
                  "image/",
                ))) && <FileMsg msg={msg} userId={userId} />}

            {/* Image Type */}
            {msg.content?.type === MessageType.IMAGE &&
              JSON.parse(msg.content.text).mimeType.startsWith("image/") && (
                <Flex align="center" gap={3} rounded="md">
                  <ImageMsg
                    imageUrl={JSON.parse(msg.content.text).url}
                    fileName={JSON.parse(msg.content.text).name}
                    isSender={msg.senderId === userId}
                  />
                </Flex>
              )}
            <Text
              fontSize="xs"
              color={msg.senderId === userId ? "teal.100" : "gray.500"}
              mt={1}
              textAlign="right"
            >
              {handleTime(msg?.createdAt || "")}
              {msg.content.isSafe == false && msg.senderId === userId && (
                <IconButton
                  bgColor={"transparent"}
                  size={"xs"}
                  color={"red.500"}
                  fontWeight={"bolder"}
                >
                  <Ban />
                </IconButton>
              )}
            </Text>
            {/* Scroll anchor */}
          </Box>
        </Box>

        <Flex mt={"-7px"} zIndex={1} position="absolute" bottom={1}>
          {emojiCounts &&
            Object.entries(emojiCounts).map(([emoji, count]) => (
              <Flex
                key={emoji}
                gap={1}
                bg="white"
                borderRadius="40%"
                px="4px"
                border={"1px solid #a2e9e2"}
              >
                {emoji}
                {count > 1 && (
                  <Text color={"teal.700"} fontSize={"15px"}>
                    {count}
                  </Text>
                )}
              </Flex>
            ))}
        </Flex>
        <div ref={bottomRef} />
      </Flex>
    </>
  );
}
