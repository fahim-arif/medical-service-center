import { Box, Button, Flex, Text } from "@chakra-ui/react";

import doctor1 from "/public/images/doctor1.png";
import doctor2 from "/public/images/doctor2.png";
import doctor3 from "/public/images/doctor3.jpg";
import Image from "next/image";

const FindDoctor = () => {
  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      width="100%"
      height="600px"
      marginTop="529px"
    >
      <Flex justifyContent="space-between" height="570px" width="590px">
        <Flex flexDirection="column" justifyContent="space-between">
          <Box width="277px" height="233px">
            <Image src={doctor3} layout="responsive" />
          </Box>
          <Box width="278px" height="263px">
            <Image src={doctor2} layout="responsive" />
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Box width="285px" height="372px">
            <Image src={doctor1} layout="responsive" />
          </Box>
        </Flex>
      </Flex>
      <Box height="520px" width="590px">
        <Flex
          justifyContent="center"
          alignItems="center"
          height="124px"
          width="590px"
        >
          <Text fontFamily="Asap" fontSize="44px" fontWeight="600">
            Personal care <br /> & healthy living
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          width="590px"
          height="93px"
          marginTop="21px"
        >
          <Text fontFamily="Asap" fontSize="16px" fontWeight="600">
            We provide best leading medicle service Nulla perferendis veniam
            <br />
            deleniti ipsum officia dolores repellat laudantium obcaecati neque.
          </Text>
        </Flex>
        <Flex width="590px" justifyContent="center" marginTop="40px">
          <Button
            fontFamily="Asap"
            fontSize="14px"
            fontWeight="600"
            background="rgba(225, 36, 84, 1)"
            height="42px"
            width="195px"
            color="rgba(255, 255, 255, 1)"
          >
            Find Suitable Doctor
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FindDoctor;
