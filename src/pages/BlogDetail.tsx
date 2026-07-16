import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "../components/BlogSection";
import blogHero from "../assets/blog/blog-hero.jpg";

const blogContent: Record<string, { sections: { heading: string; content: string }[] }> = {
  whatarethetoptechniquesforseo: {
    sections: [
      { heading: "What is SEO?", content: "Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. It involves optimizing various elements of your website to rank higher on search engine results pages (SERPs), making it easier for potential customers to find your business online." },
      { heading: "Why is SEO Important?", content: "In today's digital landscape, SEO is more critical than ever. With over 90% of online experiences beginning with a search engine, businesses that fail to optimize their online presence miss out on significant organic traffic. SEO helps build credibility, drives targeted traffic, and provides a better user experience—all of which contribute to business growth." },
      { heading: "Top SEO Techniques for 2026", content: "1. **Core Web Vitals Optimization**: Google's page experience signals continue to play a crucial role in rankings. Focus on loading performance, interactivity, and visual stability.\n\n2. **AI-Powered Content**: Leverage AI tools to create comprehensive, well-researched content that addresses user intent at every level.\n\n3. **E-E-A-T Signals**: Demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness through detailed author bios, citations, and real-world examples.\n\n4. **Long-Form Content**: Create in-depth articles (2,000+ words) that thoroughly cover topics and answer related questions.\n\n5. **Technical SEO**: Ensure fast page speeds, mobile-friendliness, proper schema markup, and clean site architecture." },
      { heading: "Emerging Trends", content: "The SEO landscape continues to evolve with AI integration in search algorithms, voice search optimization, and the growing importance of video content. Stay ahead by focusing on user intent, creating valuable content, and maintaining strong technical foundations." },
      { heading: "Conclusion", content: "Mastering these SEO techniques requires consistent effort and adaptation. By focusing on user experience, creating high-quality content, and staying updated with algorithm changes, you can achieve sustainable organic growth for your business." },
    ],
  },
  creatingwebsitewireframes: {
    sections: [
      { heading: "What Are Website Wireframes?", content: "Wireframes are basic visual guides that represent the skeletal framework of a website. They focus on layout, content placement, and functionality without visual design elements like colors or images. Think of them as the blueprint for your website before any design or development begins." },
      { heading: "Why Wireframes Matter", content: "Wireframes save time and money by establishing the structure and user flow early in the design process. They help stakeholders visualize the layout, identify potential issues, and make decisions before investing in detailed design work. This upfront planning prevents costly redesigns later in the project." },
      { heading: "Key Elements of Effective Wireframes", content: "1. **Clear Hierarchy**: Establish visual weight for different content types to guide user attention.\n\n2. **Navigation Structure**: Map out menus, links, and user pathways clearly.\n\n3. **Content Zones**: Define areas for text, images, CTAs, and interactive elements.\n\n4. **Responsive Considerations**: Plan layouts for desktop, tablet, and mobile views.\n\n5. **Interaction Points**: Mark buttons, forms, and interactive elements with clear labels." },
      { heading: "Wireframing Tools & Best Practices", content: "Popular tools include Figma, Sketch, and Adobe XD. Start with low-fidelity sketches to focus on structure, then gradually add detail. Always wireframe with user journeys in mind and test navigation flows before moving to high-fidelity designs." },
      { heading: "Conclusion", content: "Wireframes are an essential step in the web design process. They align your team, save development time, and ensure your final product meets both business goals and user needs effectively." },
    ],
  },
  "content-marketing-seo": {
    sections: [
      { heading: "Content Marketing & SEO: The Perfect Partnership", content: "Content marketing and SEO work hand in hand to drive organic traffic and build authority. Quality content attracts links, engages users, and signals relevance to search engines—while SEO ensures your content reaches the right audience at the right time." },
      { heading: "Creating SEO-Optimized Content", content: "1. **Keyword Research**: Identify high-value keywords with search volume and manageable competition.\n\n2. **User Intent Matching**: Create content that directly addresses what searchers are looking for.\n\n3. **Comprehensive Coverage**: Cover topics in-depth to become the definitive resource.\n\n4. **Structured Data**: Use headings, lists, and schema markup to help search engines understand your content.\n\n5. **Internal Linking**: Connect related content to distribute authority across your site." },
      { heading: "Content Types That Drive SEO Results", content: "Blog posts, how-to guides, case studies, infographics, and video content all contribute to a strong content marketing strategy. Each format serves different user intents and can capture different types of search traffic." },
      { heading: "Measuring Content Performance", content: "Track organic traffic, keyword rankings, time on page, bounce rate, and conversion metrics to understand which content drives the most value. Use these insights to refine your strategy and double down on what works." },
      { heading: "Conclusion", content: "Content marketing is the engine that powers sustainable SEO growth. By consistently creating valuable, well-optimized content, you build authority, attract links, and drive qualified traffic to your business." },
    ],
  },
  "understanding-analytics": {
    sections: [
      { heading: "Why Analytics Matter", content: "Website analytics provide the data you need to make informed decisions about your digital strategy. Without measurement, you're essentially operating blind—unable to identify what's working, what isn't, and where opportunities lie for improvement." },
      { heading: "Key Metrics to Track", content: "1. **Organic Traffic**: Monitor visitors coming from search engines to measure SEO effectiveness.\n\n2. **Conversion Rate**: Track the percentage of visitors who complete desired actions.\n\n3. **Bounce Rate**: Understand how many visitors leave after viewing only one page.\n\n4. **Average Session Duration**: Measure engagement and content relevance.\n\n5. **Page Speed**: Monitor loading times that impact both rankings and user experience." },
      { heading: "Tools for Digital Measurement", content: "Google Analytics 4, Google Search Console, and heat mapping tools like Hotjar provide comprehensive insights into user behavior, traffic sources, and conversion paths. Set up proper tracking to capture the data that matters most to your business goals." },
      { heading: "Turning Data Into Action", content: "Analytics are only valuable when they drive action. Regularly review your data, identify trends and anomalies, test hypotheses, and implement changes based on evidence rather than assumptions." },
      { heading: "Conclusion", content: "Understanding your digital analytics is the foundation of successful online marketing. Use data to guide decisions, optimize performance, and continuously improve your digital presence." },
    ],
  },
  "ai-in-modern-seo": {
    sections: [
      { heading: "AI's Impact on Search", content: "Artificial intelligence has fundamentally changed how search engines understand and rank content. Google's AI systems like RankBrain and MUMS (Multitask Unified Model) now interpret search queries with near-human understanding, making content quality and relevance more important than ever." },
      { heading: "AI Tools for SEO", content: "1. **Content Generation**: AI assists in creating outlines, drafts, and optimizations while maintaining human oversight for quality.\n\n2. **Keyword Research**: AI-powered tools identify semantic clusters and long-tail opportunities.\n\n3. **Technical Audits**: Automated crawlers identify and prioritize technical SEO issues.\n\n4. **Content Optimization**: Real-time suggestions for improving on-page SEO elements.\n\n5. **Link Building**: AI helps identify link opportunities and assess domain authority." },
      { heading: "Balancing AI and Human Expertise", content: "While AI accelerates many SEO tasks, human judgment remains essential for strategy, creativity, and understanding nuanced user intent. The most effective approach combines AI efficiency with human insight and editorial quality." },
      { heading: "Future of AI in SEO", content: "Expect continued evolution in AI-powered search, with greater emphasis on conversational queries, multimodal content (text, images, video), and personalized search results that adapt to individual user contexts." },
      { heading: "Conclusion", content: "AI is not replacing SEO professionals—it's empowering them. By leveraging AI tools strategically, you can work faster, uncover deeper insights, and deliver better results for your business." },
    ],
  },
  digitalmarketing: {
    sections: [
      { heading: "Why User Experience Matters", content: "In today's competitive digital landscape, user experience (UX) is often the differentiating factor between success and failure. A well-designed website that prioritizes user needs builds trust, encourages engagement, and drives conversions." },
      { heading: "Core Principles of Great UX", content: "1. **Intuitive Navigation**: Users should find what they need without thinking about how to find it.\n\n2. **Fast Loading Speed**: Every second of delay increases bounce rates significantly.\n\n3. **Mobile-First Design**: With most traffic coming from mobile devices, responsive design is essential.\n\n4. **Accessibility**: Ensure your site is usable by people with disabilities.\n\n5. **Clear Visual Hierarchy**: Guide users' attention to the most important elements first." },
      { heading: "UX and SEO: The Connection", content: "Google's Core Web Vitals and page experience signals directly tie user experience to search rankings. Sites that provide excellent UX tend to earn more links, social shares, and return visits—all positive SEO signals." },
      { heading: "Measuring UX Success", content: "Track metrics like task completion rate, error rate, time on task, and user satisfaction scores. Combine quantitative data with qualitative feedback from user testing to identify areas for improvement." },
      { heading: "Conclusion", content: "Elevating user experience is an ongoing investment that pays dividends through higher engagement, better rankings, and increased customer loyalty. Make UX a core part of your digital strategy." },
    ],
  },
  "brand-identity-online": {
    sections: [
      { heading: "What is Online Brand Identity?", content: "Your online brand identity encompasses every visual and verbal element that represents your business on the internet—from your logo and color palette to your tone of voice and content style. It's how people recognize and remember your brand in the digital space." },
      { heading: "Key Elements of Strong Brand Identity", content: "1. **Consistent Visual Identity**: Use the same colors, fonts, and imagery across all platforms.\n\n2. **Clear Brand Voice**: Define how your brand communicates—professional, friendly, authoritative.\n\n3. **Memorable Logo**: Create a distinctive mark that works at every size.\n\n4. **Brand Guidelines**: Document standards to ensure consistency across teams.\n\n5. **Authentic Storytelling**: Share your brand's mission, values, and unique perspective." },
      { heading: "Building Brand Trust Online", content: "Trust is built through consistency, transparency, and delivering on promises. Showcase customer testimonials, maintain active social media presence, respond to reviews, and create valuable content that demonstrates your expertise." },
      { heading: "Measuring Brand Impact", content: "Track brand awareness through social mentions, search volume for your brand name, direct traffic, and engagement rates. Monitor sentiment across platforms to understand how your brand is perceived." },
      { heading: "Conclusion", content: "A strong online brand identity creates recognition, builds trust, and drives loyalty. Invest in creating a cohesive, authentic brand experience that resonates with your target audience." },
    ],
  },
  "impact-digital-marketing": {
    sections: [
      { heading: "The Digital Marketing Revolution", content: "Digital marketing has fundamentally transformed how businesses reach, engage, and convert customers. From social media to search engines, digital channels offer unprecedented targeting capabilities, measurable results, and cost-effective alternatives to traditional advertising." },
      { heading: "Key Digital Marketing Channels", content: "1. **Search Engine Marketing**: Capture high-intent traffic through SEO and paid search.\n\n2. **Social Media Marketing**: Build communities and drive engagement on platforms where your audience spends time.\n\n3. **Email Marketing**: Nurture leads and retain customers with personalized messaging.\n\n4. **Content Marketing**: Attract and educate prospects with valuable information.\n\n5. **Paid Advertising**: Scale reach quickly with targeted display, video, and social ads." },
      { heading: "Measuring Business Impact", content: "Digital marketing provides clear attribution for every dollar spent. Track customer acquisition cost, lifetime value, return on ad spend, and multi-touch attribution to understand the true impact of each channel on your bottom line." },
      { heading: "Future of Digital Marketing", content: "AI-driven personalization, privacy-first marketing, short-form video dominance, and omnichannel experiences are shaping the next era of digital marketing. Stay ahead by embracing new technologies while maintaining authentic customer connections." },
      { heading: "Conclusion", content: "Digital marketing is the primary growth engine for modern businesses. By building a strategic, data-driven digital presence, you can reach more customers, build stronger relationships, and drive sustainable business growth." },
    ],
  },
  "optimizing-voice-search": {
    sections: [
      { heading: "The Rise of Voice Search", content: "With the proliferation of smart speakers, voice assistants, and mobile voice search, optimizing for voice queries has become essential. Voice searches are typically longer, more conversational, and often seek direct answers to specific questions." },
      { heading: "How Voice Search Differs from Text Search", content: "Voice queries tend to be: longer (7-10 words on average), question-based, locally focused, and conversational in nature. This means your SEO strategy needs to account for natural language patterns and direct answer formats." },
      { heading: "Voice Search Optimization Strategies", content: "1. **Question-Based Content**: Create content that directly answers common questions in your industry.\n\n2. **Featured Snippets**: Structure content to win position zero results, which voice assistants often read aloud.\n\n3. **Local SEO**: Optimize for near me searches with accurate business listings and local content.\n\n4. **Conversational Keywords**: Use natural language and long-tail phrases that mirror how people speak.\n\n5. **Fast Loading Speed**: Voice search users expect immediate answers—page speed is critical." },
      { heading: "Technical Considerations", content: "Implement structured data markup to help search engines understand your content's context. Ensure mobile-friendliness and fast loading times, as most voice searches originate from mobile devices." },
      { heading: "Conclusion", content: "Voice search optimization is no longer optional—it's a necessity for businesses that want to remain visible in an increasingly voice-first world. Start optimizing now to capture this growing search channel." },
    ],
  },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const content = blogContent[slug || ""];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
        <div className="text-center">
          <h1 className="text-white text-3xl font-semibold mb-4">Blog Post Not Found</h1>
          <Link to="/" className="text-[#1BE1D3] hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const heroImage = post.image || blogHero;

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1a1a 40%, #0b1f1f 70%, #000000 100%)" }}>
      {/* Back Button */}
      <div className="px-8 pt-28">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#1BE1D3] text-[14px] font-semibold hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="px-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[28px] overflow-hidden h-[300px] md:h-[400px]">
            <img
              src={heroImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-400 text-[14px]">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#1BE1D3]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#1BE1D3]" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-[#1BE1D3]" />
              <span>Yurekh Solutions</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[28px] md:text-[36px] font-semibold text-white leading-[1.3] mb-8">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-[16px] text-white/80 leading-[1.8] mb-12 italic border-l-4 border-[#1BE1D3] pl-6">
            {post.description}
          </p>

          {/* Content Sections */}
          {content && content.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-[22px] md:text-[26px] font-semibold text-white mb-4 leading-[1.3]">
                {section.heading}
              </h2>
              <div className="text-[15px] text-white/75 leading-[1.9] whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}

          {/* Related Posts */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="text-[22px] font-semibold text-white mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((related, idx) => (
                  <Link
                    key={idx}
                    to={`/blogs/${related.slug}`}
                    className="group rounded-[20px] overflow-hidden bg-white/5 border border-white/10 hover:border-[#1BE1D3]/30 transition-all duration-300"
                  >
                    <div
                      className="h-[160px] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${related.image})` }}
                    />
                    <div className="p-4">
                      <h4 className="text-[15px] font-semibold text-white group-hover:text-[#1BE1D3] transition-colors duration-300 line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="text-[12px] text-gray-500 mt-2">{related.date}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
