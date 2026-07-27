import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Mail, Globe } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0b0f0f] relative overflow-hidden">
      <SEOHead
        title="Privacy Policy"
        description="Read the Yurekh Solutions privacy policy. Learn how we collect, use, and protect your personal information across our website and services."
        canonical="https://yurekh.com/privacy"
        breadcrumbs={[{ name: 'Privacy Policy', url: 'https://yurekh.com/privacy' }]}
      />
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1BE1D3]/5 via-transparent to-[#1BE1D3]/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className=" mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1BE1D3]/30 bg-[#1BE1D3]/5 mb-6">
            <Shield className="w-4 h-4 text-[#1BE1D3]" />
            <span className="text-[#1BE1D3] text-sm font-medium">Privacy Policy</span>
          </div>

          <h1 className="text-white text-[30px] sm:text-[36px] lg:text-[40px] font-semibold mb-5 leading-[1.2]">
            <span className="text-white block mb-1">Privacy Policy</span>
            <span className="text-[#1BE1D3]">Yurekh Solutions</span>
          </h1>

          <p className="text-white/70 text-[15px] sm:text-[16px] leading-[1.8] max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#0d2828]/80 to-[#0a1f1f]/80 backdrop-blur-xl border border-[#1BE1D3]/15 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-8"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and website</li>
                <li>Business details and requirements</li>
                <li>Payment information for services</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">2. How We Use Your Information</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Process payments and send invoices</li>
                <li>Communicate about products, services, and events</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">3. Information Sharing</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We do not share your personal information with third parties except:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist our operations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">4. Data Security</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">5. Your Rights</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">6. Cookies</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">7. International Transfers</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">8. Changes to This Policy</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">9. Contact Us</h2>
              <p className="text-white/65 text-[14px] leading-[1.8] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1BE1D3]" />
                  <span className="text-white/70 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>yurekhsolutions@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#1BE1D3]" />
                  <span className="text-white/70 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>https://yurekh.com</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1BE1D3]/20">
              <p className="text-white/45 text-[12px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Last updated: July 2026
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/" className="flex-1">
              <button
                className="w-full py-4 px-6 rounded-full transition-all duration-300 hover:bg-[rgba(27,225,211,0.15)] hover:border-[rgba(27,225,211,0.5)]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "15px", background: "rgba(27,225,211,0.08)", color: "#1BE1D3", border: "1px solid rgba(27,225,211,0.25)" }}
              >
                Back to Home
              </button>
            </Link>
            <Link to="/terms" className="flex-1">
              <button
                className="w-full py-4 px-6 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", backgroundColor: "#1BE1D3" }}
              >
                Terms & Conditions
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
