import React from "react";
import contactBg from "./assets/contacts.jpg";

const ContactHeader = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 md:py-28"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold animate-slideInDown">
          Contact
        </h1>
      </div>
    </div>
  );
};

export default ContactHeader;
