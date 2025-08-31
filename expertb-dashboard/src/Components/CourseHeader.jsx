import React from "react";
import courseHeaderImg from "./assets/coursebg.jpg";

const CourseHeader = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat relative py-20 mb-12"
      style={{
        backgroundImage: `url(${courseHeaderImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white animate__animated animate__slideInDown">
          Courses
        </h1>
      </div>
    </div>
  );
};

export default CourseHeader;
