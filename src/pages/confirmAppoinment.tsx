import { Box } from "@chakra-ui/react"
import AppoinmentDate from "../modules/ConfirmAppoinment/components/AppoinmentDate";
import AppoinmentTime from "../modules/ConfirmAppoinment/components/AppoinmentTime"
import Layout from '../common/components/elements/Layout'

export default function ConfirmAppoinment(){
    return(
        <Layout>
            <AppoinmentDate></AppoinmentDate>
            <AppoinmentTime></AppoinmentTime>
        </Layout>
    )
}