import { useState } from "react";
import { Box, IconButton, Spinner } from "@chakra-ui/react";
import { Download } from "lucide-react";
import Image from "next/image";
import { downloadFile } from "@/utils/client-utils/chatHelpers";

interface ImageMsgProps {
  imageUrl: string;
  fileName: string;
  isSender: boolean;
}

export const ImageMsg = ({ imageUrl, fileName, isSender }: ImageMsgProps) => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      await downloadFile(imageUrl, fileName);
      setIsDownloaded(true);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Box position="relative" width="250px" borderRadius="lg" overflow="hidden">
      {/* Image */}
      <Image
        src={imageUrl}
        alt="chat image"
        sizes="100vw"
        width={500}
        height={300}
        className={`
          rounded-lg
          transition-all duration-500 ease-out
          ${
            !isSender && !isDownloaded
              ? "blur-md opacity-50"
              : "blur-0 opacity-100"
          }
        `}
      />

      {/* Overlay */}
      {!isDownloaded && !isSender && (
        <Box
          position="absolute"
          inset={0}
          bg="rgba(0,0,0,0.35)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            aria-label="Download image"
            colorScheme="whiteAlpha"
            size="lg"
            rounded="full"
            onClick={handleDownload}
          >
            {isDownloading ? <Spinner /> : <Download />}
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
