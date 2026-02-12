"use client";

import { useState, useActionState, useEffect } from "react";
import { Plus } from "lucide-react";

import {
  Flex,
  Heading,
  VStack,
  Image as ChakraImage,
  Input,
  Button,
  Field,
  Box,
} from "@chakra-ui/react";
import { FormState } from "@/global.types";
import { createProfile } from "@/actions/loginAction";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [preview, setPreview] = useState<string | null>(null);

  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user?.mobile) {
      router.replace("/login");
    }
  }, []);

  const initialProfileState: FormState = {
    success: false,
    error: {},
    data: null,
  };

  const [state, formAction, isPending] = useActionState(
    createProfile,
    initialProfileState,
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-500 to-teal-600 flex flex-col">
      <Flex flex={1} align="center" justify="center" p={4}>
        <Box
          bg="white"
          rounded="xl"
          shadow="lg"
          p={8}
          w="90%"
          maxW="sm"
          textAlign="center"
        >
          <form action={formAction}>
            <Heading as="h2" fontSize="xl" fontWeight="semibold" mb={6}>
              Complete Your Profile
            </Heading>

            {/* Photo Upload Section */}
            <VStack gap={2} mb={6} position="relative">
              {/* Profile Picture Circle */}
              <Flex
                w="24"
                h="24"
                rounded="full"
                border="2px solid"
                borderColor="teal.500"
                align="center"
                justify="center"
                bg="gray.50"
                overflow="hidden"
              >
                {preview ? (
                  <ChakraImage
                    src={preview}
                    alt="Profile Photo"
                    objectFit="cover"
                    w="full"
                    h="full"
                    rounded="full"
                  />
                ) : (
                  <Field.Root>
                    <Field.Label
                      htmlFor="photo"
                      cursor="pointer"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      color="gray.500"
                      w="full"
                      h="full"
                    >
                      <Box as={Plus} w="8" h="8" mb={1} />
                    </Field.Label>
                  </Field.Root>
                )}
              </Flex>

              <Input
                id="photo"
                type="file"
                accept="image/*"
                name="photo"
                display="none"
                onChange={handleImageChange}
              />
              <input type="hidden" name="mobile" value={user?.mobile} />
              <input
                type="hidden"
                name="countryCode"
                value={user?.countryCode}
              />

              <Field.Root>
                <Field.Label
                  htmlFor="photo"
                  mt={2}
                  fontSize="sm"
                  color="teal.600"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  w="full"
                  h="full"
                  justifyContent="center"
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                >
                  Upload Photo
                </Field.Label>
              </Field.Root>

              {/* Photo Error Message */}
              <Field.Root invalid={!!state.error?.photo} mt={0}>
                <Field.ErrorText
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  w="full"
                  h="full"
                  justifyContent="center"
                >
                </Field.ErrorText>
              </Field.Root>
            </VStack>

            {/* Name Fields (Grouped) */}
            <VStack gap={4}>
              {/* First Name */}
              <Field.Root invalid={!!state.error?.firstName}>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  w="full"
                  borderWidth="1px"
                  borderColor="gray.300"
                  rounded="md"
                  p={2}
                  _focus={{ ring: 2, ringColor: "teal.400" }}
                />
                <Field.ErrorText justifyContent="center" mt={1}>
                  {state.error?.firstName}
                </Field.ErrorText>
              </Field.Root>

              {/* Last Name */}
              <Field.Root invalid={!!state.error?.lastName}>
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  w="full"
                  borderWidth="1px"
                  borderColor="gray.300"
                  rounded="md"
                  p={2}
                  _focus={{ ring: 2, ringColor: "teal.400" }}
                />
                <Field.ErrorText justifyContent="center" mt={1}>
                  {state.error?.lastName}
                </Field.ErrorText>
              </Field.Root>
            </VStack>

            {/* Save Button */}
            <Button
              type="submit"
              mt={6}
              bg="teal.600"
              color="white"
              w="full"
              py={2}
              rounded="md"
              _hover={{ bg: "teal.700" }}
              transition="background 0.2s"
              className="disabled:bg-gray-500 cursor-disable"
              disabled={isPending}
            >
              Save
            </Button>
          </form>
        </Box>
      </Flex>
    </div>
  );
}
