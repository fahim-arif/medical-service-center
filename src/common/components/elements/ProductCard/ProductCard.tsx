import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Box, Stack, Text, Flex} from '@chakra-ui/react';
import Star from '@public/images/icons/star.svg';

type props = {
  id: string;
  title: string;
  rating: number;
  sold: number;
  image: {url: string};
  categories: {name: string}[];
  price: number;
};

export default function ProductCard({
  id,
  title,
  rating,
  sold,
  image,
  categories,
  price,
}: props) {
  const [open, setOpen] = useState<boolean>(false);

  const handleMouseEnter = (id) => {
    setOpen(true);
  };

  const handleMouseLeave = (id) => {
    setOpen(false);
  };

  return (
    <Box
      borderBottomRightRadius="4"
      borderBottomLeftRadius="10"
      cursor="pointer"
      position="relative"
      margin="auto"
      minW={{base: '290'}}
      minH={{base: '310'}}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
    >
      <Box h="194px">
        <Box position="absolute" top="0" left="0" objectFit="contain">
          <Image
            width="290"
            height="194"
            objectFit="contain"
            src={`http://localhost:1337` + image.url}
            alt="shoe"
          />
        </Box>
      </Box>
      <Box
        position="relative"
        w={{base: '290px'}}
        h={{base: '116px'}}
        bgColor="gray.900"
      >
        <Stack
          fontFamily="Inter"
          color="#fff"
          pt={2}
          maxW="260px"
          marginX="auto"
        >
          <Flex justifyContent="space-between" alignItems="start" color="#fff">
            <Text fontWeight="400">{title}</Text>
            <Flex minW="45px" alignItems="center">
              <Image src={Star} alt="star" />
              <Text pl={2}>{rating}</Text>
            </Flex>
          </Flex>
          <Flex
            minW="260px"
            position="absolute"
            bottom="10px"
            pt={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex alignItems="center">
              <Text fontSize="18px" fontFamily="inter">
                ${price}
              </Text>
              <Text pl={2} fontFamily="inter" fontSize="13px" color="gray.400">
                {sold} sold
              </Text> 
            </Flex>
            <Text fontSize="13px" fontFamily="inter">
              {categories[0].name}
            </Text>
          </Flex>
        </Stack>
        {open && (
          <Link href={`/product/${title}`}>
            <a>
              <Box
                position="absolute"
                top="0"
                bottom="0"
                zIndex="100"
                bg="#fff"
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="500"
              >
                View
              </Box>
            </a>
          </Link>
        )}
      </Box>
    </Box>
  );
}
