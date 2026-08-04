import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import yurekhLogo from "../assets/yurekhlog.png";

const industries = [
  "Show All",
  "E-Commerce",
  "Healthcare",
  "FinTech",
  "Education",
  "Real Estate",
  "Food & Beverage",
  "Social Media",
  "Enterprise",
  "Mobile Apps",
];

const services = [
  "Show All",
  "Web Development",
  "Mobile Apps",
  "Branding",
  "Digital Marketing",
  "SEO",
  "UI/UX Design",
  "E-Commerce",
  "Custom Software",
];

const caseStudies = [
  {
    id: 1,
    title: "Elite E-Commerce Platform",
    description: "A luxury online shopping experience with personalized recommendations, seamless checkout, and real-time inventory management for a premium retail brand.",
    image: "/services/ecommerce-platform-development.jpg",
    category: "E-Commerce",
    service: "Web Development",
  },
  {
    id: 2,
    title: "Opulent Brand Identity System",
    description: "Complete digital brand transformation including logo design, visual identity, brand guidelines, and multi-channel strategy for a luxury fashion house.",
    image: "/services/luxury-logo-design.jpg",
    category: "Branding",
    service: "Branding",
  },
  {
    id: 3,
    title: "Regal Social Media Campaign",
    description: "Data-driven social media strategy with influencer partnerships and paid campaigns that generated massive engagement and follower growth.",
    image: "/services/bespoke-social-strategy.jpg",
    category: "Social Media",
    service: "Digital Marketing",
  },
  {
    id: 4,
    title: "Aristocratic Enterprise Software",
    description: "Custom enterprise platform with automated workflows, real-time dashboards, and role-based access control for a large corporation.",
    image: "/services/custom-software.jpg",
    category: "Enterprise",
    service: "Custom Software",
  },
  {
    id: 5,
    title: "Sumptuous Mobile Health App",
    description: "Cross-platform health and fitness app with personalized workout plans, nutrition tracking, and wearable device integration.",
    image: "/services/mobile-application.jpg",
    category: "Healthcare",
    service: "Mobile Apps",
  },
  {
    id: 6,
    title: "Majestic SEO & Content Strategy",
    description: "Comprehensive SEO overhaul with technical optimization, 50+ content pieces, and digital PR that tripled organic traffic.",
    image: "/services/decadent-seo-strategies.jpg",
    category: "E-Commerce",
    service: "SEO",
  },
  {
    id: 7,
    title: "Exclusive Real Estate Portal",
    description: "Digital property platform with advanced search, virtual tours, CRM integration, and automated lead nurturing for a real estate firm.",
    image: "/services/elite-website-design.jpg",
    category: "Real Estate",
    service: "Web Development",
  },
  {
    id: 8,
    title: "Lavish Food Delivery Platform",
    description: "End-to-end food ordering and delivery system with real-time tracking, restaurant management, and driver dispatch optimization.",
    image: "/services/ui-ux-designing.jpg",
    category: "Food & Beverage",
    service: "Mobile Apps",
  },
  {
    id: 9,
    title: "Premium FinTech Dashboard",
    description: "Secure financial analytics platform with real-time data visualization, compliance reporting, and automated risk assessment.",
    image: "/services/bespoke-data-visualization.jpg",
    category: "FinTech",
    service: "Custom Software",
  },
  {
    id: 10,
    title: "Tailored E-Learning Platform",
    description: "Interactive education platform with live classes, progress tracking, assessment tools, and parent-teacher communication features.",
    image: "/services/opulent-content-management.jpg",
    category: "Education",
    service: "Web Development",
  },
  {
    id: 11,
    title: "Bespoke Brand Collateral Suite",
    description: "Complete print and digital brand collateral including business cards, brochures, packaging design, and marketing materials.",
    image: "/services/sumptuous-brand-collateral.jpg",
    category: "Branding",
    service: "Branding",
  },
  {
    id: 12,
    title: "Royal Email Marketing Automation",
    description: "Automated email marketing system with segmentation, A/B testing, personalized journeys, and performance analytics.",
    image: "/services/majestic-email-automation.jpg",
    category: "E-Commerce",
    service: "Digital Marketing",
  },
];

