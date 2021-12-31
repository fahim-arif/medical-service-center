import { Box } from "@chakra-ui/react";
import Banner from "../modules/AboutUs/components/Banner"
import Treatment from "../modules/AboutUs/components/Treatment"
import MissionAndVision from "../modules/AboutUs/components/MissionAndVision"
import NeedADoctor from "../modules/AboutUs/components/NeedADoctor"
export default function About(){

    return(
        <Box>
            <Banner></Banner>
            <Treatment></Treatment>
            <MissionAndVision></MissionAndVision>
            <NeedADoctor></NeedADoctor>
        </Box>
    )
}