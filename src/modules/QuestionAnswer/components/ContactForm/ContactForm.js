import {useContext, useState} from 'react';
import {Box, Button, SimpleGrid, Textarea, Input, Text, Flex, Select} from '@chakra-ui/react';
import useComment from '@root/hooks/useComment';
export default function ContactForm() {

  const {setComment, comment,totalCmt, setTotalCmt} = useComment();

  const [name, setName] = useState('');
  const [question, setQuestion] = useState('')
  const [category, setCategory] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const tempObj = {
      name, question, category
    }
    let temp = [...comment];
    let tempCmt = [...totalCmt];
    tempCmt.push(tempObj);
    temp.push(tempObj)
    setTotalCmt(tempCmt)

    // temp.filter((cmt) => cmt.category === category);
    setComment(temp);
  }

  return (
    <Box width="800px" mx="auto" marginTop="40px">
      <Text fontSize="30px" fontWeight="700" fontFamily="Asap" color="#0A2E72">
        Leave A Comments
      </Text>

      <SimpleGrid columns={2} gap={4} >
        <form onSubmit={onSubmit}>

          <Flex direction="column">
            <Input onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <Input marginTop="10px" placeholder="Email" />
            <Input marginTop="10px" placeholder="Contact Number" />
            <Select onChange={(e) => setCategory(e.target.value)} marginTop="10px">
              <option value='Default'>Select Problem Category</option>
              <option value='Primary Health Care'>Primary Health Care</option>
              <option value='Heart'>Heart</option>
              <option value='Kidney'>Kidney</option>
            </Select>
          </Flex>
          <Box marginTop="10px">
            <Textarea onChange={(e) => setQuestion(e.target.value)} height="128px" placeholder="Leave Reply" size="sm" />
          </Box>

          <Box>

          </Box>
          <Box>
            <Button type='submit' marginTop="20px"
              height="40px"
              width="335px"
              colorScheme="teal"
              bg="#504DE5"
              size="lg">Submit Comment</Button>
          </Box>
        </form>
      </SimpleGrid>


    </Box>
  );
}
