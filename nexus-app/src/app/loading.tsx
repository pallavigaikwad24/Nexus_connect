import React from "react";
import { Spinner, Text, Box, VStack, HStack } from "@chakra-ui/react";

const LoadingComponent = () => {
  return (
    <div className="flex items-center min-h-screen justify-center bg-gradient-to-br from-teal-50 to-teal-100">
      <VStack gap={6}>
        {/* Chakra UI Spinner */}
        <Box position="relative">
          <Spinner color="teal.500" size="xl" width="80px" height="80px" />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Spinner color="purple.500" size="md" width="40px" height="40px" />
          </Box>
        </Box>

        {/* Loading Text with Chakra */}
        <VStack gap={2}>
          <Text fontSize="2xl" fontWeight="bold" color="gray.800">
            Loading
          </Text>
          <Text fontSize="md" color="gray.600">
            Please wait while we prepare your content...
          </Text>
        </VStack>
      </VStack>
    </div>
  );
};

export default LoadingComponent;
