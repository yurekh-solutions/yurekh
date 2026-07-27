import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Mail, Globe, Phone, MapPin } from 'lucide-react';
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
            <span className="text-white block mb-1 sm:inline sm:mb-0 sm:mr-3">Terms & Conditions</span>
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
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Welcome to yurekh.com (the “Platform”). The Platform is owned and operated by Yurekh Solutions Private Limited (hereinafter referred to as the “Company”, “we”, “us”, or “our”). These Terms and Conditions (“Terms”) constitute a legally binding agreement between you (the “Client”, “User”, or “you”) and the Company governing your use of the Platform and engagement of our services.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article I: Acceptance of Terms</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                By accessing the Platform, booking a consultation, or engaging our services, you explicitly agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please refrain from using the Platform or our services. If you are acting on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article II: Scope of Services</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                The Company provides technology and marketing services including, but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>AI-driven marketing — campaign automation, predictive analytics, and personalization</li>
                <li>IT consulting and digital transformation — infrastructure, cloud integration, and custom software development</li>
                <li>Brand and creative strategy — visual identity, performance content, and omnichannel engagement</li>
                <li>Data intelligence — analytics dashboards and performance tracking</li>
                <li>India market entry advisory — assisting foreign companies with registration, localization, and launch operations</li>
              </ul>
              <p className="text-white/65 text-[14px] leading-[1.8] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                The exact scope, deliverables, timelines, and commercial terms of any engagement will be defined in an individual proposal, statement of work, or service agreement (“Engagement Agreement”), which shall prevail over these Terms in case of conflict.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article III: Client Obligations</h2>
              <p className="text-white/65 text-[14px] leading-[1.8] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                As a Client, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>Provide accurate, complete, and lawful information, content, and access credentials required for service delivery</li>
                <li>Make payments in accordance with the agreed commercial terms</li>
                <li>Respond to requests for approvals, feedback, and information within reasonable timelines</li>
                <li>Ensure that all materials supplied to us do not infringe third-party intellectual property or applicable laws</li>
                <li>Comply with all laws and regulations applicable to your business and use of our deliverables</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article IV: Fees and Payment Terms</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Commercial terms are defined in each Engagement Agreement. Unless otherwise specified therein:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>Invoices are payable within 30 days of issuance</li>
                <li>Delayed payments may attract late charges and suspension of ongoing work</li>
                <li>Fees paid for work already performed are non-refundable unless expressly stated otherwise</li>
                <li>All fees are exclusive of applicable taxes (including GST), which shall be charged as per Indian law</li>
                <li>Third-party costs (hosting, domains, advertising spend, software licenses) are billed separately unless included in the Engagement Agreement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article V: Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-2 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li><strong className="text-white/80">Deliverables:</strong> All intellectual property created specifically for the Client during an engagement is transferred to the Client upon receipt of full payment, unless otherwise agreed in writing</li>
                <li><strong className="text-white/80">Pre-Existing IP:</strong> The Company retains ownership of its pre-existing tools, frameworks, code libraries, methodologies, and general know-how used in delivering the services</li>
                <li><strong className="text-white/80">Platform Content:</strong> All content on yurekh.com — including text, graphics, logos, and design — is the property of the Company and may not be reproduced without written permission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article VI: Confidentiality</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Both parties agree to maintain strict confidentiality of proprietary information shared during an engagement. This obligation survives termination of the agreement. As a matter of company policy, we never disclose client names, project details, or business data in our marketing materials, case studies, or portfolio without the Client’s explicit written consent — engagements are confidential by default.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article VII: Third-Party Platforms and Services</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Service delivery may involve third-party platforms (hosting providers, domain registrars, advertising networks, analytics tools, payment gateways). Your use of such platforms is additionally governed by their respective terms of service, and the Company is not responsible for outages, policy changes, pricing changes, or account actions taken by such third parties.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article VIII: Warranties and Disclaimers</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards. However, given the nature of digital services, the Company does not guarantee specific business outcomes — including but not limited to search engine rankings, advertising performance, lead volumes, or revenue figures. Estimates, projections, and benchmarks shared during consultations are indicative and not contractual commitments.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article IX: Limitation of Liability</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or business opportunity. The Company’s total aggregate liability under any engagement shall not exceed the fees actually paid by the Client for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article X: Termination</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Either party may terminate an Engagement Agreement by written notice as per the notice period specified therein. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <li>The Client shall pay for all work completed up to the effective termination date</li>
                <li>All completed and paid-for deliverables will be handed over to the Client</li>
                <li>Confidentiality and intellectual property obligations remain in full effect</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article XI: Governing Law and Jurisdiction</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or any engagement shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India. The parties agree to first attempt good-faith resolution through mutual discussion before initiating formal proceedings.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article XII: Changes to These Terms</h2>
              <p className="text-white/65 text-[14px] leading-[1.8]" style={{ fontFamily: "Poppins, sans-serif" }}>
                The Company reserves the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date and are effective immediately upon posting. Continued use of the Platform or our services constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[17px] sm:text-[18px] font-semibold mb-3">Article XIII: Contact Information</h2>
              <p className="text-white/65 text-[14px] leading-[1.8] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#1BE1D3]" />
                  <span className="text-white/70 text-[14px]" style={{ fontFamily: "Poppins, sans-serif" }}>Yurekh Solutions Private Limited</span>
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
