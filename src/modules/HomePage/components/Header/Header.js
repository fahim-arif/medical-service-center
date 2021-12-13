import { Box, Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex background="#526371" width="100%" height="38px" alignItems="center">
      <Text
        color="#fff"
        marginLeft="128px"
        fontFamily="Asap"
        fontWeight="600"
        fontSize="13px"
      >
        For Emergency case: +880 01638418833
      </Text>
    </Flex>
  );
};

export default Header;
