import Dropdown from "@/components/Dropdown";
import Sidebar from "@/components/Sidebar";
import logout from "@/utils/logout";
import { getCookie } from "@/utils/server-utils/cookie";
import { getContactList, getUserById } from "@/utils/server-utils/operations";
import { Flex } from "@chakra-ui/react";
import { cookies } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCookie("user");
  const userId = user ? JSON.parse(user)?.id : null;

  const contactList = await getContactList(userId || "");
  const profile = await getUserById(userId || "");

  return (
    <>
      <Flex h="100vh" bg="gray.100" overflow={"hidden"}>
        <Sidebar
          contacts={contactList}
          profile={profile}
          dropdown={<Dropdown />}
        />
        {children}
      </Flex>
    </>
  );
}
