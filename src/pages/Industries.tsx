import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { industryCategories, getIndustryImage } from "@/data/industries";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Industries = () => {
  return (
    <div className="min-h-screen bg-[#0b0f0f]">
      <SEOHead
        title="Industries We Serve | Technology, Healthcare, FinTech & More | Yurekh Solutions"
        description="Yurekh Solutions serves 10+ industries including Technology & SaaS, E-Commerce, Healthcare, FinTech, Real Estate, Education, Manufacturing, Hospitality, and Media. Expert solutions tailored to each sector."
        keywords="industries served, technology consulting, healthcare solutions, fintech development, edtech platform, real estate tech, manufacturing ERP, hospitality branding, Yurekh Solutions industries"
        canonical="https://yurekh.com/industries"
        breadcrumbs={[{ name: "Industries", url: "https://yurekh.com/industries" }]}
      />
      {/* Hero Section */}
      <section
        className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
      >
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Teal Radial Gradient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/3 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, rgba(27,225,211,0.5), transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full blur-3xl opacity-15"
            style={{ background: "radial-gradient(circle, rgba(27,225,211,0.4), transparent 70%)" }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1BE1D3]/30 bg-[#1BE1D3]/5 mb-6">
                <Sparkles className="w-4 h-4 text-[#1BE1D3]" />
                <span className="text-[#1BE1D3] text-sm font-medium">Industries</span>
              </div>
              <h1 className="text-white text-[30px] sm:text-[36px] lg:text-[44px] font-semibold mb-6 leading-[1.2]">
                Industry Solutions
              </h1>
              <p className="text-white/70 text-[15px] max-w-3xl mx-auto mb-8 leading-[1.7]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We provide tailored digital solutions across sectors, helping businesses streamline operations, enhance customer experiences, and drive growth with cutting-edge technology.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("industries-grid");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full transition-all duration-300 hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)] hover:shadow-[0_0_30px_rgba(27,225,211,0.2)] hover:-translate-y-px w-full sm:w-auto max-w-md"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  background: "rgba(27,225,211,0.08)",
                  color: "#1BE1D3",
                  border: "1px solid rgba(27,225,211,0.25)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 0 20px rgba(27,225,211,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                Explore Industries <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries-grid" className="py-16 sm:py-20 bg-[#0b0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-white text-[30px] font-semibold mb-4 leading-[1.2]">
              Industries We Serve
            </h2>
            <p className="text-white/70 text-[15px] leading-[1.7] max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
              Delivering value to multiple industries, we innovate industry-specific technologies to scale and optimize operations and bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industryCategories.flatMap((category) =>
              category.industries.map((industry, idx) => (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                >
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="group block relative bg-gradient-to-br from-[#0d2828] to-[#0a1f1f] border border-white/10 rounded-2xl overflow-hidden hover:border-[#1BE1D3]/50 hover:shadow-[0_0_40px_rgba(27,225,211,0.2)] transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={getIndustryImage(industry.slug)}
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2828] via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-[#1BE1D3] text-[16px] font-semibold mb-3">
                        {industry.name}
                      </h3>
                      <p className="text-white/60 text-[13px] leading-[1.7] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {industry.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-[#1BE1D3] text-[13px] font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0b0f0f] to-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-[30px] font-semibold mb-6 leading-[1.2]">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-white/70 text-[15px] leading-[1.7] max-w-2xl mx-auto mb-10" style={{ fontFamily: "Poppins, sans-serif" }}>
              Let's discuss how our industry-specific solutions can drive growth and efficiency for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <a
                href="/bookingform"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)] w-full sm:w-auto sm:min-w-[240px]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  backgroundColor: "#1BE1D3",
                }}
              >
                Consult Our Experts <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </a>
              <a
                href="tel:+919136242706"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full transition-all duration-300 hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)] hover:shadow-[0_0_30px_rgba(27,225,211,0.2)] hover:-translate-y-px w-full sm:w-auto sm:min-w-[240px]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  background: "rgba(27,225,211,0.08)",
                  color: "#1BE1D3",
                  border: "1px solid rgba(27,225,211,0.25)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 0 20px rgba(27,225,211,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <Phone className="h-4 w-4 flex-shrink-0" /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
