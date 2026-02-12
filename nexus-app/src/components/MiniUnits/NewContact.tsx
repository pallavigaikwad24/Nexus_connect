"use client";
import { useActionState, useEffect } from "react";
import { Phone, X } from "lucide-react";
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
  Container,
  IconButton,
} from "@chakra-ui/react";
import { FormState, NewContactProps } from "@/global.types";
import { createNewUserContactForm } from "@/actions/contactAction";
import { useRouter } from "next/navigation";

export default function NewContact({
  setContactFormOpen,
  contactFormOpen,
  dropdown,
  setContactsState,
}: NewContactProps) {
  const initialForm: FormState = {
    success: false,
    error: {},
    data: null,
  };

  const [state, formAction, isPending] = useActionState(
    createNewUserContactForm,
    initialForm,
  );

  useEffect(() => {
    if (state?.success) {
      setContactsState((prev) => [...prev, state.data]);
      setContactFormOpen(!contactFormOpen);
    }
  }, [state]);

  return (
    <Flex
      position="fixed"
      inset={0}
      align="center"
      justify="center"
      bg="blackAlpha.600"
      backdropFilter="blur(5px)"
      zIndex="overlay"
    >
      <Container
        maxW={{
          base: "90%", // mobile
          sm: "80%", // small screens
          md: "md", // tablets
          lg: "lg", // desktop
        }}
        py={{ base: 4, md: 10 }}
      >
        <Box
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          position={"relative"}
        >
          <IconButton
            variant="ghost"
            position={"absolute"}
            top={2}
            right={2}
            onClick={() => setContactFormOpen(!contactFormOpen)}
          >
            <X size={24} />
          </IconButton>
          <VStack gap={4} align="stretch">
            <VStack gap={2} textAlign="center">
              <Heading size="lg" color="teal.500">
                New Contact
              </Heading>
            </VStack>

            <VStack align="stretch">
              <form action={formAction}>
                {/* Name Field */}
                <Box mt={4}>
                  <Input
                    placeholder="Enter full name"
                    size="lg"
                    borderBlockColor={"blue.500"}
                    borderWidth="1px"
                    borderColor="gray.300"
                    rounded="lg"
                    _focus={{
                      ring: 2,
                      ringColor: "blue.500",
                      borderColor: "transparent",
                    }}
                    name="contactName"
                  />
                  {state?.error?.contactName && (
                    <Text color="red.500" fontSize="sm" mt={1}>
                      {state?.error?.contactName}
                    </Text>
                  )}
                </Box>

                {/* Phone Field with Country Code */}
                <Box mt={4}>
                  <Flex gap={2}>
                    {dropdown}

                    <Flex position="relative" flex={1}>
                      <Box
                        as={Phone}
                        position="absolute"
                        left="12px"
                        top="50%"
                        transform="translateY(-50%)"
                        w="5"
                        h="5"
                        color="gray.400"
                        zIndex={1}
                      />
                      <Input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Enter mobile number"
                        pl="12"
                        pr="4"
                        py={3}
                        size="lg"
                        borderWidth="1px"
                        max={10}
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
                  {state?.error?.mobileNumber && (
                    <Text color="red.500" fontSize="sm" mt={1}>
                      {state?.error?.mobileNumber}
                    </Text>
                  )}
                </Box>

                {/* Submit Button */}
                <Button
                  mt={4}
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  w="full"
                  py={4}
                  rounded="lg"
                  fontWeight="semibold"
                  transition="all 0.2s"
                  _hover={{ bg: "teal.400" }}
                  disabled={isPending}
                >
                  {isPending ? (
                    <HStack gap={2} cursor={"disabled"}>
                      <Spinner size="sm" color="white" />
                      <Text>Saving...</Text>
                    </HStack>
                  ) : (
                    <HStack gap={2} className="group">
                      <Text>Save Contact</Text>
                    </HStack>
                  )}
                </Button>
              </form>
            </VStack>
          </VStack>
        </Box>
      </Container>
    </Flex>
  );
}
