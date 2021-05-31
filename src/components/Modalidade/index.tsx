import { Flex, Image, Text, VStack } from "@chakra-ui/react";

interface ModalidadeProps {
    name: string
    imageSrc: string;
}

export default function Modalidade({name, imageSrc} : ModalidadeProps) {
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
