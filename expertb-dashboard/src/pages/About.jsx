import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutHeader from "../Components/AboutHeader";
import AboutFeatures from "../Components/AboutFeatures";
import AboutSection from "../Components/AboutSection";
import InstructorSection from "../Components/InstructorSection";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutFeatures />
      <AboutSection />
      <InstructorSection/>
      <Footer />
    </div>
  );
}
