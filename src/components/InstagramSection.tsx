import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[12px] font-semibold tracking-[0.3em] uppercase mb-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              backgroundImage: "linear-gradient(90deg, #5f636b, #1be1d3, #345d66, #1c1d20)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FOLLOW US ON INSTAGRAM
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
            Our Latest Instagram Posts
          </h2>
          <p className="text-[14px] font-normal text-white/70 max-w-2xl mx-auto leading-[1.7]">
            Follow us for the latest updates, behind-the-scenes content, and digital marketing insights.
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <a
            href="https://www.instagram.com/yurekhsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-[#1BE1D3]/30 transition-all duration-300 group"
          >
            {/* Profile Avatar */}
            <div className="relative">
              <div
                className="w-20 h-20 rounded-full p-[2px]"
                style={{
                  background: "linear-gradient(135deg, #1BE1D3, #0a1a1a, #1BE1D3)",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0a1a1a] flex items-center justify-center overflow-hidden">
                  <span className="text-[#1BE1D3] text-2xl font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Y
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#1BE1D3] rounded-full flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-white font-bold text-[18px] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                @yurekhsolutions
              </h3>
              <p className="text-white/60 text-[13px]">
                Enterprise Business Solutions | Digital Marketing | AI & Technology
              </p>
            </div>

            {/* Follow Button */}
            <div className="flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold text-[#1BE1D3] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(27,225,211,0.3)]"
              style={{
                fontFamily: "Poppins, sans-serif",
                backgroundColor: "rgba(27,225,211,0.1)",
                border: "1.5px solid rgba(27,225,211,0.4)",
              }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Follow
            </div>
          </a>
        </motion.div>

        {/* Real Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative w-full pt-[100%] sm:pt-[50%]">
            <iframe
              src="https://www.instagram.com/yurekhsolutions/embed"
              className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-3xl shadow-lg"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              title="Instagram Feed"
            />
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
            style={{
              fontFamily: "Poppins, sans-serif",
              backgroundColor: "rgba(27,225,211,0.1)",
              border: "2px solid rgba(27,225,211,0.5)",
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            View All Posts on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
