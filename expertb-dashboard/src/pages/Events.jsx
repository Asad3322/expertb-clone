import React from "react";
import Navbar from "../Components/Navbar";
import EventHeader from "../Components/EventHeader";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

// Images
import certImg from "../Components/assets/certification.jpg";
import seminarImg from "../Components/assets/1.jpg";
import functionImg from "../Components/assets/1 (1).jpg";

const Events = () => {
  return (
    <div>
      <Navbar />
      <EventHeader />

      {/* Gallery Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Certification */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <Link to="/certificate">
                <img
                  src={certImg}
                  alt="Certification"
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold">Certification</h5>
              </div>
            </div>

            {/* Seminar */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <Link to="/seminar">
                <img
                  src={seminarImg}
                  alt="Seminar"
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold">Seminar</h5>
              </div>
            </div>

            {/* Events & Functions */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <Link to="/event-function">
                <img
                  src={functionImg}
                  alt="Events & Functions"
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold">Events & Functions</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
