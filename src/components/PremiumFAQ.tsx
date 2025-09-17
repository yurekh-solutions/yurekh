import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Lightbulb, Clock, Shield, CheckCircle, Sparkles } from "lucide-react";

const pricingTiers = [
  {
    title: "Starter",
    price: "$99",
    period: "/month",
    description: "Ideal for small businesses and startups looking to get started with AI automation.",
    features: [
      "Basic AI Campaign Automation",
      "Limited User Analytics",
      "Email & Chat Support",
      "Up to 10k AI interactions",
    ],
  },
  {
    title: "Pro",
    price: "$299",
    period: "/month",
    description: "Designed for growing businesses needing advanced features and deeper insights.",
    features: [
      "Full AI Marketing Suite",
      "Predictive Analytics",
      "Dedicated Account Manager",
      "Unlimited AI interactions",
      "Priority 24/7 Support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with unique, complex requirements.",
    features: [
      "All Pro features",
      "Custom AI Model Development",
      "On-premise Deployment Options",
      "Service Level Agreements (SLA)",
      "Dedicated Technical Team",
    ],
  },
];

const faqs = [
  {
    id: 1,
    category: "AI Services",
    icon: Lightbulb,
    question: "How does AI marketing automation actually work for my business?",
    answer: "Our AI marketing automation uses machine learning algorithms to analyze customer behavior, predict preferences, and automatically optimize campaigns in real-time. It includes predictive analytics, automated A/B testing, dynamic content personalization, and intelligent audience segmentation. The system learns from your data to continuously improve performance and maximize ROI."
  },
  {
    id: 2,
    category: "Implementation",
    icon: Clock,
    question: "How long does it take to implement and see results?",
    answer: "Implementation typically takes 2-4 weeks depending on complexity. Initial setup and integration can be completed within the first week, with full optimization rolling out over the following weeks. Most clients see initial improvements within 30 days, with significant results (200-400% improvement) typically achieved within 60-90 days."
  },
  {
    id: 3,
    category: "Pricing",
    icon: HelpCircle,
    question: "What are your pricing models and what's included?",
    answer: "We offer flexible pricing models including project-based, monthly retainers, and performance-based options. All packages include strategy development, implementation, ongoing optimization, regular reporting, and dedicated support. Custom enterprise solutions are available for larger organizations with specific requirements."
  },
  {
    id: 4,
    category: "Integration",
    icon: Shield,
    question: "Can your solutions integrate with our existing systems?",
    answer: "Yes, our solutions are built with integration in mind. We work with all major CRM systems (Salesforce, HubSpot, Pipedrive), marketing platforms (Mailchimp, Klaviyo, Marketo), analytics tools (Google Analytics, Adobe Analytics), and e-commerce platforms (Shopify, WooCommerce, Magento). Custom integrations are also available."
  },
  {
    id: 5,
    category: "Support",
    icon: Shield,
    question: "What kind of support and training do you provide?",
    answer: "We provide comprehensive support including 24/7 technical assistance, dedicated account management, regular performance reviews, and complete training programs for your team. This includes video tutorials, live training sessions, documentation, and ongoing consultation to ensure your success."
  },
  {
    id: 6,
    category: "ROI",
    icon: Lightbulb,
    question: "What kind of ROI can we expect from your services?",
    answer: "While results vary by industry and implementation, our clients typically see 200-400% improvement in key metrics within 90 days. This includes increased lead generation, higher conversion rates, improved customer retention, and reduced acquisition costs. We provide detailed ROI tracking and transparent reporting throughout our partnership."
  },
  {
    id: 7,
    category: "Security",
    icon: Shield,
    question: "How do you ensure data security and compliance?",
    answer: "We maintain enterprise-grade security with SOC 2 compliance, GDPR adherence, and end-to-end encryption. All data is processed securely with strict access controls, regular security audits, and compliance with industry standards. We provide detailed security documentation and can sign custom data processing agreements as needed."
  },
  {
    id: 8,
    category: "Customization",
    icon: HelpCircle,
    question: "Can you create custom AI solutions for our specific needs?",
    answer: "Absolutely! We specialize in developing custom AI solutions tailored to your unique business requirements. This includes custom machine learning models, proprietary algorithms, specialized integrations, and bespoke analytics dashboards. Our technical team works closely with you to understand your needs and develop the perfect solution."
  },
  {
    id: 9,
    category: "AI Services",
    icon: Lightbulb,
    question: "What is the difference between machine learning and deep learning in your solutions?",
    answer: "Machine learning is a subset of AI that uses algorithms to learn from data and make predictions. Our solutions use it for tasks like segmentation and predictive analytics. Deep learning, a more advanced form of machine learning, uses multi-layered neural networks to solve more complex problems, such as natural language processing and image recognition, enabling more sophisticated content personalization."
  },
  {
    id: 10,
    category: "Implementation",
    icon: Clock,
    question: "Do you offer a trial period or a demo?",
    answer: "Yes, we offer a free, no-obligation demo to walk you through our platform's capabilities and show you how it can solve your specific business challenges. For a limited number of clients, we can also set up a pilot program with a subset of our services to demonstrate ROI before a full-scale commitment."
  },
  {
    id: 11,
    category: "Security",
    icon: Shield,
    question: "Is our data secure and private with your service?",
    answer: "Data privacy is our top priority. We use robust encryption protocols, access controls, and regular audits to protect your data. We are fully compliant with major regulations like GDPR and CCPA. Our policies are designed to ensure your data remains confidential and is only used to improve your service performance."
  },
  {
    id: 12,
    category: "Customization",
    icon: HelpCircle,
    question: "Can we adjust the level of automation as we go?",
    answer: "Yes, our platform is designed for flexibility. You have full control over the level of automation. You can start with simple automations and gradually increase the complexity as you get more comfortable and see the benefits. Our team can also help you find the right balance between automation and manual control to fit your strategy."
  },
];

const PremiumFAQ = () => {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState("AI Services");

  const categories = [...new Set(faqs.map(faq => faq.category))];

  useEffect(() => {
    // Reset openId and open the first card in the new category
    const firstFaqInNewCategory = faqs.find(faq => faq.category === activeCategory);
    setOpenId(firstFaqInNewCategory?.id || null);
  }, [activeCategory]);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="bg-gradient-space" id="faq">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars animate-twinkle opacity-20"></div>
        <div className="stars2 animate-twinkle opacity-30"></div>
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-tech rounded-full blur-2xl opacity-30"
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container-glass relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="glass-card inline-flex items-center gap-3 px-6 py-3 mb-8">
            <HelpCircle className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-primary font-bold text-lg">Frequently Asked Questions</span>
          </div>
          <h2 className="title-gradient mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Get instant answers to common questions about our AI-powered solutions and services
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`glass px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white border-primary-dark/50"
                  : "text-primary hover:bg-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeCategory === "Pricing" ? (
            <motion.div
              key="pricing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="glass-card flex flex-col p-8 group hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-bold text-white leading-tight">{tier.title}</h3>
                      </div>
                      <p className="text-white/70 mb-6">{tier.description}</p>
                      <div className="flex items-end mb-8">
                        <span className="text-5xl font-extrabold title-gradient">{tier.price}</span>
                        {tier.period && (
                          <span className="text-xl text-white/60 font-semibold ml-2">{tier.period}</span>
                        )}
                      </div>
                      <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-white">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn-primary w-full">
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-6 justify-center">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card flex-1 min-w-[300px] max-w-lg group hover:border-primary/50 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left flex items-start gap-4 p-6 focus:outline-none"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        openId === faq.id
                          ? 'bg-gradient-primary animate-pulse-glow'
                          : 'bg-white/10 group-hover:bg-primary/20'
                      }`}>
                        <faq.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="glass px-3 py-1 rounded-full inline-block mb-3">
                              <span className="text-primary text-xs font-medium">{faq.category}</span>
                            </div>
                            <h3 className={`font-semibold text-white leading-tight transition-colors duration-300 ${
                              openId === faq.id ? 'text-gradient' : 'group-hover:text-primary/80'
                            }`}>
                              {faq.question}
                            </h3>
                          </div>
                          <motion.div
                            animate={{ rotate: openId === faq.id ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 transition-colors duration-300 ${
                              openId === faq.id
                                ? 'bg-primary text-white'
                                : 'bg-white/10 text-white/60 group-hover:bg-primary/20 group-hover:text-primary'
                            }`}
                          >
                            <Plus className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
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
                          <div className="px-6 pb-6 pl-20">
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-white/80 leading-relaxed"
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-card max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-accent/10">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse-glow" />
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/70 mb-8">
              Our AI experts are here to help. Schedule a free consultation to discuss your specific needs and get personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Consultation
              </button>
              <button className="btn-glass">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumFAQ;
