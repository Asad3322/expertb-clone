import React from "react";
import eventHeaderImg from "./assets/ourevents.jpg";
<assets />

export default function EventHeader() {
  return (
    <div
      className="w-full bg-cover bg-center py-20 mb-12 relative"
      style={{ backgroundImage: `url(${eventHeaderImg})` }}
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-slideInDown">
              Our Events
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
