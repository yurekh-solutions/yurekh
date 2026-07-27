/**
 * Static prerenderer for yurekh.com (SEO)
 * -------------------------------------------------
 * After `vite build`, copies dist/index.html into dist/<route>/index.html for
 * every route, injecting that page's real <title>, meta description, canonical,
 * Open Graph / Twitter tags and JSON-LD — so crawlers get correct HTML on the
 * first byte instead of waiting for React to render.
 *
 * Vercel serves these files directly (filesystem beats the SPA rewrite), then
 * React hydrates and SEOHead keeps the tags in sync client-side.
 *
 * Run:  node prerender.cjs   (wired into `npm run build`)
 */
const fs = require("fs");
const path = require("path");

const DOMAIN = "https://yurekh.com";
const DIST = path.join(__dirname, "dist");

const read = (p) => fs.readFileSync(path.join(__dirname, p), "utf8");
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* Same brand rule as SEOHead.tsx — append once, never duplicate */
const brand = (t) => (t.includes("Yurekh Solutions") ? t : `${t} | Yurekh Solutions`);

/* ---------- collect routes ---------- */

/* Static pages — titles/descriptions mirror each page's <SEOHead /> props */
const staticRoutes = {
  "/about": {
    title: "About Us | Senior-Led Business Building Studio",
    description:
      "Yurekh Solutions is a senior-led, full-system business building studio delivering AI-powered software, digital branding, and go-to-market strategy as one integrated system. 125+ applications modernized, 70% average cost reduction, serving clients across India, UAE, USA, UK, Singapore & Australia.",
  },
  "/services": {
    title: "Our Services | Digital Solutions & Business Building | Yurekh Solutions",
    description:
      "Comprehensive digital services: AI & Machine Learning, Web & App Development, Cloud Solutions, Cybersecurity, Digital Marketing, Branding, SEO, and DevOps. Premium solutions tailored for global businesses.",
  },
  "/industries": {
    title: "Industries We Serve | Technology, Healthcare, FinTech & More | Yurekh Solutions",
    description:
      "Yurekh Solutions serves 10+ industries including Technology & SaaS, E-Commerce, Healthcare, FinTech, Real Estate, Education, Manufacturing, Hospitality, and Media. Expert solutions tailored to each sector.",
  },
  "/launch-in-india": {
    title: "Build Your Business in India | Market Entry Partner | Yurekh Solutions",
    description:
      "Yurekh Solutions helps international businesses enter and build in India. From company registration and legal compliance to market research, local partnerships, and go-to-market execution — one partner for complete market entry.",
  },
  "/business-consulting": {
    title: "Global Business Consulting | Start, Scale & Dominate | Yurekh Solutions",
    description:
      "End-to-end business building partner for founders and enterprises. Company formation, legal compliance, brand identity, technology infrastructure, and go-to-market strategy. Serving clients across India, UAE, USA, UK, Singapore & Australia.",
  },
  "/case-study": {
    title: "Case Studies | Real Results & Success Stories | Yurekh Solutions",
    description:
      "Explore how Yurekh Solutions has helped businesses across industries achieve remarkable results. Real case studies showcasing digital transformation, brand building, and technology implementation.",
  },
  "/impact": {
    title: "Our Impact | What We Build | Yurekh Solutions",
    description:
      "We build companies, technology, brands, and markets. End-to-end business building across India, UAE, USA, UK, Singapore & Australia. Strategy, legal, tech, branding & go-to-market.",
  },
  "/blogs": {
    title: "Blog | Insights on Business, Technology & Digital Growth | Yurekh Solutions",
    description:
      "Expert insights on business building, technology, AI, digital marketing, branding, and global expansion. Stay ahead with Yurekh Solutions' latest thought leadership and industry trends.",
  },
  "/faq": {
    title: "Frequently Asked Questions | Yurekh Solutions",
    description:
      "Find answers to common questions about Yurekh Solutions. Learn about our services, pricing, engagement model, industries served, and how to get started with global business building.",
  },
  "/careers": {
    title: "Careers | Join Our Global Team",
    description:
      "Build your career with Yurekh Solutions. Explore open roles in technology, design, marketing, and business consulting. Remote-friendly culture, competitive benefits, and global growth opportunities.",
  },
  "/bookingform": {
    title: "Book a Consultation | Schedule Your Free Strategy Session | Yurekh Solutions",
    description:
      "Schedule a free consultation with Yurekh Solutions. Discuss your business vision, get expert advice on strategy, technology, branding, and go-to-market. Call +91 91362 42706.",
  },
  "/contact": {
    title: "Contact Yurekh Solutions | Get in Touch for Business Consulting",
    description:
      "Contact Yurekh Solutions for business consulting, AI solutions, branding, and digital transformation. Call +91 91362 42706 or email yurekhsolutions@gmail.com.",
  },
  "/privacy": {
    title: "Privacy Policy",
    description:
      "Read the Yurekh Solutions privacy policy. Learn how we collect, use, and protect your personal information across our website and services.",
  },
  "/terms": {
    title: "Terms & Conditions",
    description:
      "Review the terms and conditions for using Yurekh Solutions services and website, including engagement terms, intellectual property, and liability.",
  },
};

