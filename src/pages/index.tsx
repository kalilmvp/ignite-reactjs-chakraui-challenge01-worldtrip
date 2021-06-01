import { Box, Divider, Flex, HStack, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Modalidade from "../components/Modalidade";
import Carroussel, { CarrousselItem } from "../components/Carroussel";
import Header from "../components/Header";

const items: CarrousselItem[] = [
    {
        href: 'continents/europe',
        continent: 'Europe',
        description: 'Continente mais antigo do mundo',
        bgImage: 'continents/europe.png'
    },
    {
        href: 'continents/asia',
        continent: 'Ásia',
        description: 'Natureza e antigo se juntam',
        bgImage: 'continents/asia.png'
    },
    {
        href: 'continents/americasul',
        continent: 'América do Sul',
        description: 'Muita riqueza, histórica e povo alegre',
        bgImage: 'continents/america_sul.png'
    }
]

export default function Home() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex
            w='100vw'
            maxW='100%'
            align='center'
            flexDir='column'>

            <Header/>

            <Flex w='100vw'>
                <Image src={isWideVersion ? 'banner.png' : 'banner_mobile.png'} mx="auto" w='100%' maxW={1240} />
            </Flex>

            <Flex w="100vw" mt="20">
                {isWideVersion ? (
                    <HStack mx="auto">
                        <Modalidade name="vida noturna" imageSrc="cocktail.png"/>
                        <Modalidade name="praia" imageSrc="surf.png"/>
                        <Modalidade name="moderno" imageSrc="building.png"/>
                        <Modalidade name="clássico" imageSrc="museum.png"/>
                        <Modalidade name="e mais..." imageSrc="world.png"/>
                    </HStack>
                ) : (
                  <SimpleGrid columns={2} flex="1" gap="6" >
                      <Modalidade name="vida noturna" imageSrc="cocktail.png"/>
                      <Modalidade name="praia" imageSrc="surf.png"/>
                      <Modalidade name="moderno" imageSrc="building.png"/>
                      <Modalidade name="clássico" imageSrc="museum.png"/>
                      <Modalidade name="e mais..." imageSrc="world.png"/>
                  </SimpleGrid>
                )}
            </Flex>


            <Flex align="center" justify="center" my={ [ "10", "20" ] }>
                <Divider borderColor="gray.900" w="100px"/>
            </Flex>

            <Flex align="center" justifyContent="center" mx={['2', '4']}>
                <VStack>
                    <Text
                        textAlign="center"
                        fontSize={['26', '30']}
                        color="gray.500"
                        fontWeight="medium"
                        >Vamos nessa?</Text>
                    <Text
                        textAlign="center"
                        fontSize={ [ '26', '30' ] }
                        color="gray.500"
                        fontWeight="medium"
                        >Então escolha seu continente</Text>
                </VStack>
            </Flex>

            <Carroussel items={ items } />
    </Flex>
    )
}
