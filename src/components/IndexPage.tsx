"use client";

import { Container, Flex, VStack } from "@chakra-ui/react";

export function IndexPage(){
    return (
        <Container maxW='container.xl' padding={0}>
            <Flex h="100vh" py={20}>
                <VStack w="full" h="full" spacing={10} alignItems={"flex-start"}>
                    
                </VStack>
                <VStack w="full" h="full" spacing={10} alignItems={"flex-start"} bg="gray.50">

                </VStack>
            </Flex>
        </Container>
    )
}