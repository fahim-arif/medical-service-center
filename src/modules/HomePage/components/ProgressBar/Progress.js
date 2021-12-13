import { Flex, Box, Text } from "@chakra-ui/react";

const ProgressBar = ({ data, description }) => {
  return (
    <Box height="130px" width="188px">
      <Flex
        height="100px"
        width="188px"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color="rgba(255, 255, 255, 1)"
          fontFamily="Asap"
          fontSize="64px"
          fontWeight="700"
        >
          {data}
        </Text>
      </Flex>
      <Flex
        height="30px"
        width="188px"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color="rgba(255, 255, 255, 1)"
          fontFamily="Asap"
          fontSize="18px"
          fontWeight="00"
        >
          {description}
        </Text>
      </Flex>
    </Box>
  );
};

export default ProgressBar;
