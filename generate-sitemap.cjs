/**
 * Sitemap generator for yurekh.com
 * -------------------------------------------------
 * Parses the real routable slugs from the app data files so the sitemap
 * always matches what actually exists (no 404 URLs, nothing missing).
 *
 * Run:  node generate-sitemap.cjs
 * Output: public/sitemap.xml
 */
const fs = require("fs");
const path = require("path");

const DOMAIN = "https://yurekh.com";
const today = new Date().toISOString().split("T")[0];

const read = (p) => fs.readFileSync(path.join(__dirname, p), "utf8");

/* --- item-level slugs are indented 8 spaces; category slugs use 4 --- */
const itemSlugs = (file) => {
  const src = read(file);
  const out = [];
  const re = /^ {8}slug:\s*"([a-z0-9-]+)"/gm;
  let m;
  while ((m = re.exec(src)) !== null) out.push(m[1]);
  return [...new Set(out)];
};

/* --- blog slugs from BlogSection.tsx --- */
const blogSlugs = () => {
  const src = read(path.join("src", "components", "BlogSection.tsx"));
  const out = [];
  const re = /slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = re.exec(src)) !== null) out.push(m[1]);
  return [...new Set(out)];
};

const services = itemSlugs(path.join("src", "data", "services.ts"));
const industries = itemSlugs(path.join("src", "data", "industries.ts"));
const blogs = blogSlugs();

/* --- static routes with SEO priorities --- */
const staticRoutes = [
  { loc: "/", priority: "1.0", changefreq: "weekly", hreflang: true },
  { loc: "/about", priority: "0.8", changefreq: "monthly" },
  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  { loc: "/industries", priority: "0.8", changefreq: "monthly" },
  { loc: "/launch-in-india", priority: "0.9", changefreq: "weekly", hreflang: true },
  { loc: "/business-consulting", priority: "0.9", changefreq: "weekly" },
  { loc: "/case-study", priority: "0.8", changefreq: "weekly" },
  { loc: "/impact", priority: "0.8", changefreq: "monthly" },
  { loc: "/blogs", priority: "0.9", changefreq: "daily" },
  { loc: "/faq", priority: "0.7", changefreq: "monthly" },
  { loc: "/careers", priority: "0.7", changefreq: "weekly" },
  { loc: "/bookingform", priority: "0.7", changefreq: "monthly" },
  { loc: "/privacy", priority: "0.3", changefreq: "yearly" },
  { loc: "/terms", priority: "0.3", changefreq: "yearly" },
];

const HREFLANGS = ["en", "en-in", "en-ae", "en-us", "en-gb", "en-sg", "en-au"];

const urlBlock = ({ loc, priority, changefreq, hreflang }) => {
  const full = `${DOMAIN}${loc}`;
  const alts = hreflang
    ? HREFLANGS.map(
        (h) => `    <xhtml:link rel="alternate" hreflang="${h}" href="${full}" />`
      ).join("\n") +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${full}" />\n`
    : "";
  return `  <url>
    <loc>${full}</loc>
    <lastmod>${today}</lastmod>
${alts}    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

const rows = [];
staticRoutes.forEach((r) => rows.push(urlBlock(r)));
services.forEach((s) =>
  rows.push(urlBlock({ loc: `/services/${s}`, priority: "0.8", changefreq: "monthly" }))
);
industries.forEach((s) =>
  rows.push(urlBlock({ loc: `/industries/${s}`, priority: "0.7", changefreq: "monthly" }))
);
blogs.forEach((s) =>
  rows.push(urlBlock({ loc: `/blogs/${s}`, priority: "0.7", changefreq: "monthly" }))
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${rows.join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), xml, "utf8");
console.log(
  `sitemap.xml written: ${staticRoutes.length} static + ${services.length} services + ${industries.length} industries + ${blogs.length} blogs = ${rows.length} URLs`
);
