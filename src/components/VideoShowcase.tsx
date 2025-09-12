


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, ArrowRight } from "lucide-react";

const VideoShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const videos = [
    {
      id: 1,
      title: "AI-Powered Marketing Automation",
      description: "See how our AI transforms marketing campaigns for maximum ROI",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "AI Marketing"
    },
    {
      id: 2,
      title: "Digital Transformation Success Story",
      description: "Complete digital overhaul delivering 300% growth",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Case Study"
    },
    {
      id: 3,
      title: "Advanced Analytics Dashboard",
      description: "Real-time insights that drive business decisions",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      category: "Analytics"
    },

  ];

  const openModal = (videoUrl) => {
    setActiveVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveVideo("");
  };

  return (
    <section className="min-h-screen bg-gradient-space py-20 lg:py-32 relative overflow-hidden text-[#009494] font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="stars animate-twinkle opacity-20"></div>
        <div className="stars2 animate-twinkle opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="bg-white/10 backdrop-blur-md inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-8 rounded-full border border-white/20">
            <span className="text-primary font-bold text-base sm:text-lg">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 sm:mb-6 leading-tight">
            See Our Work in Action
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Discover how we've transformed businesses with cutting-edge AI solutions and digital strategies
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div
                className="bg-white/10 backdrop-blur-md border border-white/20 relative overflow-hidden cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary"
                onClick={() => openModal(video.videoUrl)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover video-hover transition-transform duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center group-hover:bg-primary/30 border border-white/30"
                    >
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="text-primary text-xs sm:text-sm font-medium">{video.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {video.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
                    {video.description}
                  </p>
                  <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
                    <span className="text-sm font-medium mr-2">Watch Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-white/10 backdrop-blur-md max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-gradient mb-3">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-6">
              Let's create a success story together with our AI-powered solutions
            </p>
            <button className="btn-primary">
              <span className="flex items-center gap-3">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/20 backdrop-blur-sm w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors duration-300 border border-white/30"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
            <iframe
              src={activeVideo}
              title="Video Player"
              className="w-full h-full"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoShowcase;
