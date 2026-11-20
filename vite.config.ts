import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        /* FUNCTION form on purpose. The object form turns every named group into
           an *initial* chunk, so Vite emits <link rel="modulepreload"> for all of
           them in index.html - which made the browser download the 115 KB
           framer-motion runtime on first paint even though the hero no longer
           uses it. Grouping by id keeps each chunk in the HTML only when the
           entry graph really imports it. */
        manualChunks(id) {
          const p = id.replace(/\\/g, "/");
          const i = p.lastIndexOf("/node_modules/");
          if (i < 0) return;
          /* package name of the deepest node_modules segment (handles scopes + nesting) */
          const rest = p.slice(i + "/node_modules/".length);
          const seg = rest.split("/");
          const pkg = seg[0].startsWith("@") ? seg.slice(0, 2).join("/") : seg[0];
          if (["react", "react-dom", "react-is", "scheduler", "react-router", "react-router-dom", "@remix-run/router"].includes(pkg))
            return "vendor-react";
          if (["framer-motion", "motion-dom", "motion-utils", "popmotion", "framesync", "@motionone/dom"].includes(pkg))
            return "vendor-motion";
          if (pkg === "lucide-react" || pkg.startsWith("@radix-ui/")) return "vendor-ui";
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
}));
