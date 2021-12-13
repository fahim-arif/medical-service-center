import { Box, Flex, Text, Button } from "@chakra-ui/react";

const DoctorPicture = () => {
  return (
    <Flex width="100%" height="590px" bgImage="url('/images/doctor.png')" justifyContent="center" alignItems="center">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Box>
          <Text color="#fff" fontSize="64px" fontWeight="600" fontFamily="Asap">
            The Best Doctors
          </Text>
        </Box>
        <Box marginTop="21px">
          <Text color="#fff" fontSize="18px" fontWeight="500" fontFamily="Asap">
            More than 1200 doctors are available in our health center
          </Text>
        </Box>
        <Box marginTop="6px">
          <Button
            colorScheme="teal"
            variant="outline"
            color="#fff"
            fontSize="16    px"
            fontWeight="500"
            fontFamily="Asap"
          >
            Explore
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DoctorPicture;
