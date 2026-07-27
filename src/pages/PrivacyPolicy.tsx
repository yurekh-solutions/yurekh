import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Mail, Globe, Phone, MapPin } from 'lucide-react';
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
            <span className="text-white block mb-1 sm:inline sm:mb-0 sm:mr-3">Privacy Policy</span>
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
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Welcome to yurekh.com (the “Platform”). The Platform is owned and operated by Yurekh Solutions Private Limited (hereinafter referred to as the “Company”, “we”, “us”, or “our”), a technology-first IT and marketing solutions company headquartered in Mumbai, India. We are committed to protecting your privacy and handling your personal data in a transparent, secure manner.
              </p>
              <p className="text-white/65 text-[14px] leading-[1.8] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                This Privacy Policy explains how we collect, use, disclose, process, and safeguard your information when you visit our website, book a consultation, request our resources, or engage our services. By accessing or using the Platform, you explicitly agree to the collection and use of your data in accordance with this policy.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article I: Information We Collect</h2>

              <h3 className="text-white/90 text-[15px] font-semibold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>1.1 Personal Data (Information You Provide)</h3>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We collect personally identifiable information that you voluntarily submit when booking a strategy call, submitting a contact or inquiry form, requesting a downloadable guide, or communicating with us via email or WhatsApp. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li><strong className="text-white/80">Identity Data:</strong> Full name, designation, and company or organization name</li>
                <li><strong className="text-white/80">Contact Data:</strong> Active email address, mobile phone number, city, and country of operation</li>
                <li><strong className="text-white/80">Business Data:</strong> Industry, project requirements, business goals, timelines, and budget indications shared during consultations</li>
                <li><strong className="text-white/80">Financial Data:</strong> Billing details required for service invoicing. All payments are processed via secure, PCI-DSS compliant payment channels — we do not store raw card numbers, PINs, or banking passwords</li>
              </ul>

              <h3 className="text-white/90 text-[15px] font-semibold mb-2 mt-5" style={{ fontFamily: "Poppins, sans-serif" }}>1.2 Automated Data (Technical &amp; Usage Metadata)</h3>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                When you navigate the Platform, our servers automatically log technical details about your device and interaction, including IP address, browser type, operating system, device identifiers, pages viewed, time spent on specific sections, and referring URL paths.
              </p>

              <h3 className="text-white/90 text-[15px] font-semibold mb-2 mt-5" style={{ fontFamily: "Poppins, sans-serif" }}>1.3 Cookies and Tracking Technologies</h3>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We utilize cookies and similar technologies to recognize your browser, remember your preferences, and analyze web traffic patterns. You can manage your cookie preferences through your browser settings; however, disabling cookies may limit certain functionalities on the Platform.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article II: How We Process Your Data</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We process your data strictly on legitimate legal grounds, including performance of a contract, statutory compliance, or with your explicit consent. Your data is used to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li><strong className="text-white/80">Deliver Services:</strong> Respond to inquiries, schedule consultations, prepare proposals, execute contracted engagements, and issue tax invoices</li>
                <li><strong className="text-white/80">Enhance Platform UX:</strong> Personalize content, fix errors, optimize page loading speeds, and conduct internal research to improve our offerings</li>
                <li><strong className="text-white/80">Communication:</strong> Send transactional updates (booking confirmations, project updates via email/WhatsApp) and marketing communications (insights, new services) if you have opted in to receive them</li>
                <li><strong className="text-white/80">Security &amp; Fraud Prevention:</strong> Identify and block suspicious activity, malicious bots, and unauthorized access attempts</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article III: Data Sharing and Disclosures</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We do not sell, rent, or trade your personal data to external third parties for marketing purposes. We share your information only under the following strictly defined conditions:
              </p>

              <h3 className="text-white/90 text-[15px] font-semibold mb-2 mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>3.1 Third-Party Service Providers (Operational Vendors)</h3>
              <ul className="list-disc list-inside space-y-2 mt-2 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li><strong className="text-white/80">Cloud Infrastructure:</strong> Hosting the Platform and project data on secure cloud servers</li>
                <li><strong className="text-white/80">Communication Tools:</strong> Form processing, email, and messaging services used to receive and respond to your inquiries</li>
                <li><strong className="text-white/80">Payment Processors:</strong> Securely handling transactional parameters to complete service payments</li>
              </ul>

              <h3 className="text-white/90 text-[15px] font-semibold mb-2 mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>3.2 Statutory and Legal Mandates</h3>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We will disclose your data if required to do so by applicable Indian laws, judicial court warrants, or formal directives from government authorities (such as law enforcement or tax offices).
              </p>

              <h3 className="text-white/90 text-[15px] font-semibold mb-2 mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>3.3 Corporate Restructuring</h3>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                If the Company undergoes a corporate merger, acquisition, asset sale, or structural reorganization, your data may be transferred as part of the business assets to the succeeding entity, subject to this identical Privacy Policy.
              </p>

              <h3 className="text-white/90 text-[15px] font-semibold mb-2 mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>3.4 Client Confidentiality Commitment</h3>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                As a matter of company policy, we never publish client names, project details, or business data in our marketing materials, case studies, or portfolio without explicit written consent. Engagement details are treated as confidential by default.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article IV: Data Protection &amp; Retention</h2>

              <h3 className="text-white/90 text-[15px] font-semibold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>4.1 Security Measures</h3>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We deploy administrative, technical, and physical security measures (including Secure Socket Layer [SSL] encryption protocols and access controls) designed to protect your data from accidental loss, unauthorized access, or digital breach.
              </p>

              <h3 className="text-white/90 text-[15px] font-semibold mb-2 mt-4" style={{ fontFamily: "Poppins, sans-serif" }}>4.2 Data Retention Windows</h3>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We retain your personal data only as long as necessary to fulfill the operational business purposes outlined in this policy, or to fulfill statutory taxation, legal auditing, and accounting requirements under Indian law.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article V: Your Consumer Rights (DPDP Act Compliance)</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Under the Digital Personal Data Protection framework, you hold distinct rights regarding your data:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li><strong className="text-white/80">Right to Access &amp; Rectification:</strong> Request a summary of your personal data processed by us and request immediate updates to incorrect or outdated information</li>
                <li><strong className="text-white/80">Right to Erasure (Right to be Forgotten):</strong> Request that we completely erase your personal data from our systems, provided the data is no longer necessary for an active engagement or legal compliance</li>
                <li><strong className="text-white/80">Right to Withdraw Consent:</strong> Opt out of marketing communications at any point by clicking the “Unsubscribe” link in our emails or contacting us directly</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article VI: International Data Transfers</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We serve clients across 12+ international markets. Your information may be transferred to and processed in countries other than your own for the purpose of delivering our services. We ensure appropriate contractual and technical safeguards are in place to protect your data in accordance with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article VII: Changes to This Policy</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We may update this policy from time to time to reflect changes in our practices or legal obligations. We will notify you of material changes by posting the revised policy on this page with an updated effective date.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article VIII: Grievance Redressal Officer</h2>
              <p className="text-white/65 text-[14px] leading-[1.8] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                If you have questions regarding this Privacy Policy, wish to exercise your data rights, or file a complaint regarding a suspected data breach, please contact our designated Grievance Officer:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#1BE1D3]" />
                  <span className="text-white/70 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>Attn: Data Grievance Cell, Yurekh Solutions Private Limited</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1BE1D3] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>Registered Office: 01 Ram Raj Building, Vakola Bridge, Datta Mandir Road, Santacruz East, Mumbai – 400055, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1BE1D3]" />
                  <span className="text-white/70 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>connect@yurekh.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#1BE1D3]" />
                  <span className="text-white/70 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>+91 91362 42706</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#1BE1D3]" />
                  <span className="text-white/70 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>https://yurekh.com</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1BE1D3]/20">
              <p className="text-white/45 text-[12px]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Last Updated / Effective Date: July 27, 2026
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
