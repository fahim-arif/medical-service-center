import {Box, Button, Flex, Grid, GridItem, Text} from '@chakra-ui/react';
import Image from 'next/image';
import doctor from "../../../../../public/images/doctorProfile.jpg"
import { MdCall} from 'react-icons/md';
import Link from 'next/link';
import map from "../../../../../public/images/Map.png"
export default function Doctor() {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" direction="column">
      <Box>
          <Image width="150px" height="150px" src={doctor}></Image>
        </Box>
        <Box>
          <Text
            fontFamily="Asap"
            fontWeight="700"
            fontSize="30px"
            color="#3B566E"
          >
            Dr. Fig Nelson
          </Text>
        </Box>
        <Box>
          {' '}
          <Text
            fontFamily="Asap"
            fontWeight="500"
            fontSize="20px"
            color="#504DE5"
          >
            Medicine
          </Text>
        </Box>
        <Box>
          {' '}
          <Text fontFamily="Asap" fontWeight="500" fontSize="20px">
            Torento, America-49005
          </Text>{' '}
        </Box>

        <Box marginTop="20px">
          <Button
            colorScheme="teal"
            variant="solid"
            bg="#504DE5"
            color="white"
            paddingX="50px"
          >
            <Link href="/appoinment" paddingY="15px">
              Book An Appoinment
            </Link>
          </Button>
          <Button
            rightIcon={<MdCall />}
            colorScheme="teal"
            variant="solid"
            bg="#504DE5"
            color="white"
            marginLeft="60px"
            paddingY="15px"
          >
            Call us
          </Button>
        </Box>
      </Flex>

     <Flex marginTop="60px" justifyContent="center">
       <Box width="800px" height="600px">
       <Image width="800px" height="600px" src={map}></Image>
       </Box>
     </Flex>
    </Box>
  );
}
