"use client";

import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';

const Video = () => {
  const cardsData = [
    {
      name: "Olivia Chen",
      role: "Tech Lead, Spark Innovations",
      text: "Yurekh's team delivered a custom solution that exceeded all our expectations. Their technical expertise is unparalleled.",
      rating: "★★★★★ 5.0/5",
      imageSrc: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Marcus Thorne",
      role: "Digital Strategist",
      text: "Their strategic insights in digital marketing helped us double our reach in just three months. A truly transformative partnership.",
      rating: "★★★★★ 4.9/5",
      imageSrc: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Sophia Rodriguez",
      role: "CEO, Greenleaf Analytics",
      text: "We were impressed by how quickly Yurekh's cloud migration services streamlined our operations. Their support is top-notch.",
      rating: "★★★★★ 5.0/5",
      imageSrc: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      name: "Ethan White",
      role: "Product Manager",
      text: "The UI/UX design they provided was both beautiful and incredibly intuitive. It’s made a huge difference in user engagement.",
      rating: "★★★★★ 4.8/5",
      imageSrc: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Liam O'Connell",
      role: "Head of R&D",
      text: "Yurekh delivers cutting-edge solutions with precision and reliability. Their expertise in AI and digital transformation has helped us scale seamlessly.",
      rating: "★★★★★ 4.9/5",
      imageSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Chloe Lee",
      role: "Brand Consultant",
      text: "Their SEO and content creation services have been instrumental in improving our search rankings and attracting organic traffic. Highly recommend!",
      rating: "★★★★★ 5.0/5",
      imageSrc: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "David Kim",
      role: "Fintech Innovator",
      text: "We modernized 125 applications with Agile methods, enhancing security, and streamlining operations for data-driven decision-making. Excellent work.",
      rating: "★★★★★ 4.9/5",
      imageSrc: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Jasmine Kaur",
      role: "Creative Director",
      text: "The web development team at Yurekh created a stunning and responsive site that perfectly captures our brand. It's a work of art.",
      rating: "★★★★★ 5.0/5",
      imageSrc: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      name: "Michael Brown",
      role: "Security Analyst",
      text: "Their cybersecurity audits revealed crucial vulnerabilities we didn't know we had. We now feel much more secure thanks to their expertise.",
      rating: "★★★★★ 4.8/5",
      imageSrc: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Isabella Garcia",
      role: "Head of Marketing",
      text: "Yurekh's data analytics solutions provided clear insights that completely changed our strategy. The dashboards are brilliant and easy to use.",
      rating: "★★★★★ 5.0/5",
      imageSrc: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Ryan Carter",
      role: "IT Manager, Global Corp",
      text: "We rely on Yurekh for our managed IT services. They're proactive, reliable, and always ready to help. An essential partner for us.",
      rating: "★★★★★ 4.9/5",
      imageSrc: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Maria Sanchez",
      role: "Small Business Owner",
      text: "The e-commerce platform Yurekh built for us is fantastic. It's secure, fast, and has all the features we need to grow our online store.",
      rating: "★★★★★ 5.0/5",
      imageSrc: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  const column1Data = cardsData.slice(0, 6);
  const column2Data = cardsData.slice(6, 12);

  // useEffect for the first scrolling column (Desktop)
  useEffect(() => {
    const scroller = document.querySelector(".vertical-marquee-1");
    if (scroller) {
      let scrollAmount = 0;
      let direction = 1;
      const scrollStep = 1;
      const scrollInterval = setInterval(() => {
        scroller.scrollTop += scrollStep * direction;
        scrollAmount += scrollStep * direction;

        if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight) {
          direction = -1; // reverse
        } else if (scroller.scrollTop <= 0) {
          direction = 1; // forward
        }
      }, 40);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  // useEffect for the second column (Desktop)
  useEffect(() => {
    const scroller = document.querySelector(".vertical-marquee-2");
    if (scroller) {
      let scrollAmount = 0;
      let direction = -1;
      const scrollStep = 1;
      const scrollInterval = setInterval(() => {
        scroller.scrollTop += scrollStep * direction;
        scrollAmount += scrollStep * direction;

        if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight) {
          direction = -1;
        } else if (scroller.scrollTop <= 0) {
          direction = 1;
        }
      }, 50);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <style>{`
        .horizontal-marquee {
          animation: scroll-h 30s linear infinite;
        }

        .horizontal-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-h {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <section className="relative bg-gradient-space  min-h-screen py-20 flex flex-col items-center justify-center text-center text-white overflow-hidden ">
        {/* Background Stars */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="stars animate-twinkle"></div>
          <div className="stars2 animate-twinkle"></div>
          <div className="stars3 animate-twinkle"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-left md:text-left text-center mt-5">
            <h2 className="text-3xl md:text-5xl font-bold">
              Trusted by Innovators <span className="text-[#009494]">Worldwide</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              At Yurekh, we are a passionate team dedicated to providing exceptional creative services. With a focus on excellence and innovation, we specialize in helping our clients achieve outstanding results for their projects.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              We modernized 125 applications with Agile methods, enhancing security, monitoring, and streamlining operations for data-driven decision-making. Our Intelligent Virtual Assistant helped the CDC handle 500,000 calls per hour in 180 languages, reducing costs by 70% and achieving 99% customer satisfaction.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-3 mt-4 justify-center md:justify-start">
              <div className="flex text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-400 text-sm md:text-base">Rated 4.8 out of 5 based on over 50+ reviews</p>
            </div>
          </div>

          {/* Right Side - Responsive Scrolling */}
          <div className="relative h-full overflow-hidden flex flex-col md:flex-row gap-6">

            {/* Mobile Horizontal Loop */}
            <div className="w-full h-full md:hidden overflow-hidden whitespace-nowrap group">
              <div className="horizontal-marquee inline-flex space-x-4 pb-4">
                {cardsData.concat(cardsData).map((card, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-lg text-white rounded-2xl p-6 shadow-xl transition duration-300"
                    variants={cardVariants}
                  >
                    <p className="text-sm text-yellow-400 mb-2">{card.rating}</p>
                    <p className="text-gray-200 mb-4 text-sm line-clamp-3">{card.text}</p>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={card.imageSrc}
                          alt={`${card.name}'s profile`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{card.name}</p>
                        <p className="text-xs text-gray-400">{card.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Vertical Columns */}
            <div className="hidden md:flex flex-row h-[500px] gap-6">
              {/* Column 1 */}
              <div className="vertical-marquee-1 h-full overflow-y-hidden space-y-6 flex-1">
                <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                  {column1Data.concat(column1Data).map((card, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/10 backdrop-blur-lg text-white rounded-2xl p-6 shadow-xl transition duration-300 mb-6 text-center md:text-left"
                      variants={cardVariants}
                    >
                      <p className="text-sm text-yellow-400 mb-2">{card.rating}</p>
                      <p className="text-gray-200 mb-4 text-sm md:text-base line-clamp-3 md:line-clamp-none">{card.text}</p>
                      <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={card.imageSrc}
                            alt={`${card.name}'s profile`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{card.name}</p>
                          <p className="text-xs text-gray-400">{card.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Column 2 */}
              <div className="vertical-marquee-2 h-full overflow-y-hidden space-y-6 flex-1 hidden md:block">
                <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                  {column2Data.concat(column2Data).map((card, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/10 backdrop-blur-lg text-white rounded-2xl p-6 shadow-xl transition duration-300 mb-6 text-center md:text-left"
                      variants={cardVariants}
                    >
                      <p className="text-sm text-yellow-400 mb-2">{card.rating}</p>
                      <p className="text-gray-200 mb-4 text-sm md:text-base line-clamp-3 md:line-clamp-none">{card.text}</p>
                      <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={card.imageSrc}
                            alt={`${card.name}'s profile`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{card.name}</p>
                          <p className="text-xs text-gray-400">{card.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
