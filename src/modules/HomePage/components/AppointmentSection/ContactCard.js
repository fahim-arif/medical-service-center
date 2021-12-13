import { Box, Flex, Text,Button } from "@chakra-ui/react";
import Image from "next/image";

import medicalCar from "/public/images/medical-car.png";

const ContactCard = () => {
  return (
    <Flex
      width="366px"
      height="370px"
      background="#fff"
      borderRadius="10px"
      boxShadow="-1px 2px 16px 4px rgba(0, 0, 0, 0.25)"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Box width="62px" height="54px">
          <Image src={medicalCar} layout="responsive" />
        </Box>
        <Box height="20px" width="228px" marginTop="38px">
          <Text
            color="rgba(166, 166, 166, 1)"
            fontSize="18px"
            fontWeight="500"
            fontFamily="Asap"
          >
            Emegency Cases
          </Text>
        </Box>
        <Box height="41px" width="208px" marginTop="10px">
          <Text
            fontSize="20px"
            fontWeight="700"
            fontFamily="Asap"
            color="rgba(0, 0, 0, 1)"
          >
            +880-1638-418833
          </Text>
        </Box>
        <Box>
          <Text
            width="297px"
            fontSize="15px"
            fontWeight="400"
            fontFamily="Asap"
          >
            Get ALL time support for emergency
          </Text>
        </Box>
        <Box marginTop="30px">
          <Button
            height="42px"
            width="213px"
            background="#223A66"
            color=" rgba(255, 255, 255, 1)"
          >
            Contact Now
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactCard;
