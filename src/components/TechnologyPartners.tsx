import React from "react";
import { motion } from "framer-motion";

const TechLogo = ({ name }: { name: string }) => {
  const logos: Record<string, JSX.Element> = {
    AWS: (
      <svg viewBox="0 0 60 30" className="w-16 h-8">
        <text x="5" y="22" fill="#FF9900" fontSize="16" fontWeight="bold" fontFamily="Arial">aws</text>
      </svg>
    ),
    "Google Cloud": (
      <svg viewBox="0 0 60 30" className="w-16 h-8">
        <text x="2" y="20" fill="#4285F4" fontSize="11" fontWeight="bold" fontFamily="Arial">Google</text>
        <text x="2" y="28" fill="#EA4335" fontSize="9" fontFamily="Arial">Cloud</text>
      </svg>
    ),
    "Microsoft Azure": (
      <svg viewBox="0 0 60 30" className="w-16 h-8">
        <polygon points="10,25 20,5 30,25" fill="#0078D4" opacity="0.8"/>
        <polygon points="18,25 28,5 38,25" fill="#00A4EF" opacity="0.6"/>
        <text x="5" y="29" fill="#0078D4" fontSize="7" fontFamily="Arial">Azure</text>
      </svg>
    ),
    React: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <circle cx="20" cy="20" r="3" fill="#61DAFB"/>
        <ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 20 20)"/>
        <ellipse cx="20" cy="20" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 20 20)"/>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <polygon points="20,3 36,12 36,28 20,37 4,28 4,12" fill="#339933"/>
        <text x="10" y="24" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">JS</text>
      </svg>
    ),
    Python: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <path d="M20 4 C12 4 12 10 12 10 L12 16 L20 16 L20 14 L14 14 L14 11 C14 11 14 8 20 8 C26 8 26 11 26 11 L26 14 L26 18 C26 18 26 24 20 24 C14 24 14 20 14 20 L14 18 L12 18 L12 22 C12 22 12 28 20 28 C28 28 28 22 28 22 L28 12 C28 12 28 4 20 4Z" fill="#3776AB"/>
        <path d="M20 36 C28 36 28 30 28 30 L28 24 L20 24 L20 26 L26 26 L26 29 C26 29 26 32 20 32 C14 32 14 29 14 29 L14 26 L14 22 C14 22 14 16 20 16 C26 16 26 20 26 20 L26 22 L28 22 L28 18 C28 18 28 12 20 12 C12 12 12 18 12 18 L12 28 C12 28 12 36 20 36Z" fill="#FFD43B"/>
        <circle cx="17" cy="10" r="1.5" fill="white"/>
        <circle cx="23" cy="30" r="1.5" fill="white"/>
      </svg>
    ),
    Flutter: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <path d="M26 4 L14 16 L20 22 L32 10 Z" fill="#54C5F8"/>
        <path d="M20 22 L8 34 L14 40 L26 28 Z" fill="#01579B"/>
        <path d="M20 22 L14 16 L8 22 L14 28 Z" fill="#29B6F6"/>
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <path d="M8 20 L8 28 L32 28 L32 20 Z" fill="#2496ED" rx="2"/>
        <rect x="10" y="22" width="4" height="4" fill="white" rx="0.5"/>
        <rect x="16" y="22" width="4" height="4" fill="white" rx="0.5"/>
        <rect x="22" y="22" width="4" height="4" fill="white" rx="0.5"/>
        <rect x="28" y="22" width="4" height="4" fill="white" rx="0.5"/>
        <rect x="16" y="16" width="4" height="4" fill="white" rx="0.5"/>
        <rect x="22" y="16" width="4" height="4" fill="white" rx="0.5"/>
        <rect x="22" y="10" width="4" height="4" fill="white" rx="0.5"/>
        <path d="M4 20 C4 16 8 14 10 16 C12 14 16 14 18 16 C20 14 24 14 26 16 C28 14 32 16 32 20" fill="none" stroke="#2496ED" strokeWidth="2"/>
      </svg>
    ),
    Kubernetes: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" fill="none" stroke="#326CE5" strokeWidth="2"/>
        <polygon points="20,10 28,15 28,25 20,30 12,25 12,15" fill="#326CE5" opacity="0.3"/>
        <circle cx="20" cy="20" r="4" fill="#326CE5"/>
      </svg>
    ),
    TensorFlow: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <text x="4" y="26" fill="#FF6F00" fontSize="10" fontWeight="bold" fontFamily="Arial" letterSpacing="-0.5">TF</text>
      </svg>
    ),
    Firebase: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <path d="M20 4 L8 28 L20 36 L32 28 Z" fill="#FFCA28"/>
        <path d="M20 4 L20 36 L32 28 Z" fill="#FFA000"/>
        <path d="M20 14 L12 28 L20 34 L28 28 Z" fill="#FF6F00"/>
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <path d="M20 6 C20 6 10 14 10 24 C10 30 14 34 20 34 C26 34 30 30 30 24 C30 14 20 6 20 6Z" fill="#47A248"/>
        <path d="M20 6 C20 6 16 14 16 24 C16 28 18 31 20 33" fill="#2E7D32"/>
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <ellipse cx="20" cy="12" rx="14" ry="6" fill="none" stroke="#336791" strokeWidth="2"/>
        <path d="M6 12 L6 24 C6 27.3 12.3 30 20 30 C27.7 30 34 27.3 34 24 L34 12" fill="none" stroke="#336791" strokeWidth="2"/>
        <ellipse cx="20" cy="24" rx="14" ry="6" fill="none" stroke="#336791" strokeWidth="1.5" strokeDasharray="3 2"/>
        <text x="13" y="22" fill="#336791" fontSize="7" fontWeight="bold" fontFamily="Arial">SQL</text>
      </svg>
    ),
    Redis: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect x="6" y="10" width="28" height="20" rx="3" fill="#DC382D"/>
        <text x="10" y="24" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">redis</text>
      </svg>
    ),
    GraphQL: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" fill="none" stroke="#E10098" strokeWidth="2"/>
        <circle cx="20" cy="4" r="2.5" fill="#E10098"/>
        <circle cx="34" cy="12" r="2.5" fill="#E10098"/>
        <circle cx="34" cy="28" r="2.5" fill="#E10098"/>
        <circle cx="20" cy="36" r="2.5" fill="#E10098"/>
        <circle cx="6" cy="28" r="2.5" fill="#E10098"/>
        <circle cx="6" cy="12" r="2.5" fill="#E10098"/>
        <circle cx="20" cy="20" r="3" fill="#E10098"/>
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <circle cx="20" cy="20" r="16" fill="black" stroke="white" strokeWidth="1"/>
        <text x="10" y="25" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">N</text>
        <line x1="24" y1="12" x2="24" y2="28" stroke="white" strokeWidth="2"/>
        <line x1="12" y1="28" x2="28" y2="12" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect x="4" y="6" width="32" height="28" rx="3" fill="#3178C6"/>
        <text x="10" y="26" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">TS</text>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <path d="M10 20 C10 14 14 10 18 10 C20 10 22 12 22 14 C22 12 24 10 26 10 C30 10 34 14 34 20 C34 26 30 30 26 30 C24 30 22 28 22 26 C22 28 20 30 18 30 C14 30 10 26 10 20Z" fill="#06B6D4"/>
        <path d="M14 20 C14 17 16 15 18 15 C19 15 20 16 20 17 C20 16 21 15 22 15 C24 15 26 17 26 20 C26 23 24 25 22 25 C21 25 20 24 20 23 C20 24 19 25 18 25 C16 25 14 23 14 20Z" fill="white"/>
      </svg>
    ),
  };

  return logos[name] || (
    <span className="text-2xl text-white/40">◆</span>
  );
};

