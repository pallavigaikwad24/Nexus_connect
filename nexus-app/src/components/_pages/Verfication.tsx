"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { MessageCircle } from "lucide-react";

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { formatTime } from "@/utils/client-utils/formatTime";
import { useUser } from "@/hooks/useUser";
import { otpVerification, sendOtpVerification } from "@/actions/loginAction";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Verification() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();
  const { user, setUser } = useUser();

  const countryCode = user?.countryCode || "";
  const mobile = user?.mobile || "";

  const phoneNumber = countryCode + mobile;

  useEffect(() => {
    if (!phoneNumber) {
      router.replace("/login");
    }

    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    // Timer countdown
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    // Auto-verify when all digits entered
    if (newCode.every((digit) => digit !== "") && index === 5) {
      handleVerify(newCode);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    pastedData.split("").forEach((digit, i) => {
      if (i < 6) newCode[i] = digit;
    });
    setCode(newCode);

    // Focus last filled input
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();

    // Auto-verify if complete
    if (pastedData.length === 6) {
      handleVerify(newCode);
    }
  };

  const [isPending, startTransition] = useTransition();

  const handleVerify = async (codeArray: string[]) => {
    const verificationCode = codeArray.join("");

    startTransition(async () => {
      const result = await otpVerification(
        verificationCode,
        countryCode,
        mobile,
      );

      if (!result?.success) {
        setError(result.message);
        return;
      }

      toast.success("Mobile number verified successfully!");
      const baseUser = result.user?.user ? result.user.user : user;

      if (baseUser) {
        setUser({
          ...baseUser,
          isVerified: true,
        });
        baseUser.id ? localStorage.setItem("userId", baseUser.id) : null;
      }

      if (result.isExistingUser) {
        if (result.user?.token) {
          localStorage.setItem("token", result.user.token);
        }
        router.replace("/dashboard");
      } else {
        router.replace("/profile-setup");
      }
    });
  };

  const handleResend = async () => {
    if (!canResend) return;

    setCode(["", "", "", "", "", ""]);
    setTimer(60);
    setCanResend(false);
    inputRefs.current[0]?.focus();
    await sendOtpVerification(`${countryCode}${mobile}`);
  };

  return (
    <Flex flex={1} align="center" justify="center" p={4}>
      <Box bg="white" rounded="lg" shadow="2xl" w="full" maxW="md" p={8}>
        <VStack gap={0} textAlign="center" mb={8}>
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
            mb={2}
          >
            Verify Your Number
          </Heading>

          <Text color="gray.500" fontSize="sm" mb={1}>
            Enter the 6-digit code we sent to
          </Text>

          <Text color="teal.600" fontWeight="semibold">
            {phoneNumber}
          </Text>
        </VStack>

        <Box mb={6}>
          <Flex justify="center" gap={2} mb={4}>
            {code.map((digit: string, index: number) => (
              <Input
                key={index}
                ref={(el: HTMLInputElement | null) => {
                  inputRefs.current[index] = el;
                }}
                w="12"
                h="14"
                textAlign="center"
                fontSize="2xl"
                fontWeight="semibold"
                borderWidth="2px"
                borderColor="gray.300"
                rounded="lg"
                transition="all 0.15s"
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                disabled={isPending}
              />
            ))}
          </Flex>

          {error && (
            <Text
              textAlign="center"
              color="red.600"
              fontSize="sm"
              fontWeight="medium"
            >
              {error}
            </Text>
          )}

          {/* Verifying Spinner */}
          {isPending && (
            <HStack
              justify="center"
              gap={2}
              color="teal.600"
              fontSize="sm"
              fontWeight="medium"
            >
              <Spinner size="sm" />
              <Text>Verifying...</Text>
            </HStack>
          )}
        </Box>

        <Box textAlign="center" mb={6}>
          {!canResend ? (
            <Text fontSize="sm" color="gray.600">
              Valid until 60 sec! {/* Replaces className="text-gray-400" */}
              <Text as="span" color="gray.400" ml={1}>
                Resend in {formatTime(timer)}
              </Text>
            </Text>
          ) : (
            <Button
              onClick={handleResend}
              variant="ghost"
              colorScheme="teal" // Sets text color to teal.500/600, etc.
              fontSize="sm"
              fontWeight="semibold"
              mx="auto"
              transition="colors 0.15s"
            >
              Resend Code
            </Button>
          )}
        </Box>

        <Box pt={4} borderTop="1px solid" borderColor="gray.200" />
        <Box mt={6} textAlign="center">
          {/* Replaces className="text-xs text-gray-500" */}
          <Text fontSize="xs" color="gray.500">
            Make sure you have a stable mobile network signal.
            <br />
            SMS charges may apply.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
