import { Box, Divider, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Modalidade from "../components/Modalidade";
import Carroussel from "../components/Carroussel";

export default function Home() {
    return (
        <Box>
            <Flex
                as="header"
                align="center"
                justify="center"
                w="100%"
                h="120"
            >
                <Image objectFit="cover" src="logo.png" alt="Logo" />
            </Flex>
            <Flex w='100vw' h={ 368 }>
                <Image src='banner.png' w='100%' objectFit="fill"/>
            </Flex>


            <Flex w="100vw" mt="20">
                <HStack mx="auto">
                    <Modalidade name="Vida Noturna" imageSrc="cocktail.png"/>
                    <Modalidade name="Praia" imageSrc="surf.png"/>
                    <Modalidade name="moderna" imageSrc="building.png"/>
                    <Modalidade name="clássico" imageSrc="museum.png"/>
                    <Modalidade name="e mais..." imageSrc="world.png"/>
                </HStack>
            </Flex>

            <Flex align="center" justify="center" mt="20">
                <Divider borderColor="gray.900" w="100px"/>
            </Flex>

            <Flex align="center" justifyContent="center" mt="20">
                <VStack>
                    <Text
                        textAlign="center"
                        fontSize="30"
                        color="gray.500"
                        fontWeight="medium"
                        >Vamos nessa?</Text>
                    <Text
                        textAlign="center"
                        fontSize="30"
                        color="gray.500"
                        fontWeight="medium"
                        >Então escolha seu continente</Text>
                </VStack>
            </Flex>

            <Carroussel />
    </Box>
    )
}
