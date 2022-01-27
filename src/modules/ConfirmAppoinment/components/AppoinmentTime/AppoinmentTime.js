import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';

import {useDisclosure} from '@chakra-ui/react';
export default function AppoinmentTime({doctor}) {
  const router = useRouter()
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(doctor.visitTime);
  }, [])

  let first = time.split('-')[0]
  let last = time.split('-')[1]
  let firstAM = first.split('AM')
  let duration = 0;
  console.log(firstAM)
  if (firstAM.length === 2) {
    // second half + 12 
    let lastTemp = +last.split('PM')[0] + 12;
    duration = Math.abs(+firstAM[0] - lastTemp)
    console.log(duration)
  } else {

  }

  const onSubmit = () => {
    router.push('/video-call');
    // router.push('/checkout-login')
  }

  return (
    <Box width="60%" mx="auto">
      <Flex justifyContent="center">
        <Box marginTop="30px" width="35%" mx="auto">
          <Text fontWeight="600" fontFamily="Asap" fontSize="20px">
            Select A Time
          </Text>
          <SimpleGrid columns={4} gap={4}>
            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              8.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
              isDisabled
            >
              9.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              10.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              11.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
              isDisabled
            >
              12.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              13.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
              isDisabled
            >
              14.00
            </Button>

            <Button
              height="50px"
              width="80px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg"
            >
              15.00
            </Button>
          </SimpleGrid>


          <Button
            marginTop="40px"
            height="40px"
            width="335px"
            colorScheme="teal"
            bg="#504DE5"
            size="lg"
            onClick={() => onSubmit()}
            // onClick={onOpen}
          >
            Confirm
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Thank you!!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Thank you for the appoinment! Hopefully we can provide a great
                service to you!
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
    </Box>
  );
}
