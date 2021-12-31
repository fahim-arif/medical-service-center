import {Box, SimpleGrid, Flex, Text, Button} from '@chakra-ui/react';
export default function AppoinmentTime() {
  return (
    <Box width="60%" mx="auto">
      <Flex justifyContent="center">
        <Box marginTop="30px" width="35%" mx="auto">
          <Text fontWeight="600" fontFamily="Asap" fontSize="20px">
            Select A Time
          </Text>
          <SimpleGrid columns={4} gap={4}>
            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              8.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
              isDisabled
            >
              9.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              10.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              11.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
              isDisabled
            >
              12.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              13.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
              isDisabled
            >
              14.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              15.00
            </Button>
          </SimpleGrid>

          <Button
          marginTop="40px"
              height="60px"
              width="335px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
             Confirm
            </Button>
        </Box>
      </Flex>
    </Box>
  );
}
