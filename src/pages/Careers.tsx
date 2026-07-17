import { motion } from "framer-motion";
import { Sparkles, MapPin, Clock, DollarSign, ArrowRight, CheckCircle } from "lucide-react";

const Careers = () => {
  const benefits = [
    "Competitive salary & performance bonuses",
    "Flexible remote work options",
    "Health insurance & wellness programs",
    "Learning & development budget",
    "Latest tech tools & equipment",
    "Collaborative & innovative culture",
    "Career growth opportunities",
    "Paid time off & holidays",
  ];

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      salary: "₹12-18 LPA",
      description: "We're looking for an experienced full-stack developer to build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: ["5+ years experience", "React & Node.js expertise", "Cloud platforms (AWS/Azure)", "Agile methodology"],
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Data",
      location: "Remote / India",
      type: "Full-time",
      salary: "₹15-25 LPA",
      description: "Join our AI team to develop machine learning models and intelligent automation solutions for enterprise clients.",
      requirements: ["3+ years ML experience", "Python & TensorFlow/PyTorch", "NLP & Computer Vision", "Model deployment experience"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / India",
      type: "Full-time",
      salary: "8-14 LPA",
      description: "Create beautiful, intuitive interfaces for our clients' digital products. You'll work closely with developers and stakeholders.",
      requirements: ["3+ years design experience", "Figma & Adobe Creative Suite", "User research skills", "Portfolio required"],
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Remote / India",
      type: "Full-time",
      salary: "₹10-16 LPA",
      description: "Lead our digital marketing efforts including SEO, PPC, social media, and content marketing for diverse clients.",
      requirements: ["4+ years marketing experience", "SEO & SEM expertise", "Analytics & reporting", "Content strategy"],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      salary: "12-20 LPA",
      description: "Manage cloud infrastructure, CI/CD pipelines, and ensure high availability of our clients' applications.",
      requirements: ["3+ years DevOps experience", "AWS/Azure/GCP", "Docker & Kubernetes", "Infrastructure as Code"],
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Remote / India",
      type: "Full-time",
      salary: "6-12 LPA + Commission",
      description: "Drive new business opportunities and build relationships with potential clients across industries.",
      requirements: ["2+ years BDE experience", "Excellent communication", "B2B sales experience", "CRM tools knowledge"],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1BE1D3]/30 bg-[#1BE1D3]/5 mb-6">
            <Sparkles className="w-4 h-4 text-[#1BE1D3]" />
            <span className="text-[#1BE1D3] text-sm font-medium">Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-normal text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Build Your Career with{" "}
            <span className="text-[#1BE1D3]">Yurekh Solutions</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
            We're always looking for talented individuals who are passionate about technology and innovation. 
            Join our team and help shape the future of digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Why Join Us */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Why Work With Us?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            We offer more than just a job — we offer a career growth opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent"
            >
              <CheckCircle className="w-5 h-5 text-[#1BE1D3] flex-shrink-0" />
              <span className="text-gray-300 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Open Positions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            Explore current opportunities and find your perfect role
          </p>
        </motion.div>

        <div className="space-y-6">
          {openPositions.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent hover:border-[#1BE1D3]/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-normal text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                    <span className="flex items-center gap-1 text-[#1BE1D3]">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </span>
                  </div>
                </div>
                <span className="inline-flex px-3 py-1 rounded-full bg-[#1BE1D3]/10 text-[#1BE1D3] text-xs font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {job.department}
                </span>
              </div>

              <p className="text-gray-300 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                {job.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-normal text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Requirements:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, reqIdx) => (
                    <span
                      key={reqIdx}
                      className="px-3 py-1 rounded-full border border-[#1BE1D3]/20 text-gray-300 text-xs"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="mailto:yurekhsolutions@gmail.com?subject=Application for {job.title}"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1BE1D3] text-black font-normal hover:bg-[#1BE1D3]/90 transition-colors text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 rounded-3xl border border-[#1BE1D3]/30 bg-gradient-to-br from-[#1BE1D3]/10 to-transparent"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Don't See Your Role?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            We're always interested in hearing from talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <a
            href="mailto:yurekhsolutions@gmail.com?subject=Career Opportunity"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1BE1D3] text-black font-normal hover:bg-[#1BE1D3]/90 transition-colors"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Send Your Resume
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;
