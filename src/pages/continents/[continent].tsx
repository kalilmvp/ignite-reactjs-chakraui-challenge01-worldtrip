import { GetStaticPaths, GetStaticProps } from "next";
import {
    Box,
    Flex,
    HStack,
    Image,
    SimpleGrid,
    Text,
    Icon,
    Tooltip,
    Heading,
    VStack,
    useBreakpointValue
} from "@chakra-ui/react";
import { FiInfo } from 'react-icons/fi';
import Flag from 'react-flagkit';
import Header from "../../components/Header";
import Cities from "../../components/Cities";

interface ContinentProps {
    name: string;
}

const continentData = {
    europe: {
        title: 'Europa',
        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        banner: '/continents_detail/europa.png',
        qtdPaises: 50,
        qtdLinguas: 60,
        qtdCidadesMais: 27,
        cities: [
            {
                name: 'Londres',
                country: 'Reino Unido',
                image: '/continents_detail/cities/london.png',
                flag: 'GB'
            },
            {
                name: 'Paris',
                country: 'França',
                image: '/continents_detail/cities/paris.png',
                flag: 'FR'
            },
            {
                name: 'Roma',
                country: 'Itália',
                image: '/continents_detail/cities/roma.png',
                flag: 'IT'
            },
            {
                name: 'Praga',
                country: 'República Tcheca',
                image: '/continents_detail/cities/praga.png',
                flag: 'CZ'
            },
            {
                name: 'Amsterdã',
                country: 'Holanda',
                image: '/continents_detail/cities/amsterda.png',
                flag: 'NL'
            },
            {
                name: 'LISBOA',
                country: 'Portugal',
                image: '/continents_detail/cities/london.png',
                flag: 'PT'
            },
        ]
    },
    asia: {
        title: 'Ásia',
        description: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
        banner: '/continents_detail/asia.png',
        qtdPaises: 30,
        qtdLinguas: 180,
        qtdCidadesMais: 30,
        cities: [
            {
                name: 'Hong Kong',
                country: 'China',
                image: '/continents_detail/cities/hongkong.jpg',
                flag: 'CN'
            },
            {
                name: 'Mumbai',
                country: 'Índia',
                image: '/continents_detail/cities/mumbai.jpg',
                flag: 'IN'
            },
            {
                name: 'Singapura',
                country: 'Singapura',
                image: '/continents_detail/cities/singapur.jpg',
                flag: 'SG'
            },
            {
                name: 'Hanói',
                country: 'Vietnã',
                image: '/continents_detail/cities/hanoi.jpg',
                flag: 'VN'
            },
            {
                name: 'Tokyo',
                country: 'Japão',
                image: '/continents_detail/cities/tokyo.jpg',
                flag: 'JP'
            },
            {
                name: 'Manila',
                country: 'Filipinas',
                image: '/continents_detail/cities/manila.jpg',
                flag: 'PH'
            },
        ]
    },
    americasul: {
        title: 'América do Sul',
        description: 'A  América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente',
        banner: '/continents_detail/americasul.jpg',
        qtdPaises: 75,
        qtdLinguas: 10,
        qtdCidadesMais: 1020,
        cities: [
            {
                name: 'Rio de Janeiro',
                country: 'Brasil',
                image: '/continents_detail/cities/riojaneiro.jpg',
                flag: 'BR'
            },
            {
                name: 'Buenos Aires',
                country: 'Argentina',
                image: '/continents_detail/cities/buenosaires.jpg',
                flag: 'AR'
            },
            {
                name: 'Cidade do Panamá',
                country: 'Panamá',
                image: '/continents_detail/cities/cidadepanama.jpg',
                flag: 'PA'
            },
            {
                name: 'Santiago',
                country: 'Chile',
                image: '/continents_detail/cities/santiago.jpg',
                flag: 'CL'
            },
            {
                name: 'Lima',
                country: 'Peru',
                image: '/continents_detail/cities/lima.jpg',
                flag: 'PE'
            },
            {
                name: 'Bogotá',
                country: 'Colômbia',
                image: '/continents_detail/cities/bogota.jpg',
                flag: 'CO'
            },
        ]
    }
}

export default function Continents( { name } : ContinentProps) {
    const data = continentData[name];

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />

            <Flex
                bgSize='cover'
                w='100wh'
                maxW={ 1240 }
                h={ [ '150px', '500px' ] }
                bgImage={ data.banner }
                bgRepeat="no-repeat"
                mx="auto"
            >
                    <Text alignSelf="flex-end" ml="120" mb="20" color='#FFF' fontWeight='medium' fontSize={ [ '3xl', '5xl' ] }>
                        { data.title }
                    </Text>
            </Flex>

            <Box w="100%" maxW={ 1240 } alignItems="center" mx="auto" px={["6", "16"]}>
                <Flex align="center" my="20" direction={isWideVersion ? "row" : 'column'}>
                    <Box maxWidth="600">
                        <Text
                            fontSize="18"
                            textAlign="justify"
                            color="gray.500"
                            fontWeight="medium"
                        >
                            { data.description }
                        </Text>
                    </Box>
                    <HStack mt="4">
                        <SimpleGrid mx={["0", "20"]} columns={ 3 } spacing={["18", "4"]} w="100%">
                            <Flex direction="column" align={[ "flex-start", "center"]}>
                                <Text color="#FFBA08" fontSize="35" fontWeight="bold">{ data.qtdPaises }</Text>
                                <Text fontSize="18"
                                      color="gray.500"
                                      fontWeight="normal">países</Text>
                            </Flex>
                            <Flex direction="column" align={ [ "flex-start", "center" ] }>
                                <Text color="#FFBA08" fontSize="35" fontWeight="bold">{ data.qtdLinguas }</Text>
                                <Text fontSize="18"
                                      color="gray.500"
                                      fontWeight="medium">línguas</Text>
                            </Flex>
                            <Flex direction="column" align={ [ "flex-start", "center" ] } w="36">
                                <Text color="#FFBA08" fontSize="35" fontWeight="bold">{ data.qtdCidadesMais }</Text>
                                <HStack>
                                    <Text fontSize="18"
                                          color="gray.500"
                                          fontWeight="medium">cidades +100
                                    </Text>
                                    {isWideVersion && (
                                        <Tooltip label="Muuitos continentes" aria-label="Muuitos continentes"
                                                 bg="gray.600"
                                                 placement="top-start">
                                            <Text as="span">
                                                <Icon as={ FiInfo } color="gray.400" fontSize="14"/>
                                            </Text>
                                        </Tooltip>
                                    )}
                                </HStack>
                            </Flex>
                        </SimpleGrid>
                    </HStack>
                </Flex>

                <Heading size="lg" color="gray.500" fontWeight="medium">Cidades +100</Heading>

                <Flex align="center" my="4" direction="column">
                    {isWideVersion ? (
                        <SimpleGrid mt="10" columns={ 4 } gap="10" w="100%">
                            <Cities cities={data.cities} />
                        </SimpleGrid>
                    ) : (
                        <Flex direction="column" mt="4" align="center" justify="center">
                            <Cities cities={ data.cities }/>
                        </Flex>
                    )}
                </Flex>
            </Box>
        </Box>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            // just testing static generation of post
            // {
            //     params: {
            //         slug: 'how-to-get-unstuck-in-your-career-as-a-developer'
            //     }
            // }
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps= async ({ params }) => {
    const { continent } = params;

    return {
        props: {
            name: continent
        }
    };
}
