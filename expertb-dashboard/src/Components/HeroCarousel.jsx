import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from './assets/homebg.jpg';
import img2 from './assets/homebg1.jpg';
import img3 from './assets/certification.jpg';
import img4 from './assets/certificates/11.jpg'; // Make sure this exists

const slides = [
  {
    title: "Learn from Industry Experts",
    subtitle: "Welcome to ExpertB",
    text: "Our experienced instructors provide hands-on training with real-world projects. Gain the knowledge and skills needed to excel in the rapidly evolving tech industry. Enroll now and be job-ready.",
    img: img1,
  },
  {
    title: "Transform Your Passion Into a Profession",
    subtitle: "Professional Courses",
    text: "Turn your love for technology into a rewarding career. Our comprehensive courses cover everything from basic computer skills to advanced programming and IT certifications. Start your professional journey with us!",
    img: img2,
  },
  {
    title: "Certificates Make a Difference",
    subtitle: "Accredited Certification",
    text: "Boost your career with certifications that are recognized by employers worldwide. Our accredited courses provide you with the credentials needed to stand out in the job market. Get certified and get noticed!",
    img: img3,
  },
  {
    title: "Connect, Learn, and Grow with Our Community",
    subtitle: "Join ExpertB Now",
    text: "Join a vibrant community of learners, tech enthusiasts, and professionals. Network, collaborate, and grow together. Our academy provides a supportive environment for you to thrive and achieve your goals.",
    img: img4 || img1,
  },
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, text, img } = slides[index];

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${img})` }}
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(24,29,56,0.7)] z-10 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl text-left text-white">

            <motion.h5
              key={`subtitle-${index}`}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-red-500 text-sm md:text-base uppercase mb-3"
            >
              {subtitle}
            </motion.h5>

            <motion.h1
              key={`title-${index}`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              {title}
            </motion.h1>

            <motion.p
              key={`text-${index}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-lg md:text-xl mb-6 leading-relaxed"
            >
              {text}
            </motion.p>

            <motion.div
              key={`buttons-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md font-medium"
              >
                Read More
              </motion.a>
              <motion.a
                href="/registration"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-6 py-3 rounded-md shadow-md font-medium"
              >
                Enroll Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
