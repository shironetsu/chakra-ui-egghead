"use client";

import { Container, Flex } from "@chakra-ui/react";
import { Cart } from "./Cart";
import { Details } from "./Details";

export function IndexPage() {
  return (
    <Container maxW="container.xl" padding={0}>
      <Flex h={{ base: 'auto', md: '100vh' }} py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row' }}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
