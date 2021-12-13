import { Box, Flex } from "@chakra-ui/react";
import AppointmentCard from "./AppointmentCard";
import ContactCard from "./ContactCard";
import WorkingCard from "./WorkingCard";

export default () => {
  return (
    <Flex
      position="absolute"
      top="628px"
      justifyContent="space-evenly"
      alignItems="center"
      width="100%"
    >
      <AppointmentCard />
      <WorkingCard />
      <ContactCard />
    </Flex>
  );
};
