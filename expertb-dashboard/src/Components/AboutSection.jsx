import React from "react";
import image from './assets/front.jpg'; // Your local image

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="w-full h-full">
          <img
            src={image}
            alt="Classroom"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h4 className="text-red-500 font-semibold uppercase mb-2">About Us</h4>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-red-600">ExpertB</span>
          </h2>
          <p className="text-gray-600 mb-4">
            We believe in the power of collaboration to drive innovation. As your
            trusted partner, we're committed to turning your visionary ideas into reality.
          </p>
          <p className="text-gray-600 mb-6">
            We provide specialized educational institution offering a diverse range of concise
            and focused courses. These courses are designed to provide targeted knowledge and skills
            in a short span of time.
          </p>

          <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-6">
            {[
              "Skilled Instructors",
              "Online Classes",
              "Best Quality Education",
              "Trusted Professionals",
              "Serve the Best",
              "International Certificate"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-red-500 font-bold">→</span> {item}
              </li>
            ))}
          </ul>

          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
