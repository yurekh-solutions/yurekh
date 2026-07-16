"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// This is the data for the tabs and cards
const serviceData = [
  {
    tabTitle: "IT Solutions",
    cards: [
      {
        title: "System Maintenance",
        imageSrc:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        description:
          "Our proactive maintenance keeps your systems running at peak performance, minimizing downtime and maximizing productivity.",
      },
      {
        title: "Managed IT Services",
        imageSrc:
          "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        description:
          "We manage your entire IT infrastructure, from network support to software updates, so you can focus on your business goals.",
      },
      {
        title: "IT Support & Help Desk",
        imageSrc:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
        description:
          "Our dedicated help desk provides prompt support, resolving your issues quickly so you can get back to work without interruption.",
      },
    ],
  },
  {
    tabTitle: "Digital Marketing",
    cards: [
      {
        title: "Social Media Strategy",
        description:
          "We craft compelling social media campaigns that increase brand visibility and drive meaningful engagement with your audience.",
        imageSrc:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
      },
      {
        title: "SEO and Content Creation",
        imageSrc:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
        description:
          "Improve your search engine rankings and attract organic traffic with our expert SEO and high-quality content services.",
      },
      {
        title: "Performance Analytics",
        description:
          "We provide clear, data-driven insights into your marketing campaigns, helping you make informed decisions to optimize results.",
        imageSrc:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
      },
    ],
  },
  {
    tabTitle: "Web Development",
    cards: [
      {
        title: "Custom Website Design",
        imageSrc:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
        description:
          "Our team designs and develops stunning, custom websites that are both visually appealing and highly functional across all devices.",
      },
      {
        title: "E-commerce Solutions",
        imageSrc:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        description:
          "We build robust e-commerce platforms that are secure, scalable, and provide a seamless shopping experience for your customers.",
      },
      {
        title: "Responsive Development",
        imageSrc:
          "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1200&auto=format&fit=crop",
        description:
          "Every website we create is fully responsive, ensuring an optimal viewing and interaction experience on all devices, from desktop to mobile.",
      },
    ],
  },
  {
    tabTitle: "Cloud Services",
    cards: [
      {
        title: "Cloud Migration",
        imageSrc:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        description:
          "We provide seamless migration of your data and applications to the cloud, minimizing disruption and maximizing efficiency.",
      },
      {
        title: "Cloud Management",
        imageSrc:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        description:
          "Our expert team manages your cloud infrastructure to ensure it is secure, cost-effective, and always available.",
      },
      {
        title: "Hybrid Cloud Solutions",
        imageSrc:
          "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1200&auto=format&fit=crop",
        description:
          "We design and implement hybrid cloud environments, giving you the best of both private and public cloud capabilities.",
      },
    ],
  },
  {
    tabTitle: "Data Analytics",
    cards: [
      {
        title: "Business Intelligence",
        imageSrc:
          "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
        description:
          "Transform raw data into actionable insights with our business intelligence solutions, enabling smarter, data-driven decisions.",
      },
      {
        title: "Data Visualization",
        imageSrc:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
        description:
          "Our data visualization services make complex data easy to understand with interactive dashboards and clear, impactful reports.",
      },
      {
        title: "Data Warehousing",
        imageSrc:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
        description:
          "We build and manage scalable data warehouses, providing a centralized and secure foundation for your business intelligence needs.",
      },
    ],
  },
  {
    tabTitle: "Cybersecurity",
    cards: [
      {
        title: "Threat Detection",
        imageSrc:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
        description:
          "Our advanced threat detection systems continuously monitor your network for anomalies, identifying and neutralizing threats before they can cause harm.",
      },
      {
        title: "Security Audits",
        imageSrc:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
        description:
          "We conduct comprehensive security audits to identify vulnerabilities in your systems, providing a clear roadmap to enhance your protection.",
      },
      {
        title: "Employee Training",
        imageSrc:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
        description:
          "Our training programs educate your staff on the latest cybersecurity threats and best practices, turning your team into your first line of defense.",
      },
    ],
  },
  {
    tabTitle: "UI/UX Design",
    cards: [
      {
        title: "User-Centered Design",
        imageSrc:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        description:
          "We create intuitive and engaging user interfaces that are designed with your audience in mind, ensuring a seamless and enjoyable user experience.",
      },
      {
        title: "Prototyping & Testing",
        imageSrc:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        description:
          "We turn your ideas into interactive prototypes, testing them with real users to refine the design and ensure it meets your business objectives.",
      },
      {
        title: "Brand Identity",
        imageSrc:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
        description:
          "We help you create a strong and memorable brand identity, from logos and color palettes to typography and brand guidelines.",
      },
    ],
  },
  {
    tabTitle: "Business Consulting",
    cards: [
      {
        title: "Business Strategy",
        imageSrc:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        description:
          "Develop comprehensive strategies to drive growth, optimize operations, and achieve your long-term business objectives.",
      },
      {
        title: "Market Research",
        imageSrc:
          "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
        description:
          "Gain deep insights into market trends, customer behavior, and competitive landscapes to make informed business decisions.",
      },
      {
        title: "Marketing & Branding",
        imageSrc:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
        description:
          "Build a powerful brand presence with strategic marketing campaigns that resonate with your target audience.",
      },
      {
        title: "Financial Planning",
        imageSrc:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
        description:
          "Navigate complex financial decisions with expert guidance on budgeting, forecasting, and resource allocation.",
      },
      {
        title: "Operational Efficiency",
        imageSrc:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        description:
          "Streamline processes and improve productivity with data-driven operational improvements and best practices.",
      },
      {
        title: "Start-Up Advisory",
        imageSrc:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
        description:
          "Get expert guidance on launching and scaling your startup, from business planning to funding strategies.",
      },
      {
        title: "Digital Transformation",
        imageSrc:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
        description:
          "Modernize your business with cutting-edge digital solutions that enhance efficiency and customer experience.",
      },
      {
        title: "HR Consulting",
        imageSrc:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        description:
          "Build high-performing teams with strategic HR solutions including talent acquisition, development, and retention.",
      },
      {
        title: "Risk Management",
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        description:
          "Identify, assess, and mitigate business risks with comprehensive risk management frameworks and strategies.",
      },
      {
        title: "Executive Coaching",
        imageSrc:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
        description:
          "Empower your leadership team with personalized coaching to enhance decision-making and organizational performance.",
      },
    ],
  },
];

