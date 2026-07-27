import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Mail, Globe } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#0b0f0f] relative overflow-hidden">
      <SEOHead
        title="Terms & Conditions"
        description="Review the terms and conditions for using Yurekh Solutions services and website, including engagement terms, intellectual property, and liability."
        canonical="https://yurekh.com/terms"
        breadcrumbs={[{ name: 'Terms & Conditions', url: 'https://yurekh.com/terms' }]}
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
            <FileText className="w-4 h-4 text-[#1BE1D3]" />
            <span className="text-[#1BE1D3] text-sm font-medium">Terms & Conditions</span>
          </div>

          <h1 className="text-white text-[30px] sm:text-[36px] lg:text-[40px] font-semibold mb-5 leading-[1.2]">
            <span className="text-white block mb-1">Terms & Conditions</span>
            <span className="text-[#1BE1D3]">Yurekh Solutions</span>
          </h1>

          <p className="text-white/70 text-[15px] sm:text-[16px] leading-[1.8] max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            Please read these terms carefully before using our services.
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
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                By accessing or using Yurekh Solutions' services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">2. Services Description</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Yurekh Solutions provides AI-powered software development, digital marketing, cloud solutions, and IT consulting services. We partner with businesses globally to deliver technology solutions and digital transformation.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">3. Client Responsibilities</h2>
              <p className="text-white/65 text-[14px] leading-[1.8] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>Provide accurate and complete information</li>
                <li>Make payments according to agreed terms</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Maintain confidentiality of project details</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">4. Payment Terms</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Payment terms will be outlined in individual service agreements. Unless otherwise specified:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>Invoices are due within 30 days of issuance</li>
                <li>Late payments may incur additional charges</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Currency and payment methods will be specified in contracts</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">5. Intellectual Property</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                All intellectual property created during the course of our engagement will be transferred to the client upon full payment, unless otherwise agreed in writing. Yurekh Solutions retains the right to use general knowledge, skills, and experience gained during the project.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">6. Confidentiality</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives termination of the agreement.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">7. Limitation of Liability</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Yurekh Solutions shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">8. Termination</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Either party may terminate the service agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>Client shall pay for all work completed up to the termination date</li>
                <li>All deliverables completed will be transferred to the client</li>
                <li>Confidentiality obligations remain in effect</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">9. Governing Law</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">10. Changes to Terms</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Yurekh Solutions reserves the right to modify these terms at any time. Changes will be posted on this page and will be effective immediately. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">11. Contact Information</h2>
              <p className="text-white/65 text-[14px] leading-[1.8] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                For questions about these Terms and Conditions, please contact us:
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
            <Link to="/privacy" className="flex-1">
              <button
                className="w-full py-4 px-6 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.4)]"
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", backgroundColor: "#1BE1D3" }}
              >
                Privacy Policy
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
