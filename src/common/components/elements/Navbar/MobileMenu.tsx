import React from 'react';
import {Box, Container, Input, Stack, Text} from '@chakra-ui/react';
import Link from 'next/link';

type props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const MobileMenu: React.FC<props> = ({setIsOpen, isOpen}) => {
  const handleCollapse = (e) => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <Box
        onClick={handleCollapse}
        cursor="pointer"
        backgroundSize="cover"
        w={{base: '14.4px', sm: '25.4px'}}
        h={{base: '10.4px', sm: '20.4px'}}
        bgImage="url('/images/menu_bars.svg')"
      ></Box>
      {!isOpen && (
        <Box
          borderRadius="10px"
          onClick={(e) => e.stopPropagation()}
          height="100vh"
          width="100%"
          bgColor="#fff"
          position="absolute"
          top="60px"
          left="0"
          zIndex="1"
        >
          <Box display="flex" justifyContent="center">
            <Input
              width={{base: '80%', sm: '80%', md: '90%'}}
              mt={10}
              px={5}
              mx={5}
              placeholder="Search"
              size="md"
            />
          </Box>
          <Stack maxW="90%" mt={5} pl={{base: '50px', sm: 20}} spacing={3}>
            <Link href="/">
              <a>
                <Text>About</Text>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Text>Newsletter</Text>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Text>Login</Text>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Text>Register</Text>
              </a>
            </Link>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default MobileMenu;
