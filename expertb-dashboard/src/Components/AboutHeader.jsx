import React from "react";
import aboutBg from "./assets/aboutus.jpg"; // Replace with your correct path

export default function AboutHeader() {
  return (
    <div
      className="w-full py-20 mb-12 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Dark Gray Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-white text-5xl md:text-6xl font-bold animate-slide-in-down">
              About
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
