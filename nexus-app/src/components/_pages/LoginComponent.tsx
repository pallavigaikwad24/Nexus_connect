"use client";

import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import {
  Flex,
  Box,
  VStack,
  Text,
  Heading,
  Input,
  Button,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { FormState, userInfoInterface } from "@/global.types";
import { useRouter } from "next/navigation";
import { ReactNode, useActionState, useEffect } from "react";
import { loginForm } from "@/actions/loginAction";
import { useUser } from "@/hooks/useUser";

export default function NexusLogin({ dropdown }: { dropdown: ReactNode }) {
  const { user, setUser } = useUser();
  const router = useRouter();

  const initialForm: FormState = {
    success: false,
    error: {},
    data: null,
  };

  const [state, formAction, isPending] = useActionState(loginForm, initialForm);

  useEffect(() => {
    if (state.success && state.data) {
      setUser({
        ...user,
        mobile: state.data.mobile,
        countryCode: state.data.countryCode,
      } as userInfoInterface);

      router.push("/verification-otp");
    }
  }, [state.success, state.data, setUser, router]);

  return (
    <Flex flex={1} align="center" justify="center" p={4}>
      <Box bg="white" rounded="lg" shadow="2xl" w="full" maxW="md" p={8}>
        <VStack gap={2} textAlign="center" mb={8}>
          <Flex
            bg="teal.500"
            w="20"
            h="20"
            rounded="full"
            align="center"
            justify="center"
            mx="auto"
            mb={4}
          >
            <Box as={MessageCircle} w="40px" h="40px" color="white" />
          </Flex>
          <Heading
            as="h2"
            fontSize="2xl"
            fontWeight="semibold"
            color="gray.800"
          >
            Welcome to Nexus
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Enter your mobile number to get started
          </Text>
        </VStack>

        <form action={formAction}>
          <Flex gap={2}>
            {dropdown}

            <Flex position="relative" flex={1}>
              <Box
                as={Phone}
                position={"absolute"}
                ml={"10px"}
                mt={"10px"}
                w="20px"
                h="20px"
                color="gray.400"
              />
              <Input
                type="number"
                name="mobile"
                pattern="[0-9]*"
                placeholder="Enter mobile number"
                className="
                  [appearance:textfield]
                  [&::-webkit-outer-spin-button]:appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none
                  "
                pl="10"
                pr="4"
                py={3}
                borderWidth="1px"
                borderColor="gray.300"
                rounded="lg"
                _focus={{
                  ring: 2,
                  ringColor: "teal.500",
                  borderColor: "transparent",
                }}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (target.value.length > 10) {
                    target.value = target.value.slice(0, 10);
                  }
                }}
              />
            </Flex>
          </Flex>
          <Box ml={"20%"}>
            {state.error?.countryCode && (
              <p className="text-red-500">{state.error?.countryCode}</p>
            )}
            {state.error?.mobile && (
              <p className="text-red-500">{state.error?.mobile}</p>
            )}
          </Box>

          <Button
            type="submit"
            colorScheme="teal"
            w="full"
            py={3}
            rounded="lg"
            fontWeight="semibold"
            transition="all 0.2s"
            _hover={{ bg: "teal.600" }}
            className="disabled:bg-gray-500"
            disabled={isPending}
            mt={7}
          >
            {isPending ? (
              <HStack gap={2}>
                <Text>Sending OTP...</Text>
                <Spinner size="sm" color="white" />
              </HStack>
            ) : (
              <HStack gap={2} className="group">
                <Text>Continue</Text>
                <Box
                  as={ArrowRight}
                  w="20px"
                  h="20px"
                  transition="transform 0.2s"
                  _groupHover={{ transform: "translateX(4px)" }}
                />
              </HStack>
            )}
          </Button>
        </form>

        <Box mt={6} textAlign="center">
          <Text fontSize="xs" color="gray.500">
            Nexus will send you an SMS verification code.
            <br />
            Carrier charges may apply.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
