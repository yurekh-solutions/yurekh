import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

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

const CaseStudySection = () => {
  const [activeTab, setActiveTab] = useState<"industries" | "services" | "regions">("industries");
  const [activeFilter, setActiveFilter] = useState("Show All");

  const filters = activeTab === "industries" ? industries : activeTab === "services" ? services : industries;

  const filteredStudies = activeFilter === "Show All"
    ? caseStudies
    : caseStudies.filter(
        (s) => s.category === activeFilter || s.service === activeFilter
      );

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      <div className="px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-4">
              Case Study
            </p>
            <h2 className="text-[30px] font-semibold text-white max-w-3xl mx-auto leading-[1.2]">
              Success Stories That Drive Impact
            </h2>
          </div>

          {/* Main Tabs */}
          <div className="flex gap-8 mb-8 border-b border-white/10">
            {(["industries", "services", "regions"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveFilter("Show All");
                }}
                className={`pb-4 text-base font-semibold transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? "text-white border-b-[3px] border-[#1BE1D3]"
                    : "text-white/55 hover:text-white/80"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`h-12 px-5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-2 border-[#1BE1D3] text-[#1BE1D3] bg-[#1BE1D3]/10"
                    : "border border-white/40 text-white/55 hover:border-white/70 hover:text-white/80"
                }`}
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Case Study Cards */}
          <div className="space-y-14">
            {filteredStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center"
              >
                {/* Text Content */}
                <div className="space-y-4 py-4 order-2 lg:order-1">
                  <h3
                    className="text-white text-[18px] font-semibold leading-[1.2]"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-white/80 text-[14px] font-normal leading-[1.7]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold border border-[#1BE1D3]/40 text-[#1BE1D3]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {study.category}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-normal border border-white/30 text-white/60"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {study.service}
                    </span>
                  </div>
                  <Link
                    to="/bookingform"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full text-[14px] font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,225,211,0.3)]"
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
                      className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <Link
              to="/case-study"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[#1BE1D3] font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                backgroundColor: "rgba(27,225,211,0.1)",
                border: "2px solid rgba(27,225,211,0.5)",
              }}
            >
              View All Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
