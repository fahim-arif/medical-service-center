import { Box } from "@chakra-ui/react";
import AppoinmentForm from "../modules/Appoinment/components/AppoinmentForm"
import Layout from '../common/components/elements/Layout'

export default function Appoinment(){
    return(
        <Layout>
            <AppoinmentForm></AppoinmentForm>
        </Layout>
    )
}