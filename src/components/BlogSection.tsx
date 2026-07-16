import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.jpg";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";
import blog5 from "../assets/blog/blog5.png";
import blog6 from "../assets/blog/blog6.jpg";
import blog7 from "../assets/blog/blog7.jpg";
import blog8 from "../assets/blog/blog8.jpg";

export const blogPosts = [
  {
    slug: "whatarethetoptechniquesforseo",
    title: "What Are the Top Techniques for SEO?",
    description: "In the ever-evolving landscape of digital marketing, mastering SEO remains crucial for any website aiming to achieve top rankings in search engine results pages.",
    date: "July 2026",
    image: blog1,
  },
  {
    slug: "creatingwebsitewireframes",
    title: "Creating Website Wireframes",
    description: "Time equates to money, especially when dealing with projects like website design. Here's where wireframes step in to guide and align your vision.",
    date: "July 2026",
    image: blog2,
  },
  {
    slug: "content-marketing-seo",
    title: "The Role of Content Marketing in SEO Strategy",
    description: "Content marketing is no longer just a buzzword; it's a cornerstone of effective SEO strategies.",
    date: "June 2026",
    image: blog3,
  },
  {
    slug: "understanding-analytics",
    title: "Understanding Analytics: Measuring Your Digital Success",
    description: "In the world of digital marketing, what gets measured gets managed. Understanding your website analytics is crucial for success.",
    date: "June 2026",
    image: blog4,
  },
  {
    slug: "ai-in-modern-seo",
    title: "Artificial Intelligence in Modern SEO",
    description: "AI is reshaping the digital landscape. Learn how to leverage AI tools to enhance your SEO and stay ahead of the competition.",
    date: "May 2026",
    image: blog5,
  },
  {
    slug: "digitalmarketing",
    title: "Elevating User Experience",
    description: "In today's digital era, a website serves as the virtual face of business, making a lasting impression in the AI-driven era of SEO.",
    date: "May 2026",
    image: blog1,
  },
  {
    slug: "brand-identity-online",
    title: "Building a Strong Brand Identity Online",
    description: "A strong online brand identity is key to building trust and loyalty. Discover the best practices for creating a compelling brand presence.",
    date: "April 2026",
    image: blog6,
  },
  {
    slug: "impact-digital-marketing",
    title: "The Impact of Digital Marketing on Business Growth",
    description: "Digital marketing has transformed how businesses connect with their audience, driving unprecedented growth and success.",
    date: "April 2026",
    image: blog7,
  },
  {
    slug: "optimizing-voice-search",
    title: "Optimizing for Voice Search",
    description: "With the rise of smart assistants, optimizing for voice search is a must. We explore the latest techniques to rank for voice queries.",
    date: "March 2026",
    image: blog8,
  },
];

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setStartX(e.touches[0].pageX);
    if (scrollRef.current) {
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPaused(true);
    setStartX(e.pageX);
    if (scrollRef.current) {
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)",
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(90deg, #0F2027, #203A43, #2C5364)",
          backgroundSize: "300% 300%",
          animation: "gradientBg 10s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes gradientBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes blog-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="relative z-10 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p
              className="text-[18px] font-semibold mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                backgroundImage: "linear-gradient(90deg, #5f636b, #1be1d3, #345d66, #1c1d20)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              LATEST BLOG
            </p>
            <h2
              className="text-[30px] md:text-[36px] font-extrabold leading-[1.2] mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                backgroundImage: "linear-gradient(90deg, #5f636b, #1be1d3, #345d66, #1c1d20)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Read The Latest Articles from Our Blog Post
            </h2>
            <p className="text-[14px] font-normal text-white/70 max-w-3xl mx-auto leading-[1.7]">
              Stay ahead with expert insights on AI, business consulting, SEO, and digital transformation strategies that drive real results.
            </p>
          </motion.div>

          {/* Blog Cards - Auto-scroll loop carousel with swipe */}
          <div 
            ref={scrollRef}
            className="relative w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ scrollBehavior: isPaused ? 'auto' : 'smooth' }}
          >
            <div 
              className="flex gap-6 md:gap-8 px-4 md:px-8"
              style={{
                width: 'max-content',
                animation: isPaused ? 'none' : 'blog-scroll 50s linear infinite',
              }}
            >
              {/* First set */}
              {blogPosts.map((post, idx) => (
                <Link to={`/blogs/${post.slug}`} key={`first-${idx}`} className="flex-none">
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group relative w-[300px] sm:w-[340px] md:w-[380px] h-[360px] sm:h-[380px] rounded-[28px] overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />

                    {/* Dark overlay at bottom */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgb(17,24,39) 5%, rgba(17,24,39,0.85) 35%, rgba(17,24,39,0.3) 65%, transparent 100%)",
                        borderRadius: "28px",
                      }}
                    />

                    {/* Content at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col justify-end h-full">
                      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white leading-[1.4] mb-2 group-hover:text-[#1BE1D3] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] font-normal text-gray-300 leading-[1.7] line-clamp-3 mb-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500 text-[12px] sm:text-[13px]">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <span className="text-[13px] sm:text-[14px] font-bold text-white group-hover:text-[#1BE1D3] transition-colors duration-300 flex items-center gap-1">
                          Read More <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
              {/* Duplicate set for seamless loop */}
              {blogPosts.map((post, idx) => (
                <Link to={`/blogs/${post.slug}`} key={`dup-${idx}`} className="flex-none">
                  <motion.article
                    className="group relative w-[300px] sm:w-[340px] md:w-[380px] h-[360px] sm:h-[380px] rounded-[28px] overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />

                    {/* Dark overlay at bottom */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to top, rgb(17,24,39) 5%, rgba(17,24,39,0.85) 35%, rgba(17,24,39,0.3) 65%, transparent 100%)",
                        borderRadius: "28px",
                      }}
                    />

                    {/* Content at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col justify-end h-full">
                      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-white leading-[1.4] mb-2 group-hover:text-[#1BE1D3] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] font-normal text-gray-300 leading-[1.7] line-clamp-3 mb-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500 text-[12px] sm:text-[13px]">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <span className="text-[13px] sm:text-[14px] font-bold text-white group-hover:text-[#1BE1D3] transition-colors duration-300 flex items-center gap-1">
                          Read More <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>

          {/* SEO Hidden Content for crawlers */}
          <div className="sr-only">
            <h3>AI Business Consulting & Technology Blog</h3>
            <p>Expert articles on SEO optimization, website wireframes, content marketing, analytics, artificial intelligence, user experience, brand identity, digital marketing, and voice search strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
