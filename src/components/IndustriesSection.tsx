import { Link } from "react-router-dom";
import { getAllIndustries } from "@/data/industries";
import { useRef, useState, useEffect } from "react";

const IndustriesSection = () => {
  const industries = getAllIndustries();
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
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 px-6 md:px-8">
        <p className="text-[#1BE1D3] font-semibold text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-3 md:mb-4">
          Industry
        </p>
        <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-white max-w-3xl mx-auto leading-[1.2] text-center">
          Industries We Empower Through Scalable Digital Solutions
        </h2>
      </div>

      {/* Swipeable carousel with auto-scroll loop */}
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
          className="flex gap-4 px-4 md:px-8"
          style={{
            width: 'max-content',
            animation: isPaused ? 'none' : 'industry-scroll 40s linear infinite',
          }}
        >
          {/* First set */}
          {industries.map((industry, idx) => (
            <Link
              key={`first-${idx}`}
              to={`/industries/${industry.slug}`}
              className="flex-shrink-0 w-36 sm:w-44 md:w-56 h-[320px] sm:h-[380px] md:h-[500px] flex items-center justify-center group relative cursor-pointer glass-card rounded-2xl"
            >
              <span className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-white/15 group-hover:text-[#1BE1D3]/60 transition-colors duration-500 writing-vertical whitespace-nowrap">
                {industry.name}
              </span>
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[#1BE1D3]/0 group-hover:bg-[#1BE1D3]/5 transition-colors duration-500 rounded-2xl" />
            </Link>
          ))}
          {/* Duplicate set for seamless loop */}
          {industries.map((industry, idx) => (
            <Link
              key={`dup-${idx}`}
              to={`/industries/${industry.slug}`}
              className="flex-shrink-0 w-36 sm:w-44 md:w-56 h-[320px] sm:h-[380px] md:h-[500px] flex items-center justify-center group relative cursor-pointer glass-card rounded-2xl"
            >
              <span className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-white/15 group-hover:text-[#1BE1D3]/60 transition-colors duration-500 writing-vertical whitespace-nowrap">
                {industry.name}
              </span>
              <div className="absolute inset-0 bg-[#1BE1D3]/0 group-hover:bg-[#1BE1D3]/5 transition-colors duration-500 rounded-2xl" />
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes industry-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;
