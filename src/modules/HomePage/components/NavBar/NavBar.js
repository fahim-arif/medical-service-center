import { Flex, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/images/logo_new.png";
import profilePic from "/public/images/profile-pic.png";

const NavBar = () => {
  return (
    <Box height="70px" width="100%">
      <Flex
        height="70px"
        width="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box height="48px" width="188px">
          <Image src={logo} layout="responsive" />
        </Box>
        <Flex width="1100px" justifyContent="right" alignItems="center">
          <Box marginLeft="20px">
            <Link href="#">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Home
              </Text>
            </Link>
          </Box>
          <Box marginLeft="20px">
            <Link href="#">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Medical Service
              </Text>
            </Link>
          </Box>
          <Box marginLeft="20px">
            <Link href="#">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Medical Store
              </Text>
            </Link>
          </Box>
          <Box marginLeft="20px">
            <Link href="#">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Emergency Service
              </Text>
            </Link>
          </Box>
          <Box marginLeft="20px">
            <Link href="#">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                About Us
              </Text>
            </Link>
          </Box>
          <Flex marginLeft="20px" justifyContent="center" alignItems="center">
            <Box height="30px" width="36px">
              <Image src={profilePic} layout="responsive" />
            </Box>
            <Link href="#">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Welcome Moin
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
