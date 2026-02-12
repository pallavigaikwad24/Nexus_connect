import { Flex, Heading } from "@chakra-ui/react";
import { MessageCircle } from "lucide-react";

const HeaderComponent = () => {
  return (
    <>
      <Flex
        py={4}
        px={6}
        bg="teal.600"
        color="white"
        boxShadow="lg"
        justify={"center"}
        gap={3}
      >
        <MessageCircle className="w-8 h-8" />
        <Heading size={"2xl"} fontWeight={"bold"}>
          Nexus
        </Heading>
      </Flex>
    </>
  );
};

export default HeaderComponent;
