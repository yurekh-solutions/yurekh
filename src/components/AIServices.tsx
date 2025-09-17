import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  MessageSquare,
  BarChart3,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const AIServices = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "AI Marketing Automation",
      subtitle: "Intelligent Campaign Management",
      description:
        "Leverage advanced machine learning to optimize marketing campaigns, predict customer behavior, and maximize ROI with personalized experiences.",
      icon: Brain,
      features: [
        "Predictive Analytics",
        "Automated A/B Testing",
        "Dynamic Content Personalization",
        "Smart Audience Segmentation",
      ],
      gradient: "from-teal-500/20 to-cyan-500/20",
      hoverGradient: "from-teal-500/30 to-cyan-500/30",
      stats: { improvement: "300%", metric: "ROI Increase" },
    },
    {
      id: 1,
      title: "Digital Strategy & Growth",
      subtitle: "Data-Driven Excellence",
      description:
        "Transform your digital presence with comprehensive strategies that combine cutting-edge technology with proven marketing principles.",
      icon: TrendingUp,
      features: [
        "Growth Hacking Techniques",
        "Conversion Rate Optimization",
        "Multi-Channel Integration",
        "Performance Analytics",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "from-blue-500/30 to-cyan-500/30",
      stats: { improvement: "250%", metric: "Lead Generation" },
    },
    {
      id: 2,
      title: "Content Intelligence",
      subtitle: "AI-Powered Content Creation",
      description:
        "Create compelling, SEO-optimized content that resonates with your audience using advanced natural language processing and market insights.",
      icon: MessageSquare,
      features: [
        "SEO Content Optimization",
        "Automated Content Generation",
        "Sentiment Analysis",
        "Voice & Tone Matching",
      ],
       gradient: "from-green-900/20 to-emerald-500/20",
      hoverGradient: "from-green-900/30 to-emerald-500/30",
      stats: { improvement: "400%", metric: "Engagement Rate" },
    },
    {
      id: 3,
      title: "Analytics & Insights",
      subtitle: "Business Intelligence Platform",
      description:
        "Unlock actionable insights from your data with advanced analytics, real-time reporting, and predictive modeling capabilities.",
      icon: BarChart3,
      features: [
        "Real-Time Dashboards",
        "Predictive Modeling",
        "Custom KPI Tracking",
        "Automated Reporting",
      ],
     gradient: "from-teal-600/20 to-blue-800/20",
      hoverGradient: "from-teal-600/30 to-blue-800/30",
      stats: { improvement: "180%", metric: "Decision Speed" },
    },
  ];

  const ServiceCard = ({ service, index, isActive }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`premium-card cursor-pointer transition-all duration-500 ${
        isActive ? "scale-105 shadow-[0_0_60px_hsl(var(--primary)/0.4)]" : ""
      }`}
      onMouseEnter={() => setActiveService(index)}
      onClick={() => setActiveService(index)}
    >
      <div
        className={`h-full bg-gradient-to-br ${
          isActive ? service.hoverGradient : service.gradient
        } p-6 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

        {/* Icon */}
        <div className="relative z-10 mb-6">
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 ${
              isActive ? "animate-pulse-glow" : ""
            }`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <service.icon className="w-8 h-8 text-white" />
          </motion.div>

          <div className="glass px-3 py-1 rounded-full inline-block mb-2">
            <span className="text-primary text-sm font-medium">
              {service.subtitle}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
            {service.title}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-white/80 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="glass p-4 rounded-xl mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gradient">
                  {service.stats.improvement}
                </div>
                <div className="text-white/60 text-xs">
                  {service.stats.metric}
                </div>
              </div>
              <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
            </div>
          </div>

          {/* CTA */}
          <motion.button
            className="btn-glass w-full group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      className="bg-gradient-space py-12 lg:py-24 relative overflow-hidden text-[#009494] font-sans"
      id="services"
    >
           <div className="absolute inset-0">
        <div className="stars animate-twinkle opacity-20"></div>
        <div className="stars2 animate-twinkle opacity-30"></div>
      </div>
      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 bg-gradient-ai rounded-full blur-2xl opacity-40 animate-float"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10 container-glass">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="glass-card inline-flex items-center gap-3 px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-primary font-bold text-lg">
              AI-Powered Services
            </span>
          </div>

          <h2 className="title-gradient mb-6">
            Intelligent Solutions for
            <br />
            Digital Excellence
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology, advanced
            analytics, and data-driven strategies that deliver measurable
            results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isActive={activeService === index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-accent/10">
            <Target className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse-glow" />
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Ready to Accelerate Your Growth?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations
              with our AI-powered solutions. Let's discuss how we can customize
              these services for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Get Free Consultation</button>
              <button className="btn-glass">View Case Studies</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIServices;
