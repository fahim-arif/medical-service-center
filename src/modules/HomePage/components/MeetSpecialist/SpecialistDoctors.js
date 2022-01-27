import {useEffect, useState} from 'react';
import {doctorData} from './data';
import {getDoctors} from '../../services/doctor.service';
import Image from 'next/image';
import {Box, Flex, SimpleGrid, Text} from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link'

const SpecialistDoctor = ({posts}) => {
  const [doctorData, setDoctorData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor`);
      setDoctorData(data)
      // setState
    };
    fetchData()
  }, []);

  // console.log(doctorData);
  // const jsonData = doctorData;
  console.log(doctorData);

  return (
    <Box py='166px' background='#F8F9FA'>
      <Box background='#F8F9FA'>
        <Flex justifyContent="center">
          <Text background='#F8F9FA' fontSize="48px" fontFamily="Asap" fontWeight="600">Meet Our Specialist</Text>
        </Flex>
        <Flex justifyContent="center">
          <Text fontSize="18px" fontFamily="Asap" fontWeight="600">The hospital plays a statewide role in rehabilitation services, which includes the Acquired</Text>
        </Flex>
      </Box>
      <SimpleGrid columns={4} spacingX="84px" spacingY="20px" width="85%" mx="auto" marginTop="66px">
        {doctorData.map((data) => (
          <Box key={data.id}>
            <Link href={`/doctor/${data.id}`}>
              <a>
                <Image objectFit='cover' src={data.image} width="260px" height="226px"></Image>
              </a>
            </Link>
            <Box>
              <Flex justifyContent="center">
                <Text>{data.name}</Text>
              </Flex>
              <Flex justifyContent="center">
                <Text>{data.specialist}</Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      
    </Box>
  );
};

export default SpecialistDoctor;
