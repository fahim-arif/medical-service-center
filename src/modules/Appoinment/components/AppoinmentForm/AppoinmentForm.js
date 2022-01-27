import {useState, useEffect} from 'react'
import {Box, Text, Flex, Input, Button, SimpleGrid} from '@chakra-ui/react';
import Image from 'next/image';
import doctor from '../../../../../public/images/doctorProfile.jpg';
import {FormControl, FormLabel} from '@chakra-ui/react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ConfirmAppoinment from '@root/pages/confirmAppoinment';
import axios from 'axios';

export default function AppoinmentForm() {

  const [transition, setTransition] = useState(false)
  const [doctor, setDoctor] = useState([]);

  const router = useRouter()

  const {id} = router.query;

  useEffect(() => {
    if (id) {

      const fetchData = async () => {
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor/${id}`)
        setDoctor(data)
      }
      fetchData()
    }
  }, [id])

  const handleClick = () => {

    document.getElementById("relation").style.display = "block";
  }
  return (
    <>
      {transition ? <ConfirmAppoinment doctor={doctor}></ConfirmAppoinment> :

        <Box>
          <Flex justifyContent="center" alignItems="center" direction="column">
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
                onClick={() => setTransition(true)}
                colorScheme="teal"
                variant="solid"
                bg="#504DE5"
                color="white"
                paddingX="50px"
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      }
    </>
  );
}