const Service = () => {
  const [activeTab, setActiveTab] = useState(serviceData[0].tabTitle);
  const [tappedCardIndex, setTappedCardIndex] = useState(null);

  const activeContent = serviceData.find((item) => item.tabTitle === activeTab);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleCardTap = (index) => {
    setTappedCardIndex(tappedCardIndex === index ? null : index);
  };

  return (
    <div className="min-h-[600px] bg-gradient-space text-white font-sans flex flex-col items-center py-12 px-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass bg-gradient-space border border-[#009494]-400/40 mb-6">
        <span className="text-[12px] font-semibold text-[#009494] uppercase tracking-[0.3em]">
          Our Services
        </span>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-16">
        {serviceData.map((tab) => (
          <motion.button
            key={tab.tabTitle}
            onClick={() => setActiveTab(tab.tabTitle)}
            className={`py-2.5 px-5 rounded-3xl font-semibold transition-all duration-300 backdrop-blur-md text-[14px] ${
              activeTab === tab.tabTitle
                ? "bg-[#009494] text-white shadow-lg"
                : "bg-transparent text-white hover:text-[#96ffea] hover:shadow-[0_0_15px_#96ffea] border border-transparent hover:border-[#96ffea]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.tabTitle}
          </motion.button>
        ))}
      </div>

      {/* Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeContent &&
          activeContent.cards.map((card, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardTap(index)}
              className={`group relative h-72 rounded-[10px] overflow-hidden shadow-xl cursor-pointer transition-all duration-500 border border-white/20 hover:border-[#96ffea] hover:shadow-[0_0_20px_#96ffea] hover:scale-105 ${
                tappedCardIndex === index
                  ? "border-[#96ffea] shadow-[0_0_20px_#001e1e] scale-105"
                  : ""
              }`}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>

              {/* Text */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                <h2
                  className={`text-[18px] font-semibold text-white mb-2 transition-colors duration-500 md:group-hover:text-[#96ffea] ${
                    tappedCardIndex === index ? "text-[#96ffea]" : ""
                  }`}
                >
                  {card.title}
                </h2>
                <p
                  className={`text-[14px] font-normal text-white transition-colors duration-500 md:group-hover:text-[#96ffea] ${
                    tappedCardIndex === index ? "text-[#96ffea]" : ""
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Service;
