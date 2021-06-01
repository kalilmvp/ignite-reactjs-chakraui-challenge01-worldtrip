import { Box, HStack, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Flag from "react-flagkit";

interface CityData {
    name: string;
    image: string;
    country: string;
    flag: string;
}

interface CitiesProps {
    cities: CityData[];
}

export default function Cities( {cities} : CitiesProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
            <>
                {
                    cities.map(city => (
                        <Box key={ city.name } maxW="sm" borderColor="#FFBA08" borderWidth="1px"
                             mt={ isWideVersion ? '0' : '4'} overflow="hidden">
                            <Image width="100%" height="200" src={ city.image } alt={ city.name }/>

                            <Box p="6">
                                <HStack display="flex" justify="space-between">
                                    <VStack display="flex" align="flex-start">
                                        <Text fontSize="15"
                                              color="gray.500"
                                              fontWeight="medium">{ city.name }</Text>
                                        <Text fontSize="13"
                                              color="gray.400"
                                              fontWeight="medium">{ city.country }</Text>
                                    </VStack>
                                    <Text as="span">
                                        <Flag
                                            size={ 34 }
                                            style={ {
                                                borderRadius: '10px'
                                            } }
                                            country={ city.flag }
                                        />
                                    </Text>
                                </HStack>
                            </Box>
                        </Box>
                    ))
                }
            </>
        )
}
