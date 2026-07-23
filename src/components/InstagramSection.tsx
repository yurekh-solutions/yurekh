import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

import post1 from "@/assets/blog/instagram-1.png";
import post2 from "@/assets/blog/instagram-2.png";
import post3 from "@/assets/blog/instagram-5.png";
import post4 from "@/assets/blog/instagram-6.png";
import post5 from "@/assets/blog/instagram-7.png";
import post6 from "@/assets/blog/instagram-8.png";

const INSTAGRAM_URL = "https://www.instagram.com/yurekhsolutions/";

/**
 * CLEAN @yurekhsolutions GALLERY
 * ---------------------------------------------------------------
 * A polished, on-brand grid of real posts that links straight to
 * the live Instagram profile. No likes/comment/share bars, no
 * "Add a comment" strips, no meme reels — just clean brand posts.
 * Each card opens the matching post/profile on Instagram.
 */
type Post = { image: string; link: string };

const POSTS: Post[] = [
  { image: post1, link: "https://www.instagram.com/p/DZwQiJzojN0/" },
  { image: post2, link: "https://www.instagram.com/p/DW7-Yvwgu6L/" },
  { image: post3, link: "https://www.instagram.com/p/DVBVR0GDaKX/" },
  { image: post4, link: "https://www.instagram.com/p/DNyMwRn3iK8/" },
  { image: post5, link: INSTAGRAM_URL },
  { image: post6, link: INSTAGRAM_URL },
];

const InstagramSection = () => {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
    >
      {/* Teal glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1BE1D3]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1BE1D3]/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-[12px] font-semibold tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "Poppins, sans-serif", color: "#1BE1D3" }}>
            FOLLOW US ON INSTAGRAM
          </p>
          <h2 className="text-[30px] md:text-[36px] font-semibold leading-[1.2] mb-6 text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Latest Instagram Posts
          </h2>
          <p className="text-[15px] font-normal text-white/70 max-w-2xl mx-auto leading-[1.7]" style={{ fontFamily: "Poppins, sans-serif" }}>
            Follow us for the latest updates, behind-the-scenes content, and business growth insights.
          </p>
        </motion.div>

        {/* Clean post gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12"
        >
          {POSTS.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={post.image}
                alt={`Yurekh Solutions Instagram post ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-[#1BE1D3]" />
                <span className="text-[13px] font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  View on Instagram
                </span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-[14px] font-semibold text-[#1BE1D3] transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]"
            style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "rgba(27,225,211,0.1)", border: "2px solid rgba(27,225,211,0.5)" }}
          >
            <Instagram className="w-4 h-4" />
            View All on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
