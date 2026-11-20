import { type ReactNode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { PassThrough } from "node:stream";
import App from "./App";

// Build-time only: no server is needed on either Vercel or GoDaddy. Rendering
// the same App tree lets the browser hydrate it without replacing the hero.
const ServerRouter = ({ children }: { children?: ReactNode }) => (
  <StaticRouter location="/">{children}</StaticRouter>
);

export const renderHomepage = (): Promise<string> => new Promise((resolve, reject) => {
  const output = new PassThrough();
  let html = "";
  output.setEncoding("utf8");
  output.on("data", (chunk) => { html += chunk; });
  output.on("end", () => { clearTimeout(timeout); resolve(html); });
  output.on("error", (error) => { clearTimeout(timeout); reject(error); });
  const stream = renderToPipeableStream(<App Router={ServerRouter} />, {
    // Resolve lazy widgets too: completed Suspense boundaries hydrate cleanly,
    // while scroll-gated sections retain their identical empty placeholders.
    onAllReady() { stream.pipe(output); },
    onError(error) { clearTimeout(timeout); reject(error); },
  });
  const timeout = setTimeout(() => {
    stream.abort();
    reject(new Error("Homepage prerender timed out"));
  }, 15000);
});
