import { Box, Heading } from "@chakra-ui/react";

const FooterComponent = () => {
  return (
    <Box bgColor={"teal.700"} color="white" p={2} textAlign="center">
      <Heading size={"sm"}>
        Secure and private messaging • End-to-end encrypted
      </Heading>
    </Box>
  );
};

export default FooterComponent;
