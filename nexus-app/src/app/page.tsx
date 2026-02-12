"use client";

import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  Flex,
  Grid,
  GridItem,
  Avatar,
  AvatarGroup,
  Input,
  Stack,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  MessageCircle,
  Lock,
  Zap,
  Users,
  Video,
  Shield,
  Star,
  ArrowRight,
  Check,
  Menu,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  const handleLogin = () => {
    route.push("/login");
  };
  return (
    <Box bg="white">
      {/* Navigation */}
      <Box
        as="nav"
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.200"
        position="sticky"
        top={0}
        zIndex={10}
        bgColor="rgba(255, 255, 255, 0.95)"
      >
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <HStack gap={2}>
              <Box
                bg="teal.500"
                p={2}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={MessageCircle} color="white" boxSize={6} />
              </Box>
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                Nexus
              </Text>
            </HStack>

            <HStack gap={8} display={{ base: "none", md: "flex" }}>
              <Text
                color="gray.600"
                fontWeight="medium"
                cursor="pointer"
                _hover={{ color: "teal.500" }}
                transition="all 0.2s"
              >
                Features
              </Text>
              <Text
                color="gray.600"
                fontWeight="medium"
                cursor="pointer"
                _hover={{ color: "teal.500" }}
                transition="all 0.2s"
              >
                Pricing
              </Text>
              <Text
                color="gray.600"
                fontWeight="medium"
                cursor="pointer"
                _hover={{ color: "teal.500" }}
                transition="all 0.2s"
              >
                About
              </Text>
              <Button variant="ghost" colorScheme="gray" onClick={handleLogin}>
                Sign In
              </Button>
              <Button colorScheme="teal" size="md" onClick={handleLogin}>
                Get Started
              </Button>
            </HStack>

            <Icon
              as={Menu}
              boxSize={6}
              display={{ base: "block", md: "none" }}
              cursor="pointer"
            />
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.50" pt={{ base: 16, md: 24 }} pb={{ base: 16, md: 24 }}>
        <Container maxW="7xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={12}
            alignItems="center"
          >
            <VStack align="flex-start" gap={8}>
              <Badge
                colorScheme="teal"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
              >
                New: Video Calling Available
              </Badge>
              <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color="gray.800"
                lineHeight="1.2"
              >
                Connect with anyone,
                <Text as="span" color="teal.500">
                  {" "}
                  anywhere
                </Text>
              </Text>
              <Text fontSize="xl" color="gray.600" lineHeight="1.8">
                Experience seamless communication with end-to-end encryption,
                lightning-fast messaging, and crystal-clear video calls. Nexus
                brings people together.
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} gap={4} w="full">
                <Button
                  colorScheme="teal"
                  size="lg"
                  w={{ base: "full", sm: "auto" }}
                  px={8}
                  onClick={handleLogin}
                >
                  <ArrowRight />
                  Start Chatting Free
                </Button>
                <Button
                  variant="outline"
                  colorScheme="gray"
                  size="lg"
                  w={{ base: "full", sm: "auto" }}
                  px={8}
                >
                  Watch Demo
                </Button>
              </Stack>
              <HStack gap={4} pt={4}>
                {/* <AvatarGroup size="md" max={4}>
                  <Avatar src="https://bit.ly/dan-abramov" />
                  <Avatar src="https://bit.ly/kent-c-dodds" />
                  <Avatar src="https://bit.ly/ryan-florence" />
                  <Avatar src="https://bit.ly/prosper-baba" />
                  <Avatar src="https://bit.ly/code-beast" />
                </AvatarGroup> */}
                <VStack align="flex-start" gap={0}>
                  <Text fontWeight="bold" color="gray.800">
                    10M+ Users
                  </Text>
                  <HStack gap={1}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon
                        key={i}
                        as={Star}
                        color="yellow.400"
                        fill="yellow.400"
                      />
                    ))}
                  </HStack>
                </VStack>
              </HStack>
            </VStack>

            {/* Hero Image/Mockup */}
            <Box position="relative" display={{ base: "none", lg: "block" }}>
              <Box
                bg="white"
                borderRadius="2xl"
                boxShadow="2xl"
                p={6}
                border="1px solid"
                borderColor="gray.200"
              >
                <VStack gap={4} align="stretch">
                  {/* Chat Header */}
                  <HStack
                    gap={3}
                    pb={4}
                    borderBottom="1px solid"
                    borderColor="gray.200"
                  >
                    {/* <Avatar size="md" src="https://bit.ly/dan-abramov" /> */}
                    <VStack align="flex-start" gap={0}>
                      <Text fontWeight="bold" color="gray.800">
                        Team Nexus
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        5 members online
                      </Text>
                    </VStack>
                  </HStack>

                  {/* Messages */}
                  <VStack gap={3} align="stretch" h="300px" overflowY="auto">
                    <HStack align="flex-start" gap={3}>
                      {/* <Avatar size="sm" src="https://bit.ly/kent-c-dodds" /> */}
                      <Box bg="gray.100" p={3} borderRadius="lg" maxW="70%">
                        <Text fontSize="sm" color="gray.800">
                          Hey team! The new feature is ready for testing 🚀
                        </Text>
                      </Box>
                    </HStack>

                    <HStack align="flex-start" gap={3} justify="flex-end">
                      <Box bg="teal.500" p={3} borderRadius="lg" maxW="70%">
                        <Text fontSize="sm" color="white">
                          Awesome! I'll check it out now
                        </Text>
                      </Box>
                    </HStack>

                    <HStack align="flex-start" gap={3}>
                      {/* <Avatar size="sm" src="https://bit.ly/ryan-florence" /> */}
                      <Box bg="gray.100" p={3} borderRadius="lg" maxW="70%">
                        <Text fontSize="sm" color="gray.800">
                          Can we schedule a quick call?
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>

                  {/* Input */}
                  <HStack gap={2} pt={2}>
                    <Input
                      placeholder="Type a message..."
                      size="md"
                      borderRadius="lg"
                      bg="gray.50"
                      border="1px solid"
                      borderColor="gray.200"
                    />
                    <Button colorScheme="teal" size="md">
                      Send
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              {/* Floating Elements */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                bg="teal.500"
                p={4}
                borderRadius="xl"
                boxShadow="lg"
              >
                <Icon as={Lock} color="white" boxSize={6} />
              </Box>
              <Box
                position="absolute"
                bottom="-20px"
                left="-20px"
                bg="white"
                p={4}
                borderRadius="xl"
                boxShadow="lg"
                border="1px solid"
                borderColor="gray.200"
              >
                <Icon as={Zap} color="teal.500" boxSize={6} />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="7xl">
          <VStack gap={4} mb={16} textAlign="center">
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="gray.800"
            >
              Everything you need to connect
            </Text>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Powerful features designed to make communication effortless and
              secure
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {/* Feature 1 */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                borderColor: "teal.500",
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
            >
              <Box bg="teal.100" w="fit-content" p={3} borderRadius="lg" mb={4}>
                <Icon as={Shield} color="teal.600" boxSize={6} />
              </Box>
              <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={2}>
                End-to-End Encryption
              </Text>
              <Text color="gray.600" lineHeight="1.8">
                Your messages are secured with military-grade encryption. Only
                you and your recipient can read them.
              </Text>
            </Box>

            {/* Feature 2 */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                borderColor: "teal.500",
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
            >
              <Box bg="teal.100" w="fit-content" p={3} borderRadius="lg" mb={4}>
                <Icon as={Video} color="teal.600" boxSize={6} />
              </Box>
              <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={2}>
                HD Video Calls
              </Text>
              <Text color="gray.600" lineHeight="1.8">
                Crystal-clear video and audio quality for one-on-one or group
                calls with up to 50 participants.
              </Text>
            </Box>

            {/* Feature 3 */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                borderColor: "teal.500",
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
            >
              <Box bg="teal.100" w="fit-content" p={3} borderRadius="lg" mb={4}>
                <Icon as={Zap} color="teal.600" boxSize={6} />
              </Box>
              <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={2}>
                Lightning Fast
              </Text>
              <Text color="gray.600" lineHeight="1.8">
                Messages delivered instantly with our optimized infrastructure
                across the globe.
              </Text>
            </Box>

            {/* Feature 4 */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                borderColor: "teal.500",
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
            >
              <Box bg="teal.100" w="fit-content" p={3} borderRadius="lg" mb={4}>
                <Icon as={Users} color="teal.600" boxSize={6} />
              </Box>
              <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={2}>
                Group Chats
              </Text>
              <Text color="gray.600" lineHeight="1.8">
                Create unlimited groups, share files, and collaborate with your
                team seamlessly.
              </Text>
            </Box>

            {/* Feature 5 */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                borderColor: "teal.500",
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
            >
              <Box bg="teal.100" w="fit-content" p={3} borderRadius="lg" mb={4}>
                <Icon as={MessageCircle} color="teal.600" boxSize={6} />
              </Box>
              <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={2}>
                Rich Messaging
              </Text>
              <Text color="gray.600" lineHeight="1.8">
                Send text, images, videos, voice notes, and documents all in one
                place.
              </Text>
            </Box>

            {/* Feature 6 */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              _hover={{
                borderColor: "teal.500",
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
            >
              <Box bg="teal.100" w="fit-content" p={3} borderRadius="lg" mb={4}>
                <Icon as={Lock} color="teal.600" boxSize={6} />
              </Box>
              <Text fontSize="xl" fontWeight="bold" color="gray.800" mb={2}>
                Privacy rst
              </Text>
              <Text color="gray.600" lineHeight="1.8">
                We don't store your messages. Your data belongs to you, always.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box bg="teal.500" py={{ base: 16, md: 20 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} textAlign="center">
            <VStack gap={2}>
              <Text fontSize="5xl" fontWeight="bold" color="white">
                10M+
              </Text>
              <Text fontSize="lg" color="teal.100">
                Active Users
              </Text>
            </VStack>
            <VStack gap={2}>
              <Text fontSize="5xl" fontWeight="bold" color="white">
                500M+
              </Text>
              <Text fontSize="lg" color="teal.100">
                Messages Sent Daily
              </Text>
            </VStack>
            <VStack gap={2}>
              <Text fontSize="5xl" fontWeight="bold" color="white">
                99.9%
              </Text>
              <Text fontSize="lg" color="teal.100">
                Uptime Guaranteed
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack gap={4} mb={16} textAlign="center">
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="gray.800"
            >
              Simple, transparent pricing
            </Text>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Choose the plan that's right for you
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={8}>
            {/* Free Plan */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
            >
              <Text fontSize="2xl" fontWeight="bold" color="gray.800" mb={2}>
                Free
              </Text>
              <Text fontSize="4xl" fontWeight="bold" color="gray.800" mb={1}>
                $0
              </Text>
              <Text color="gray.600" mb={6}>
                per month
              </Text>
              <Button
                w="full"
                variant="outline"
                colorScheme="gray"
                size="lg"
                mb={6}
              >
                Get Started
              </Button>
              <VStack align="flex-start" gap={3}>
                <HStack>
                  <Icon as={Check} color="teal.500" />
                  <Text color="gray.700">Unlimited messaging</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="teal.500" />
                  <Text color="gray.700">Voice & video calls</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="teal.500" />
                  <Text color="gray.700">Up to 10 group members</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="teal.500" />
                  <Text color="gray.700">100 MB file sharing</Text>
                </HStack>
              </VStack>
            </Box>

            {/* Pro Plan */}
            <Box
              bg="teal.500"
              p={8}
              borderRadius="xl"
              position="relative"
              transform="scale(1.05)"
              boxShadow="2xl"
            >
              <Badge
                position="absolute"
                top={-3}
                right={4}
                colorScheme="yellow"
                px={3}
                py={1}
                borderRadius="full"
              >
                Popular
              </Badge>
              <Text fontSize="2xl" fontWeight="bold" color="white" mb={2}>
                Pro
              </Text>
              <Text fontSize="4xl" fontWeight="bold" color="white" mb={1}>
                $9.99
              </Text>
              <Text color="teal.100" mb={6}>
                per month
              </Text>
              <Button w="full" bg="white" color="teal.500" size="lg" mb={6}>
                Start Free Trial
              </Button>
              <VStack align="flex-start" gap={3}>
                <HStack>
                  <Icon as={Check} color="white" />
                  <Text color="white">Everything in Free</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="white" />
                  <Text color="white">Unlimited group members</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="white" />
                  <Text color="white">10 GB file sharing</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="white" />
                  <Text color="white">Priority support</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="white" />
                  <Text color="white">Custom themes</Text>
                </HStack>
              </VStack>
            </Box>

            {/* Enterprise Plan */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
            >
              <Text fontSize="2xl" fontWeight="bold" color="gray.800" mb={2}>
                Enterprise
              </Text>
              <Text fontSize="4xl" fontWeight="bold" color="gray.800" mb={1}>
                Custom
              </Text>
              <Text color="gray.600" mb={6}>
                per month
              </Text>
              <Button w="full" colorScheme="teal" size="lg" mb={6}>
                Contact Sales
              </Button>
              <VStack align="flex-start" gap={3}>
                <HStack>
                  <Icon as={Check} color="teal.500" />
                  <Text color="gray.700">Everything in Pro</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="teal.500" />
                  <Text color="gray.700">Unlimited storage</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="teal.500" />
                  <Text color="gray.700">Advanced admin controls</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="teal.500" />
                  <Text color="gray.700">24/7 dedicated support</Text>
                </HStack>
                <HStack>
                  <Icon as={Check} color="teal.500" />
                  <Text color="gray.700">Custom integrations</Text>
                </HStack>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="gray.800" py={{ base: 16, md: 20 }}>
        <Container maxW="4xl">
          <VStack gap={8} textAlign="center">
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              color="white"
            >
              Ready to get started?
            </Text>
            <Text fontSize="xl" color="gray.400" maxW="2xl">
              Join millions of users who trust Nexus for secure, fast, and
              reliable communication.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap={4}>
              <Button colorScheme="teal" size="lg" px={8}>
                <ArrowRight />
                Create Free Account
              </Button>
              <Button
                variant="outline"
                colorScheme="whiteAlpha"
                size="lg"
                px={8}
              >
                Contact Sales
              </Button>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" py={12}>
        <Container maxW="7xl">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap={8}
            mb={8}
          >
            <VStack align="flex-start" gap={4}>
              <HStack gap={2}>
                <Box
                  bg="teal.500"
                  p={2}
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={MessageCircle} color="white" boxSize={5} />
                </Box>
                <Text fontSize="xl" fontWeight="bold" color="white">
                  Nexus
                </Text>
              </HStack>
              <Text color="gray.400" fontSize="sm">
                Connect with anyone, anywhere in the world securely.
              </Text>
            </VStack>

            <VStack align="flex-start" gap={3}>
              <Text fontWeight="bold" color="white" mb={2}>
                Product
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Features
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Pricing
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Security
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Enterprise
              </Text>
            </VStack>

            <VStack align="flex-start" gap={3}>
              <Text fontWeight="bold" color="white" mb={2}>
                Company
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                About
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Blog
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Careers
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Contact
              </Text>
            </VStack>

            <VStack align="flex-start" gap={3}>
              <Text fontWeight="bold" color="white" mb={2}>
                Legal
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Privacy
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Terms
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Cookie Policy
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "teal.400" }}
              >
                Licenses
              </Text>
            </VStack>
          </Grid>

          <Box pt={8} borderTop="1px solid" borderColor="gray.800">
            <Text color="gray.500" fontSize="sm" textAlign="center">
              © 2024 Nexus. All rights reserved.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
