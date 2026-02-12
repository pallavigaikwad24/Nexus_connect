"use client";

import { Box, VStack, Text, Circle } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

export default function FileUploadLoading() {
  return (
    <Box
      position="fixed"
      inset={0}
      bg="blackAlpha.600"
      zIndex={1000}
      backdropFilter="blur(4px)"
    >
      <Box
        position="fixed"
        inset={0}
        zIndex={1000}
        bg="blackAlpha.400"
        backdropFilter="blur(6px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w={["90%", "420px"]}
          minH="200px"
          bg="linear-gradient(135deg, #c0d8d0 0%, #baeed6 100%)"
          borderRadius="20px"
          boxShadow="0 20px 60px rgba(0, 0, 0, 0.25)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={6}
        >
          <VStack gap={8}>
            {/* Text */}
            <VStack gap={3}>
              <Text
                fontSize="2xl"
                fontWeight="700"
                color="teal.700"
                textShadow="0 2px 10px rgba(0,0,0,0.2)"
                textAlign="center"
              >
                Uploading your file...
              </Text>

              <Box display="flex" gap={1.5} alignItems="center">
                {[0, 0.15, 0.3, 0.45].map((delay, i) => (
                  <Circle
                    key={i}
                    size="8px"
                    bg="teal.500"
                    animation={`${bounce} 1s infinite ease-in-out`}
                    style={{ animationDelay: `${delay}s` }}
                  />
                ))}
              </Box>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
