import React from "react";
import teamHeaderImage from "./assets/teams.jpg"

const TeamHeader = () => {
  return (
    <div
      className="w-full bg-primary py-16 mb-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${teamHeaderImage})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold animate-slideInDown">
              Our Team
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
