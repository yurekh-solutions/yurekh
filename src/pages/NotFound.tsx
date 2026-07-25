import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}
    >
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to the Yurekh Solutions homepage to explore our services."
        noindex
      />
      <div className="text-center px-6">
        <h1
          className="text-6xl md:text-7xl font-semibold text-[#1BE1D3] mb-4"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          404
        </h1>
        <p
          className="text-xl text-white/70 mb-8"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-[14px] font-semibold text-[#1BE1D3] transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,225,211,0.3)]"
          style={{
            fontFamily: "Poppins, sans-serif",
            backgroundColor: "rgba(27,225,211,0.1)",
            border: "2px solid rgba(27,225,211,0.5)",
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
