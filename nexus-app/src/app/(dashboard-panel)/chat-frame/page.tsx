import ChatFramePage from "@/components/_pages/ChatFramePage";
import ChatHeader from "@/components/MiniUnits/ChatHeader";
import { getCookie } from "@/utils/server-utils/cookie";
import {
  findUserContact,
  getMessagesById,
  getUserById,
} from "@/utils/server-utils/operations";
import { Flex } from "@chakra-ui/react";

export default async function ChatFrame({
  searchParams,
}: {
  searchParams: Promise<{ receiverId: string; name: string }>;
}) {
  const { receiverId, name } = await searchParams;
  const user = await getCookie("user");
  const senderId = user ? JSON.parse(user).id : null;
  const decodedName = decodeURIComponent(name);

  if (!receiverId) return null;

  const messageList = await getMessagesById(senderId, receiverId, undefined, 20);
  const receiverData = await getUserById(receiverId);
  const phoneArg = decodedName.includes(receiverData?.mobile || "");

  const receiverContactData = await findUserContact(
    phoneArg
      ? decodedName
      : (`${receiverData?.countryCode}-${receiverData?.mobile}` as string),
  );

  return (
    <Flex key={receiverId} flex={1} flexDir="column" bg="gray.50">
      <ChatHeader
        receiverData={receiverContactData}
        name={decodedName}
        isMobileName={phoneArg}
      />
      <ChatFramePage
        receiverId={receiverId}
        messageList={messageList}
        userId={senderId || ""}
      />
    </Flex>
  );
}
