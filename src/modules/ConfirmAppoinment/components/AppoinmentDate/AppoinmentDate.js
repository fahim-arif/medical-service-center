import React, { useState } from "react";
import {Box, Text} from "@chakra-ui/react"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
const AppoinmentDate  = () => {
   
    const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Box width="80" mx="auto">
        <Box width="60%" mx="auto">
            <Text fontSize="20px" fontFamily="Asap" fontWeight="600">Pick Up A Date</Text>
        <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
    </Box>
    </Box>
  );
      
}


export default AppoinmentDate;