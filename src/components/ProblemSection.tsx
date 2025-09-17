import { Phone, Clock, MessageSquare, Star, TrendingDown, AlertTriangle, Database, Settings, Bot } from 'lucide-react';
import { motion } from "framer-motion";

const ProblemSection = () => {
  const problems = [
    { icon: TrendingDown, title: "Low Organic Traffic", stat: "90%", description: "Over 90% of web pages get no organic search traffic from Google." },
    { icon: AlertTriangle, title: "Cybersecurity Risks", stat: "1 in 3", description: "One-third of small businesses have no cybersecurity plan." },
    { icon: Clock, title: "Slow IT Response", stat: "4 hours", description: "Average downtime after an IT failure can be hours or even days." },
    { icon: Bot, title: "Ineffective Conversions", stat: "2.35%", description: "The average website conversion rate is just 2.35%." },
    { icon: Database, title: "Complex Data Management", stat: "50%", description: "Businesses lose an average of 50% of their data without proper backup." },
    { icon: MessageSquare, title: "Delayed Chat Response", stat: "5 min", description: "Customers expect replies in under 5 minutes for online inquiries." },
    { icon: Settings, title: "Outdated Infrastructure", stat: "70%", description: "Businesses with outdated tech are 70% more likely to suffer a cyberattack." },
    { icon: TrendingDown, title: "Poor SEO Ranking", stat: "1st page", description: "75% of users never scroll past the first page of search results." },
    { icon: Star, title: "Reputation Loss", stat: "90%", description: "90% of customers read online reviews before buying a service." },
    { icon: Bot, title: "No 24/7 Availability", stat: "24/7", description: "Customers expect digital businesses to be available and responsive anytime." },
    { icon: TrendingDown, title: "Lost Competitive Edge", stat: "5x", description: "Competitors with a strong online presence can generate 5x more leads." },
    { icon: Phone, title: "Missed Call-to-Actions", stat: "85%", description: "Most leads from online campaigns are lost if not followed up immediately." },
  ];

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          gap: 3rem; /* consistent spacing */
          min-width: max-content; /* prevent overlap */
          animation: marqueeScroll 25s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          gap: 3rem;
          min-width: max-content;
          animation: marqueeScroll 25s linear infinite reverse;
        }
      `}</style>

      <section className="py-20 bg-gradient-space overflow-hidden">
        <div className="absolute inset-0">
          <div className="stars animate-twinkle opacity-20"></div>
          <div className="stars2 animate-twinkle opacity-30"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/30 mb-6">
              <span className="text-lg md:text-xl font-semibold text-cyan-400">
                The Real Struggles in IT & Digital Marketing
              </span>
            </div>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Businesses in the tech and digital space face these challenges every single day.
            </p>
          </div>

          {/* Marquee Rows */}
          <div className="space-y-16">
            {/* Row 1 */}
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="animate-marquee">
                {problems.map((problem, idx) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={idx}
                      className="group backdrop-blur-xl bg-white/10 border border-cyan-400/30 p-6 rounded-2xl w-72 flex-shrink-0 
                                 transition-all duration-700 hover:scale-105 relative shadow-lg hover:shadow-cyan-500/40"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/20 to-cyan-400/10 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/10 
                                        rounded-xl flex items-center justify-center shadow-inner">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="text-xl font-bold text-cyan-400">{problem.stat}</div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2 relative z-10">{problem.title}</h3>
                      <p className="text-sm text-muted-foreground relative z-10">{problem.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Duplicate for smooth loop */}
              <div className="animate-marquee" aria-hidden="true">
                {problems.map((problem, idx) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={`dup-${idx}`}
                      className="group backdrop-blur-xl bg-white/10 border border-cyan-400/30 p-6 rounded-2xl w-72 flex-shrink-0 
                                 transition-all duration-700 hover:scale-105 relative shadow-lg hover:shadow-cyan-500/40"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/20 to-cyan-400/10 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/10 
                                        rounded-xl flex items-center justify-center shadow-inner">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="text-xl font-bold text-cyan-400">{problem.stat}</div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 relative z-10">{problem.title}</h3>
                      <p className="text-sm text-muted-foreground relative z-10">{problem.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2 (reverse) */}
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="animate-marquee-reverse">
                {problems.map((problem, idx) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={`rev-${idx}`}
                      className="group backdrop-blur-xl bg-white/10 border border-cyan-400/30 p-6 rounded-2xl w-72 flex-shrink-0 
                                 transition-all duration-700 hover:scale-105 relative shadow-lg hover:shadow-cyan-500/40"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/20 to-cyan-400/10 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/10 
                                        rounded-xl flex items-center justify-center shadow-inner">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="text-xl font-bold text-cyan-400">{problem.stat}</div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 relative z-10">{problem.title}</h3>
                      <p className="text-sm text-muted-foreground relative z-10">{problem.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Duplicate reverse */}
              <div className="animate-marquee-reverse" aria-hidden="true">
                {problems.map((problem, idx) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={`revdup-${idx}`}
                      className="group backdrop-blur-xl bg-white/10 border border-cyan-400/30 p-6 rounded-2xl w-72 flex-shrink-0 
                                 transition-all duration-700 hover:scale-105 relative shadow-lg hover:shadow-cyan-500/40"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/20 to-cyan-400/10 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/10 
                                        rounded-xl flex items-center justify-center shadow-inner">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="text-xl font-bold text-cyan-400">{problem.stat}</div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 relative z-10">{problem.title}</h3>
                      <p className="text-sm text-muted-foreground relative z-10">{problem.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
