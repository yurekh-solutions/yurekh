import { motion } from "framer-motion";
import { ExternalLink, Heart, MessageCircle, Instagram } from "lucide-react";

// Import real Instagram post images from @yurekhsolutions
import ig1 from "../assets/blog/instagram-1.png";
import ig2 from "../assets/blog/instagram-2.png";
import ig3 from "../assets/blog/instagram-3.png";
import ig4 from "../assets/blog/instagram-4.png";
import ig5 from "../assets/blog/instagram-5.png";
import ig6 from "../assets/blog/instagram-6.png";
import ig7 from "../assets/blog/instagram-7.png";
import ig8 from "../assets/blog/instagram-8.png";
import ig9 from "../assets/blog/instagram-9.png";
import ig10 from "../assets/blog/instagram-10.png";
import ig11 from "../assets/blog/instagram-11.png";
import ig12 from "../assets/blog/instagram-12.png";

const latestPosts = [
  { id: 1, image: ig1 }, { id: 2, image: ig2 }, { id: 3, image: ig3 },
  { id: 4, image: ig4 }, { id: 5, image: ig5 }, { id: 6, image: ig6 },
  { id: 7, image: ig7 }, { id: 8, image: ig8 }, { id: 9, image: ig9 },
  { id: 10, image: ig10 }, { id: 11, image: ig11 }, { id: 12, image: ig12 },
];

// Triple for seamless infinite scroll
const scrollPosts = [...latestPosts, ...latestPosts, ...latestPosts];

const InstagramSection = () => {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)",
      }}
    >
      {/* Teal gradient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1BE1D3]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1BE1D3]/3 rounded-full blur-[100px]" />

      {/* Infinite scroll animation */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .ig-scroll-track {
          animation: scrollLeft 60s linear infinite;
        }
        .ig-scroll-track:hover {
          animation-play-state: paused;
        }
        .ig-feed-frame::-webkit-scrollbar { display: none !important; }
        .ig-feed-frame { -ms-overflow-style: none !important; scrollbar-width: none !important; }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[12px] font-semibold tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "Poppins, sans-serif", color: "#1BE1D3" }}>
            FOLLOW US ON INSTAGRAM
          </p>
          <h2 className="text-[30px] md:text-[36px] font-semibold leading-[1.2] mb-6 text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Latest Instagram Posts
          </h2>
          <p className="text-[15px] font-normal text-white/70 max-w-2xl mx-auto leading-[1.7]" style={{ fontFamily: "Poppins, sans-serif" }}>
            Follow us for the latest updates, behind-the-scenes content, and digital marketing insights.
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <a
            href="https://www.instagram.com/yurekhsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[28px] border border-transparent bg-transparent p-6 flex flex-col sm:flex-row items-center gap-6 transition duration-300 hover:-translate-y-1 hover:border-[#1BE1D3]/20 hover:bg-[#0a0a0a] hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(27,225,211,0.12),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="w-20 h-20 rounded-full p-[2px]" style={{ background: "linear-gradient(135deg, #1BE1D3, #0a1a1a, #1BE1D3)" }}>
                <div className="w-full h-full rounded-full bg-[#0a1a1a] flex items-center justify-center overflow-hidden">
                  <span className="text-[#1BE1D3] text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>Y</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#1BE1D3] rounded-full flex items-center justify-center">
                <Instagram className="w-3.5 h-3.5 text-black" />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-white font-semibold text-[18px] mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>@yurekhsolutions</h3>
              <p className="text-white/70 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>AI-Driven IT & Marketing Consultancy | End-to-End Tech & Digital Services | 360° Marketing</p>
            </div>
            <div className="flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold text-[#1BE1D3] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(27,225,211,0.3)]"
              style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "rgba(27,225,211,0.1)", border: "1.5px solid rgba(27,225,211,0.4)" }}>
              <ExternalLink className="h-3.5 w-3.5" />
              Follow
            </div>
          </a>
        </motion.div>

        {/* Auto-Scrolling Instagram Carousel - Real Post Images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 relative"
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #000000 0%, transparent 100%)" }} />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, #000000 0%, transparent 100%)" }} />

          <div className="overflow-hidden">
            <div className="ig-scroll-track flex gap-4 w-max">
              {scrollPosts.map((post, idx) => (
                <a
                  key={`${post.id}-${idx}`}
                  href="https://www.instagram.com/yurekhsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-[20px] overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={`Instagram post from @yurekhsolutions`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                    <div className="flex items-center gap-1.5 text-white">
                      <Heart className="w-5 h-5 fill-white" />
                    </div>
                    <div className="flex items-center gap-1.5 text-white">
                      <MessageCircle className="w-5 h-5 fill-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-[20px] border-2 border-transparent group-hover:border-[#1BE1D3]/40 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Live Instagram Feed Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
        
          <div
            className="relative rounded-[28px] overflow-hidden border border-white/5"
            style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,26,26,0.6) 100%)" }}
          >
            {/* Top fade */}
            <div className="absolute top-0 left-0 right-0 h-6 z-10 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.8) 0%, transparent 100%)" }} />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-12 z-10 pointer-events-none" style={{ background: "linear-gradient(0deg, rgba(10,26,26,0.8) 0%, transparent 100%)" }} />

            <div className="ig-feed-frame" style={{ overflow: "hidden", height: "500px" }}>
              <iframe
                src="https://www.instagram.com/yurekhsolutions/embed"
                title="Instagram Feed - @yurekhsolutions"
                className="w-full border-0"
                style={{ height: "750px", backgroundColor: "transparent" }}
                allowTransparency
                loading="lazy"
                scrolling="no"
              />
            </div>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/yurekhsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-[14px] font-semibold text-[#1BE1D3] transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]"
            style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "rgba(27,225,211,0.1)", border: "2px solid rgba(27,225,211,0.5)" }}
          >
            <Instagram className="w-4 h-4" />
            View All Posts on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
