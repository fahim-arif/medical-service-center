import {Box, SimpleGrid, Flex, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {data} from './data';

const Partner = () => {
  const partnerData = data;
  return (
    <Box>
      <Box marginTop="120px">
        <Flex justifyContent="center">
          <Text fontSize="48px" fontFamily="Asap" fontWeight="600">
            Partners who support us
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <Text fontSize="18px" fontFamily="Asap" fontWeight="600">
            Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates
            incidunt molestias <br /> <Text align="center">nostrum laudantium. Maiores porro cumque quaerat.</Text>
          </Text>
        </Flex>
      </Box>
      <Box width="85%" mx="auto">
        <SimpleGrid columns={5} spacingX="20px" marginTop="66px">
          {partnerData.map((partner) => (
            <Box width="224px" height="68px" key={partner.id}>
              <Image objectFit='contain' src={partner.image} width="224px" height="68px"></Image>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Partner;
