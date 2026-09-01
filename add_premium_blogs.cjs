// Adds 4 premium SEO/AEO blog posts to yurekh.com (BlogSection.tsx + BlogDetail.tsx)
// with real Pexels featured images. Idempotent - safe to re-run.
// Usage: node add_premium_blogs.cjs   (then: node generate-sitemap.cjs)
const fs = require('fs');
const path = require('path');

const envText = fs.readFileSync(path.join(__dirname, '..', 'ainos', '.env.local'), 'utf8');
const PEXELS_KEY = (envText.match(/^PEXELS_API_KEY=(.+)$/m) || [])[1];

async function pexelsImage(query, seedStr) {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
    { headers: { Authorization: PEXELS_KEY } }
  );
  if (!res.ok) throw new Error('Pexels ' + res.status);
  const data = await res.json();
  const photos = data.photos || [];
  if (!photos.length) throw new Error('no photos');
  const seed = seedStr.length + seedStr.charCodeAt(0);
  const pick = photos[seed % photos.length];
  return pick.src.large || pick.src.landscape;
}

const DATE = 'September 1, 2026';

const BLOGS = [
  {
    slug: 'ai-agents-for-business-cost-guide-2026',
    title: 'AI Agents for Business in 2026: What They Do, What They Cost, and How to Start',
    description: 'A practical 2026 guide to AI agents for business - real use cases, realistic costs (build vs subscribe), ROI math, and a 3-step starter plan for small teams.',
    category: 'AI & Automation',
    pexels: 'futuristic robot artificial intelligence technology',
    sections: [
      { heading: 'What Is an AI Agent (and How Is It Different from Chatbot)?', content: 'A chatbot answers questions; an AI agent completes work. In 2026, business AI agents can respond to a lead on WhatsApp, check your inventory, draft an invoice, follow up on an unpaid bill, and update your CRM - all without a human clicking anything. They connect to your tools, remember context, and take multi-step actions toward an outcome you define. That shift - from answering to doing - is why AI agents have become the fastest-adopted business technology since cloud accounting.' },
      { heading: 'What Businesses Actually Use AI Agents For in 2026', content: '**Instant lead response** - answering every website and Instagram enquiry within seconds, day or night.\n\n**Payment follow-up** - polite, persistent reminders that get invoices paid 30-40% faster.\n\n**Customer support** - resolving 70-80% of routine questions instantly, escalating the rest with full context.\n\n**Content operations** - researching, drafting, and scheduling daily blog posts and social updates.\n\n**Back-office admin** - data entry, report summaries, appointment booking, and reminder messages.\n\nThe pattern is the same everywhere: repetitive, rule-adjacent work that consumes human hours every single day.' },
      { heading: 'What Does an AI Agent Cost in 2026?', content: '**Subscription platforms** (ready-made agents for sales, support, or content): $30 - $300/month per workflow. Best for standard use cases and fast launch.\n\n**Custom-built agents** (trained on your data, integrated with your systems): $3,000 - $15,000 one-time plus hosting. Best when your workflow is unique or customer-facing quality is critical.\n\n**Enterprise agent fleets** (multiple coordinated agents with dashboards and approvals): $20,000 - $100,000+.\n\nRule of thumb: if an agent saves even 10 hours a month of skilled time, it pays for itself several times over.' },
      { heading: 'The ROI Math Most Owners Miss', content: 'A sales lead contacted within 5 minutes is dramatically more likely to convert - yet most small businesses respond hours later, or never. One AI agent handling enquiries 24/7 typically converts enough previously-lost leads to cover its cost in the first month. Add payment follow-ups and support deflection, and a modest agent stack routinely returns 5-10x its monthly cost. The expensive option is not the agent - it is the silent leak of unanswered enquiries and late payments you have now.' },
      { heading: 'How to Start Safely: A 3-Step Plan', content: '1. **Pick one revenue-critical workflow.** Usually lead response or invoice follow-up. Do not start with five experiments.\n\n2. **Run the agent in approval mode for two weeks.** It drafts; you approve. You learn its quality and it learns your voice.\n\n3. **Switch to autonomous with guardrails.** Spending limits, escalation rules, and a weekly 15-minute review. Then add the next workflow.\n\nThis staged approach removes the fear and the risk while keeping the upside.' },
      { heading: 'How Yurekh Solutions Can Help', content: 'Yurekh Solutions designs, builds, and integrates AI agents for growing businesses - from WhatsApp lead-response agents to full content and billing automation connected to your CRM and website. We handle the strategy, the build, the integrations, and the training of your team, then stay on for optimization. Contact us for an AI agent readiness assessment and a fixed-price starter plan.' }
    ],
  },
  {
    slug: 'business-website-cost-india-2026',
    title: 'How Much Does a Business Website Cost in India in 2026? (Honest Breakdown)',
    description: 'Real 2026 website pricing in India: basic, business, e-commerce and custom tiers in rupees, hidden costs to budget for, and a checklist to choose the right agency.',
    category: 'Web Development',
    pexels: 'web designer working code screen',
    sections: [
      { heading: 'Why Your Website Is Your Best Employee in 2026', content: 'A modern business website is not a digital visiting card - it is your showroom, salesperson, and lead machine working 24/7. In 2026, buyers check your website before they trust your WhatsApp reply. Businesses with fast, content-rich websites win local search, feed AI assistants with citable answers, and convert traffic while competitors sleep. So the right question is not "what does a website cost" but "what does a growth engine return".' },
      { heading: 'Website Cost Tiers in India (2026, Realistic Prices)', content: '**Basic Business Website** (5-7 pages, contact form, mobile-friendly): ₹25,000 - ₹60,000. Good for local services starting out.\n\n**Professional Business Website** (10-20 pages, blog, SEO setup, CMS, WhatsApp integration, analytics): ₹60,000 - ₹2,00,000. The sweet spot for most growing businesses.\n\n**E-commerce Website** (catalog, payments, order tracking, GST invoices): ₹1,50,000 - ₹5,00,000 depending on catalog size and integrations.\n\n**Custom Web Application** (portals, dashboards, SaaS, integrations): ₹3,00,000 - ₹15,00,000+.\n\nPrices vary by agency experience and city; these ranges reflect quality work, not template reselling.' },
      { heading: 'What Actually Drives the Price Up or Down', content: '1. **Design originality** - custom design costs more than templates but converts better.\n2. **Content** - professional copywriting and SEO structure add value and cost.\n3. **Integrations** - payments, CRM, WhatsApp, booking systems each add scope.\n4. **Performance work** - sub-3-second loading on Indian mobile networks takes real engineering.\n5. **SEO architecture** - schema, sitemaps, and answer-first content structure make the site rankable.\n6. **Maintenance model** - who updates, backs up, and secures the site after launch.' },
      { heading: 'The Hidden Costs Nobody Tells You About', content: '- **Hosting & domain**: ₹3,000 - ₹15,000/year (quality hosting matters for speed)\n- **SSL & security**: ₹0 - ₹10,000/year\n- **Maintenance & updates**: ₹15,000 - ₹60,000/year\n- **Content & blog publishing**: the biggest growth lever - budget monthly or automate it\n- **SEO & Google Business optimization**: monthly retainer or in-house effort\n\nA website without an ongoing content and SEO budget is like a showroom with the lights off.' },
      { heading: 'How to Choose the Right Agency (Checklist)', content: '- Ask for live websites they built - and open them on your phone.\n- Check loading speed on mobile data, not office Wi-Fi.\n- Confirm SEO basics are included: schema, sitemap, meta structure.\n- Ask who owns the code, domain, and hosting accounts (you should).\n- Get a written scope with page counts, revisions, and timelines.\n- Prefer agencies that also handle content and growth, not just design.\n- Avoid anyone promising "page 1 guaranteed" - SEO is earned, not promised.' },
      { heading: 'How Yurekh Solutions Can Help', content: 'Yurekh Solutions builds fast, SEO-ready business websites and e-commerce platforms for Indian and international clients - with original design, answer-first content structure, WhatsApp and payment integrations, and optional AI blog automation that publishes for you daily. Every project ships with schema, sitemap, and a growth plan. Contact us for a fixed-price quote tailored to your business tier.' }
    ],
  },
  {
    slug: 'seo-vs-google-ads-small-business-2026',
    title: 'SEO vs Google Ads in 2026: Where Should Small Businesses Invest First?',
    description: 'SEO or Google Ads for small business in 2026? Real CPC numbers, compounding math, a head-to-head comparison, and the hybrid playbook smart brands use.',
    category: 'Digital Marketing',
    pexels: 'marketing analytics chart laptop',
    sections: [
      { heading: 'The 2026 Dilemma: Rent Attention or Own It?', content: 'Google Ads gives you traffic today; SEO builds traffic you own forever. In 2026, with ad costs rising and AI Overviews changing clicks, the decision matters more than ever. The honest answer for most small businesses: start where the money leaks least and the learning is fastest, then shift budget toward the asset that compounds. Here is the full comparison with real numbers.' },
      { heading: 'Google Ads in 2026: What It Really Costs', content: 'In India, average cost-per-click ranges from ₹20 - ₹120 for local services and ₹100 - ₹400+ for competitive categories like legal, real estate, and SaaS. A modest test budget of ₹30,000/month at ₹50 CPC buys 600 clicks - perhaps 15-30 enquiries at a decent conversion rate. The moment you stop paying, traffic stops. Ads excel for urgent, high-intent demand ("emergency plumber near me") and for validating which offers convert before you invest in SEO.' },
      { heading: 'SEO in 2026: The Compounding Asset', content: 'SEO costs time and content instead of clicks. A business publishing one well-structured, question-answering article daily creates 365 ranking surfaces a year. Typical agency or tooling budgets: ₹25,000 - ₹1,00,000/month. Results start in 8-12 weeks and compound - a post that ranks keeps bringing leads for years at zero marginal cost. SEO also feeds AI Overviews and assistants, which increasingly decide who gets considered before a search even happens.' },
      { heading: 'Head-to-Head: Speed, Cost, Trust, and Moat', content: '**Speed**: Ads win (days vs months).\n**Cost per lead over 12 months**: SEO wins by 3-5x once ranked.\n**Trust**: Organic results and cited answers earn more trust than labeled ads.\n**Moat**: SEO compounds into an asset; ads stop at zero the day budget stops.\n**Control**: Ads give precise targeting and instant testing; SEO gives durability.\n\nVerdict: Ads are renting; SEO is owning.' },
      { heading: 'The Hybrid Playbook Smart Businesses Use', content: 'Months 1-3: Run small Google Ads on your highest-intent keywords to capture demand now and learn which messages convert. Simultaneously start the SEO engine - technical fixes, Google Business Profile, and daily question-first blog publishing. Month 4 onward: Shift budget from ads to content as organic rankings arrive; keep ads only for new offers and emergencies. By month 9-12, organic typically supplies the majority of leads at a fraction of the blended cost.' },
      { heading: 'How Yurekh Solutions Can Help', content: 'Yurekh Solutions plans and runs both sides of this equation - performance Google Ads campaigns and full SEO systems including technical SEO, answer-first content, and automated daily blog publishing through our AINOS platform. We report one number that matters: cost per qualified lead, trending down month over month. Contact us for a channel audit and a 90-day hybrid plan.' }
    ],
  },
  {
    slug: 'daily-blogging-ai-seo-growth-2026',
    title: 'Why Publishing One Blog Every Day Is the Best SEO Investment in 2026',
    description: 'The math behind daily blogging: 365 ranking surfaces a year, AI Overview citations, and how AI automation makes one-post-per-day publishing effortless.',
    category: 'Content Marketing',
    pexels: 'person writing blog laptop notebook',
    sections: [
      { heading: 'The Math Nobody Argues With', content: 'Every published article is a new door to your website - a page that can rank for a question, get cited by an AI assistant, and be shared on social. One post a week is 52 doors a year. One post a day is 365. Over three years, that is 1,000+ indexed surfaces working round the clock. No ad campaign, no single viral post, and no redesign produces that kind of durable, compounding inventory. Consistency is not a virtue here - it is the strategy.' },
      { heading: 'Why Consistency Beats Intensity in Google\'s Eyes', content: 'Search engines and AI systems reward sites that stay fresh and go deep on a topic. A steady daily cadence signals an active, authoritative publisher; it accelerates crawling, builds topical coverage across hundreds of questions, and creates internal linking density that lifts every page. Meanwhile, the common pattern - three excited posts then silence - teaches Google to visit less often. In 2026, the algorithmic advantage goes to the publisher that never stops.' },
      { heading: 'What a Ranking Blog Post Looks Like in 2026', content: '- **Question-first title** using the exact phrase people search.\n- **Direct answer in the first two sentences** - for snippets and AI citations.\n- **H2/H3 headings written as questions** with clear, structured answers.\n- **A short FAQ section** with 3-5 direct answers (schema-ready).\n- **Real numbers, steps, and examples** - evidence of experience (E-E-A-T).\n- **A named author and consistent publishing source** for trust.\n- **One high-quality, relevant featured image** for click-through.\nThis structure wins both classic rankings and AI Overview citations.' },
      { heading: 'How AI Makes Daily Publishing Effortless', content: 'The old objection - "who has time to write daily?" - is obsolete. Modern AI blog agents research a topic in your niche, draft a structured 800-1200 word article in your brand voice, attach a premium stock image, optimize meta data, and publish to your website on a schedule - one high-quality post every day, automatically. Your team spends five minutes reviewing instead of five hours writing. This is exactly the automation Yurekh Solutions integrates for clients through the AINOS platform.' },
      { heading: 'Your 30-Day Proof Plan', content: 'Week 1: Fix technical basics - sitemap, schema, Google Search Console, Business Profile. Start daily publishing (automated is fine).\nWeek 2-3: Keep the cadence unbroken; share each post to LinkedIn and WhatsApp; watch indexing in Search Console.\nWeek 4: Review impressions by topic; double down on themes gaining traction.\nBy day 30 you will see impressions climbing; by month 3-6 the compounding becomes visible in enquiries. The only failure mode is stopping.' },
      { heading: 'How Yurekh Solutions Can Help', content: 'Yurekh Solutions sets up done-for-you daily blog engines for business websites - niche research, AI drafting in your brand voice, premium images, SEO structure, auto-publishing, and integration with your site via the AINOS blog platform. Clients get a website that grows fresher and more authoritative every single day. Contact us to see a live demo of a site running on daily auto-publishing.' }
    ],
  },
];

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');

