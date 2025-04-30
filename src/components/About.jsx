import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../assets/hero-image.png";
import Img2 from "../assets/hero-image.png";
import Img3 from "../assets/hero-image.png";

const images = [Img1, Img2, Img3];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  const handleNext = () => setIndex(nextIndex);
  const handlePrev = () => setIndex(prevIndex);

  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Card Stack */}
        <div className="relative w-[280px] h-[280px] shrink-0">
          {/* Previous Image - Left Peek */}
          <motion.img
            src={images[prevIndex]}
            alt="Previous"
            className="absolute top-4 left-[-30px] w-full h-full object-cover rounded-xl shadow-md z-0 scale-90 rotate-[-4deg]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 0.6, x: -20 }}
            transition={{ duration: 0.4 }}
          />

          {/* Next Image - Right Peek */}
          <motion.img
            src={images[nextIndex]}
            alt="Next"
            className="absolute top-4 left-[30px] w-full h-full object-cover rounded-xl shadow-md z-0 scale-90 rotate-[4deg]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 0.6, x: 20 }}
            transition={{ duration: 0.4 }}
          />

          {/* Active Image - Center */}
          <motion.img
            key={index}
            src={images[index]}
            alt="Laura Anggreini"
            className="relative z-10 w-full h-full object-cover rounded-xl shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Static Text */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-1">Laura Anggreini</h3>
          <p className="text-sm text-gray-500 mb-4">a Data Analyst</p>
          <p className="text-lg text-gray-700">
          I am Laura Anggreini, an aspiring Data Analyst with a deep passion for learning and continuous growth in the field of data analysis. 
          With a strong commitment to developing my skills, 
          I aim to contribute valuable data-driven insights that support informed decision-making and drive business success.
          </p>

          {/* Navigation Arrows */}
          <div className="mt-8 flex space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;