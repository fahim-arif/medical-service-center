import {comment} from './data';
import {Box, Grid, GridItem, Text} from '@chakra-ui/react';
import Image from 'next/image';
export default function Comment() {
  return (
    <Box width="800px" mx="auto" marginTop="30px">
        <Text fontSize="30px"
              fontWeight="700"
              fontFamily="Asap"
              color="#0A2E72">Comments</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {comment.map((pd) => (
          <>
            <GridItem colSpan={1}>
              <Image width="200px" height="200px" src={pd.image}></Image>
            </GridItem>
            <GridItem colSpan={2}>
              <Text
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
                {pd.designation}
              </Text>
              <Text>{pd.comment}</Text>
            </GridItem>
          </>
        ))}
      </Grid>

      
    </Box>
  );
}
