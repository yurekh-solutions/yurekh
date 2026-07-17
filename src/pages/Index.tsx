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
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
import InstagramSection from "@/components/InstagramSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section id="header">
        <Header />
      </section>

      <section id="home">
        <Hero />
      </section>

      <section id="partners">
        <TechnologyPartners />
      </section>

      
<section id="casestudy">
  <CaseStudySection/>
  </section>

<section id="services">
  <ServicesSection/>
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
    </div>
  );
};

export default Index;
