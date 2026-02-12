import { chatType, userInfoInterface } from "@/global.types";
import { downloadFile } from "@/utils/client-utils/chatHelpers";
import { formatFileSize } from "@/utils/client-utils/formatTime";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { Download } from "lucide-react";
import toast from "react-hot-toast";

export default function FileMsg({
  msg,
  userId,
}: {
  msg: chatType;
  userId: string;
}) {
  const handleDownloadFile = async (url: string, name: string) => {
    try {
      await downloadFile(url, name);
    } catch (error: any) {
      toast.error(`${error.message || "Failed to download file!"}`);
    }
  };
  return (
    <Flex
      align="center"
      gap={3}
      p={2}
      bg={msg.senderId === userId ? "teal.600" : "gray.100"}
      rounded="md"
    >
      {/* File icon */}
      <Box
        bg={msg.senderId === userId ? "teal.400" : "gray.300"}
        p={2}
        rounded="md"
      >
        📄
      </Box>

      {/* File info */}
      <Box>
        <Text fontSize="sm" fontWeight="semibold">
          {JSON.parse(msg.content.text).name}
        </Text>
        <Text fontSize="xs" opacity={0.7}>
          {formatFileSize(JSON.parse(msg.content.text).size)}
        </Text>
      </Box>

      {/* Download */}
      <IconButton
        aria-label="Download file"
        size="sm"
        variant="ghost"
        onClick={() =>
          handleDownloadFile(
            JSON.parse(msg.content.text).url,
            JSON.parse(msg.content.text).name,
          )
        }
      >
        <Download size={10} />
      </IconButton>
    </Flex>
  );
}
