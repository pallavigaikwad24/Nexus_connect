"use client";

import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <Box
      minH="100vh"
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      {/* Animated background circles */}
      <Box
        position="absolute"
        top="-10%"
        left="-5%"
        w="300px"
        h="300px"
        bg="whiteAlpha.200"
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="-10%"
        right="-5%"
        w="400px"
        h="400px"
        bg="whiteAlpha.100"
        borderRadius="full"
      />

      <Container maxW="container.md" position="relative" zIndex={1}>
        <VStack gap={8} textAlign="center">
          {/* 404 Number */}
          <Heading
            fontSize={{ base: "120px", md: "180px" }}
            fontWeight="bold"
            color="white"
            lineHeight="1"
            textShadow="0 10px 30px rgba(0,0,0,0.3)"
          >
            404
          </Heading>

          {/* Main message */}
          <VStack gap={4}>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              color="white"
              textShadow="0 2px 10px rgba(0,0,0,0.2)"
            >
              Oops! Page Not Found
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.900"
              maxW="500px"
              lineHeight="1.8"
            >
              The page you're looking for seems to have wandered off into the
              digital void. Don't worry, it happens to the best of us!
            </Text>
          </VStack>

          {/* Action buttons */}
          <VStack gap={4} pt={4}>
            <Button
              size="lg"
              bg="white"
              color="purple.600"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              transition="all 0.3s ease"
              onClick={() => router.push("/login")}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="semibold"
            >
              Go Back Home
            </Button>

            <Button
              size="lg"
              variant="ghost"
              color="white"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "translateY(-2px)",
              }}
              transition="all 0.3s ease"
              onClick={() => router.back()}
              px={8}
            >
              Go Back
            </Button>
          </VStack>

          {/* Decorative elements */}
          <Box pt={8}>
            <Text fontSize="sm" color="whiteAlpha.700">
              Error Code: 404 | Page Not Found
            </Text>
          </Box>
        </VStack>
      </Container>

      {/* Additional floating elements */}
      <Box
        position="absolute"
        top="20%"
        right="10%"
        w="150px"
        h="150px"
        bg="whiteAlpha.100"
        borderRadius="full"
        display={{ base: "none", md: "block" }}
      />
      <Box
        position="absolute"
        bottom="30%"
        left="15%"
        w="100px"
        h="100px"
        bg="whiteAlpha.150"
        borderRadius="full"
        display={{ base: "none", md: "block" }}
      />
    </Box>
  );
}
