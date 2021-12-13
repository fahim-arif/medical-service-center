import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";

import plus from "/public/images/plus.png";

const AppointmentCard = () => {
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
        <Box height="52px" width="50px">
          <Image src={plus} layout="responsive" />
        </Box>
        <Box width="228px" height="20px" marginTop="34px">
          <Text
            color="rgba(166, 166, 166, 1)"
            fontSize="18px"
            fontWeight="500"
            fontFamily="Asap"
          >
            24 Hours Service
          </Text>
        </Box>
        <Flex
          height="41px"
          width="180px"
          alignItems="center"
        >
          <Text
            fontSize="20px"
            fontWeight="700"
            fontFamily="Asap"
            color="rgba(0, 0, 0, 1)"
          >
            Online Appoinment
          </Text>
        </Flex>
        <Box>
          <Text
            width="297px"
            fontSize="15px"
            fontWeight="400"
            fontFamily="Asap"
          >
            Get ALL time support for emergency.We have introduced the principle
            of family medicine.
          </Text>
        </Box>
        <Box marginTop="30px">
          <Button
            height="42px"
            width="213px"
            background="#223A66"
            color=" rgba(255, 255, 255, 1)"
          >
            Make A Appointment
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default AppointmentCard;
