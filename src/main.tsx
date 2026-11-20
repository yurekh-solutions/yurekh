import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import './index.css'
import { initAnalytics } from './lib/analytics'

const root = document.getElementById("root")!;
const prerendered = root.dataset.prerender === window.location.pathname;
let started = false;
const start = () => {
  if (started) return;
  started = true;
  initAnalytics();
  // The static page must not wait for React's download, parsing, or hydration.
  // Direct visits to other routes start these imports immediately.
  Promise.all([import('./App'), import('react-dom/client'), import('react')]).then(
    ([{ default: App }, { createRoot, hydrateRoot }, { createElement }]) => {
      const app = createElement(App);
      if (prerendered) hydrateRoot(root, app);
      else createRoot(root).render(app);
    }
  ).catch((error) => { console.error("Application initialization failed", error); });
};
// Let the static homepage paint before hydration performs layout work. The
// timeout also initializes background tabs whose animation frames are paused.
if (prerendered) {
  const fallback = window.setTimeout(start, 200);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    window.clearTimeout(fallback);
    start();
  }));
} else start();
