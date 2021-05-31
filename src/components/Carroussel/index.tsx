import { Flex, Text } from "@chakra-ui/react";
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y ]);

export default function Carroussel() {
    return (
        <Flex
            w='100%' // deixei a flex ocupando toda largura,
            maxW='1240px' // porém não mais largo que 1240px
            mx='auto'
            mb={ [ '5', '10' ] }
            h={ [ '250px', '450px' ] }
            mt='10'
        >
            <Swiper
                slidesPerView={ 1 } // uma imagem exibida somente
                navigation
                loop={ true }
                pagination={ { clickable: true } }
                style={ { width: '100%', flex: '1' } }
            >
                <SwiperSlide>
                    <Link href='/europe'>
                        <Flex
                            bgSize='cover'
                            w='100%'
                            h='100%'
                            alignItems='center'
                            justify='center' // alinhado verticalmente e horizontalmente
                            direction='column'
                            bgImage='continents/europe.png'
                            bgRepeat="no-repeat"
                        >
                            <Text color='#FFF' fontWeight='bold' fontSize={ [ '3xl', '5xl' ] }>
                                Europa
                            </Text>
                            <Text color='#FFF' fontWeight='bold' mt="2" fontSize={ [ '1xl', '2xl' ] }>
                                O continente mais antigo
                            </Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/asia'>
                        <Flex
                            bgSize='cover'
                            w='100%'
                            h='100%'
                            alignItems='center'
                            justify='center' // alinhado verticalmente e horizontalmente
                            direction='column'
                            bgImage='continents/asia.png'
                            bgRepeat="no-repeat"
                        >
                            <Text color='#FFF' fontWeight='bold' fontSize={ [ '3xl', '5xl' ] }>
                                Ásia
                            </Text>
                            <Text color='#FFF' fontWeight='bold' mt="2" fontSize={ [ '1xl', '2xl' ] }>
                                Natureza e antigo se juntam
                            </Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/americasul'>
                        <Flex
                            bgSize='cover'
                            w='100%'
                            h="100%"
                            alignItems='center'
                            justify='center' // alinhado verticalmente e horizontalmente
                            direction='column'
                            bgImage='continents/america_sul.png'
                            bgRepeat="no-repeat"
                        >
                            <Text color='#FFF' fontWeight='bold' fontSize={ [ '3xl', '5xl' ] }>
                                América do Sul
                            </Text>
                            <Text color='#FFF' fontWeight='bold' mt="2" fontSize={ [ '1xl', '2xl' ] }>
                                Muita riqueza, histórica e povo alegre
                            </Text>
                        </Flex>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
}
