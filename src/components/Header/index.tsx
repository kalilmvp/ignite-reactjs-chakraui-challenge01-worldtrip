import { Box, Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    const { asPath } = useRouter();

    return (
        <Flex
            as="header"
            align="center"
            justify="center"
            w='100%'
            maxW={ 1440 }
            h="120"
            mx='auto'
        >
            {(!isWideVersion && asPath.startsWith('/cont')) && (
                <Box>
                    <Link href='/'>
                        <Text
                            as="span"
                            position="absolute"
                            left="2"
                            top="12"
                            color='gray.600'
                            fontSize={ [ '20px', '50px' ] }
                        >
                           <Icon as={ FiChevronLeft} cursor="pointer"/>
                        </Text>
                    </Link>
                </Box>
            )}
            <Image objectFit="cover" src="/logo.png" alt="Logo"/>
        </Flex>
    )
}
