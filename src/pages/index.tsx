import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../modules/HomePage/components/Header";
import NavBar from "../modules/HomePage/components/NavBar";
import DoctorPicture from "../modules/HomePage/components/DoctorPicture";
import AppointmentSection from "../modules/HomePage/components/AppointmentSection";
import FindDoctor from "../modules/HomePage/components/FindDoctor";
import ProgressBar from "../modules/HomePage/components/ProgressBar";
import MeetSpecialist from "../modules/HomePage/components/MeetSpecialist";
import Corona from "../modules/HomePage/components/Corona"
import BestSeller from "../modules/HomePage/components/BestSeller"
import Emergency from "../modules/HomePage/components/Emergency"
import PatientReview from "../modules/HomePage/components/PaitentReview"
import Partner from "../modules/HomePage/components/Partner"



export default function Home() {
  return (
    <Box>
      <Head>
        <title> Cuet Medical</title>
      </Head>
      <Header />
      <NavBar />
      <DoctorPicture />
      <AppointmentSection />
      <FindDoctor />
      <ProgressBar />
      <MeetSpecialist />
      <Corona />
      <BestSeller />
      <Emergency />
      <PatientReview />
      <Partner />
     
      
    </Box>
  );
}
