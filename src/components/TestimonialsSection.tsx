import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "They transformed our entire digital presence in 6 months. Revenue grew 340% and we expanded to 3 new countries. The most strategic partner we've ever worked with.",
      role: "CEO, SaaS Platform",
      industry: "Technology",
      result: "340% Revenue Growth",
    },
    {
      rating: 5,
      text: "From zero to $2M ARR in 18 months. They handled everything — company formation, brand identity, tech stack, and go-to-market. Truly end-to-end execution.",
      role: "Founder & CEO",
      industry: "E-Commerce",
      result: "$0 to $2M ARR",
    },
    {
      rating: 5,
      text: "We needed to enter the Indian market fast. They set up our entity, built our brand, launched our platform, and acquired our first 1000 customers — all in 90 days.",
      role: "Managing Director",
      industry: "Healthcare",
      result: "1000 Customers in 90 Days",
    },
    {
      rating: 5,
      text: "The level of strategic thinking combined with hands-on execution is rare. They don't just advise — they build alongside you. Our best investment this decade.",
      role: "Co-Founder",
      industry: "FinTech",
      result: "5x Market Valuation",
    },
    {
      rating: 5,
      text: "We scaled from a local brand to a global presence across 6 countries. Their market entry strategy and operational setup were flawless. Highly recommend.",
      role: "Business Owner",
      industry: "Real Estate",
      result: "6 Countries Expanded",
    },
    {
      rating: 5,
      text: "They rebuilt our entire technology infrastructure, launched our mobile app, and optimized our marketing funnels. Customer acquisition cost dropped by 60%.",
      role: "Head of Growth",
      industry: "EdTech",
      result: "60% Lower CAC",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1BE1D3]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#1BE1D3]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#1BE1D3] font-normal text-[12px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Client Success Stories
          </p>
          <h2
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 tracking-normal"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.2" }}
          >
            Results That Speak.
          </h2>
          <p
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
          >
            Real outcomes from real partnerships. Here's what founders and enterprises say about building with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/40 transition-all duration-500 hover:bg-white/[0.02] relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#1BE1D3]/10 group-hover:text-[#1BE1D3]/20 transition-colors duration-300" />

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#1BE1D3] text-[#1BE1D3]" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-white/70 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.8" }}
              >
                "{testimonial.text}"
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 mb-5">
                <span className="text-[#1BE1D3] text-xs font-normal" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1BE1D3]/30 to-[#1BE1D3]/10 flex items-center justify-center">
                  <span className="text-[#1BE1D3] text-sm font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {testimonial.role.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-normal" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                    {testimonial.role}
                  </p>
                  <p className="text-white/40 text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {testimonial.industry}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
            200+ brands built and scaled globally. Your success story is next.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
