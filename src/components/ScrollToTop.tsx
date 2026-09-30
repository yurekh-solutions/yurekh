import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Instant jump before paint so the user never sees the old scroll position
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
