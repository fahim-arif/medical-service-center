import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"

import mask from "../../../../../public/images/mask.png"
const CoronaImage = () =>{
    return(
        <Flex justifyContent="center" alignItems="center">
            <Box width="480px" height="408px">
                <Image src={mask}>
                </Image>
            </Box>
        </Flex>
    )
}

export default CoronaImage;