const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState<"industries" | "services" | "regions">("industries");
  const [activeFilter, setActiveFilter] = useState("Show All");

  const filters = activeTab === "industries" ? industries : activeTab === "services" ? services : industries;

  const filteredStudies = activeFilter === "Show All"
    ? caseStudies
    : caseStudies.filter(
        (s) => s.category === activeFilter || s.service === activeFilter
      );

  // Ensure we always have results to display
  const displayStudies = filteredStudies.length > 0 ? filteredStudies : caseStudies;

  return (
    <div className="bg-black min-h-screen">
      <SEOHead
        title="Case Studies | Real Results & Success Stories | Yurekh Solutions"
        description="Explore how Yurekh Solutions has helped businesses across industries achieve remarkable results. Real case studies showcasing digital transformation, brand building, and technology implementation."
        keywords="case studies, success stories, client results, digital transformation cases, brand building results, technology implementation, Yurekh Solutions portfolio"
        canonical="https://yurekh.com/case-study"
        breadcrumbs={[{ name: "Case Studies", url: "https://yurekh.com/case-study" }]}
      />
      {/* Hero Section */}
      <section
        className="relative min-h-[82svh] flex items-center justify-center pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
      >
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Teal Radial Gradient Glows */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/3 left-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, rgba(27,225,211,0.5), transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full blur-3xl opacity-15"
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
                <img src={yurekhLogo} alt="" className="w-4 h-4 flex-shrink-0 object-contain" />
                <span className="text-[#1BE1D3] text-sm font-medium">Case Studies</span>
              </div>
              <h1
                className="text-white text-[30px] sm:text-[36px] lg:text-[44px] font-semibold mb-6 leading-[1.2]"
              >
                Case <span className="text-[#1BE1D3]">Studies</span>
              </h1>
              <p
                className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                Discover how Yurekh Solutions transforms businesses through innovative technology solutions. Explore our projects across industries and see real results delivered through smart, scalable, and impactful digital strategies.
              </p>
             <Link
  to="/bookingform"
  className="
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    font-semibold
    transition-all
    duration-300
    hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]
    px-5 py-3
    sm:px-6 sm:py-3.5
    md:px-8 md:py-4
    text-sm
    sm:text-[15px]
    md:text-[15px]
    w-full
    sm:w-auto
    max-w-full
    text-center
    leading-snug
  "
  style={{
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#1BE1D3",
    color: "#000",
  }}
>
  <span>Start Your Project Consultation</span>
  <ArrowRight className="h-4 w-4 flex-shrink-0" />
</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="bg-black pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Tabs */}
            <div className="flex gap-8 mb-8 border-b border-white/10">
              {(["industries", "services", "regions"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setActiveFilter("Show All");
                  }}
                  className={`pb-4 text-base sm:text-lg font-semibold transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? "text-white border-b-[3px] border-[#1BE1D3]"
                      : "text-white/55 hover:text-white/80"
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`h-12 px-5 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "border-2 border-[#1BE1D3] text-[#1BE1D3] bg-[#1BE1D3]/10"
                      : "border border-white/40 text-white/55 hover:border-white/70 hover:text-white/80"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="bg-black pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-14 md:space-y-20">
            {displayStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 items-center"
              >
                {/* Text Content */}
                <div className="space-y-4 py-4 lg:py-6 lg:pr-6 order-2 lg:order-1">
                  <h3
                    className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-snug"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, letterSpacing: "-0.01em" }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, lineHeight: "1.7" }}
                  >
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium border border-[#1BE1D3]/40 text-[#1BE1D3]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {study.category}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium border border-white/30 text-white/60"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {study.service}
                    </span>
                  </div>
                  <Link
                    to="/bookingform"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,225,211,0.3)]"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      backgroundColor: "#1BE1D3",
                      color: "#000",
                    }}
                  >
                    View Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={study.image}
                      alt={`${study.title} case study preview`}
                      className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-black to-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, lineHeight: "1.2" }}
            >
              Ready to Be Our Next Success Story?
            </h2>
            <p
              className="text-white/70 max-w-2xl mx-auto mb-8"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", lineHeight: "1.7" }}
            >
              Let's discuss how we can help your business achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/bookingform"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-300 hover:bg-[#1BE1D3]/90 hover:shadow-[0_0_40px_rgba(27,225,211,0.3)]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 2vw, 15px)",
                  padding: "0 24px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "#1BE1D3",
                  color: "#000",
                  border: "none",
                  boxShadow: "0 0 30px rgba(27,225,211,0.15)",
                }}
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919136242706"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-300 hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(13px, 2vw, 15px)",
                  padding: "0 24px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(27,225,211,0.08)",
                  color: "#1BE1D3",
                  border: "1px solid rgba(27,225,211,0.3)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 30px rgba(27,225,211,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
