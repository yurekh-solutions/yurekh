import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { industryCategories, getIndustryImage } from "@/data/industries";
import { ArrowRight, Phone } from "lucide-react";
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
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2828]/50 to-[#0b0f0f]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-medium mb-4 block">
                INDUSTRIES
              </span>
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light mb-6">
                Industry Solutions
              </h1>
              <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
                We provide tailored digital solutions across sectors, helping businesses streamline operations, enhance customer experiences, and drive growth with cutting-edge technology.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("industries-grid");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[#1BE1D3] transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]"
                style={{
                  backgroundColor: "rgba(27,225,211,0.1)",
                  border: "2px solid rgba(27,225,211,0.5)",
                }}
              >
                Explore Industries <ArrowRight className="h-5 w-5" />
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
            <h2 className="text-white text-3xl sm:text-4xl font-light mb-4">
              Industries We Serve
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
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
                      <h3 className="text-[#1BE1D3] text-2xl font-light mb-3">
                        {industry.name}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {industry.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-[#1BE1D3] text-sm font-medium">
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
            <h2 className="text-white text-3xl sm:text-4xl font-light mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Let's discuss how our industry-specific solutions can drive growth and efficiency for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/bookingform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[#1BE1D3] transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]"
                style={{
                  backgroundColor: "rgba(27,225,211,0.1)",
                  border: "2px solid rgba(27,225,211,0.5)",
                }}
              >
                Consult Our Experts <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="tel:+919136242706"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 hover:bg-white/10"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                <Phone className="h-5 w-5" /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
