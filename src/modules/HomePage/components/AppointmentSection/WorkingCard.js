import { Box, Flex, Text } from "@chakra-ui/react";

const WorkingCard = () => {
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
        <Box height="29px" width="228px">
          <Text
            color="rgba(166, 166, 166, 1)"
            fontSize="18px"
            fontWeight="500"
            fontFamily="Asap"
          >
            Timing Schedule
          </Text>
        </Box>
        <Box height="41px" width="255px">
          <Text
            fontSize="20px"
            fontWeight="700"
            fontFamily="Asap"
            color="rgba(0, 0, 0, 1)"
          >
            Working hours
          </Text>
        </Box>
        <Box marginTop="45px">
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="18px" fontWeight="500" fontFamily="Asap">
              Sun - Wed :
            </Text>
            <Text fontSize="18px" fontWeight="500" fontFamily="Asap">
              8:00 - 17:00
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            marginTop="10px"
          >
            <Text fontSize="18px" fontWeight="500" fontFamily="Asap">
              Thu - Fri :
            </Text>
            <Text fontSize="18px" fontWeight="500" fontFamily="Asap">
              8:00 - 17:00
            </Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            marginTop="10px"
          >
            <Text fontSize="18px" fontWeight="500" fontFamily="Asap">
              Sat- Sun :
            </Text>
            <Text fontSize="18px" fontWeight="500" fontFamily="Asap">
              8:00 - 17:00
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default WorkingCard;
