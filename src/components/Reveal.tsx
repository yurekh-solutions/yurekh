import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered fade/slide reveal — a drop-in replacement for `motion.*` with
 * `initial` + `whileInView` + `viewport={{ once: true }}`.
 *
 * It reuses the `.hero-in` keyframes from index.css rather than shipping a
 * transition, so the per-element Tailwind `transition-*` hover utilities keep
 * working, and it costs a few hundred bytes instead of the 115 KB framer-motion
 * runtime that used to sit on the homepage critical path and delay LCP.
 *
 * The hidden start state is inline (exactly like framer's SSR output), so the
 * prerendered HTML keeps exposing readable text to crawlers.
 */
type Props = {
  as?: "div" | "h2" | "h3" | "h4" | "p" | "span" | "section" | "li";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** travel distance in px — matches framer's `y` */
  y?: number;
  duration?: number;
  delay?: number;
};

const instant = () =>
  typeof window !== "undefined" &&
  (typeof IntersectionObserver === "undefined" ||
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true);

const Reveal = ({ as = "div", children, className, style, y = 20, duration = 0.6, delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  /* hidden -> (scrolled into view) animating -> shown (animation styles dropped) */
  const [phase, setPhase] = useState<"hidden" | "animating" | "shown">("hidden");

  useEffect(() => {
    if (phase !== "hidden") return;
    const el = ref.current;
    if (!el || instant()) {
      setPhase("shown");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPhase("animating");
          io.disconnect();
        }
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [phase]);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={phase === "animating" ? `${className ?? ""} hero-in` : className}
      onAnimationEnd={(e) => {
        /* animationend bubbles - ignore keyframes finishing on child elements */
        if (phase === "animating" && e.target === e.currentTarget) setPhase("shown");
      }}
      style={
        phase === "hidden"
          ? { ...style, opacity: 0 }
          : phase === "animating"
            ? ({
                ...style,
                "--hero-y": `${y}px`,
                "--hero-dur": `${duration}s`,
                "--hero-delay": `${delay}s`,
              } as CSSProperties)
            : style
      }
    >
      {children}
    </Tag>
  );
};

export default Reveal;
