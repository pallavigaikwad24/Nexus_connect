"use client";
import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50" p={4}>
      <Box
        bg="white"
        borderRadius="2xl"
        boxShadow="xl"
        p={8}
        maxW="500px"
        w="full"
        textAlign="center"
      >
        {/* Error Icon */}
        <Flex justify="center" mb={6}>
          <Box bg="red.50" borderRadius="full" p={5} position="relative">
            <Icon as={AlertCircle} boxSize={12} color="red.500" />

            {/* Animated pulse ring */}
            <Box
              position="absolute"
              inset={0}
              borderRadius="full"
              bg="red.400"
              opacity={0}
            />
          </Box>
        </Flex>

        {/* Error Title */}
        <Text fontSize="2xl" fontWeight="bold" color="gray.800" mb={3}>
          Unexpected System Error!
        </Text>

        {/* Error Message */}
        <Text fontSize="md" color="gray.600" mb={2} lineHeight="tall">
          {error.message}
        </Text>

        {/* Action Buttons */}
        <Button
          flex={1}
          colorScheme="blue"
          size="lg"
          onClick={reload}
          _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
          transition="all 0.2s"
        >
          <Icon as={RefreshCw} boxSize={4} />
          Try Again
        </Button>
      </Box>
    </Flex>
  );
}
