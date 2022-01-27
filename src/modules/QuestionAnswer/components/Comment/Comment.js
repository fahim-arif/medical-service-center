import {useState} from 'react';
// import {comment} from './data';
import {Box, Grid, GridItem, Text} from '@chakra-ui/react';
import Image from 'next/image';
import useComment from '@root/hooks/useComment';
export default function Comment() {

  const {comment, setComment} = useComment();


  return (
    <Box width="800px" mx="auto" marginTop="30px">
      <Text fontSize="30px"
        fontWeight="700"
        fontFamily="Asap"
        color="#0A2E72">Comments</Text>
      <Grid mt='36px' templateColumns="repeat(1fr, 2fr, 2fr)" gap='10px'>
        {comment.map((pd) => (
          <>
            <GridItem colSpan={1}>
              <Image width="100px" height="100px" src='/images/1200px-User_font_awesome.svg.png'></Image>
            </GridItem>
            <GridItem mr={10} colSpan={2}>
              <Text
                marginRight='200px'
                fontSize="25px"
                fontWeight="700"
                fontFamily="Asap"
                color="#0A2E72"
              >
                {pd.name}
              </Text>
              <Text
                fontSize="20px"
                fontWeight="400"
                fontFamily="Asap"
                color="#0A2E72"
              >
                {pd.category}
              </Text>
              <Text>{pd.question}</Text>
            </GridItem>
          </>
        ))}
      </Grid>


    </Box>
  );
}
