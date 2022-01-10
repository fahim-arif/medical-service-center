import React from 'react';
import {Box, Flex, Button, Text} from '@chakra-ui/react';

export default function PrimaryBtn() {
  return (
    <Flex w="100%" justifyContent="center">
      <a style={{width: '45%', display: 'flex', justifyContent: 'center'}}>
        <Button
          fontFamily="inter"
          fontWeight="500"
          fontSize={{base: '16px'}}
          px={{base: '100%', sm: '36px'}}
          py={{base: '19px'}}
          height={{base: '60px'}}
        >
          Sell all products
        </Button>
      </a>
    </Flex>
  );
}
