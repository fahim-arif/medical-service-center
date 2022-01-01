import {Box, Button, SimpleGrid, Textarea, Input, Text, Flex} from '@chakra-ui/react';
export default function ContactForm() {
  return (
    <Box width="800px" mx="auto" marginTop="40px">
      <Text fontSize="30px" fontWeight="700" fontFamily="Asap" color="#0A2E72">
        Leave A Comments
      </Text>

      <SimpleGrid columns={2} gap={4} >
        <Flex direction="column">
          <Input placeholder="Name" />
          <Input marginTop="5px" placeholder="Email" />
          <Input marginTop="5px" placeholder="Contact Number" />
        </Flex>
        <Box>
          <Textarea height="128px" placeholder="Leave Reply" size="sm" />
        </Box>

        <Box>

        </Box>
        <Box>
            <Button marginTop="20px"
            height="40px"
            width="335px"
            colorScheme="teal"
            bg="#504DE5"
            size="lg">Submit Comment</Button>
        </Box>
      </SimpleGrid>

      
    </Box>
  );
}
