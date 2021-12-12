import {useState, useEffect, useContext} from 'react';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import {Logo} from '@common/components/elements/Logo';
import {MotionBox} from '@common/components/elements/Animation/MotionBox';
import {Box, Flex, Button, HStack} from '@chakra-ui/react';
import useNavTransition from '@root/common/hooks/useNavTransition';

export default function MainMenu() {
  const navTransition = useNavTransition();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box
      position="fixed"
      maxH={{base: '55', sm: '60', md: `${navTransition ? '72px' : '92'}`}}
      w="100%"
      bg="#ffffff"
      // bgImage="url('/images/Mask.svg')"
      backgroundSize="cover"
      zIndex="999999"
      boxShadow={navTransition && "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)"}
    >
      {navTransition ? (
        <Flex
          as="nav"
          minH={{base: '62', sm: '76', md: '20'}}
          px={{base: '20px', sm: '30px', md: '80px', lg: '116px'}}
          marginX="auto"
          display={['flex', 'flex', 'flex', 'flex', 'flex']}
          wrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <MotionBox
              animate={{y: [-100, 0]}}
              transition={{
                type: 'spring',
                duration: 3,
              }}
            >
              <Link href="/">
                <a>
                  <Logo
                    prefixId="main-menu-logo"
                    display={{base: 'flex'}}
                  ></Logo>
                </a>
              </Link>
            </MotionBox>
          </Box>
          {/* Mobile & Tablet Hambergur Menu */}
          <Box display={{base: 'block', md: 'none'}} onClick={toggle}>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </Box>
          <HStack
            spacing={{base: '10px', lg: '60px'}}
            display={['none', 'none', 'flex', 'flex', 'flex']}
            alignItems="center"
          >
            <HStack spacing={{base: '10px', lg: '60px'}}>
              <MotionBox
                animate={{y: [-100, 0]}}
                transition={{
                  type: 'spring',
                  duration: 2.5,
                }}
              >
                <Link href="/about">
                  <a>About</a>
                </Link>
              </MotionBox>
              <MotionBox
                pr="135"
                animate={{y: [-100, 0]}}
                transition={{
                  type: 'spring',
                  duration: 2,
                }}
              >
                <Link href="/newsletter">
                  <a>Newsletter</a>
                </Link>
              </MotionBox>
            </HStack>
            <HStack spacing="12px">
              <Link href="/login">
                <a>
                  <MotionBox
                    animate={{y: [-200, 0]}}
                    transition={{
                      type: 'spring',
                      duration: 1.2,
                    }}
                  >
                    <Button
                      variant="outline"
                      px="18"
                      py="0"
                      height="34"
                      border="2px solid #fff"
                      display="flex"
                      justifyContent="center"
                    >
                      Login
                    </Button>
                  </MotionBox>
                </a>
              </Link>
              <Link href="/sell">
                <a>
                  <MotionBox
                    animate={{y: [-300, 0]}}
                    transition={{
                      delay: 11110,
                      y: {type: 'spring', stiffness: 13000},
                      default: {duration: 1111000},
                      scale: 0.5,
                    }}
                  >
                    <Button
                      height="34"
                      border="2px solid #fff"
                      px="18"
                      py="18px"
                    >
                      Sell now
                    </Button>
                  </MotionBox>
                </a>
              </Link>
            </HStack>
          </HStack>
        </Flex>
      ) : (
        <Flex
          as="nav"
          minH={{base: '62', sm: '76', md: '92'}}
          px={{base: '20px', sm: '30px', md: '80px', lg: '116px'}}
          marginX="auto"
          display={['flex', 'flex', 'flex', 'flex', 'flex']}
          wrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <MotionBox
              animate={{y: [-100, 0]}}
              transition={{
                type: 'spring',
                duration: 3,
              }}
            >
              <Link href="/">
                <a>
                  <Logo
                    prefixId="main-menu-logo"
                    display={{base: 'flex'}}
                  ></Logo>
                </a>
              </Link>
            </MotionBox>
          </Box>
          {/* Mobile & Tablet Hambergur Menu */}
          <Box display={{base: 'block', md: 'none'}} onClick={toggle}>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </Box>
          <HStack
            spacing={{base: '10px', lg: '60px'}}
            display={['none', 'none', 'flex', 'flex', 'flex']}
            alignItems="center"
          >
            <HStack spacing={{base: '10px', lg: '60px'}}>
              <MotionBox
                animate={{y: [-100, 0]}}
                transition={{
                  type: 'spring',
                  duration: 2.5,
                }}
              >
                <Link href="/about">
                  <a>About</a>
                </Link>
              </MotionBox>
              <MotionBox
                animate={{y: [-100, 0]}}
                transition={{
                  type: 'spring',
                  duration: 2,
                }}
              >
                <Link href="/newsletter">
                  <a>Newsletter</a>
                </Link>
              </MotionBox>
            </HStack>
            <HStack spacing="12px">
              <Link href="/login">
                <a>
                  <MotionBox
                    animate={{y: [-200, 0]}}
                    transition={{
                      type: 'spring',
                      duration: 1.2,
                    }}
                  >
                    <Button variant="outline" px="36px" py="19px">
                      Login
                    </Button>
                  </MotionBox>
                </a>
              </Link>
              <Link href="/sell">
                <a>
                  <MotionBox
                    animate={{y: [-300, 0]}}
                    transition={{
                      delay: 11110,
                      y: {type: 'spring', stiffness: 13000},
                      default: {duration: 1111000},
                      scale: 0.5,
                    }}
                  >
                    <Button px="36px" py="19px">
                      Sell now
                    </Button>
                  </MotionBox>
                </a>
              </Link>
            </HStack>
          </HStack>
        </Flex>
      )}
    </Box>
  );
}
