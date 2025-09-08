import React from 'react';

// This component assumes Tailwind CSS is configured and
// that you are using a build environment that can handle
// the CSS-in-JS pattern.

const MarqueeTestimonials = () => {
    // Testimonial data
    const testimonials = [
        {
            text: "“The new design brought a fresh, modern feel to our brand, significantly boosting our online engagement.”",
            author: "Sarah Jones",
            role: "Graphics designer",
            image:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600"

        },
        {
            text: "“Their creative team is exceptional. We saw a 200% increase in lead conversions after implementing their strategy.”",
            author: "Michael Lee",
            role: "Marketing Director, AquaStream",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600"
        },
        
        {
            text: "“Their innovative solutions and technical expertise helped us solve some of our most complex challenges. Highly recommended.”",
            author: "Ryan Miller",
            role: "Senior Engineer, Quantum Labs",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600"
        },
        {
            text: "“The user interface is intuitive and elegant. Our customer satisfaction ratings have gone up significantly.”",
            author: "Olivia Martinez",
            role: "Lead Designer, Pixel Studio",
            image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600"
        },
        {
            text: "“A powerful platform with a clean, responsive design. It has streamlined our workflow and boosted productivity.”",
            author: "Mark Davis",
            role: "Operations Manager, Global Freight",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop"
        },
        {
            text: "“We received excellent service from start to finish. The team was responsive, professional, and delivered a top-tier product.”",
            author: "Laura Wilson",
            role: "Project Coordinator, Everly Group",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600"
        },
    ];

    // Duplicate testimonials to create a seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    const TestimonialCard = ({ testimonial }) => (
        // Added hover effect classes to the main card div
        <div className="max-w-80 bg-black text-white rounded-2xl flex-shrink-0 hover:-translate-y-2 hover:shadow-xl transition-transform duration-300">
            <div className="relative -mt-px overflow-hidden rounded-2xl ">
                <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
                />
                <div className="absolute inset-0 bg-black opacity-60 rounded-t-2xl"></div>
            </div>
            <div className="px-4 pb-4">
                <p className="font-medium border-b border-gray-600 pb-5">{testimonial.text}</p>
                <p className="mt-4">— {testimonial.author}</p>
                <p className="text-sm font-medium bg-gradient-to-r from-[#02353e] via-[#4d8689] to-[#71c3a6] text-transparent bg-clip-text">
                    {testimonial.role}
                </p>
            </div>
        </div>
    );

    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }

                /* Fix for the looping animation */
                @keyframes marquee-forward {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }

                .animate-marquee-forward {
                    animation: marquee-forward 60s linear infinite;
                }

                .animate-marquee-reverse {
                    animation: marquee-reverse 60s linear infinite;
                }
                `}
            </style>
            <div className="bg-gradient-space text-white min-h-screen">
                <div className="w-full max-w-7xl mx-auto p-8">
                    <div className="text-center py-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient-glow ">
                            Our <span className=" text-gradient-glow text-transparent bg-clip-text">Client Testimonials</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            See what our clients have to say about working with us.
                        </p>
                    </div>

                    {/* Testimonials Marquee - Forward */}
                    <div className="relative overflow-hidden mb-8">
                        <div className="flex space-x-6 animate-marquee-forward w-max">
                            {duplicatedTestimonials.map((testimonial, index) => (
                                <TestimonialCard key={`forward-${index}`} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Testimonials Marquee - Reverse */}
                    <div className="relative overflow-hidden">
                        <div className="flex space-x-6 animate-marquee-reverse hover:[animation-play-state:paused] w-max">
                            {duplicatedTestimonials.slice().reverse().map((testimonial, index) => (
                                <TestimonialCard key={`reverse-${index}`} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarqueeTestimonials;
