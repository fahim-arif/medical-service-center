import {useEffect, useState} from 'react';
import {doctorData} from './data';
import {getDoctors} from '../../services/doctor.service';
import Image from 'next/image';
import {Box, Flex, SimpleGrid, Text} from '@chakra-ui/react';

const SpecialistDoctor = ({posts}) => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getDoctors();
  //     // setState
  //   } ;
  // }, []);

  // console.log(doctorData);
  const jsonData = doctorData;
  console.log(jsonData);

  return (
    <Box>
      <Box marginTop="166px">
        <Flex justifyContent="center">
          <Text fontSize="48px" fontFamily="Asap" fontWeight="600">Meet Our Specialist</Text>
        </Flex>
        <Flex justifyContent="center">
          <Text fontSize="18px" fontFamily="Asap" fontWeight="600">The hospital plays a statewide role in rehabilitation services, which includes the Acquired</Text>
        </Flex>
      </Box>
      <SimpleGrid columns={4} spacingX="84px" spacingY="20px" width="85%" mx="auto" marginTop="66px">
        {jsonData.map((data) => (
          <Box key={data.id}>
            <Image src={data.image} width="260px" height="226px"></Image>
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
