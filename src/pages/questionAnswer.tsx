import { Box } from "@chakra-ui/react";
import Banner from "../modules/QuestionAnswer/components/Banner"
import Post from "../modules/QuestionAnswer/components/Post"
import Comment from "../modules/QuestionAnswer/components/Comment"
import ContactForm from "../modules/QuestionAnswer/components/ContactForm"
import Layout from '../common/components/elements/Layout'
export default function QuestionAnswer(){
    return(
        <Layout>
            <Banner></Banner>
            <Post></Post>
            <Comment></Comment>
            <ContactForm></ContactForm>
        </Layout>
    )
}