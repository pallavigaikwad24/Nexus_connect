"use client";

import React, { useEffect, useState, useTransition } from "react";
import { Box, Flex, Button, Text, Icon, Spinner } from "@chakra-ui/react";
import { MapPin } from "lucide-react";
import { getCurrentLocation } from "@/utils/client-utils/pubnubOp/location";
import { MessageType } from "@/global.types";
import { sendChat } from "@/actions/dashboardAction";

export const SendPopup = ({
  onClose,
  channel,
  receiverId,
}: {
  isOpen: boolean;
  onClose: () => void;
  channel: string;
  receiverId: string;
}) => {
  const [userId, setUserId] = useState("");
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) setUserId(id);
  }, []);

  // Handle Send Location
  const handleSendLocation = async () => {
    setPending(true);
    const currentLocation = await getCurrentLocation();
    const { latitude, longitude } = currentLocation.coords;

    const message = JSON.stringify({
      lat: latitude,
      long: longitude,
    });

    const payload = {
      message,
      messageType: MessageType.LOCATION,
      senderId: userId.toString(),
      receiverId: receiverId.toString(),
      channel,
    };

    await sendChat(payload);
    setPending(false);
    onClose();
  };

  return (
    <Box
      position="fixed"
      inset={0}
      bg="blackAlpha.600"
      zIndex={1000}
      backdropFilter="blur(4px)"
      onClick={onClose}
    >
      <Flex height="100%" align="center" justify="center" p={4}>
        <Box
          bg="white"
          p={6}
          borderRadius="xl"
          width="100%"
          maxWidth="380px"
          boxShadow="2xl"
          onClick={(e) => e.stopPropagation()}
          transform="scale(1)"
          transition="all 0.2s"
        >
          <Flex direction="column" align="center" mb={4}>
            <Flex
              bg="blue.50"
              borderRadius="full"
              p={4}
              mb={4}
              align="center"
              justify="center"
            >
              <Icon as={MapPin} boxSize={8} color="teal.500" />
            </Flex>

            <Text fontWeight="bold" fontSize="xl" mb={2} color="gray.800">
              Share Location
            </Text>

            <Text
              fontSize="sm"
              color="gray.600"
              textAlign="center"
              lineHeight="tall"
            >
              Allow this app to access your current location to share it with
              others
            </Text>
          </Flex>

          <Flex gap={3} mt={6}>
            <Button
              flex={1}
              size="md"
              variant="outline"
              onClick={onClose}
              borderColor="gray.300"
              color="gray.700"
              _hover={{ bg: "gray.50" }}
            >
              Cancel
            </Button>
            <Button
              flex={1}
              size="md"
              bgColor={"teal.500"}
              color="white"
              onClick={() => {
                handleSendLocation();
              }}
              _hover={{ transform: "translateY(-1px)", boxShadow: "md" }}
              transition="all 0.2s"
            >
              {isPending ? <Spinner size="sm" /> : "Send Location"}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
