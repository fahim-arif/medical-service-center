import { Box } from "@chakra-ui/react";
import Banner from "../modules/QuestionAnswer/components/Banner"
import Post from "../modules/QuestionAnswer/components/Post"
import Comment from "../modules/QuestionAnswer/components/Comment"
import ContactForm from "../modules/QuestionAnswer/components/ContactForm"
export default function QuestionAnswer(){
    return(
        <Box>
            <Banner></Banner>
            <Post></Post>
            <Comment></Comment>
            <ContactForm></ContactForm>
        </Box>
    )
}