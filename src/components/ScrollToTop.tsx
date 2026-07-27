import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant jump so every page opens from the top immediately
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
