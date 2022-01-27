import Image from 'next/image';
import {Box, Button, Flex, SimpleGrid, Text} from '@chakra-ui/react';
import about1 from '../../../../../public/images/question.jpg'
import useComment from '@root/hooks/useComment';

const Banner = () => {
  const {setCategory} = useComment();

  const onClickPrimary = () => {
    setCategory('Primary Health Care')
  }
  const onClickHeart = () => {
    setCategory('Heart')
  }
  const onClickKidney = () => {
    setCategory('Kidney')
  }

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

      <Box display='flex' width="800px" mx="auto" marginTop="20px">
        <Image height="450px" width="800px" src={about1}></Image>
        <Box display='flex' flexDirection='column' ml={10}>
          <Text fontSize="30px"
            fontWeight="700"
            fontFamily="Asap"> Categories</Text>
          <Button mt='20px' onClick={onClickPrimary} fontsize='18px' padding='20px'>Primary Health Care</Button>
          <Button mt='20px' onClick={onClickHeart} fontsize='18px' padding='20px'>Heart</Button>
          <Button mt='20px' onClick={onClickKidney} fontsize='18px' padding='20px'>Kidney</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
