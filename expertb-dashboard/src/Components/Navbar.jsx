import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const baseLinkStyle =
    "relative font-medium transition duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] " +
    "after:bg-[#ED1C24] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-10 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="ExpertB Logo"
            className="h-[8vh] w-[100px] object-contain"
          />
        </NavLink>

        {/* Hamburger menu */}
        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Event
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLinkStyle} ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/enroll"
            className="bg-[#ED1C24] hover:bg-red-700 text-white py-2 px-6 rounded-md transition duration-300 flex items-center"
          >
            Enroll Now <FaArrowRight className="ml-2" />
          </NavLink>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3 bg-white">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block font-medium ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block font-medium ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block font-medium ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/team"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block font-medium ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Our Team
          </NavLink>
          <NavLink
            to="/events"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block font-medium ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Event
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block font-medium ${
                isActive ? "text-[#ED1C24]" : "text-black"
              } hover:text-[#ED1C24]`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/enroll"
            onClick={closeMenu}
            className="block bg-[#ED1C24] hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-300 text-center"
          >
            Enroll Now <FaArrowRight className="inline ml-1" />
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