const partners = [
  "AWS", "Google Cloud", "Microsoft Azure", "React", "Node.js",
  "Python", "Flutter", "Docker", "Kubernetes", "TensorFlow",
  "Firebase", "MongoDB", "PostgreSQL", "Redis", "GraphQL",
  "Next.js", "TypeScript", "Tailwind CSS",
];

const TechnologyPartners = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-8">
        {/* Label */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block text-[#1BE1D3] uppercase tracking-[0.3em] text-[12px] font-semibold mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Technology Partners
          </span>
          <h2
            className="text-white text-[30px]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              lineHeight: "1.2",
            }}
          >
            Powered by{" "}
            <span className="text-[#1BE1D3]">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Marquee Carousel */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b0f0f] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b0f0f] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex overflow-hidden">
            <div
              className="flex animate-marquee"
              style={{ minWidth: "max-content" }}
            >
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center mx-3 sm:mx-4 px-6 sm:px-8 py-4 sm:py-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#1BE1D3]/30 hover:bg-[#1BE1D3]/5 transition-all duration-300 min-w-[140px] sm:min-w-[160px]"
                >
                  <div className="flex flex-col items-center gap-2.5">
                    <TechLogo name={partner} />
                    <span
                      className="text-white/60 text-[14px] font-normal whitespace-nowrap"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {partner}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
