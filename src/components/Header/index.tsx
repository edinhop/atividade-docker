import { Flex } from "@chakra-ui/react";
import { Navbar } from "./NavBar";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mt="4"
      p="6"
      align="center"
      justify='space-between'
    >
      <Flex align="center">
        <Navbar />
      </Flex>
    </Flex>
  );
}