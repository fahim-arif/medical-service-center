import {bestSeller} from './bestellerData';
import Image from 'next/image';
import {Box, Flex, Text, SimpleGrid} from '@chakra-ui/react';
import ReactStars from 'react-rating-stars-component';
import Rating from 'react-rating';

const BestSeller = () => {
  const bestSellerData = bestSeller;
  console.log(bestSellerData);
  return (
    <Box>
      <Box marginTop="166px">
        <Flex justifyContent="center">
          <Text fontSize="48px" fontFamily="Asap" fontWeight="600">
            Best Seller
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
      >
        {bestSellerData.map((data) => (
          <Box key={data.id}>
            <Image src={data.image} width="260px" height="226px"></Image>
            <Box>
              <Flex>
                <Text>{data.name}</Text>
              </Flex>
              <Flex>
                <ReactStars
                  count={5}
                  initialRating={4}
                  size={20}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  readOnly
                />
                <Rating
                  initialRating={data.rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly
                ></Rating>
                ({data.totalRating})
              </Flex>

              <Flex>
                <Text>{data.price}</Text>
                
                
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BestSeller;
