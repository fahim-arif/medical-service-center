import Image from 'next/image';
import {Box, Flex, SimpleGrid, Text} from '@chakra-ui/react';
import about1 from '../../../../../public/images/question.jpg'

const Banner = () => {
  return (
    <Box>
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
              Q/A Section
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="20px"
              fontWeight="500"
              fontFamily="Roboto"
              color="#0A2E72"
            >
              Home - Q/A
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
        
    <Box width="800px" mx="auto" marginTop="20px">
    <Image height="450px" width="800px" src={about1}></Image>
    </Box>
    </Box>
  );
};

export default Banner;
