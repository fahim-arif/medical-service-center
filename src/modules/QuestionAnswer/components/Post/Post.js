import {data} from './data';
import {Box, Flex, SimpleGrid, Text} from '@chakra-ui/react';
import post1 from "../../../../../public/images/post1.jpg"
import post2 from "../../../../../public/images/post2.jpg"
import post3 from "../../../../../public/images/post3.jpg"
import Image from 'next/image';
export default function Post() {
  console.log(data);
  return (
    <Box width="80%" mx="auto">
      {data.map((pd) => (
        <Box key={pd.id} width="800px" mx="auto" marginTop="20px">
            <Text fontSize="30px"
              fontWeight="700"
              fontFamily="Asap"
              color="#0A2E72">{pd.heading}</Text>
            
            <Text fontSize="20px"
              fontWeight="500"
              fontFamily="Asap"
              color="#0A2E72">
                  {pd.user}

            </Text>

            <SimpleGrid marginTop="20px" columns={3} gap={4}>
                <Box >
                    <Image src={post1}></Image>
                </Box>
                <Box>
                    <Image src={post2}></Image>
                </Box>
                <Box>
                    <Image src={post3}></Image>
                </Box>
            </SimpleGrid>

            <Text marginTop="10px">{pd.post2}</Text>

            <Flex marginTop="20px" justifyContent="space-between">
            <Text  fontSize="20px"
              fontWeight="700"
              fontFamily="Asap"
              color="#0A2E72">{pd.tags}</Text>
            <Text  fontSize="20px"
              fontWeight="700"
              fontFamily="Asap"
              color="#0A2E72">{pd.share}</Text>
            
            </Flex>
        </Box>
      ))}
    </Box>
  );
}
