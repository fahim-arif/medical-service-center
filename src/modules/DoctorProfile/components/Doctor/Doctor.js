import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {Box, Button, Flex, Grid, GridItem, Text} from '@chakra-ui/react';
import Image from 'next/image';
import doctor from "../../../../../public/images/doctorProfile.jpg"
import {MdCall} from 'react-icons/md';
import Link from 'next/link';
import map from "../../../../../public/images/Map.png"
import axios from 'axios'
export default function Doctor() {
  const router = useRouter();
  const {id} = router.query;
  const [doctor, setDoctor] = useState([]);


  useEffect(() => {
    if (id) {

      const fetchData = async () => {
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor/${id}`)
        setDoctor(data)
      }
      fetchData()
    }
  }, [id])

  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Box>
          {doctor.image &&
            <Image width="150px" height="150px" src={doctor.image}></Image>
          }
        </Box>
        <Box>
          <Text
            fontFamily="Asap"
            fontWeight="700"
            fontSize="30px"
            color="#3B566E"
          >
            {doctor.name}
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
            {doctor.medicalField}
          </Text>
        </Box>
        <Box>
          <Text fontFamily="Asap" fontWeight="500" fontSize="20px">
            Location: {doctor.location}
          </Text>
        </Box>
        <Box>
          <Text fontFamily="Asap" fontWeight="500" fontSize="20px">
            Contact Number: {doctor.phone}
          </Text>
        </Box>
        <Box>
          <Text fontFamily="Asap" fontWeight="500" fontSize="20px">
            Online Visit Cost: {doctor.visitPrice} Taka
          </Text>
        </Box>
        <Box>
          <Text fontFamily="Asap" fontWeight="500" fontSize="20px">
            Service Time: {doctor.visitTime}
          </Text>
        </Box>

        <Box marginTop="20px">
          <Button
            colorScheme="teal"
            variant="solid"
            bg="#504DE5"
            color="white"
            paddingX="50px"
          >
            <Link href={`/doctor/${id}/appointment`} paddingY="15px">
              <a>
                Book An Appoinment
              </a>
            </Link>
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
