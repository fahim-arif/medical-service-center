import { Flex } from "@chakra-ui/react";

import Progress from "./Progress";

export default () => {
  return (
    <Flex background="rgba(34, 58, 102, 0.9)" height="202px" width="100%" justifyContent="space-evenly" alignItems="center">
      <Progress data="12k" description="Happy people"/>
      <Progress data="435" description="Surgery Comepleted"/>
      <Progress data="77" description="Expert Doctors"/>
      <Progress data="41k" description="Worldwide Branch"/>
    </Flex>
  );
};
