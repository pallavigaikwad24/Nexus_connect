"use client";

import { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { Box, IconButton } from "@chakra-ui/react";
import { Smile } from "lucide-react";

export default function EmojiInput({
  onEmojiSelect,
}: {
  onEmojiSelect: (emoji: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onEmojiSelect(emojiData.emoji);
    setOpen(false);
  };

  return (
    <Box position="relative">
      <IconButton
        _hover={{ bg: "teal.600", color: "white" }}
        aria-label="emoji"
        variant="ghost"
        onClick={() => setOpen((v) => !v)}
      >
        <Smile size={20} />
      </IconButton>

      {open && (
        <Box position="absolute" bottom="45px" zIndex={10}>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </Box>
      )}
    </Box>
  );
}
