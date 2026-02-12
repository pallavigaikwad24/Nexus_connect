"use client";
import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { userContactInfoInterface, userInfoInterface } from "@/global.types";
import InviteDialog from "./MiniUnits/Invite";
import NewContact from "./MiniUnits/NewContact";
import ProfileView from "./MiniUnits/ProfileView";
import logout from "@/utils/logout";
import { pubnubSidebarAction } from "@/utils/client-utils/pubnubOp/contactPubnub";

export default function Sidebar({
  contacts,
  profile,
  dropdown,
}: {
  contacts: userContactInfoInterface[];
  profile: userInfoInterface | null;
  dropdown: ReactNode;
}) {
  const [search, setSearch] = useState<string>("");
  const deferedValue = useDeferredValue(search);
  const [contactFormOpen, setContactFormOpen] = useState<boolean>(false);
  const [showInviteDialog, setShowInviteDialog] = useState<boolean>(false);
  const [inviteContact, setInviteContact] =
    useState<userContactInfoInterface | null>(null);
  const [showProfileView, setShowProfileView] = useState<boolean>(false);
  const [selectedChat, setSelectedChat] =
    useState<userContactInfoInterface | null>(null);
  const [contactsState, setContactsState] =
    useState<userContactInfoInterface[]>(contacts);
  const router = useRouter();
  const pubnubRef = useRef<any>(null);

  useEffect(() => {
    if (!profile?.id) return;

    const cleanup = pubnubSidebarAction(
      pubnubRef,
      profile.id,
      setContactsState,
    );

    return () => cleanup?.();
  }, [profile?.id]);

  useEffect(() => {
    if (profile == null) {
      logout();
    }
  }, [profile]);

  const isSearching =
    search.toLowerCase().trim() !== deferedValue.toLowerCase().trim();

  const filtered = useMemo(() => {
    const value = deferedValue.toLowerCase().trim();

    if (!value) return contactsState;

    return contactsState.filter((contact) =>
      contact.name?.toLowerCase().includes(value),
    );
  }, [deferedValue, contactsState]);

  const filterContacts = useMemo(() => {
    return filtered.filter((contact) => contact.linkedUserId);
  }, [filtered]);

  const inviteContacts = useMemo(() => {
    return filtered.filter((contact) => !contact.linkedUserId);
  }, [filtered]);

  const handleContactClick = (contact: userContactInfoInterface) => {
    setSelectedChat(contact);
    router.replace(
      `/chat-frame?receiverId=${contact.linkedUser?.id}&name=${encodeURIComponent(contact?.name || "")}`,
    );
  };
  return (
    <>
      {/* Sidebar - Contacts List */}
      <Box
        w="21%"
        overflow="auto"
        bg="white"
        borderRight="1px"
        borderColor="gray.200"
        flexDirection="column"
        transition="all 0.3s"
      >
        {/* Sidebar Header */}
        <Box bg="gray.50" p={4} borderBottom="1px" borderColor="gray.200">
          <Flex
            align="center"
            justify="space-between"
            position={"relative"}
            mb={4}
          >
            <Flex align="center" gap={3}>
              <Box
                w={10}
                h={10}
                bgGradient="linear(to-br, teal.400, teal.600)"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="xl"
                cursor={"pointer"}
                onClick={() => setShowProfileView(true)}
              >
                &#128100;
              </Box>
              <Text fontWeight="semibold" color="gray.800">
                Chats
              </Text>
            </Flex>
            <Flex gap={5}>
              <IconButton
                bgColor={"teal.500"}
                rounded={"50%"}
                aria-label="Add contact"
                variant="ghost"
                fontWeight={900}
                color="green.300"
                _hover={{ color: "green.600" }}
                size="md"
                onClick={() => setContactFormOpen(!contactFormOpen)}
              >
                <Plus />
              </IconButton>
            </Flex>
          </Flex>

          {/* Search Bar */}
          <Box position="relative">
            <Icon
              as={Search}
              position="absolute"
              left={3}
              top="50%"
              transform="translateY(-50%)"
              color="gray.400"
              boxSize={4.5}
              zIndex={1}
            />
            <Input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search or start new chat"
              pl={10}
              pr={4}
              py={2}
              bg="white"
              border="1px"
              borderColor="gray.200"
              borderRadius="lg"
              _focus={{
                borderColor: "teal.500",
                outline: "none",
              }}
            />
          </Box>
        </Box>

        {isSearching && (
          <Text pt={4} textAlign={"center"} color="teal.500">
            Searching...
          </Text>
        )}
        {/* Contacts List */}
        {inviteContacts.length === 0 && filterContacts.length === 0 ? (
          <Text p={4} color="gray.500" textAlign="center">
            No contacts available
          </Text>
        ) : (
          <Box>
            <Box flex={1}>
              {filterContacts.map((contact: userContactInfoInterface) => (
                <Box
                  key={contact.id}
                  onClick={() =>
                    contact?.linkedUser
                      ? handleContactClick(contact)
                      : (setShowInviteDialog(true), setInviteContact(contact))
                  }
                  display="flex"
                  alignItems="center"
                  p={4}
                  cursor="pointer"
                  _hover={{ bg: "gray.50" }}
                  transition="background-color 0.2s"
                  bg={
                    selectedChat?.linkedUser?.id === contact.id
                      ? "gray.100"
                      : "transparent"
                  }
                >
                  <Box position="relative">
                    <Box
                      w={12}
                      h={12}
                      borderRadius="full"
                      border="1px"
                      borderColor="gray.200"
                      overflow="hidden"
                    >
                      <Image
                        src={`profile/${
                          contact?.linkedUser?.profilePicture
                            ? contact.linkedUser.profilePicture
                            : "default.png"
                        }`}
                        alt="profile"
                        w="full"
                        h="full"
                        objectFit="cover"
                        onError={(e) => {
                          e.currentTarget.src = "profile/default.png";
                        }}
                      />
                    </Box>
                  </Box>
                  <Box flex={1} ml={3} minW={0}>
                    <Flex align="center" justify="space-between">
                      <Heading
                        as="h3"
                        size="sm"
                        fontWeight="semibold"
                        color="gray.900"
                      >
                        {contact.name}
                      </Heading>
                      {/* <Text fontSize="xs" color="gray.500">
                    {handleDateTime(contact.createdAt)}
                  </Text> */}
                    </Flex>
                    <Flex align="center" justify="space-between">
                      {/* Uncomment if needed
                      <Text fontSize="sm" color="gray.600" noOfLines={1}>
                        {contact.lastMessage}
                      </Text>
                      {contact.unread > 0 && (
                        <Badge
                          ml={2}
                          bg="teal.500"
                          color="white"
                          fontSize="xs"
                          w={5}
                          h={5}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="full"
                        >
                          {contact.unread}
                        </Badge>
                      )}
                      */}
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Box>
            {filterContacts.length > 0 && inviteContacts.length > 0 && <hr />}

            {/* Invite Contacts List */}
            <Box flex={1}>
              {inviteContacts.map((contact) => (
                <Box
                  key={contact.id}
                  onClick={() => {
                    (setShowInviteDialog(true), setInviteContact(contact));
                  }}
                  display="flex"
                  alignItems="center"
                  p={4}
                  cursor="pointer"
                  _hover={{ bg: "gray.50" }}
                  transition="background-color 0.2s"
                >
                  <Box position="relative">
                    <Box
                      w={12}
                      h={12}
                      borderRadius="full"
                      border="1px"
                      borderColor="gray.200"
                      overflow="hidden"
                    >
                      <Image
                        src={`profile/default.png`}
                        alt="profile"
                        w="full"
                        h="full"
                        objectFit="cover"
                      />
                    </Box>
                  </Box>
                  <Box flex={1} ml={3} minW={0}>
                    <Flex align="center" justify="space-between">
                      <Heading
                        as="h3"
                        size="sm"
                        fontWeight="semibold"
                        color="gray.900"
                      >
                        {contact.name}
                      </Heading>
                      <Text color={"teal.500"}>invite</Text>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
      {contactFormOpen && (
        <NewContact
          setContactFormOpen={setContactFormOpen}
          contactFormOpen={contactFormOpen}
          dropdown={dropdown}
          setContactsState={setContactsState}
        />
      )}

      {showInviteDialog && (
        <InviteDialog
          setShowInviteDialog={setShowInviteDialog}
          contact={inviteContact}
        />
      )}

      {showProfileView && (
        <ProfileView
          setShowProfileView={setShowProfileView}
          profile={profile as userInfoInterface}
        />
      )}
    </>
  );
}
