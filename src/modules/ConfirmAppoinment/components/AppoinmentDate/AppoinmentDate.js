import React, {useState} from "react";
import {Box, Text, Flex} from "@chakra-ui/react"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {Calendar} from "react-modern-calendar-datepicker";
const AppoinmentDate = () => {

  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Flex justifyContent="center">
      <Box>
        <Text fontSize="20px" fontFamily="Asap" fontWeight="600">Pick Up A Date</Text>
        <Calendar
          value={selectedDay}
          onChange={setSelectedDay}
          shouldHighlightWeekends
        />
      </Box>
    </Flex>
  );

}


export default AppoinmentDate;