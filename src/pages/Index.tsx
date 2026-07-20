import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechnologyPartners from "@/components/TechnologyPartners";
import About from "@/components/About";
import Service from "@/components/Service";
import VideoShowcase from "@/components/VideoShowcase";
import ProblemSection from "@/components/ProblemSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTABanner from "@/components/CTABanner";
import PremiumFAQ from "@/components/PremiumFAQ";
import Contact from "@/components/Contact";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
import InstagramSection from "@/components/InstagramSection";
import SEOHead from "@/components/SEOHead";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Yurekh Solutions | Business Consulting, Technology & Growth Partner for Startups to Enterprises"
        description="Yurekh Solutions is a global business consulting and technology partner. We help startups, SMEs, and enterprises build, launch, and scale — from strategy and company formation to technology development, branding, marketing, operations, and global expansion. One partner. Complete execution."
        keywords="Yurekh Solutions, business consulting, startup consulting, enterprise consulting, business strategy, company formation, technology development, custom software, mobile app development, brand building, digital marketing, go-to-market strategy, business growth partner, operations consulting, global expansion, SaaS development, AI solutions, cloud infrastructure, SEO agency, web development, e-commerce solutions, CRM systems, business partner"
        canonical="https://yurekh.com/"
      />
      <section id="header">
        <Header />
      </section>

      <section id="home">
        <Hero />
      </section>

      <section id="partners">
        <TechnologyPartners />
      </section>
      


      <section id="case-studies">
        <CaseStudiesSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="process">
        <ProcessSection />
      </section>

      <section id="why-us">
        <WhyChooseUs />
      </section>

       <section id="cta">
        <CTABanner />
      </section>

      <section id="industries">
        <IndustriesSection />
      </section>
    
      <section id="blog">
        <BlogSection />
      </section>

      <section id="instagram">
        <InstagramSection />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="faq">
        <PremiumFAQ />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Lead Capture Popups */}
      <LeadMagnetPopup />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
