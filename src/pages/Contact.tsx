import { useEffect } from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Contact Yurekh Solutions | Get in Touch for Business Consulting"
        description="Contact Yurekh Solutions for business consulting, AI solutions, branding, and digital transformation. Call +91 91362 42706 or email yurekhsolutions@gmail.com."
        keywords="contact yurekh, business consulting contact, AI solutions contact, branding agency contact, digital transformation contact, yurekh solutions contact"
        canonical="https://yurekh.com/contact"
        breadcrumbs={[{ name: "Contact", url: "https://yurekh.com/contact" }]}
      />

      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
      >
        {/* Teal gradient glow */}
        <div className="absolute top-1/4 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1BE1D3]/5 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#1BE1D3]/3 rounded-full blur-[80px] sm:blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[1.1] mb-4 sm:mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Get in Touch
            </h1>
            <p
              className="text-white/60 text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto leading-[1.6]"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
            >
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </>
  );
};

export default ContactPage;
