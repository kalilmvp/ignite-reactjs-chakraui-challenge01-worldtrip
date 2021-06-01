import { Flex, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

interface ModalidadeProps {
    name: string
    imageSrc: string;
}

export default function Modalidade({name, imageSrc } : ModalidadeProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: false,
        xl: true,
    });

    if (isWideVersion) {
        return (
            <VStack>
                <Flex direction="column" align="center">
                    <Image src={imageSrc} alt="Cocktail" w="85" h="85"/>
                    <Text
                        textAlign="center"
                        fontSize="15"
                        color="gray.500"
                        fontWeight="bold"
                        mt="6"
                        w="64"
                    >{name}</Text>
                </Flex>
            </VStack>
        );
    }

    return (
        <Flex align="center" justify="center" >
            <Image src="/yellow_marker.png" alt="Marker" w="2" h="2"/>
            <Text
                ml="4"
                textAlign="center"
                fontSize="22"
                color="gray.500"
                fontWeight="medium"
            >{ name }</Text>
        </Flex>
    )

}
