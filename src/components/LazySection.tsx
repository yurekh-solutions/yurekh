import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Mounts a below-the-fold section only when it is about to scroll into view.
 *
 * `React.lazy` alone was not enough: the homepage renders twelve of these at
 * once, so every chunk (including the framer-motion runtime) was fetched and
 * every section mounted in the same frame as the hero. That is what Lighthouse
 * charged as "12 long tasks" / 12.2 s of main-thread work - and on a Moto G
 * Power that congestion is a large part of the 11.9 s LCP, because the hero
 * cannot paint until the below-the-fold tree has finished rendering.
 *
 * A reserved min-height keeps the scrollbar honest while a section is still
 * unloaded, and the safety timeout guarantees every section reaches the DOM
 * shortly after load - so crawlers that render without scrolling still index
 * the full page. Shifts happen strictly below the viewport, so they are not
 * scored as CLS.
 */
type Props = {
  id?: string;
  children: ReactNode;
  /** rough height of the section, used only until it mounts */
  minHeight?: number;
};

const LazySection = ({ id, children, minHeight = 600 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      /* bottom margin only: never reveal a section that already scrolled past */
      { rootMargin: "0px 0px 700px 0px", threshold: 0 }
    );
    io.observe(el);
    /* and always mount, even for visitors/crawlers that never scroll */
    const bail = window.setTimeout(() => setVisible(true), 4000);
    return () => {
      io.disconnect();
      window.clearTimeout(bail);
    };
  }, [visible]);

  return (
    <div
      id={id}
      ref={ref}
      style={visible ? undefined : { minHeight }}
      aria-hidden={visible ? undefined : true}
    >
      {visible ? children : null}
    </div>
  );
};

export default LazySection;
