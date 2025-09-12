import React from "react";
import { motion } from "framer-motion";
import heroBackground from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/70" />

      {/* Star Animation Layer */}
      <div className="absolute inset-0 z-10">
        <div className="stars animate-twinkle"></div>
        <div className="stars2 animate-twinkle"></div>
        <div className="stars3 animate-twinkle"></div>
      </div>
 <div className="absolute inset-0 z-10">
        <div className="stars animate-twinkle"></div>
        <div className="stars2 animate-twinkle"></div>
        <div className="stars3 animate-twinkle"></div>
      </div>
      {/* Content */}
    <motion.div
  className="relative z-20 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto md:mt-20"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  <motion.p
    className="font-sans text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest text-gray-300"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <span className="text-[#009494]">YUREKH</span> FOR SOFTWARE DEVELOPMENT
  </motion.p>

  <motion.h1
    className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    Empowering Businesses with{" "}
    <span className="text-[#00dada]">Innovative Technology</span> &{" "}
    <span className="text-white">Creative Strategies</span>
  </motion.h1>

  <motion.p
    className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-gray-40"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
    Guiding businesses on a valuable journey toward success through
    impactful marketing, technology, and creative strategies.
  </motion.p>

  {/* Buttons */}
<motion.div
  className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.3 }}
>
  <button className="w-[300px] sm:w-auto rounded-full border-2 border-[#009494] px-6 py-3 font-semibold text-white transition-all duration-300 bg-transparent hover:bg-[#009494] hover:scale-105">
    Discover More
  </button>
                 
  <button className="w-[300px] sm:w-auto px-6 py-3 rounded-full border border-gray-300 bg-[#022328] text-white hover:bg-transparent hover:text-[#4ae0e0] transition-colors duration-300">
    Watch Demo →
  </button>
</motion.div>


</motion.div>

      {/* Arc Glow Effect (smaller height to avoid huge spacing) */}
      <motion.div
        className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-cyan-500/30 to-transparent blur-2xl"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-36 rounded-t-full border-2 border-cyan-400/30 bg-gradient-to-t from-cyan-500/20 via-cyan-400/10 to-transparent"></div>
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-t-full border border-cyan-300/20 bg-gradient-to-t from-cyan-500/15 via-cyan-400/5 to-transparent"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-t-full bg-[#009494] blur-md"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
