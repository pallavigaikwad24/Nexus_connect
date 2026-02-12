"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@/context/UserContext";
import { ReactNode } from "react";
import { system } from "@chakra-ui/react/preset";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <UserProvider>{children}</UserProvider>
    </ChakraProvider>
  );
}
