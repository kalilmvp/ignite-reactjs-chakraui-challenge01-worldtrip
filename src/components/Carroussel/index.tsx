import { Flex, Text } from "@chakra-ui/react";
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y ]);

export interface CarrousselItem {
    href: string;
    continent: string;
    description: string;
    bgImage: string;
}

interface CarrousselProps {
    items: CarrousselItem[];
}

export default function Carroussel( {items} : CarrousselProps) {
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
                { items.map(item => (
                    <SwiperSlide>
                        <Link href={item.href}>
                            <Flex
                                bgSize='cover'
                                w='100%'
                                h='100%'
                                alignItems='center'
                                justify='center' // alinhado verticalmente e horizontalmente
                                direction='column'
                                bgImage={item.bgImage}
                                bgRepeat="no-repeat"
                                cursor="pointer"
                            >
                                <Text color='#FFF' fontWeight='bold' fontSize={ [ '3xl', '5xl' ] }>
                                    { item.continent }
                                </Text>
                                <Text color='#FFF' fontWeight='bold' mt="2" fontSize={ [ '1xl', '2xl' ] }>
                                    {item.description}
                                </Text>
                            </Flex>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    );
}
