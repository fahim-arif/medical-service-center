import {useEffect, useState} from 'react';
import Link from 'next/link';
import {bestSeller} from './bestellerData';
import Image from 'next/image';
import {Box, Flex, Text, SimpleGrid} from '@chakra-ui/react';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';
import Rating from '@root/common/components/elements/Rating/Rating';

const BestSeller = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStore = async () => {
      const {data} = await axios.get('http://localhost:5000/api/store');
      setData(data);
    }
    fetchStore();
  }, [])

  console.log(data);

  const bestSellerData = bestSeller;
  return (
    <Box py={10} my='100px' background='#F8F9FA'>
      <Box mt='100px'>
        <Flex justifyContent="center">
          <Text fontSize="48px" fontFamily="Asap" fontWeight="600">
            Our Medical Store
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <Text fontSize="18px" fontFamily="Asap" fontWeight="600">
            The hospital plays a statewide role in rehabilitation services,
            which includes the Acquired
          </Text>
        </Flex>
      </Box>
      <SimpleGrid
        columns={4}
        spacingX="84px"
        spacingY="20px"
        width="85%"
        mx="auto"
        marginTop="66px"
        pb={20}
      >
        {data.map((data) => (
          <Box fontFamily='asap' key={data.id}>
            <Link href={`/store/${data._id}`}>
              <a>
                <Box minW='260px' minH='226px'>

                  <Image src={data.image} width="260px" height="226px"></Image>
                </Box>
                <Box mt='-10px' height='130px' width="260px" border='1px solid #dbdbdb'>
                  <Flex width="260px" p='10px' >
                    <Text>{data.name}</Text>
                  </Flex>
                  <Flex px='10px'>
                    <Rating text={data.review} rating={data.rating}>
                    </Rating>
                  </Flex>
                  <Flex pt='10px' justifyContent='end'>
                    <Text fontSize='14px' px='10px'> {data.description}</Text>
                  </Flex>
                </Box>
              </a>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BestSeller;
