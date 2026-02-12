import { userInfoInterface } from "@/global.types";
import { useUser } from "@/hooks/useUser";
import logout from "@/utils/logout";
import {
  updateUserContact,
  updateUserContactName,
} from "@/utils/server-utils/operations";
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  Flex,
  Badge,
  Image as ChakraImage,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { Phone, Power, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileCard({
  isReceiverProfile,
  setShowProfileView,
  profile,
  name,
}: {
  isReceiverProfile?: boolean;
  setShowProfileView: React.Dispatch<React.SetStateAction<boolean>>;
  profile: userInfoInterface | null;
  name?: string;
}) {
  const { setUser } = useUser();
  const [editableName, setEditableName] = useState<string>(
    name ? name : (profile?.name as string),
  );

  const [editBtn, setEditBtn] = useState<boolean>(false);
  const route = useRouter();
  const handleLogout = async () => {
    await logout();
    setUser(null);
    setShowProfileView(false);
  };

  const handleSaveProfile = async () => {
    setEditBtn(false);
    await updateUserContactName(
      `${profile?.countryCode}-${profile?.mobile}`,
      editableName,
    );
    setShowProfileView(false);
    route.replace(
      `/chat-frame?receiverId=${profile?.id}&name=${encodeURIComponent(editableName || "")}`,
    );
  };

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
      <Box
        bg="white"
        position={"relative"}
        borderRadius="2xl"
        boxShadow="xl"
        p={8}
        maxW="md"
        w="full"
      >
        {/* Profile Picture */}
        {/* Close Button */}
        <IconButton
          aria-label="Close profile"
          position="absolute"
          top={0}
          right={0}
          colorScheme="teal"
          variant="ghost"
          size="sm"
          borderRadius="full"
          onClick={() => setShowProfileView(false)}
        >
          <X />
        </IconButton>
        <Flex justify="center" mb={6}>
          <Box position="relative">
            <ChakraImage
              src={
                profile?.profilePicture
                  ? `/profile/${profile.profilePicture}`
                  : "/profile/default.png"
              }
              alt="Profile Photo"
              objectFit="cover"
              w={"24"}
              h={"24"}
              rounded="full"
              onError={(e) => (e.currentTarget.src = "/profile/default.png")}
            />
            <Badge
              position="absolute"
              bottom={2}
              right={2}
              w={5}
              h={5}
              bg="teal.500"
              borderRadius="full"
              border="2px solid"
              borderColor="white"
            />
          </Box>
        </Flex>
        {/* Profile Information */}
        <VStack gap={4} textAlign="center">
          {/* Name */}
          <Box>
            {editBtn ? (
              <Input
                value={editableName}
                onChange={(e) => setEditableName(e.target.value)}
                fontSize="3xl"
                fontWeight="bold"
                textAlign="center"
                variant="flushed"
                autoFocus
              />
            ) : (
              <>
                <Text fontSize="3xl" fontWeight="bold" color="gray.800" mb={1}>
                  {isReceiverProfile ? name : profile?.name}
                </Text>
                <Box w={16} h={1} bg="teal.500" mx="auto" borderRadius="full" />
              </>
            )}
          </Box>

          {/* Mobile Number */}
          <Box pt={4} w="full">
            <HStack
              justify="center"
              gap={2}
              bg="teal.50"
              py={3}
              px={4}
              borderRadius="lg"
            >
              <Icon as={Phone} color="teal.600" boxSize={5} />
              <Text fontSize="lg" fontWeight="semibold" color="teal.700">
                {profile?.countryCode} {profile?.mobile}
              </Text>
            </HStack>
          </Box>

          {/* Action Buttons */}
          <HStack gap={3} pt={3} w="full">
            <Button
              flex={1}
              colorScheme="teal"
              size="md"
              fontWeight="semibold"
              _hover={{
                bg: "teal.500",
              }}
              bg={editBtn ? "teal.500" : "teal.900"}
              transition="all 0.2s"
              onClick={() => (editBtn ? handleSaveProfile() : setEditBtn(true))}
            >
              {isReceiverProfile
                ? editBtn
                  ? "Save"
                  : "Edit"
                : editBtn
                  ? "Save Profile"
                  : "Edit Profile"}
            </Button>

            {!isReceiverProfile && (
              <Button
                flex={1}
                bg="teal.100"
                color="red.700"
                size="md"
                fontWeight="semibold"
                _hover={{
                  bg: "teal.200",
                }}
                transition="all 0.2s"
                onClick={handleLogout}
              >
                <Icon as={Power} />
                Logout
              </Button>
            )}
          </HStack>
        </VStack>
      </Box>
    </Flex>
  );
}
