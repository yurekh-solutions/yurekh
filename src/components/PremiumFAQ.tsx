import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus, ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What services does Yurekh Solutions offer for growing businesses?",
    answer: "Yurekh Solutions is one partner for complete execution: website development, e-commerce development, custom software, mobile apps, AI chatbots and automation, SEO, digital marketing, branding and design, and the AINOS Business Suite (invoicing, CRM, HR and automation in one dashboard). Instead of managing five vendors, you get strategy, design, build and marketing delivered as one accountable system."
  },
  {
    id: 2,
    question: "How much does a professional business website cost in India?",
    answer: "It depends on what the website must do for your business. A conversion-focused business website is a different investment from an e-commerce store with payments and inventory, or a custom web application. After a short discovery call we give you a transparent, fixed quote in \u20B9 with clear deliverables \u2014 no hidden fees and no surprise add-ons later."
  },
  {
    id: 3,
    question: "How long does it take to launch a website or e-commerce store?",
    answer: "A conversion-ready business website typically launches in 4\u20138 weeks. E-commerce stores and custom web applications take 2\u20136 months depending on features. You get a detailed timeline before we start, weekly progress updates while we build, and a launch plan so the site starts generating enquiries from day one."
  },
  {
    id: 4,
    question: "Can you help my business get more leads and sales online?",
    answer: "Yes \u2014 that is the outcome we are hired for. We combine buyer-intent SEO, Google rankings, conversion-focused website design, WhatsApp funnels and follow-up automation so enquiries actually turn into paying customers. Traffic without conversion is vanity; we build the full pipeline from search to sale."
  },
  {
    id: 5,
    question: "Do you help foreign companies enter the Indian market?",
    answer: "Yes. Our Launch in India service covers the full sequence: company registration and compliance, an India-first website with \u20B9 pricing and WhatsApp integration, and go-to-market execution. One partner runs entity, presence and demand in parallel \u2014 which is how clients launch in around 90 days instead of 9 months."
  },
  {
    id: 6,
    question: "What is AINOS Business Suite and who is it for?",
    answer: "AINOS is our all-in-one business software for Indian SMEs: invoicing, CRM, HR and payroll, inventory, automations and an AI Studio behind one login. Plans start at \u20B91,999/month with no per-user charges. If your business runs on six disconnected apps and spreadsheets today, AINOS replaces the stack in one afternoon."
  },
  {
    id: 7,
    question: "Do you provide ongoing support after project delivery?",
    answer: "Yes. We offer maintenance and growth packages covering bug fixes, security updates, speed optimization, new features, and monthly SEO and analytics reports explained in plain language. Most clients stay with us long after launch \u2014 your website should keep improving, not quietly decay."
  },
  {
    id: 8,
    question: "Do you sign NDAs and keep client work confidential?",
    answer: "Yes. We sign NDAs before any project discussion and never publish client names or data without written permission \u2014 confidentiality is a core policy, not an exception. Your intellectual property, business data and even the fact that we work together stay protected."
  },
  {
    id: 9,
    question: "Can you work with our existing team or agency?",
    answer: "Absolutely. We regularly act as an extension of in-house teams \u2014 adding senior developers, designers or marketing specialists where you have gaps. We integrate with your tools and workflow, and we are equally comfortable leading the engagement end-to-end or slotting into yours."
  },
  {
    id: 10,
    question: "What makes Yurekh Solutions different from other agencies?",
    answer: "One Partner. Complete Execution. Most agencies sell you one piece and blame the other vendors when results stall. We own the whole outcome \u2014 strategy, brand, website, marketing and the software that runs your operations \u2014 with senior people on every engagement and results measured in enquiries and revenue, not just deliverables."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

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
              Straight answers on pricing, timelines, launching in India, and how we turn websites into revenue.
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

          {/* Conversion CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 sm:mt-12 text-center"
          >
            <p className="text-[13px] sm:text-[14px] text-white/60 mb-5">
              Have a question about your specific business?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <Link
                to="/bookingform"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-black font-semibold text-[14px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
                style={{ backgroundColor: "#1BE1D3" }}
              >
                Book a Consultation <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </Link>
              <a
                href="https://wa.me/919136242706"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14px] text-[#1BE1D3] transition-all duration-300 hover:bg-[rgba(27,225,211,0.15)]"
                style={{
                  background: "rgba(27,225,211,0.08)",
                  border: "1px solid rgba(27,225,211,0.25)",
                }}
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQPage structured data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};

export default PremiumFAQ;
