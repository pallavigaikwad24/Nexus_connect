"use client";
import { userContactInfoInterface, userInfoInterface } from "@/global.types";
import {
  Flex,
  Box,
  Heading,
  Avatar,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { Phone, Video } from "lucide-react";
import { useState } from "react";
import ProfileCard from "./ProfileView";

export default function ChatHeader({
  receiverData,
  name,
  isMobileName,
}: {
  receiverData: userContactInfoInterface | null;
  name: string;
  isMobileName: boolean;
}) {
  const [showProfile, setShowProfile] = useState<boolean>(false);

  return (
    <>
      <Flex
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        px={4}
        py={2}
        align="center"
        justify="space-between"
      >
        <HStack gap={3}>
          <Avatar.Root size="md">
            <Avatar.Image
              src={`/profile/${receiverData?.linkedUser?.profilePicture || "default.png"}`}
            />
            <Avatar.Fallback />
          </Avatar.Root>
          <Box>
            <Heading
              size="sm"
              color="gray.900"
              cursor={"pointer"}
              onClick={() => setShowProfile(true)}
            >
              {name}
            </Heading>
            {/* <Text fontSize="xs" color="gray.500">
                    {onlineUsers[selectedChat.id]
                      ? "Online"
                      : lastSeen[selectedChat.id]
                      ? `Last seen ${handleTime(lastSeen[selectedChat.id])}`
                      : "Offline"}
                  </Text> */}
          </Box>
        </HStack>
        <Box>
          <IconButton
            bgColor={"transparent"}
            color={"teal.600"}
            aria-label="Phone Call"
            size={"xl"}
            _hover={{ bgColor: "gray.100" }}
            // onClick={callUser}
          >
            <Phone />
          </IconButton>
          <IconButton
            bgColor={"transparent"}
            color={"teal.600"}
            mr={"20px"}
            aria-label="Phone Call"
            size={"xl"}
            _hover={{ bgColor: "gray.100" }}
          >
            <Video />
          </IconButton>
        </Box>
      </Flex>

      {showProfile && (
        <ProfileCard
          isReceiverProfile={true}
          setShowProfileView={setShowProfile}
          name={isMobileName ? "Add Contact" : name}
          profile={receiverData?.linkedUser || null}
        />
      )}
    </>
  );
}
