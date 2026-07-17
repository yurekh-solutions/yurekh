import { motion } from "framer-motion";
import { Sparkles, Target, Eye, Heart, Users, Award, TrendingUp, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push boundaries with cutting-edge AI and technology solutions that transform businesses.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client Success",
      description: "Your growth is our mission. We build partnerships that deliver measurable results.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Excellence",
      description: "We work closely with you to understand your vision and bring it to life.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Driven",
      description: "Every solution we deliver meets the highest standards of excellence and reliability.",
    },
  ];

  const stats = [
    { number: "125+", label: "Applications Modernized" },
    { number: "500K+", label: "Calls Handled Per Hour" },
    { number: "70%", label: "Cost Reduction Achieved" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  const team = [
    { name: "Leadership Team", role: "Strategic Vision & Growth", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop" },
    { name: "Development Team", role: "Full-Stack Excellence", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" },
    { name: "Design Team", role: "Creative Innovation", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop" },
    { name: "Marketing Team", role: "Digital Growth Experts", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop" },
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
            <span className="text-[#1BE1D3] text-sm font-medium">About Yurekh Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-normal text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
            Transforming Businesses with{" "}
            <span className="text-[#1BE1D3]">AI-Powered Technology</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
            We are a senior-led technology studio building AI-powered software, digital brands, and go-to-market systems as one integrated system. We partner with founders and leadership teams to build new ventures and thoughtfully evolve what already exists.
          </p>
          <p className="text-sm text-[#1BE1D3] mt-6 tracking-widest" style={{ fontFamily: "Poppins, sans-serif" }}>
            IND ⋅ DXB  NYC ⋅ SGP
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-8 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent"
            >
              <div className="text-4xl md:text-5xl font-normal text-[#1BE1D3] mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#1BE1D3]/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#1BE1D3]" />
              </div>
              <h2 className="text-2xl font-normal text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
              To empower businesses of all sizes with intelligent technology solutions that drive growth, 
              efficiency, and innovation. We strive to be the catalyst for digital transformation, 
              delivering solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#1BE1D3]/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#1BE1D3]" />
              </div>
              <h2 className="text-2xl font-normal text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>Our Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "Poppins, sans-serif" }}>
              To be the global leader in AI-powered business solutions, recognized for our commitment to 
              excellence, innovation, and client success. We envision a world where technology seamlessly 
              integrates with business strategy to create unprecedented value and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Core Values
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent hover:border-[#1BE1D3]/40 transition-all duration-300"
            >
              <div className="text-[#1BE1D3] mb-4">{value.icon}</div>
              <h3 className="text-lg font-normal text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            What We Do
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            We modernized 125 applications with Agile methods, enhancing security, monitoring, and streamlining 
            operations for data-driven decision-making. Our Intelligent Virtual Assistant helped handle 500,000 
            calls per hour in 180 languages, reducing costs by 70% and achieving 99% customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <TrendingUp className="w-6 h-6" />, title: "Digital Transformation", desc: "End-to-end digital solutions that modernize your business operations" },
            { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "Solutions designed to scale across markets and languages" },
            { icon: <Sparkles className="w-6 h-6" />, title: "AI Innovation", desc: "Cutting-edge AI and machine learning implementations" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#1BE1D3]/10 text-[#1BE1D3] mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-normal text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Our Teams
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            Meet the experts behind our success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-[#1BE1D3]/20 bg-gradient-to-br from-[#1BE1D3]/5 to-transparent overflow-hidden hover:border-[#1BE1D3]/40 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-normal text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
                  {member.name}
                </h3>
                <p className="text-[#1BE1D3] text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {member.role}
                </p>
              </div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            Let's discuss how Yurekh Solutions can help you achieve your goals with our AI-powered technology solutions.
          </p>
          <a
            href="/bookingform"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1BE1D3] text-black font-normal hover:bg-[#1BE1D3]/90 transition-colors"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Get Started Today
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
