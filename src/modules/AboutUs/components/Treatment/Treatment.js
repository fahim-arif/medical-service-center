import {Flex, Box, SimpleGrid, Text} from '@chakra-ui/react';
import Image from 'next/image';
import about1 from '../../../../../public/images/about1.png';
import about2 from '../../../../../public/images/about2.jpg';
export default function Treatment() {
  return (
    <Box marginTop="60px">

     
      <SimpleGrid columns={2}>
       
          <Flex
            width="70%"
            direction="column"
            justifyContent="center"
            alignItems="center"
            mx="auto"
          >
            <Box>
              <Image width="500px" height="185px" src={about1}></Image>
            </Box>
            <Box marginTop="45px">
              <Image width="500px" height="185px" src={about2}></Image>
            </Box>
          </Flex>
        
          <Flex >
            <Box width="500px">
              <Flex alignItems="center">
                <Text  fontSize="45px" fontWeight="600" fontFamily="Asap"color="#0A2E72">
                We can treatment all of <br/>your sickness. And we are help poor people.
                </Text>
              </Flex>
              <Flex alignItems="center" marginTop="22.5px">
                <Text
                  fontFamily="Asap"
                  fontSize="16px"
                  fontWeight="400"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptates? Assumenda numquam laboriosam voluptas consequuntur sunt tenetur saepe consectetur molestiae laborum reiciendis? Inventore alias ad nesciunt, iure ullam blanditiis unde.
                  
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                marginTop="21px"
              >
                <Text fontFamily="Asap" fontSize="16px" fontWeight="400">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita sed nostrum vitae repellat quasi nulla laborum, officiis facere, corporis eligendi cumque harum? Libero soluta qui eveniet vero asperiores maiores.
                </Text>
              </Flex>
            </Box>
          </Flex>
       
      </SimpleGrid>
    </Box>
  );
}
