import { useEffect } from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, CheckCircle, Globe, Building2, Users } from "lucide-react";

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

      {/* Multiple Contact Methods */}
      <section
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2
              className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white leading-[1.1] mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Multiple Ways to Reach Us
            </h2>
            <p
              className="text-white/60 text-[14px] sm:text-[16px] max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
            >
              Choose the contact method that works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Phone */}
            <motion.a
              href="tel:+919136242706"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#1BE1D3]/20 hover:border-[#1BE1D3]/40 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(10,26,26,0.8) 0%, rgba(5,15,15,0.95) 100%)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-[#1BE1D3]" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Call Us
              </h3>
              <p className="text-white/60 text-sm mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                Direct line to our team
              </p>
              <p className="text-[#1BE1D3] font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
                +91 91362 42706
              </p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919136242706"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#1BE1D3]/20 hover:border-[#1BE1D3]/40 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(10,26,26,0.8) 0%, rgba(5,15,15,0.95) 100%)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-[#1BE1D3]" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                WhatsApp
              </h3>
              <p className="text-white/60 text-sm mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                Quick chat with us
              </p>
              <p className="text-[#1BE1D3] font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
                Message Now
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:yurekhsolutions@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#1BE1D3]/20 hover:border-[#1BE1D3]/40 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(10,26,26,0.8) 0%, rgba(5,15,15,0.95) 100%)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-[#1BE1D3]" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Email Us
              </h3>
              <p className="text-white/60 text-sm mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                We respond within 12 hours
              </p>
              <p className="text-[#1BE1D3] font-semibold text-sm break-all" style={{ fontFamily: "Poppins, sans-serif" }}>
                yurekhsolutions@gmail.com
              </p>
            </motion.a>

            {/* Book a Call */}
            <motion.a
              href="/bookingform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#1BE1D3]/20 hover:border-[#1BE1D3]/40 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, rgba(10,26,26,0.8) 0%, rgba(5,15,15,0.95) 100%)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-[#1BE1D3]" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Book a Call
              </h3>
              <p className="text-white/60 text-sm mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                30-minute strategy session
              </p>
              <p className="text-[#1BE1D3] font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
                Schedule Now
              </p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
      >
        <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1BE1D3]/5 rounded-full blur-[100px] sm:blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2
              className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-white leading-[1.1] mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
            >
              Why Work With Yurekh?
            </h2>
            <p
              className="text-white/60 text-[14px] sm:text-[16px] max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
            >
              We're not just consultants — we're your growth partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: CheckCircle,
                title: "12-Hour Response Guarantee",
                description: "We respond to every inquiry within 12 hours. No ghosting, no delays — just prompt, professional communication."
              },
              {
                icon: Users,
                title: "Dedicated Consultant",
                description: "Get a dedicated consultant who understands your business inside and out. One point of contact, complete accountability."
              },
              {
                icon: Building2,
                title: "End-to-End Execution",
                description: "From strategy to implementation, we handle everything. No need to juggle multiple vendors — we're your single partner."
              },
              {
                icon: Globe,
                title: "Global Reach, Local Expertise",
                description: "Serving clients across India, UAE, USA, UK, Singapore, and Australia with deep local market knowledge."
              },
              {
                icon: Clock,
                title: "Flexible Engagement Models",
                description: "Project-based, retainer, or hourly — choose the engagement model that fits your needs and budget."
              },
              {
                icon: CheckCircle,
                title: "NDA & Confidentiality",
                description: "Your business ideas and data are safe with us. We sign NDAs and maintain strict confidentiality protocols."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-[#1BE1D3]/20"
                style={{ background: "linear-gradient(135deg, rgba(10,26,26,0.8) 0%, rgba(5,15,15,0.95) 100%)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#1BE1D3]" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-white leading-[1.1] mb-6"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
              >
                Office Hours
              </h2>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM IST", status: "Open" },
                  { day: "Saturday", time: "10:00 AM - 5:00 PM IST", status: "Open" },
                  { day: "Sunday", time: "Closed", status: "Closed" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl border border-[#1BE1D3]/20"
                    style={{ background: "linear-gradient(135deg, rgba(10,26,26,0.6) 0%, rgba(5,15,15,0.8) 100%)" }}
                  >
                    <div>
                      <p className="text-white font-semibold mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {item.day}
                      </p>
                      <p className="text-white/60 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {item.time}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Open"
                          ? "bg-[#1BE1D3]/20 text-[#1BE1D3] border border-[#1BE1D3]/30"
                          : "bg-white/10 text-white/40 border border-white/20"
                      }`}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                * Available for urgent queries outside office hours via WhatsApp
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2
                className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-white leading-[1.1] mb-6"
                style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
              >
                Our Location
              </h2>
              <div
                className="p-6 rounded-2xl border border-[#1BE1D3]/20 mb-4"
                style={{ background: "linear-gradient(135deg, rgba(10,26,26,0.8) 0%, rgba(5,15,15,0.95) 100%)" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1BE1D3]/10 border border-[#1BE1D3]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1BE1D3]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Mumbai, India
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Serving clients globally with remote and on-site consulting options available
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/919136242706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#1BE1D3] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Chat on WhatsApp for instant response
                  </span>
                </a>
                <a
                  href="tel:+919136242706"
                  className="flex items-center gap-3 text-white/60 hover:text-[#1BE1D3] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                    +91 91362 42706
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
