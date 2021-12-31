import Image from 'next/image';
import {Box, Flex, SimpleGrid, Text} from '@chakra-ui/react';

const Banner = () => {
  return (
    <Box width="100wh" height="444px"
    bgSize="cover"
     bgPosition="center center" bgImage="url('/images/aboutBanner.png')">
      <SimpleGrid columns={2}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          paddingTop="120px"
        >
          <Box>
            <Text
              fontSize="50px"
              fontWeight="700"
              fontFamily="Ubuntu"
              color="#0A2E72"
            >
              About Us
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="20px"
              fontWeight="500"
              fontFamily="Roboto"
              color="#0A2E72"
            >
              Home - About
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Banner;
