import {Box, Flex, SimpleGrid, Text} from '@chakra-ui/react';
import {data} from './data';
import Image from 'next/image';

const PaitentReview = () => {
  const reviewData = data;

  return (
    <Box>
      <Box marginTop="166px">
        <Flex justifyContent="center">
          <Text fontSize="48px" fontFamily="Asap" fontWeight="600">
          We served over 12000+ <br/><Text align="center">Patients</Text>
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <Text fontSize="18px" fontFamily="Asap" fontWeight="600">
          Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates<br/> <Text align="center">
          incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.
          </Text>
          </Text>
        </Flex>
      </Box>
      <SimpleGrid
        columns={2}
        spacingX="20px"
        spacingY="20px"
        width="85%"
        mx="auto"
        marginTop="66px"
      >
        {reviewData.map((data) => (
          <Box key={data.id} bgColor="#FFFFFF">
            <Flex >
              <Box width="75px" height="73px">
              <Image src={data.image} width="100%" height="100%"></Image>
              </Box>
              <Box paddingLeft="50px">
                <Text fontWeight="600" fontFamily="Asap" fontSize="16px">{data.content}</Text>
                <Text fontWeight="600" fontFamily="Asap" fontSize="14px">{data.name}</Text>
                <Text fontWeight="400" fontFamily="Asap" fontSize="16px" marginTop="30px">{data.review}</Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PaitentReview;
