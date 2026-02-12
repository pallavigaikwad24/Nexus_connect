import { sendMessageInvite } from "@/actions/contactAction";
import { userContactInfoInterface } from "@/global.types";
import { Box, Text, Flex, Button, Stack } from "@chakra-ui/react";
import toast from "react-hot-toast";

interface InviteProp {
  setShowInviteDialog: (showInviteDialog: boolean) => void;
  contact: userContactInfoInterface | null;
}

export default function InviteDialog({
  setShowInviteDialog,
  contact,
}: InviteProp) {
  const handleInviteSMS = async () => {
    const phoneNumber = contact?.phone.split("-");
    const name = contact?.name || "";
    const mobile = phoneNumber ? phoneNumber[1] : "";
    const countryCode = phoneNumber ? phoneNumber[0] : "";
    const response = await sendMessageInvite(name, countryCode, mobile);
    toast.success(response || "Invite sent successfully!");
    setShowInviteDialog(false);
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
        maxW="500px"
        w="full"
        bg="white"
        borderRadius="2xl"
        boxShadow="2xl"
        overflow="hidden"
        border="1px solid"
        borderColor="gray.100"
      >
        {/* Decorative Header */}
        <Box
          h="120px"
          bgGradient="linear(to-r, teal.400, cyan.400)"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            position="absolute"
            top="-20px"
            right="-20px"
            w="100px"
            h="100px"
            borderRadius="full"
            bg="teal.300"
            opacity="0.3"
          />
          <Box
            position="absolute"
            bottom="-20px"
            left="-30px"
            w="100px"
            h="100px"
            borderRadius="full"
            bg="cyan.300"
            opacity="0.3"
          />
          <Text fontSize="3xl" fontWeight="bold" color="teal.500" zIndex="1">
            Send SMS invite?
          </Text>
        </Box>

        {/* Card Content */}
        <Box px={8} pb={8}>
          <Stack gap={5} textAlign="center">
            <Box>
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                {contact?.name}
              </Text>
              <Text fontSize="1xl" fontWeight="bold" color="gray.500">
                {contact?.phone}
              </Text>
            </Box>

            <Text fontSize="md" color="gray.600" lineHeight="tall">
              {`${contact?.name} isn't on Nexus. Do you want to invite them to join?`}
            </Text>

            {/* Action Buttons */}
            <Flex gap={3} mt={4}>
              <Button
                flex="1"
                size="lg"
                colorScheme="teal"
                bgColor="teal.500"
                _hover={{
                  bgColor: "teal.700",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
                borderRadius="xl"
                onClick={handleInviteSMS}
              >
                Invite via SMS
              </Button>
              <Button
                flex="1"
                size="lg"
                variant="outline"
                colorScheme="gray"
                borderWidth="2px"
                _hover={{
                  bg: "gray.100",
                }}
                borderRadius="xl"
                onClick={() => setShowInviteDialog(false)}
              >
                Not now
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
