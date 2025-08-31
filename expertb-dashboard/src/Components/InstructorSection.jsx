import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import abidImage from "./assets/abid.jpg";
import yasirImage from "./assets/yasir.jpg";
import usmanImage from "./assets/usman.jpg";
import adeelImage from "./assets/adeel.jpg";
import haiqaImage from "./assets/haiqa.jpg";

const instructors = [
  {
    name: "Abid Rafique",
    title: "CEO & Founder",
    image: abidImage,
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Yasir Mahmood",
    title: "Web Developer",
    image: yasirImage,
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Usman Asghar",
    title: "Python Expert",
    image: usmanImage,
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Adeel Ahmad",
    title: "Web Developer",
    image: adeelImage,
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Haiqa Abbass",
    title: "Forex Trader",
    image: haiqaImage,
    socials: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

export default function InstructorSection() {
  return (
    <div className="bg-white py-16 px-4">
      {/* ✅ Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Expert Instructors
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Meet our professional team of skilled mentors
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {instructors.map((inst, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <img
              src={inst.image}
              alt={inst.name}
              className="w-full h-72 object-cover"
            />

            {/* Name & Title */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{inst.name}</h3>
              <p className="text-sm font-semibold text-gray-600 mt-1">
                {inst.title}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 pb-4">
              <a
                href={inst.socials.facebook}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={inst.socials.linkedin}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={inst.socials.instagram}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
