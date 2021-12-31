import {Box, Flex, Text, Grid, GridItem} from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../../../../public/images/logo_new.png';
const Footer = () => {
  return (
    <Box marginTop="100px">
      <Grid h="200px" templateColumns="repeat(7, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Box width="60%" mx="auto">
            <Box width="188px" height="48px">
              <Image src={logo} ></Image>
            </Box>
            <Text marginTop="35px">
              Tempora dolorem voluptatum nam vero assumenda voluptate, facilis
              ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
            <Box>
                <Text fontWeight="600" fontSize="18px" fontFamily="Asap" marginBottom="30px">Departments</Text>
                <Text>Surgery</Text>
                <Text>Women's Health</Text>
                <Text>Radiology</Text>
                <Text>Cardiology</Text>
                <Text>Medicine</Text>
            </Box>
        </GridItem>
        <GridItem colSpan={1}>
            <Box>
                <Text fontWeight="600" fontSize="18px" fontFamily="Asap" marginBottom="30px">Services</Text>
                <Text>Surgery</Text>
                <Text>Women's Health</Text>
                <Text>Radiology</Text>
                <Text>Cardiology</Text>
                <Text>Medicine</Text>
            </Box>
        </GridItem>
        <GridItem colSpan={1}>
            <Box>
                <Text fontWeight="600" fontSize="18px" fontFamily="Asap" marginBottom="30px">Useful Links</Text>
                <Text>Surgery</Text>
                <Text>Women's Health</Text>
                <Text>Radiology</Text>
                <Text>Cardiology</Text>
                <Text>Medicine</Text>
            </Box>
        </GridItem>
        <GridItem colSpan={2}>
            <Box>
                <Text fontWeight="600" fontSize="18px" fontFamily="Asap" >Get In Touch</Text>
                <Text marginY="14px">Support Available 24/7</Text>
                <Text fontWeight="600" fontSize="20px" fontFamily="Asap">Support@email.com</Text>
                <Text marginY="14px">Mon to Fri : 08:30 - 18:00</Text>
                <Text fontWeight="600" fontSize="18px" fontFamily="Asap">Mon to Fri : 08:30 - 18:00</Text>
            </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
