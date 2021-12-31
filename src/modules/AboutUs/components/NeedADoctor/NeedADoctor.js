import {Box, SimpleGrid, Text, Flex} from '@chakra-ui/react';

export default function NeedADoctor() {
  return (
    <Box fontFamily="Asap" marginTop="30px" backgroundColor="#EDF4FA" padding="60px">
      <SimpleGrid columns={2}>
        <Flex justifyContent="center" alignItems="center">
          <Text fontSize="25px" fontWeight="700" color="#0A2E72">
            Need a doctor for checkup?
            <br /> Call for an emergency services!
          </Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
        <Text align="center" fontSize="25px" fontWeight="700" color="#0A2E72" paddingRight="50px">Contact Us  +88012348</Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
