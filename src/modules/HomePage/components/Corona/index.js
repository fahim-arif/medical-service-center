import CoronaText from "./CoronaText"
import CoronaImage from "./CoronaImage"
import { Flex, SimpleGrid } from "@chakra-ui/react"

export default () => {
    return(
        <Flex 
        justifyContent="space-evenly"
        alignItems="center"
        height="645px">
            <CoronaText></CoronaText>
            <CoronaImage></CoronaImage>
        </Flex>
    )
}