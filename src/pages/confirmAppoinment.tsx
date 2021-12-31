import { Box } from "@chakra-ui/react"
import AppoinmentDate from "../modules/ConfirmAppoinment/components/AppoinmentDate";
import AppoinmentTime from "../modules/ConfirmAppoinment/components/AppoinmentTime"
export default function ConfirmAppoinment(){
    return(
        <Box>
            <AppoinmentDate></AppoinmentDate>
            <AppoinmentTime></AppoinmentTime>
        </Box>
    )
}