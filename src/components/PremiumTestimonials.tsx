import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight, Award, TrendingUp } from "lucide-react";

const PremiumTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      company: "TechFlow Industries",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
      rating: 5,
      quote: "Yurekh Solutions completely transformed our digital presence. Their AI-powered marketing automation increased our lead generation by 340% in just 3 months. The ROI has been absolutely incredible.",
      results: {
        metric: "Lead Generation",
        improvement: "340%",
        timeframe: "3 months"
      },
      tags: ["AI Marketing", "Lead Generation", "ROI"]
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "GrowthLab Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      rating: 5,
      quote: "The analytics dashboard and insights provided by Yurekh are game-changing. We can now make data-driven decisions in real-time, which has improved our campaign performance dramatically.",
      results: {
        metric: "Campaign Performance",
        improvement: "250%",
        timeframe: "6 months"
      },
      tags: ["Analytics", "Data-Driven", "Performance"]
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "VP of Operations",
      company: "InnovateCore",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      rating: 5,
      quote: "Working with Yurekh has been exceptional. Their content intelligence system has revolutionized our content strategy, resulting in 400% higher engagement rates across all platforms.",
      results: {
        metric: "Engagement Rate",
        improvement: "400%",
        timeframe: "4 months"
      },
      tags: ["Content Strategy", "Engagement", "AI Content"]
    },
    {
      id: 4,
      name: "David Kumar",
      position: "Chief Technology Officer",
      company: "NextGen Enterprises",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop",
      rating: 5,
      quote: "The technical expertise and innovative approach of Yurekh Solutions is unmatched. They delivered a custom AI solution that streamlined our operations and saved us $2M annually.",
      results: {
        metric: "Cost Savings",
        improvement: "$2M",
        timeframe: "Annual"
      },
      tags: ["Custom AI", "Operations", "Cost Savings"]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Head of Digital Marketing",
      company: "FutureScale",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop",
      rating: 5,
      quote: "Yurekh's comprehensive digital strategy transformed our entire marketing approach. The personalized customer journeys they created increased our conversion rates by 280%.",
      results: {
        metric: "Conversion Rate",
        improvement: "280%",
        timeframe: "5 months"
      },
      tags: ["Digital Strategy", "Personalization", "Conversion"]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="bg-gradient-space py-12 lg:py-24 relative overflow-hidden text-[#009494] font-sans"
      id="testimonials"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-ai rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-marketing rounded-full blur-2xl opacity-40"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container-glass relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="glass-card inline-flex items-center gap-3 px-6 py-3 mb-8">
            <Award className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-primary font-bold text-lg">Client Success Stories</span>
          </div>

          <h2 className="title-gradient mb-6">
            Trusted by Industry Leaders
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See how we've helped businesses achieve extraordinary results with our AI-powered solutions
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 relative overflow-hidden"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/20" />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Profile */}
                <div className="text-center lg:text-left">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative inline-block mb-6"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto lg:mx-0 ring-4 ring-primary/30">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 glass w-10 h-10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-2">{currentTestimonial.name}</h4>
                  <p className="text-primary font-medium mb-1">{currentTestimonial.position}</p>
                  <p className="text-white/60 text-sm mb-4">{currentTestimonial.company}</p>

                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {currentTestimonial.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="glass px-3 py-1 rounded-full text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="lg:col-span-2">
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-medium"
                  >
                    "{currentTestimonial.quote}"
                  </motion.blockquote>

                  {/* Results */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-gradient mb-1">
                          {currentTestimonial.results.improvement}
                        </div>
                        <div className="text-white/70 text-sm">
                          {currentTestimonial.results.metric}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-primary font-semibold">
                          {currentTestimonial.results.timeframe}
                        </div>
                        <div className="text-white/60 text-sm">Timeline</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons (outside card, hidden on mobile) */}
        <div className="flex justify-center gap-6 mb-12 hidden md:flex">
          <button
            onClick={prevTestimonial}
            className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "98%", label: "Success Rate" },
            { number: "300%", label: "Avg ROI Increase" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="glass-card text-center hover-lift"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;
