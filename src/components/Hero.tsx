import React from "react";
import { motion } from "framer-motion";
import heroBackground from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Background Stars with floating animation */}
     

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/90" />
 <div className="absolute inset-0 z-20">
        <div className="stars animate-twinkle"></div>
        <div className="stars2 animate-twinkle"></div>
        <div className="stars3 animate-twinkle"></div>
        <div className="stars4 animate-twinkle"></div>
        <div className="stars5 animate-twinkle"></div>
      </div>
      {/* Content */}
      <motion.div
        className="relative z-10 p-6 sm:p-10 md:p-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="font-sans text-xl sm:text-2xl font-bold uppercase tracking-widest text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-[#009494]">YUREKH</span> FOR SOFTWARE DEVELOPMENT
          </motion.p>

          <motion.p
            className="mt-6 sm:mt-8 text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Empowering Businesses with <br className="hidden sm:block" />
            <span className="text-[#00dada]">Innovative Technology</span> &{" "}
            <span className="">Creative Strategies</span>
          </motion.p>

          <motion.p
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Guiding businesses on a valuable journey toward success through
            impactful marketing, technology, and creative strategies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 sm:mt-12 flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <button className="w-full rounded-full border-2 border-[#009494] px-8 py-3 font-semibold text-white transition-all duration-300 bg-transparent hover:bg-[#009494] sm:w-auto hover:scale-105">
              Discover More
            </button>
            <button className="w-full rounded-full border-2 border-gray-700 px-8 py-3 font-medium text-gray-200 transition-all duration-300 bg-transparent hover:bg-gray-800 sm:w-auto hover:scale-105">
              Watch Demo &rarr;
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Arc Glow Effect */}
      <motion.div
        className="absolute bottom-0 w-full h-[500px] bg-gradient-to-t from-cyan-500/40 to-transparent blur-2xl"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {/* Main arc shape */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-48 rounded-t-full border-2 border-cyan-400/30 bg-gradient-to-t from-cyan-500/20 via-cyan-400/10 to-transparent"></div>

        {/* Outer glow rings */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-60 rounded-t-full border border-cyan-300/20 bg-gradient-to-t from-cyan-500/15 via-cyan-400/5 to-transparent"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-72 rounded-t-full border border-cyan-200/10 bg-gradient-to-t from-cyan-500/10 via-cyan-400/3 to-transparent"></div>

        {/* Inner bright core */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-40 rounded-t-full bg-[#009494] blur-sm"></div>

        {/* Intense center glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 rounded-t-full bg-[#009494] blur-md"></div>

        {/* Sharp center line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-44 rounded-t-full bg-[#009494] blur-lg"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
