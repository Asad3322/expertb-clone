import React from "react";
import { motion } from "framer-motion";
import course1 from "./assets/course-1.jpg";
import course2 from "./assets/course-2.jpg";
import course3 from "./assets/course-3.jpg";
import course4 from "./assets/course-4.jpg";
import course5 from "./assets/course-5.jpg";
import course6 from "./assets/course-6.jpg";
import course7 from "./assets/course-7.jpg";
import course8 from "./assets/course-8.jpg";
import course9 from "./assets/course-9.jpg";

// Course Data
const courses = [
  { title: "Web Design & Development Course for Beginners", image: course1 },
  { title: "Graphics Design Course for Beginners", image: course2 },
  { title: "Digital Marketing Course for Beginners", image: course3 },
  { title: "E-commerce Development Course for Beginners", image: course4 },
  { title: "Forex Trading Course for Beginners", image: course5 },
  { title: "Amazon Web Services (AWS) Training Course", image: course6 },
  { title: "Search Engine Optimization (SEO) Course", image: course7 },
  { title: "Advanced Excel Training Course for Beginners", image: course8 },
  { title: "Advanced Freelancing Training Course", image: course9 },
];

const CoursesSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h6
          className="text-red-600 px-3 inline-block bg-white text-base font-semibold uppercase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Courses
        </motion.h6>
        <motion.h1
          className="text-3xl md:text-4xl font-bold mt-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Popular Courses
        </motion.h1>
      </div>

      {/* Courses Grid */}
      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="relative group">
              <img
                loading="lazy"
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <a
                  href="/registration"
                  className="bg-red-600 text-white text-sm px-4 py-2 rounded-full hover:bg-red-700 transition"
                  aria-label={`Join ${course.title}`}
                >
                  Join Now
                </a>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            </div>
            <div className="text-center px-4 py-6">
              <h5 className="text-lg font-semibold">{course.title}</h5>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoursesSection;
