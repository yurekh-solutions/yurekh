import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { getWhatsAppLink, trackLead } from "../lib/analytics";

/**
 * Sticky mobile lead bar — Call Now + WhatsApp, always one tap away.
 *
 * India-first traffic is overwhelmingly mobile, and every extra tap lost
 * between interest and contact costs a lead. This bar stays pinned at the
 * bottom on small screens only (desktop keeps the AI chat bubble clear),
 * and every tap is tracked with its source for attribution.
 */
const MobileLeadBar = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div
        className="flex items-stretch border-t border-[#1BE1D3]/30 backdrop-blur-xl"
        style={{ background: "linear-gradient(135deg, #071919 0%, #0a1a1a 100%)" }}
      >
        <a
          href="tel:+919136242706"
          onClick={() => trackLead("Mobile Bar Call Click")}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-black font-semibold text-sm"
          style={{ backgroundColor: "#1BE1D3", fontFamily: "Poppins, sans-serif" }}
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a
          href={getWhatsAppLink("Mobile Lead Bar")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead("Mobile Bar WhatsApp Click")}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-[#1BE1D3] font-semibold text-sm border-l border-[#1BE1D3]/30"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <button
          onClick={() => {
            setDismissed(true);
            trackLead("Mobile Bar Dismissed");
          }}
          aria-label="Hide contact bar"
          className="px-3 flex items-center text-white/40 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MobileLeadBar;
