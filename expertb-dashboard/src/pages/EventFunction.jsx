import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Import all 12 event/function images
import img1 from "../Components/assets/1 (1).jpg";
import img2 from "../Components/assets/2 (1).jpg";
import img3 from "../Components/assets/3.jpg";
import img4 from "../Components/assets/4.jpg";
import img5 from "../Components/assets/5.jpg";
import img6 from "../Components/assets/6.jpg";
import img7 from "../Components/assets/7.jpg";
import img8 from "../Components/assets/8.jpg";
import img9 from "../Components/assets/9.jpg";
import img10 from "../Components/assets/10.jpg";
import img11 from "../Components/assets/11.jpg";
import img12 from "../Components/assets/12.jpg";

const EventFunction = () => {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12
  ];

  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Events & Functions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={src}
                  alt={`Function ${index + 1}`}
                  className="w-full h-[300px] object-cover cursor-pointer transform hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventFunction;
