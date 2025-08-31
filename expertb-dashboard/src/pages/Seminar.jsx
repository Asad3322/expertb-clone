import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Import all 32 seminar images
import img1 from "../Components/assets/1.jpg";
import img2 from "../Components/assets/39.jpg";
import img3 from "../Components/assets/38.jpg";
import img4 from "../Components/assets/2.jpg";
import img5 from "../Components/assets/3 (1).jpg";
import img6 from "../Components/assets/4 (1).jpg";
import img7 from "../Components/assets/5 (1).jpg";
import img8 from "../Components/assets/6 (1).jpg";
import img9 from "../Components/assets/16.jpg";
import img10 from "../Components/assets/17.jpg";
import img11 from "../Components/assets/18.jpg";
import img12 from "../Components/assets/19.jpg";
import img13 from "../Components/assets/20.jpg";
import img14 from "../Components/assets/21.jpg";
import img15 from "../Components/assets/25.jpg";
import img16 from "../Components/assets/28.jpg";
import img17 from "../Components/assets/30.jpg";
import img18 from "../Components/assets/31.jpg";
import img19 from "../Components/assets/32.jpg";
import img20 from "../Components/assets/33.jpg";
import img21 from "../Components/assets/34.jpg";
import img22 from "../Components/assets/35.jpg";
import img23 from "../Components/assets/36.jpg";
import img24 from "../Components/assets/7 (1).jpg";
import img25 from "../Components/assets/8 (1).jpg";
import img26 from "../Components/assets/9 (1).jpg";
import img27 from "../Components/assets/10 (1).jpg";
import img28 from "../Components/assets/11 (1).jpg";
import img29 from "../Components/assets/12 (1).jpg";
import img30 from "../Components/assets/13.jpg";
import img31 from "../Components/assets/14 (1).jpg";
import img32 from "../Components/assets/15 (1).jpg";

const Seminar = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16,
    img17, img18, img19, img20, img21, img22, img23, img24,
    img25, img26, img27, img28, img29, img30, img31, img32,
  ];

  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          SEMINARS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={src}
                alt={`Seminar ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Seminar;
