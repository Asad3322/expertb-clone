import React from "react";
import Navbar from "../Components/Navbar";
import HeroCarousel from "../Components/HeroCarousel";
import AboutSection from "../Components/AboutSection";
import CoursesSection from "../Components/CoursesSection";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <CoursesSection />
      {/* Add more sections here like Testimonials, Contact, etc. */}
      <Footer />
    </div>
  );
}
