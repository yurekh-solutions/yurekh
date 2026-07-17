import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Mail, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0b0f0f] relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 bg-[#1BE1D3]/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#1BE1D3]/30 mb-6">
            <Shield className="w-5 h-5 text-[#1BE1D3]" />
            <span className="text-[#1BE1D3] text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>Privacy Policy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, letterSpacing: "-0.02em" }}>
            <span className="text-white block mb-1">Privacy Policy</span>
            <span className="text-[#1BE1D3]">Yurekh Solutions</span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#0d2828]/80 to-[#0a1f1f]/80 backdrop-blur-xl border-2 border-[#1BE1D3]/20 rounded-3xl p-6 sm:p-8 lg:p-10 space-y-8"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>1. Information We Collect</h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/70" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and website</li>
                <li>Business details and requirements</li>
                <li>Payment information for services</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>2. How We Use Your Information</h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/70" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Process payments and send invoices</li>
                <li>Communicate about products, services, and events</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>3. Information Sharing</h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                We do not share your personal information with third parties except:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/70" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist our operations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>4. Data Security</h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>5. Your Rights</h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/70" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>6. Cookies</h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>7. International Transfers</h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>8. Changes to This Policy</h2>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>9. Contact Us</h2>
              <p className="text-white/70 leading-relaxed mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1BE1D3]" />
                  <span className="text-white/70" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>yurekhsolutions@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#1BE1D3]" />
                  <span className="text-white/70" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>https://yurekh.com</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1BE1D3]/20">
              <p className="text-white/50 text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                Last updated: July 2026
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/" className="flex-1">
              <button
                className="w-full py-4 px-6 rounded-xl bg-white/5 border border-[#1BE1D3]/20 text-white hover:bg-[#1BE1D3]/10 transition-all duration-300"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
              >
                Back to Home
              </button>
            </Link>
            <Link to="/terms" className="flex-1">
              <button
                className="w-full py-4 px-6 rounded-xl bg-[#1BE1D3] text-black hover:bg-[#1BE1D3]/80 transition-all duration-300"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
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
