import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactHeader from "../Components/ContactHeader";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHeader />

      {/* Section Heading */}
      <div
        className="text-center animate-fadeInUp mt-12"
        style={{ animationDelay: "0.1s" }}
      >
        <h6 className="section-title bg-white text-center text-red-500 px-3 inline-block font-semibold">
          Contact Us
        </h6>
        <h1 className="mb-5 text-3xl md:text-4xl font-bold text-gray-800">
          Contact For Any Query
        </h1>
      </div>

      {/* Three-column layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-4 md:px-8 py-12">
        
        {/* Left - Contact Info */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
          <h5 className="text-xl font-semibold mb-4">Get In Touch</h5>
          <p className="mb-6 text-gray-600">
            We're here to assist you with any questions or concerns you may
            have. Whether you're looking for more information about our
            services, need technical support, or want to explore partnership
            opportunities, we're just a message away.
          </p>

          {/* Office */}
          <div className="flex items-center mb-5">
            <div className="flex items-center justify-center bg-red-500 w-[50px] h-[50px] rounded">
              <FaMapMarkerAlt className="text-white text-lg" />
            </div>
            <div className="ml-3">
              <h5 className="text-red-500 font-semibold">Office</h5>
              <p className="mb-0 text-gray-700">
                Near Sohna Service Station Kali Pul Service Road Kasur
              </p>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center mb-5">
            <div className="flex items-center justify-center bg-red-500 w-[50px] h-[65px] rounded">
              <FaPhoneAlt className="text-white text-lg" />
            </div>
            <div className="ml-3">
              <h5 className="text-red-500 font-semibold">Mobile</h5>
              <p className="mb-0 text-gray-700">+92 (303) 0017672</p>
              <p className="mb-0 text-gray-700">+92 (309) 8896695</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <div className="flex items-center justify-center bg-red-500 w-[50px] h-[50px] rounded">
              <FaEnvelopeOpen className="text-white text-lg" />
            </div>
            <div className="ml-3">
              <h5 className="text-red-500 font-semibold">Email</h5>
              <p className="mb-0 text-gray-700">expertb12345@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Middle - Map */}
        <div className="w-full h-80 md:h-auto">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.111346934702!2d74.46244271507517!3d31.11625898145364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190547de3f5e51%3A0x5e1b35f94809253a!2sNear%20Sohna%20Service%20Station%20Kali%20Pul%20Service%20Road%20Kasur!5e0!3m2!1sen!2s!4v1691588096425!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right - Contact Form */}
        <form className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Your Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer block w-full rounded-lg border border-gray-300 px-3 pt-5 pb-2 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-2 text-gray-500 text-sm transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500"
              >
                Your Name
              </label>
            </div>

            {/* Your Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer block w-full rounded-lg border border-gray-300 px-3 pt-5 pb-2 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2 text-gray-500 text-sm transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500"
              >
                Your Email
              </label>
            </div>

            {/* Subject */}
            <div className="relative">
              <input
                type="text"
                id="subject"
                placeholder=" "
                className="peer block w-full rounded-lg border border-gray-300 px-3 pt-5 pb-2 text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              />
              <label
                htmlFor="subject"
                className="absolute left-3 top-2 text-gray-500 text-sm transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500"
              >
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                placeholder=" "
                rows="5"
                className="peer block w-full rounded-lg border border-gray-300 px-3 pt-5 pb-2 text-gray-900 resize-none focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-2 text-gray-500 text-sm transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500"
              >
                Message
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-red-500 text-white rounded-lg py-3 text-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
