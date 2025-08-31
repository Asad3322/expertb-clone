import React from "react";
import { Link } from "react-router-dom";
import course1 from "./assets/course-1.jpg";
import course2 from "./assets/course-2.jpg";
import course3 from "./assets/course-3.jpg";
import course4 from "./assets/course-4.jpg";
import course5 from "./assets/course-5.jpg";
import course6 from "./assets/course-6.jpg";
import course7 from "./assets/course-7.jpg";
import course8 from "./assets/course-8.jpg";
import course9 from "./assets/course-9.jpg";

const courses = [
  { title: "Web Design & Development Course for Beginners", image: course1 },
  { title: "Graphics Design Course for Beginners", image: course2 },
  { title: "Digital Marketing Course for Beginners", image: course3 },
  { title: "E-commerce Development Course for Beginners", image: course4 },
  { title: "Forex Trading Course for Beginners", image: course5 },
  { title: "Amazon Web Services (AWS) Training Course", image: course6 },
  { title: "Search Engine Optimization (S.E.O) Course", image: course7 },
  { title: "Advanced Excel Training Course for Beginners", image: course8 },
  { title: "Advanced Freelancing Training Course", image: course9 },
];

const testimonials = [
  {
    name: "Ali Raza",
    text: "ExpertB changed my career! I started freelancing within two months of completing the course.",
  },
  {
    name: "Sara Khan",
    text: "The instructors were knowledgeable and the support was amazing. Highly recommended!",
  },
  {
    name: "Usman Tariq",
    text: "I loved the real-world projects. They prepared me perfectly for client work.",
  },
];

const CourseGrid = () => {
  return (
    <>
      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-3">
            <h3 className="text-lg font-semibold text-red-600 bg-white inline-block px-3">
              Courses
            </h3>
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Professional Courses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full flex justify-center mb-4">
                    <Link
                      to={`/enroll/${encodeURIComponent(course.title)}`}
                      className="btn btn-sm bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h5 className="text-lg font-medium text-gray-800 mb-4">
                    {course.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-lg font-semibold text-red-600 bg-white inline-block px-3 mb-4">
            Testimonial
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Our Students Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <p className="text-gray-700 italic mb-4">“{testimonial.text}”</p>
                <h5 className="text-md font-semibold text-gray-900">
                  - {testimonial.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseGrid;
