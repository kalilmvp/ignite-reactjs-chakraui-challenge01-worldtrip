import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex
            as="header"
            align="center"
            justify="center"
            w="100%"
            h="120"
        >
            <Image objectFit="cover" src="/logo.png" alt="Logo"/>
        </Flex>
    )
}
