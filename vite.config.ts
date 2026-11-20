import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import ts from "typescript";
import { componentTagger } from "lovable-tagger";

// Keep descriptions/SEO catalogs in detail-page chunks. The header only needs
// names and canonical slugs, extracted from the same source at build time.
const navigationSlugs = (): Plugin => {
  const publicId = "virtual:navigation-slugs";
  const id = `\0${publicId}`;
  const sources = ["services", "industries"].map((name) => path.resolve(__dirname, `src/data/${name}.ts`));
  return {
    name: "navigation-slugs",
    resolveId(specifier) { if (specifier === publicId) return id; },
    load(moduleId) {
      if (moduleId !== id) return;
      const maps = sources.map((file) => {
        this.addWatchFile(file);
        const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true);
        const slugs: Record<string, string> = {};
        const visit = (node: ts.Node) => {
          if (ts.isObjectLiteralExpression(node)) {
            const text = (key: string) => {
              const property = node.properties.find((p) => ts.isPropertyAssignment(p) &&
                (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name)) && p.name.text === key);
              return property && ts.isPropertyAssignment(property) && ts.isStringLiteral(property.initializer)
                ? property.initializer.text : undefined;
            };
            const name = text("name");
            const slug = text("slug");
            if (name && slug) slugs[name] = slug;
          }
          ts.forEachChild(node, visit);
        };
        visit(source);
        if (!Object.keys(slugs).length) throw new Error(`No navigation slugs found in ${file}`);
        return slugs;
      });
      return `export const serviceNameToSlug = ${JSON.stringify(maps[0])};\nexport const industryNameToSlug = ${JSON.stringify(maps[1])};`;
    },
    handleHotUpdate(context) {
      if (!sources.includes(context.file)) return;
      const module = context.server.moduleGraph.getModuleById(id);
      if (module) context.server.moduleGraph.invalidateModule(module);
      context.server.ws.send({ type: "full-reload" });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    navigationSlugs(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: "terser",
    terserOptions: { compress: { passes: 2 }, format: { comments: false } },
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
          // Icons are needed immediately; dialog/form primitives are not.
          // Combining them makes a lazy Radix dependency eager through the icons.
          if (pkg === "lucide-react") return "vendor-icons";
          if (pkg.startsWith("@radix-ui/")) return "vendor-radix";
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
}));