/* Detail pages — line-scan the data files (fields appear as name → slug → … → seoTitle → seoDescription) */
const scanDataFile = (file) => {
  const out = [];
  let cur = null;
  for (const line of read(file).split(/\r?\n/)) {
    let m;
    if ((m = line.match(/^ {8}name:\s*"([^"]+)"/))) cur = { name: m[1] };
    else if (cur && (m = line.match(/^ {8}slug:\s*"([a-z0-9-]+)"/))) cur.slug = m[1];
    else if (cur && (m = line.match(/^ {8}seoTitle:\s*"([^"]+)"/))) cur.seoTitle = m[1];
    else if (cur && (m = line.match(/^ {8}seoDescription:\s*"([^"]+)"/))) {
      cur.seoDescription = m[1];
      if (cur.slug && cur.seoTitle) out.push(cur);
      cur = null;
    }
  }
  return out;
};

/* Blog posts — slug → title → description triplets in BlogSection.tsx */
const scanBlogs = () => {
  const out = [];
  let cur = null;
  for (const line of read(path.join("src", "components", "BlogSection.tsx")).split(/\r?\n/)) {
    let m;
    if ((m = line.match(/^\s*slug:\s*"([a-z0-9-]+)"/))) cur = { slug: m[1] };
    else if (cur && !cur.title && (m = line.match(/^\s*title:\s*"([^"]+)"/))) cur.title = m[1];
    else if (cur && cur.title && (m = line.match(/^\s*description:\s*"([^"]+)"/))) {
      cur.description = m[1];
      out.push(cur);
      cur = null;
    }
  }
  return out;
};

const routes = [];

for (const [route, meta] of Object.entries(staticRoutes)) {
  routes.push({ route, title: brand(meta.title), description: meta.description, crumb: meta.title.split("|")[0].trim() });
}

for (const s of scanDataFile(path.join("src", "data", "services.ts"))) {
  routes.push({
    route: `/services/${s.slug}`,
    title: brand(s.seoTitle),
    description: s.seoDescription,
    crumb: s.name,
    parent: { name: "Services", url: `${DOMAIN}/services` },
    schema: { "@context": "https://schema.org", "@type": "Service", name: s.name, description: s.seoDescription, url: `${DOMAIN}/services/${s.slug}`, provider: { "@type": "Organization", name: "Yurekh Solutions", url: DOMAIN, telephone: "+91-9136242706" } },
  });
}

for (const i of scanDataFile(path.join("src", "data", "industries.ts"))) {
  routes.push({
    route: `/industries/${i.slug}`,
    title: brand(i.seoTitle),
    description: i.seoDescription,
    crumb: i.name,
    parent: { name: "Industries", url: `${DOMAIN}/industries` },
    schema: { "@context": "https://schema.org", "@type": "Service", name: `${i.name} Industry Solutions`, description: i.seoDescription, url: `${DOMAIN}/industries/${i.slug}`, provider: { "@type": "Organization", name: "Yurekh Solutions", url: DOMAIN, telephone: "+91-9136242706" } },
  });
}

for (const b of scanBlogs()) {
  routes.push({
    route: `/blogs/${b.slug}`,
    title: brand(b.title),
    description: b.description,
    crumb: b.title,
    parent: { name: "Blog", url: `${DOMAIN}/blogs` },
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", headline: b.title, description: b.description, url: `${DOMAIN}/blogs/${b.slug}`, image: `${DOMAIN}/og-image.png`, author: { "@type": "Organization", name: "Yurekh Solutions", url: DOMAIN }, publisher: { "@type": "Organization", name: "Yurekh Solutions", logo: { "@type": "ImageObject", url: `${DOMAIN}/logoyurekh.png` } } },
  });
}

/* ---------- render ---------- */

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

const renderRoute = ({ route, title, description, crumb, parent, schema }) => {
  const url = `${DOMAIN}${route}`;
  const t = esc(title);
  const d = esc(description);
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="alternate" hreflang="[^"]+" href=")[^"]*(")/g, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`);

  /* per-route breadcrumb + type schema for crawler-first HTML */
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
      ...(parent ? [{ "@type": "ListItem", position: 2, name: parent.name, item: parent.url }] : []),
      { "@type": "ListItem", position: parent ? 3 : 2, name: crumb, item: url },
    ],
  };
  const blocks = [breadcrumb, ...(schema ? [schema] : [])]
    .map((s) => `    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n");
  html = html.replace("</head>", `${blocks}\n  </head>`);

  const dir = path.join(DIST, ...route.split("/").filter(Boolean));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
};

if (!fs.existsSync(path.join(DIST, "index.html"))) {
  console.error("dist/index.html not found — run `vite build` first.");
  process.exit(1);
}

routes.forEach(renderRoute);

const services = routes.filter((r) => r.route.startsWith("/services/")).length;
const industries = routes.filter((r) => r.route.startsWith("/industries/")).length;
const blogs = routes.filter((r) => r.route.startsWith("/blogs/")).length;
console.log(
  `prerendered ${routes.length} routes: ${Object.keys(staticRoutes).length} static + ${services} services + ${industries} industries + ${blogs} blogs`
);
