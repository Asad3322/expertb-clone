import React from "react";
import { FaGraduationCap, FaGlobe, FaHome, FaBookOpen } from "react-icons/fa";

export default function AboutFeatures() {
  return (
    <div className="py-14 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaGraduationCap className="text-5xl mb-5 mx-auto" />,
            title: "Skilled Instructors",
            text: "Our team of skilled instructors brings a wealth of knowledge and experience to the table. Each instructor is a master in their field, dedicated to empowering you with the skills and insights needed to succeed.",
          },
          {
            icon: <FaGlobe className="text-5xl mb-5 mx-auto" />,
            title: "Hands-On Training",
            text: "At ExpertB, we believe in learning by doing. Our instructors provide hands-on training, guiding you through practical exercises and real-world projects to help you build a strong portfolio and gain practical experience.",
          },
          {
            icon: <FaHome className="text-5xl mb-5 mx-auto" />,
            title: "Ongoing Support",
            text: "Our instructors are committed to your long-term success, offering ongoing support, answering questions, and providing resources to help you continue growing even after the course ends.",
          },
          {
            icon: <FaBookOpen className="text-5xl mb-5 mx-auto" />,
            title: "Personalized Learning",
            text: "We understand that every student has unique learning needs. Our skilled instructors offer personalized guidance and mentorship, tailoring lessons to your pace and style of learning for maximum impact.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="relative group overflow-hidden bg-sky-100 text-center p-8 rounded-xl shadow-xl min-h-[370px] transition-all duration-300 hover:scale-105"
          >
            {/* Red overlay layer from bottom on hover */}
            <div className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>

            <div className="relative z-10">
              <div className="text-red-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h5 className="text-2xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h5>
              <p className="text-gray-700 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
