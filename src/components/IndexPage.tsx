"use client";

import { Container, Flex } from "@chakra-ui/react";
import { Cart } from "./Cart";
import { Details } from "./Details";

export function IndexPage() {
  return (
    <Container maxW="container.xl" padding={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
