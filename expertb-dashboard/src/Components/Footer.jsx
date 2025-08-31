import React from 'react';
import course1 from './assets/course-1.jpg';
import course2 from './assets/course-2.jpg';
import course3 from './assets/course-3.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white pt-10 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Quick Links */}
        <ul className="space-y-2 text-gray-300">
  {[
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Courses", href: "/courses" },
    { label: "Our Team", href: "/team" },
    { label: "Our Events", href: "/events" },
  ].map((link, index) => (
    <motion.li
      key={index}
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a href={link.href} className="transition-colors hover:text-red-500">
        {link.label}
      </a>
    </motion.li>
  ))}
</ul>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-gray-300">
            <motion.p whileTap={{ scale: 0.95 }} className="flex items-center gap-2 cursor-pointer"><FaMapMarkerAlt /> Near Sohna Service Station Kali pul Service Road Kasur</motion.p>
            <motion.p whileTap={{ scale: 0.95 }} className="flex items-center gap-2 cursor-pointer"><FaPhoneAlt /> +92(303)0017672</motion.p>
            <motion.p whileTap={{ scale: 0.95 }} className="flex items-center gap-2 cursor-pointer"><FaPhoneAlt /> +92(309)8896695</motion.p>
            <motion.p whileTap={{ scale: 0.95 }} className="flex items-center gap-2 cursor-pointer"><FaEnvelope /> expertb12345@gmail.com</motion.p>
          </div>
          <div className="flex gap-3 mt-3">
            <a href="https://x.com/novasinctech" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100067608463118" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/expert_b901/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/novasinc-technologies/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {[course1, course2, course3, course2, course3, course1].map((img, idx) => (
              <img key={idx} className="w-full h-auto p-1 bg-white" src={img} alt={`Course ${idx + 1}`} />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-300 mb-4">Subscribe to Our Newsletter for the Latest Updates and Insights</p>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Your email"
              className="w-full py-3 pl-4 pr-28 rounded-lg text-black"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              SignUp
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-sm text-gray-400 text-center sm:flex sm:justify-between sm:text-left px-6 max-w-screen-xl mx-auto">
        <p>
          © <a className="text-white underline" href="https://expertb.org" target="_blank" rel="noopener noreferrer">ExpertB Computers</a>, All Right Reserved.
        </p>
        <div className="space-x-4 mt-2 sm:mt-0">
          {['/', '/about', '/courses', '/contact'].map((path, i) => (
            <a key={i} href={path} className="hover:underline cursor-pointer">
              {path === '/' ? 'Home' : path.replace('/', '').replace(/^\w/, c => c.toUpperCase())}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
