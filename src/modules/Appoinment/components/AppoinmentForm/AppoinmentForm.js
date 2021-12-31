import {Box, Text, Flex, Input, Button, SimpleGrid} from '@chakra-ui/react';
import Image from 'next/image';
import doctor from '../../../../../public/images/doctorProfile.jpg';
import {FormControl, FormLabel} from '@chakra-ui/react';
import Link from 'next/link';
export default function AppoinmentForm() {


  const handleClick = () =>  {

    document.getElementById("relation").style.display = "block";
}
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
      </Flex>

      <Box marginTop="20px" width="60%" mx="auto">
        <Box width="60%" mx="auto">
          <Text fontWeight="600" fontFamily="Asap" fontSize="20px">
            Apppoinment For
          </Text>
        </Box>
        <FormControl marginTop="15px" width="60%" mx="auto" isRequired>
          <FormLabel htmlFor="first-name">Patient Name</FormLabel>
          <Input id="first-name" placeholder="Patient Name" />
          <FormLabel htmlFor="first-name">Contact Number</FormLabel>
          <Input id="first-name" placeholder="Contact Number" />
        </FormControl>

        <Box width="60%" mx="auto" marginTop="30px">
          <Text fontWeight="600" fontFamily="Asap" fontSize="20px">
            Who is the Patient?
          </Text>
          <SimpleGrid columns={4} gap={4}>
           <Flex direction="column">
           <Button
              height="100px"
              width="100px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            ></Button>
            <Text>My Self</Text>
           </Flex>
           <Flex direction="column">
           <Button
              height="100px"
              width="100px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            ></Button>
            <Text>My Child</Text>
           </Flex>
           <Flex direction="column">
           <Button
              height="100px"
              width="100px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            ></Button>
            <Text>My Husband</Text>
           </Flex>
           <Flex direction="column">
           <Button
              height="100px"
              width="100px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
              onClick={handleClick}
            ></Button>
            <Text>Other</Text>
           </Flex>
          </SimpleGrid>
        </Box>


        <Box id='relation' display="none" marginTop="20px">
        <FormControl marginTop="15px" width="60%" mx="auto" isRequired >
          <FormLabel htmlFor="first-name">Relation With Patient</FormLabel>
          <Input id="first-name" placeholder="Relation With Patient" />
         
        </FormControl>
        </Box>


        <Box width="60%" mx="auto" marginTop="20px">
        <Button
            colorScheme="teal"
            variant="solid"
            bg="#504DE5"
            color="white"
            paddingX="50px"
          >
            <Link href="/confirmAppoinment" paddingY="15px">
              Next
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
