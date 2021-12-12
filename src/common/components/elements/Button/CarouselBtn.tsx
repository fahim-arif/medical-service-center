import React from 'react';
import Image from 'next/image';
import {Box} from '@chakra-ui/react';

interface props {
  previous: () => void;
  next: () => void;
}

export default function CarouselBtn({previous, next}: props) {
  return (
    <Box
      display={{base: 'none', lg: 'flex'}}
      border="2px solid #dbdbdb"
      justifyContent="center"
      width="200px"
      borderRadius="60px"
    >
      <Box cursor="pointer">
        <Image
          onClick={previous}
          width="25px"
          height="50px"
          src="/images/icons/Vector (arrow).svg"
          alt=""
        />
      </Box>
      <Box cursor="pointer" pl="25px">
        <Image
          onClick={next}
          width="25px"
          height="50px"
          src="/images/icons/Vector (arrow)-1.svg"
          alt=""
        />
      </Box>
    </Box>
  );
}
