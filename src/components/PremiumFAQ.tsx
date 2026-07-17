import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What services does Yurekh Solutions offer?",
    answer: "We offer a comprehensive range of digital services including AI & Machine Learning, Web & App Development, Digital Marketing, SEO, Branding & Design, Cloud Solutions, Cybersecurity, and DevOps & Automation. Each service is tailored to help businesses grow and succeed in the digital landscape."
  },
  {
    id: 2,
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on scope and complexity. A typical website takes 4-8 weeks, while complex web applications may take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
  },
  {
    id: 3,
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including project-based, monthly retainers, and hourly rates. Every project starts with a free consultation where we understand your requirements and provide a transparent quote. No hidden fees, no surprises."
  },
  {
    id: 4,
    question: "Do you provide ongoing support after project delivery?",
    answer: "Yes! We offer various maintenance and support packages to ensure your website or application runs smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements. We're here for the long term."
  },
  {
    id: 5,
    question: "Can you work with our existing team?",
    answer: "Absolutely! We frequently collaborate with in-house teams, acting as an extension of your organization. Whether you need additional developers, designers, or marketing experts, we integrate seamlessly with your workflow and tools."
  },
  {
    id: 6,
    question: "What technologies do you specialize in?",
    answer: "We work with modern technologies including React, Next.js, Node.js, Python, AWS, Google Cloud, and more. For AI projects, we use TensorFlow, PyTorch, and OpenAI APIs. We choose the best tech stack based on your project requirements."
  },
  {
    id: 7,
    question: "How do you ensure project quality?",
    answer: "Quality is built into our process. We follow agile methodology with regular sprint reviews, automated testing, code reviews, and QA testing. Every project goes through multiple quality checkpoints before delivery."
  },
  {
    id: 8,
    question: "Do you sign NDAs and protect our data?",
    answer: "Yes, we take data security seriously. We sign NDAs before any project discussion, use secure communication channels, and follow industry-standard security practices. Your intellectual property and data are always protected."
  },
  {
    id: 9,
    question: "Can you help with digital marketing and SEO?",
    answer: "Yes! Our digital marketing services include SEO optimization, social media marketing, content marketing, PPC advertising, and email marketing. We create data-driven strategies to increase your online visibility and drive qualified traffic."
  },
  {
    id: 10,
    question: "What makes Yurekh Solutions different from other agencies?",
    answer: "We combine technical expertise with creative excellence. Our team brings 10+ years of experience, we focus on measurable results, and we treat every client as a long-term partner. Plus, we offer competitive pricing without compromising on quality."
  },
];

const PremiumFAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28" id="faq" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      <div className="relative z-10 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-[#1BE1D3] font-semibold text-[11px] sm:text-[12px] tracking-[0.3em] uppercase mb-3 sm:mb-4">
              FAQ
            </p>
            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-normal text-white leading-[1.2] mb-4 sm:mb-6" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
              Frequently Asked Questions
            </h2>
            <p className="text-[13px] sm:text-[14px] font-normal text-white/70 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and how we can help your business grow.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-xl sm:rounded-2xl overflow-hidden"
                style={{
                  background: openId === faq.id 
                    ? "linear-gradient(135deg, rgba(27,225,211,0.08) 0%, rgba(27,225,211,0.02) 100%)" 
                    : "rgba(255,255,255,0.03)",
                  border: openId === faq.id 
                    ? "1px solid rgba(27,225,211,0.2)" 
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-white leading-[1.4]">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: openId === faq.id ? "rgba(27,225,211,0.2)" : "rgba(255,255,255,0.1)",
                    }}
                  >
                    <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1BE1D3]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-[13px] sm:text-[14px] font-normal text-white/70 leading-[1.7]"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-[14px] sm:text-[16px] text-white/70 mb-4 sm:mb-6">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]"
              style={{
                fontFamily: "Poppins, sans-serif",
                background: "linear-gradient(90deg, #5f636b, #1be1d3, #345d66, #1c1d20)",
                backgroundSize: "300% 100%",
                animation: "gradientBtn 5s ease-in-out infinite",
              }}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradientBtn {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default PremiumFAQ;