(async () => {
  // Fetch Pexels images
  for (const b of BLOGS) b.image = await pexelsImage(b.pexels, b.title);

  // 1) BlogSection.tsx - insert into blogPosts array
  const bsPath = path.join(__dirname, 'src', 'components', 'BlogSection.tsx');
  let bs = fs.readFileSync(bsPath, 'utf8');
  if (bs.includes(BLOGS[0].slug)) {
    console.log('SKIP: blogs already present in BlogSection.tsx');
  } else {
    const NL = bs.includes('\r\n') ? '\r\n' : '\n';
    const mIdx = bs.indexOf('const BlogSection = () => {');
    const closeIdx = bs.lastIndexOf('];', mIdx);
    const before = bs.slice(0, closeIdx);
    const needsComma = before.trimEnd().endsWith('}');
    const entries = BLOGS.map((b) =>
      `  {${NL}    slug: "${b.slug}",${NL}    title: "${esc(b.title)}",${NL}    description: "${esc(b.description)}",${NL}    date: "${DATE}",${NL}    image: "${b.image}",${NL}    category: "${b.category}",${NL}  }`
    ).join(',' + NL);
    bs = before + (needsComma ? ',' : '') + NL + entries + NL + bs.slice(closeIdx);
    fs.writeFileSync(bsPath, bs, 'utf8');
    console.log('BlogSection.tsx updated: +4 posts');
  }

  // 2) BlogDetail.tsx - insert into blogContent map
  const bdPath = path.join(__dirname, 'src', 'pages', 'BlogDetail.tsx');
  let bd = fs.readFileSync(bdPath, 'utf8');
  if (bd.includes(BLOGS[0].slug)) {
    console.log('SKIP: content already present in BlogDetail.tsx');
  } else {
    const NL = bd.includes('\r\n') ? '\r\n' : '\n';
    const mIdx = bd.indexOf('const BlogDetail = () => {');
    const closeIdx = bd.lastIndexOf('};', mIdx);
    const entries = BLOGS.map((b) =>
      `  "${b.slug}": {${NL}    sections: [${NL}` +
      b.sections.map((s) => `      { heading: "${esc(s.heading)}", content: "${esc(s.content)}" },`).join(NL) +
      `${NL}    ],${NL}  },`
    ).join(NL);
    bd = bd.slice(0, closeIdx) + entries + NL + NL + bd.slice(closeIdx);
    fs.writeFileSync(bdPath, bd, 'utf8');
    console.log('BlogDetail.tsx updated: +4 full articles');
  }

  console.log('DONE. Now run: node generate-sitemap.cjs');
})().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
