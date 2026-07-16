import React from 'react';

// This component assumes Tailwind CSS is configured.
// All components and styling are contained within this single file.

export default function Example() {
    // Array of objects for social media iframes
    const socialWidgets = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/yurekhsolutions?igsh=MTBmZGlvNXlpeGNrcg==",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/share/1JzwtyDtAx/",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/yurekh-solutions-private-limited/",
        },
        {
            name: "Website",
            url: "https://www.yurekh.com",
        },
        {
            name: "Threads",
            url: "https://www.threads.com/@yurekhsolutions",
        },
        {
            name: "Snapchat",
            url: "https://www.snapchat.com/add/yurekhsolutions?share_id=dY_XcQzESZQ&locale=en-IN",
        },
        {
            name: "Twitter (X)",
            url: "https://x.com/yurekhsolutions?t=v7z2HSE4ZHo1YGH3PwcBnA&s=09",
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/919136242706",
        },
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="bg-gray-900 text-white min-h-screen py-16 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    <h1 className="text-3xl font-semibold text-center mx-auto">Social Media Widgets</h1>
                    <p className="text-sm text-slate-400 text-center mt-2 max-w-lg mx-auto">Explore our online presence with our social media widgets.</p>
                    
                    <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto">
                        {socialWidgets.map((widget, index) => (
                            <div key={index} className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                                <iframe 
                                    src={widget.url}
                                    title={widget.name}
                                    className="h-full w-full border-none transition-transform duration-500 group-hover:scale-110"
                                    allowFullScreen
                                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                                ></iframe>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h3 className="text-lg font-bold">{widget.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
