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
        title="Yurekh Solutions | Global Business Building Studio | We Build Businesses"
        description="Full-system business building studio helping founders and enterprises build, launch, and scale globally. Strategy, legal, technology, branding & go-to-market. Offices in India, UAE, USA, UK, Singapore & Australia."
        keywords="Yurekh Solutions, business building, global consulting, startup consulting, SaaS development, AI software, brand building, digital transformation, company formation, go-to-market strategy, web development, mobile app development, e-commerce, CRM systems, cloud solutions, SEO agency, digital marketing"
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
  <ServicesSection/>
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
