import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import TechnologyPartners from "@/components/TechnologyPartners";
import BusinessSolutions from "@/components/BusinessSolutions";
import SEOHead from "@/components/SEOHead";

// Lazy-load below-the-fold sections for faster initial render
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection"));
const CaseStudiesSection = lazy(() => import("@/components/CaseStudiesSection"));
const About = lazy(() => import("@/components/About"));
const PremiumFAQ = lazy(() => import("@/components/PremiumFAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const InstagramSection = lazy(() => import("@/components/InstagramSection"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));

// FAQ schema defined inline so SEOHead renders immediately without waiting for PremiumFAQ chunk
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What services does Yurekh Solutions offer for growing businesses?", acceptedAnswer: { "@type": "Answer", text: "Yurekh Solutions is one partner for complete execution: website development, e-commerce development, custom software, mobile apps, AI chatbots and automation, SEO, digital marketing, branding and design, and the AINOS Business Suite." } },
    { "@type": "Question", name: "How much does a professional business website cost in India?", acceptedAnswer: { "@type": "Answer", text: "It depends on what the website must do for your business. After a short discovery call we give you a transparent, fixed quote in \u20B9 with clear deliverables." } },
    { "@type": "Question", name: "How long does it take to launch a website or e-commerce store?", acceptedAnswer: { "@type": "Answer", text: "A conversion-ready business website typically launches in 4\u20138 weeks. E-commerce stores and custom web applications take 2\u20136 months depending on features." } },
    { "@type": "Question", name: "Can you help my business get more leads and sales online?", acceptedAnswer: { "@type": "Answer", text: "Yes \u2014 we combine buyer-intent SEO, conversion-focused website design, WhatsApp funnels and follow-up automation so enquiries turn into paying customers." } },
    { "@type": "Question", name: "Do you help foreign companies enter the Indian market?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our Launch in India service covers company registration, an India-first website with \u20B9 pricing and WhatsApp integration, and go-to-market execution." } },
    { "@type": "Question", name: "What is AINOS Business Suite and who is it for?", acceptedAnswer: { "@type": "Answer", text: "AINOS is our all-in-one business software for Indian SMEs: invoicing, CRM, HR and payroll, inventory, automations and an AI Studio behind one login. Plans start at \u20B91,999/month." } },
    { "@type": "Question", name: "Do you provide ongoing support after project delivery?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer maintenance and growth packages covering bug fixes, security updates, speed optimization, new features, and monthly SEO and analytics reports." } },
    { "@type": "Question", name: "Do you sign NDAs and keep client work confidential?", acceptedAnswer: { "@type": "Answer", text: "Yes. We sign NDAs before any project discussion and never publish client names or data without written permission." } },
    { "@type": "Question", name: "Can you work with our existing team or agency?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We regularly act as an extension of in-house teams, adding senior developers, designers or marketing specialists where you have gaps." } },
    { "@type": "Question", name: "What makes Yurekh Solutions different from other agencies?", acceptedAnswer: { "@type": "Answer", text: "One Partner. Complete Execution. We own the whole outcome \u2014 strategy, brand, website, marketing and the software that runs your operations." } },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Yurekh Solutions | Business Consulting, Technology & Growth Partner for Startups to Enterprises"
        description="Yurekh Solutions is a global business consulting and technology partner. We help startups, SMEs, and enterprises build, launch, and scale — from strategy and company formation to technology development, branding, marketing, operations, and global expansion. One partner. Complete execution."
        keywords="Yurekh Solutions, business consulting, startup consulting, enterprise consulting, business strategy, company formation, technology development, custom software, mobile app development, brand building, digital marketing, go-to-market strategy, business growth partner, operations consulting, global expansion, SaaS development, AI solutions, cloud infrastructure, SEO agency, web development, e-commerce solutions, CRM systems, business partner"
        canonical="https://yurekh.com/"
        schema={JSON.stringify(faqSchema)}
      />

      {/* Above the fold — eager for instant first paint */}
      <section id="home"><Hero /></section>
      <section id="partners"><TechnologyPartners /></section>
      <section id="business-solutions"><BusinessSolutions /></section>

      {/* Below the fold — lazy-loaded as separate chunks */}
      <Suspense fallback={null}><section id="services"><ServicesSection /></section></Suspense>
      <Suspense fallback={null}><section id="process"><ProcessSection /></section></Suspense>
      <Suspense fallback={null}><section id="why-us"><WhyChooseUs /></section></Suspense>
      <Suspense fallback={null}><section id="cta"><CTABanner /></section></Suspense>
      <Suspense fallback={null}><section id="industries"><IndustriesSection /></section></Suspense>
      <Suspense fallback={null}><section id="case-studies"><CaseStudiesSection /></section></Suspense>
      <Suspense fallback={null}><section id="about"><About /></section></Suspense>
      <Suspense fallback={null}><section id="faq"><PremiumFAQ /></section></Suspense>
      <Suspense fallback={null}><section id="contact"><Contact /></section></Suspense>
      <Suspense fallback={null}><section id="blog"><BlogSection /></section></Suspense>
      <Suspense fallback={null}><section id="instagram"><InstagramSection /></section></Suspense>

      {/* Lead Capture Popup — single-popup policy: exit-intent only on homepage */}
      <Suspense fallback={null}><ExitIntentPopup /></Suspense>
    </div>
  );
};

export default Index;
