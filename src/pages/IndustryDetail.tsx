import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  findIndustryBySlug,
  industryCategories,
  getIndustryImage,
} from "@/data/industries";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  AlertTriangle,
  AlertCircle,
  AlertOctagon,
  Lightbulb,
  Zap,
  Target,
  Settings,
  Cpu,
  Database,
  Cloud,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Star,
  Shield,
  Users,
  Award,
  Briefcase,
  Rocket,
  CheckSquare,
  type LucideIcon,
} from "lucide-react";

// Icon mappings for each section
const challengeIcons: LucideIcon[] = [AlertTriangle, AlertCircle, AlertOctagon];
const solutionIcons: LucideIcon[] = [Lightbulb, Zap, Target];
const capabilityIcons: LucideIcon[] = [Settings, Cpu, Database, Cloud];
const outcomeIcons: LucideIcon[] = [TrendingUp, BarChart3, PieChart];

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const result = slug ? findIndustryBySlug(slug) : null;

  useEffect(() => {
    if (!result) return;
    document.title = result.industry.seoTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", result.industry.seoDescription);

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute("content", result.industry.keywords.join(", "));

    window.scrollTo(0, 0);
  }, [result]);

  if (!result) {
    return (
      <div className="min-h-screen bg-[#0b0f0f] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">
            Industry Not Found
          </h1>
          <p className="text-white/60 mb-8">
            The industry you're looking for doesn't exist.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#1BE1D3] border border-[#1BE1D3]/30 hover:bg-[#1BE1D3]/10 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { industry, category } = result;
  const relatedIndustries = category.industries.filter((i) => i.slug !== industry.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0b0f0f]">
      {/* Hero Banner */}
      <section className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img
          src={getIndustryImage(industry.slug)}
          alt={industry.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-light mb-4"
          >
            {industry.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg sm:text-xl max-w-3xl mb-6"
          >
            {industry.tagline}
          </motion.p>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 text-white/80 text-sm"
          >
            <Link to="/" className="hover:text-[#1BE1D3] transition-colors">Home</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <Link to="/industries" className="hover:text-[#1BE1D3] transition-colors">Industries</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="text-[#1BE1D3]">{industry.name}</span>
          </motion.nav>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 bg-[#0b0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-medium mb-3 block">
                OVERVIEW
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-light mb-6">
                About {industry.name} Industry
              </h2>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
                <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
              </div>
              <p className="text-white/70 leading-relaxed text-lg">
                {industry.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0b0f0f] to-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30">
                  <AlertTriangle className="w-6 h-6 text-[#1BE1D3]" />
                </div>
              </div>
              <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-medium mb-3 block">
                CHALLENGES
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-light mb-4">
                Key Challenges
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
                <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {industry.challenges.map((challenge, idx) => {
                const ChallengeIcon = challengeIcons[idx] || AlertCircle;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-gradient-to-br from-[#0d2828] to-[#0a1f1f] border-2 border-[#1BE1D3]/30 rounded-2xl p-6 sm:p-8 hover:border-[#1BE1D3]/60 hover:shadow-[0_0_40px_rgba(27,225,211,0.3)] transition-all duration-500"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/30 to-[#1BE1D3]/10 flex items-center justify-center border-2 border-[#1BE1D3]/50 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#1BE1D3]/20">
                        <ChallengeIcon className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2.5} />
                      </div>
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-light text-center mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-white/80 text-center leading-relaxed text-sm sm:text-base">
                      {challenge.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Approach */}
      <section className="py-16 sm:py-20 bg-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30">
                  <Lightbulb className="w-6 h-6 text-[#1BE1D3]" />
                </div>
              </div>
              <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-medium mb-3 block">
                SOLUTIONS
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-light mb-4">
                Our Solution Approach
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
                <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {industry.solutions.map((solution, idx) => {
                const SolutionIcon = solutionIcons[idx] || Lightbulb;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-gradient-to-br from-[#0b0f0f] to-[#0a1f1f] border-2 border-[#1BE1D3]/30 rounded-2xl p-6 sm:p-8 hover:border-[#1BE1D3]/60 hover:shadow-[0_0_40px_rgba(27,225,211,0.3)] transition-all duration-500"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/30 to-[#1BE1D3]/10 flex items-center justify-center border-2 border-[#1BE1D3]/50 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#1BE1D3]/20">
                        <SolutionIcon className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2.5} />
                      </div>
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-light text-center mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-white/80 text-center leading-relaxed text-sm sm:text-base">
                      {solution.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-16 sm:py-20 bg-[#0b0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30">
                  <Settings className="w-6 h-6 text-[#1BE1D3]" />
                </div>
              </div>
              <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-medium mb-3 block">
                CAPABILITIES
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-light mb-4">
                Platform Capabilities
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
                <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.capabilities.map((capability, idx) => {
                const CapabilityIcon = capabilityIcons[idx] || Settings;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group flex items-start gap-4 p-6 rounded-xl border-2 border-[#1BE1D3]/20 bg-white/[0.02] hover:border-[#1BE1D3]/50 hover:bg-[#1BE1D3]/[0.05] transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30 group-hover:scale-110 transition-transform duration-300">
                        <CapabilityIcon className="h-6 w-6 text-[#1BE1D3]" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white text-base font-light mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0b0f0f] to-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30">
                  <TrendingUp className="w-6 h-6 text-[#1BE1D3]" />
                </div>
              </div>
              <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-medium mb-3 block">
                OUTCOMES
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-light mb-4">
                Business Outcomes
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
                <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {industry.outcomes.map((outcome, idx) => {
                const OutcomeIcon = outcomeIcons[idx] || TrendingUp;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group bg-gradient-to-br from-[#0d2828] to-[#0a1f1f] border-2 border-[#1BE1D3]/30 rounded-2xl p-6 sm:p-8 hover:border-[#1BE1D3]/60 hover:shadow-[0_0_40px_rgba(27,225,211,0.3)] transition-all duration-500"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/30 to-[#1BE1D3]/10 flex items-center justify-center border-2 border-[#1BE1D3]/50 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#1BE1D3]/20">
                        <OutcomeIcon className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2.5} />
                      </div>
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-light text-center mb-3">
                      {outcome.title}
                    </h3>
                    <p className="text-white/80 text-center leading-relaxed text-sm sm:text-base">
                      {outcome.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights & Trends */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0d2828] to-[#0b0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30">
                  <Activity className="w-6 h-6 text-[#1BE1D3]" />
                </div>
              </div>
              <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-medium mb-3 block">
                INSIGHTS
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-light mb-4">
                Industry Insights & Trends
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
                <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Digital Transformation Acceleration",
                  description: `The ${industry.name} industry is experiencing rapid digital transformation, with organizations investing in cloud-native platforms, AI-driven automation, and data analytics to stay competitive.`
                },
                {
                  icon: Shield,
                  title: "Security & Compliance Focus",
                  description: `With increasing regulatory requirements and cybersecurity threats, ${industry.name} organizations are prioritizing secure architectures, compliance automation, and robust data governance frameworks.`
                },
                {
                  icon: Users,
                  title: "Customer-Centric Innovation",
                  description: `Modern ${industry.name} businesses are adopting customer-centric approaches, leveraging personalization, omnichannel experiences, and real-time engagement to build loyalty and drive growth.`
                },
                {
                  icon: Cpu,
                  title: "AI & Automation Integration",
                  description: `Artificial intelligence and automation are reshaping ${industry.name} operations, enabling predictive analytics, intelligent workflows, and scalable solutions that reduce costs and improve efficiency.`
                }
              ].map((insight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-gradient-to-br from-[#0d2828] to-[#0a1f1f] border-2 border-[#1BE1D3]/20 rounded-2xl p-6 sm:p-8 hover:border-[#1BE1D3]/50 hover:shadow-[0_0_40px_rgba(27,225,211,0.2)] transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30 group-hover:scale-110 transition-transform duration-300">
                        <insight.icon className="w-6 h-6 text-[#1BE1D3]" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-light mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Yurekh for {industry.name} */}
      <section className="py-16 sm:py-20 bg-[#0b0f0f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30">
                  <Award className="w-6 h-6 text-[#1BE1D3]" />
                </div>
              </div>
              <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-medium mb-3 block">
                WHY CHOOSE US
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-light mb-4">
                Why Choose Yurekh for {industry.name}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
                <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, title: "Industry Expertise", desc: `Deep domain knowledge in ${industry.name.toLowerCase()} sector with proven track record.` },
                { icon: Rocket, title: "Fast Delivery", desc: "Agile development methodology ensuring quick time-to-market." },
                { icon: Shield, title: "Enterprise Security", desc: "Robust security frameworks and compliance-ready architectures." },
                { icon: Users, title: "Dedicated Support", desc: "24/7 support with dedicated account managers for your success." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#1BE1D3]/30 transition-all duration-300"
                >
                  <item.icon className="h-10 w-10 text-[#1BE1D3] mx-auto mb-4" />
                  <h3 className="text-white text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0b0f0f] to-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1BE1D3]/20 to-[#1BE1D3]/5 flex items-center justify-center border border-[#1BE1D3]/30">
                  <CheckSquare className="w-6 h-6 text-[#1BE1D3]" />
                </div>
              </div>
              <span className="text-[#1BE1D3] uppercase tracking-[0.25em] text-xs font-medium mb-3 block">
                FAQ
              </span>
              <h2 className="text-white text-3xl sm:text-4xl font-light mb-4">
                Frequently Asked Questions
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-1 bg-[#1BE1D3] rounded-full" />
                <div className="w-3 h-1 bg-[#1BE1D3] rounded-full" />
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  q: `What ${industry.name} solutions does Yurekh offer?`,
                  a: `Yurekh provides comprehensive ${industry.name.toLowerCase()} solutions including custom software development, digital transformation, platform integration, and ongoing support tailored to your specific business needs.`
                },
                {
                  q: `How long does a typical ${industry.name} project take?`,
                  a: `Project timelines vary based on scope and complexity. Most ${industry.name.toLowerCase()} projects range from 3-6 months for initial development, with ongoing support and optimization thereafter.`
                },
                {
                  q: `Do you provide ongoing support for ${industry.name} platforms?`,
                  a: `Yes, we offer comprehensive post-launch support including maintenance, updates, performance monitoring, and continuous improvement to ensure your ${industry.name.toLowerCase()} platform remains competitive.`
                },
                {
                  q: `What technologies do you use for ${industry.name} solutions?`,
                  a: `We leverage cutting-edge technologies including cloud platforms, AI/ML, modern frameworks, and industry-specific tools to build scalable and secure ${industry.name.toLowerCase()} solutions.`
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#0d2828]/50 border border-white/10 rounded-xl p-6 hover:border-[#1BE1D3]/30 transition-all duration-300"
                >
                  <h3 className="text-[#1BE1D3] text-lg font-light mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      <section className="py-12 bg-[#0d2828]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-white/40 text-sm uppercase tracking-wider mb-6">
              Related Keywords
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {industry.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full text-sm border border-white/10 text-white/50 hover:border-[#1BE1D3]/30 hover:text-[#1BE1D3] transition-all duration-300"
                >
                  {keyword}
                </span>
              ))}
            </div>
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
            <h2 className="text-white text-3xl sm:text-4xl font-light mb-4">
              {industry.ctaTitle}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              {industry.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/bookingform")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[#1BE1D3] transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]"
                style={{
                  backgroundColor: "rgba(27,225,211,0.1)",
                  border: "2px solid rgba(27,225,211,0.5)",
                }}
              >
                Consult Our Experts <ArrowRight className="h-5 w-5" />
              </button>
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

export default IndustryDetail;
