import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CourseHeader from "../Components/CourseHeader";
import CourseGrid from "../Components/CourseGrid";
import EnrollNow from "../pages/EnrollNow";

const Courses = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleJoinClick = (courseId) => {
    setSelectedCourse(courseId);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedCourse("");
  };

  return (
    <div className="bg-white">
      <Navbar />
      <CourseHeader />
      
      {/* Pass the join handler and selected course info to CourseGrid */}
      <CourseGrid onJoinClick={handleJoinClick} />

      {/* Enrollment form modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded shadow-lg w-full max-w-3xl p-6 relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
              aria-label="Close enrollment form"
            >
              &times;
            </button>

            <EnrollNow preselectedCourse={selectedCourse} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Courses;
