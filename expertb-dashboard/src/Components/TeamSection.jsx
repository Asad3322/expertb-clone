// TeamSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Instructor Images
import abidImage from "./assets/abid.jpg";
import yasirImage from "./assets/yasir.jpg";
import usmanImage from "./assets/usman.jpg";
import adeelImage from "./assets/adeel.jpg";
import haiqaImage from "./assets/haiqa.jpg";

// Header Component
const TeamSectionHeader = () => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h4 className="text-3xl text-red-500 font-bold uppercase">Instructors</h4>
      <h1 className="text-5xl font-bold mt-2">Expert Instructors</h1>
    </motion.div>
  );
};

// Main Team Section Component
export default function TeamSection() {
  const instructors = [
    {
      name: "Abid Rafique",
      title: "CEO & Founder",
      image: abidImage,
    },
    {
      name: "Yasir Mahmood",
      title: "Web Developer",
      image: yasirImage,
    },
    {
      name: "Usman Asghar",
      title: "Python Expert",
      image: usmanImage,
    },
    {
      name: "Adeel Ahmad",
      title: "Web Developer",
      image: adeelImage,
    },
    {
      name: "Haiqa Abbass",
      title: "Forex Trader",
      image: haiqaImage,
    },
  ];

  return (
    <div className="bg-white py-20 px-4">
      <TeamSectionHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {instructors.map((instructor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{instructor.name}</h3>
              <p className="text-sm font-semibold text-gray-600 mt-1">
                {instructor.title}
              </p>
            </div>
            <div className="flex justify-center gap-4 pb-4">
              <button
                type="button"
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </button>
              <button
                type="button"
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </button>
              <button
                type="button"
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
