import { Box, Text, Heading, HStack, Image, VStack } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <VStack
      flex={1}
      w={{ base: "80%", lg: "auto" }}
      justify="center"
      align="center"
      textAlign="center"
      gap={4}
      p={8}
    >
      <Box bg="#f3f4f6" p={8} rounded="full">
        <Image
          src="/app-images/chatImg.png"
          alt="chat"
          boxSize={{ base: "16", md: "24" }}
        />
      </Box>
      <Heading size="2xl" fontWeight="extrabold">
        Welcome to Messenger
      </Heading>
      <Text fontSize="sm" color="gray.600">
        This is where your messages will appear. <br />
        Choose a contact to start a conversation and begin chatting comfortably.
      </Text>
      <HStack gap={6} fontSize="xs" color="gray.500">
        <HStack gap={2}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>End-to-end encryption</span>
        </HStack>
        <span className="hidden sm:inline">2025</span>
        <HStack gap={2}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Message privately</span>
        </HStack>
      </HStack>
    </VStack>
  );
}
