import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Yurekh Solutions?",
      answer: "Yurekh Solutions is a full-system business building studio. We work with founders building from an idea and with leadership teams scaling existing businesses. Strategy, legal, technology, branding, and go-to-market built as one integrated system, led by senior consultants from the first conversation through launch and beyond.",
    },
    {
      question: "Where is Yurekh Solutions located?",
      answer: "Our registered offices are in India, UAE, United States, United Kingdom, Singapore, and Australia. Our team is globally distributed and our engagements span across continents. We serve clients in multiple time zones and regulatory environments.",
    },
    {
      question: "Who founded Yurekh Solutions?",
      answer: "Yurekh Solutions was founded by a team of serial entrepreneurs and senior consultants with decades of combined experience in technology, business strategy, and global market expansion. Our leadership team has built and scaled multiple successful businesses across industries.",
    },
    {
      question: "Who are the ideal clients for Yurekh Solutions?",
      answer: "We work with two types of clients: (1) Founders building from an idea - typically pre-launch or early-launch, who need a strategic partner that thinks like a co-founder and can build the full business system from the ground up. (2) Established businesses ready for what's next - whether that's global expansion, digital transformation, or new revenue channels.",
    },
    {
      question: "What makes Yurekh Solutions different from other consultancies?",
      answer: "Several things: We are a full-stack partner - legal, strategy, technology, branding, and marketing conceived and executed as one integrated system. No handoffs between agencies. Every engagement is led by senior operators, not juniors. We treat every business as a commercial problem first. And unlike most consultancies, we stay post-launch as long-term partners, not just project completers.",
    },
    {
      question: "What services does Yurekh Solutions offer?",
      answer: "We operate as a full-system studio across: Business Strategy & Formation, Legal & Compliance, Brand Identity & Design, Technology Development (SaaS, CRM, AI, Mobile Apps), Digital Marketing & Growth, Go-to-Market Strategy, and Brand Custodianship (ongoing support post-launch).",
    },
    {
      question: "Does Yurekh Solutions work with international clients?",
      answer: "Yes. We work across India, the Middle East, the United States, United Kingdom, Singapore, Australia, and international markets. Our offices in 6 countries allow us to serve clients across time zones and regulatory environments. Engagements can be structured to meet local requirements.",
    },
    {
      question: "What industries does Yurekh Solutions serve?",
      answer: "We serve 10+ industries including Technology & SaaS, E-Commerce & Retail, Healthcare & Pharma, Finance & FinTech, Real Estate, Education & EdTech, Food & Beverage, Manufacturing, Hospitality, and Media & Entertainment.",
    },
    {
      question: "How long does a typical engagement last?",
      answer: "For early-stage businesses, engagements typically run 12-18 months or longer. The first 3-4 months focus on core business build: legal setup, strategy, brand, technology, and go-to-market. The second phase moves into post-launch custodianship: optimization, growth, and scaling. Total length depends on your in-house capabilities and growth trajectory.",
    },
    {
      question: "What is Brand Custodianship?",
      answer: "Post-launch, we operate as an ongoing strategic and creative partner. Brand custodianship includes: monthly business pulse reports, strategic sessions with your partner principal, A/B testing protocols, performance measurement, vendor introductions, hiring support, and investor/operator introductions where relevant. The custodianship ends when your business is winning and your internal team can carry it forward.",
    },
    {
      question: "Does Yurekh Solutions take equity in client companies?",
      answer: "In select cases, yes. Yurekh Solutions has taken equity positions in early-stage businesses where the alignment is exceptional and the long-term upside is compelling. These arrangements are discussed case by case and are not a standard part of the engagement model.",
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models: (1) Project-based fees for defined scopes, (2) Monthly retainer for ongoing custodianship, (3) Equity participation in select early-stage companies, (4) Hybrid models combining fees and equity. Pricing is discussed after understanding your specific needs and goals.",
    },
    {
      question: "How do I start a conversation with Yurekh Solutions?",
      answer: "Through the Book a Consultation form on our website or by calling +91 91362 42706. Our team reviews every inquiry before suggesting next steps. We do not do volume - when we move forward it's because we believe there's a genuine fit and we can deliver exceptional results.",
    },
    {
      question: "What is your guarantee?",
      answer: "Every Yurekh Solutions engagement begins with a commitment clause. If the strategic or creative alignment is not right, for either side, we disengage at the end of month one. We only work with businesses we believe in, and that belief has to run in both directions.",
    },
    {
      question: "Can Yurekh Solutions help with company registration and legal compliance?",
      answer: "Yes. We provide complete business registration, legal structure setup, compliance frameworks, and corporate governance for India, UAE, US, UK, Singapore, and other markets. This includes company formation, tax structuring, regulatory compliance, IP protection, and ongoing legal advisory.",
    },
    {
      question: "Do you build custom software and technology solutions?",
      answer: "Absolutely. We build custom SaaS platforms, CRM systems, mobile applications, AI chatbots, e-commerce platforms, and enterprise software. We are stack-agnostic and build across the full spectrum: cloud-native architectures, AI/ML integration, API development, and scalable infrastructure.",
    },
    {
      question: "What is your team structure?",
      answer: "Yurekh Solutions is built around a partner principal model. A partner principal leads every engagement end-to-end and is supported by a core team of senior operators: business strategists, legal advisors, technologists, designers, and marketing specialists. Behind the studio is a decade-long vendor and advisor network spanning strategy consultants, lawyers, engineers, and go-to-market specialists.",
    },
    {
      question: "How can I apply to join Yurekh Solutions?",
      answer: "We are selectively growing our partner principal network. We're looking for operators who have run business engagements end-to-end: strategy through execution. If that's you, write to us at yurekhsolutions@gmail.com. Tell us what you've built, who you've built it for, and what you would do differently with the right platform.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      <SEOHead
        title="Frequently Asked Questions | Yurekh Solutions"
        description="Find answers to common questions about Yurekh Solutions. Learn about our services, pricing, engagement model, industries served, and how to get started with global business building."
        keywords="Yurekh Solutions FAQ, business consulting FAQ, company formation FAQ, pricing FAQ, services FAQ, how to start, engagement model"
        canonical="https://yurekh.com/faq"
        breadcrumbs={[{ name: "FAQ", url: "https://yurekh.com/faq" }]}
      />
      {/* Hero Section */}
      <section style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }} className="pt-32 md:pt-40 pb-20 md:pb-28 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#1BE1D3] font-semibold text-[12px] tracking-[0.3em] uppercase mb-6">
                Frequently Asked Questions
              </p>
              <h1
                className="text-white text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 tracking-normal"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.15" }}
              >
                Everything You Need to Know.
              </h1>
              <p
                className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
              >
                What Yurekh Solutions is, how we work, who we work with, and how to start a conversation. Everything you need to know before reaching out.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }} className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#1BE1D3]/30 transition-all duration-300"
                >
                  <h3
                    className="text-white text-lg md:text-xl font-normal mb-4"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    className="text-white/70 text-sm md:text-base leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white text-3xl sm:text-4xl md:text-5xl font-normal mb-6 tracking-normal"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, lineHeight: "1.25" }}
            >
              Still Have Questions?
            </h2>
            <p
              className="text-white/70 max-w-2xl mx-auto mb-10 text-base sm:text-lg"
              style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.7" }}
            >
              Let's discuss your specific needs and how Yurekh Solutions can help you build, launch, and scale your business globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/bookingform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  backgroundColor: "#1BE1D3",
                }}
              >
                Book a Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="mailto:yurekhsolutions@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 hover:bg-white/10"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              >
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
