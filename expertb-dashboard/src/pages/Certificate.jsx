import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Import all certificate images
import cert1 from "../Components/assets/certificates/3.jpg";
import cert2 from "../Components/assets/certificates/certification.jpg";
import cert3 from "../Components/assets/certificates/1.jpg";
import cert4 from "../Components/assets/certificates/2.jpg";
import cert5 from "../Components/assets/certificates/4.jpg";
import cert6 from "../Components/assets/certificates/5.jpg";
import cert7 from "../Components/assets/certificates/6.jpg";
import cert8 from "../Components/assets/certificates/7.jpg";
import cert9 from "../Components/assets/certificates/8.jpg";
import cert10 from "../Components/assets/certificates/9.jpg";
import cert11 from "../Components/assets/certificates/10.jpg"; 
import cert12 from "../Components/assets/certificates/11.jpg";
import cert13 from "../Components/assets/certificates/12.jpg"; 
import cert14 from "../Components/assets/certificates/13.jpg";
import cert15 from "../Components/assets/certificates/14.jpg";

const Certificate = () => {
  const images = [
    cert1, cert2, cert3, cert4, cert5,
    cert6, cert7, cert8, cert9, cert10,
    cert11, cert12, cert13, cert14, cert15
  ];

  return (
    <div>
      <Navbar />

      <section className="py-[50px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            CERTIFICATES
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <div key={index} className="w-full">
                <img
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="rounded-xl w-full h-[300px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificate;
