import {Box, Button, Flex, SimpleGrid, Text} from '@chakra-ui/react';

const Emergency = () => {
  return (
    <Box>
      <Box marginTop="150px">
        <Flex justifyContent="center">
          <Text fontSize="48px" fontFamily="Asap" fontWeight="600">
            Emergency
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <Text fontSize="18px" fontFamily="Asap" fontWeight="600">
            The hospital plays a statewide role in rehabilitation services, which includes the Acquired
          </Text>
        </Flex>
      </Box>
      <Box
        marginTop="36px"
        color="#FFFFFF"
        width="100%"
        height="444px"
        bgImage="url('/images/emergency.png')"
        backgroundPosition='cover'
      // backgroundRepeat='no-repeat'
      >
        <Box
          width="410px"
          height="444px"
          backgroundColor="#5481F5"
          ml="115px"
          paddingTop="66px"
          fontFamily="Asap"
        >
          <Flex justifyContent="center" alignItems="center">
            <SimpleGrid pl={10} columns={1} spacingY="20px">
              <Flex>
                <Text fontWeight="600" fontSize="28px">
                  Emegency Cases
                </Text>
              </Flex>
              <Flex >
                <Text mt='10px' fontWeight="300" fontSize="15px">
                  We have emergency ambulance, emergency oxygen, emergency
                  medical supply service
                </Text>
              </Flex>
              <Flex alignItems='center' mt={10}>
                <Text>Contact </Text>
                <Text pl='15px' fontWeight="700" fontSize="26px">
                  +880-1638-418833
                </Text>
              </Flex>
              <Flex justifyContent="center" alignItems="center">
              </Flex>
            </SimpleGrid>
          </Flex>
          <Flex mt={10} justifyContent="center" alignItems="center">
            <Button
              colorScheme="teal"
              variant="outline"
              color=""
              fontSize="16px"
              fontWeight="600"
              fontFamily="Asap"
              width="213px"
              height="44px"
            >
              Emergency Service
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Emergency;
