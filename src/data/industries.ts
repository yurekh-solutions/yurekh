export interface ContentItem {
  title: string;
  description: string;
}

export interface IndustryItem {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  challenges: ContentItem[];
  solutions: ContentItem[];
  capabilities: ContentItem[];
  outcomes: ContentItem[];
  ctaTitle: string;
  ctaDescription: string;
  keywords: string[];
}

export interface IndustryCategory {
  title: string;
  slug: string;
  industries: IndustryItem[];
}

export const industryCategories: IndustryCategory[] = [
  {
    title: "Core Industries",
    slug: "core-industries",
    industries: [
      {
        name: "Agriculture",
        slug: "agriculture",
        tagline: "Modern digital systems for precision farming, field visibility, and farm-to-market efficiency.",
        description: "Agriculture businesses need accurate field data and faster operational decisions. We build connected platforms that help teams monitor crop health, optimize resource use, and improve distribution planning from field to warehouse.",
        seoTitle: "Agriculture Industry Solutions | Yurekh Solutions",
        seoDescription: "Digital agriculture solutions for precision farming, crop monitoring, and farm-to-market efficiency. Build smarter agriculture operations with Yurekh Solutions.",
        challenges: [
          { title: "Limited Field Visibility", description: "Farmers struggle with limited visibility into crop performance and field conditions, making it difficult to make data-driven decisions about irrigation, fertilization, and pest control." },
          { title: "Manual Workflows", description: "Manual workflows across procurement, harvesting, and logistics lead to inefficiencies, errors, and delayed decision-making that impact overall productivity." },
          { title: "Unpredictable Fluctuations", description: "Unpredictable yield and input-cost fluctuations create financial uncertainty, making it challenging to plan budgets and optimize resource allocation." }
        ],
        solutions: [
          { title: "Connected Dashboards", description: "Deploy connected dashboards for farm, equipment, and workforce operations to provide real-time visibility and enable faster, more informed decisions." },
          { title: "Unified Data Layer", description: "Integrate weather, field, and inventory data into one decision layer, giving farmers a comprehensive view of all operational factors." },
          { title: "Automated Workflows", description: "Automate planning workflows for harvest, transport, and fulfillment to reduce manual effort and improve operational efficiency." }
        ],
        capabilities: [
          { title: "Precision Analytics", description: "Real-time farming analytics and automated alerts for crop health, soil conditions, and weather patterns." },
          { title: "Fleet Tracking", description: "Equipment and fleet utilization tracking to optimize resource usage and reduce operational costs." },
          { title: "Harvest Planning", description: "Advanced harvest planning and procurement workflows for better supply chain management." },
          { title: "Performance Reporting", description: "Comprehensive supply and demand performance reporting for strategic decision-making." }
        ],
        outcomes: [
          { title: "Reduced Waste", description: "Lower operational waste across input and logistics cycles through better planning and resource optimization." },
          { title: "Improved Accuracy", description: "Improved planning accuracy for yield and distribution, leading to better market positioning." },
          { title: "Faster Decisions", description: "Faster decisions based on real-time field data, enabling proactive responses to changing conditions." }
        ],
        ctaTitle: "Build Smarter Agriculture Operations",
        ctaDescription: "Launch digital products that improve productivity, traceability, and growth.",
        keywords: ["agriculture software", "precision farming", "crop monitoring", "farm management", "agricultural technology", "smart farming", "agritech", "digital agriculture"]
      },
      {
        name: "Automotive",
        slug: "automotive",
        tagline: "Connected automotive software for fleet intelligence, service operations, and customer journeys.",
        description: "Automotive organizations require integrated systems across service, mobility, and customer touchpoints. We design scalable platforms that connect vehicle data, workshop operations, and customer experiences in one ecosystem.",
        seoTitle: "Automotive Industry Solutions | Yurekh Solutions",
        seoDescription: "Automotive digital solutions for connected vehicles, fleet management, and customer experiences. Accelerate automotive innovation with Yurekh Solutions.",
        challenges: [
          { title: "Disconnected Data", description: "Disconnected data between service, fleet, and customer systems creates silos that prevent comprehensive insights and coordinated operations." },
          { title: "Rising Costs", description: "Rising maintenance costs and operational downtime impact profitability and customer satisfaction across the automotive value chain." },
          { title: "Security Concerns", description: "Security and reliability concerns in connected services require robust architectures and compliance frameworks." }
        ],
        solutions: [
          { title: "Unified Dashboards", description: "Centralize telematics and service insights in unified dashboards for complete operational visibility." },
          { title: "Predictive Maintenance", description: "Apply predictive maintenance models for proactive service planning, reducing unexpected breakdowns and costs." },
          { title: "Secure API Layers", description: "Build secure API layers for connected mobility products with enterprise-grade security and compliance." }
        ],
        capabilities: [
          { title: "Health Monitoring", description: "Fleet and vehicle health monitoring with real-time diagnostics and performance tracking." },
          { title: "Workshop Automation", description: "Workshop scheduling and parts workflow automation for efficient service operations." },
          { title: "Connected Apps", description: "Connected app experiences for drivers and customers with seamless digital journeys." },
          { title: "Performance Analytics", description: "Service performance analytics and reporting for continuous improvement." }
        ],
        outcomes: [
          { title: "Reduced Downtime", description: "Reduced downtime through predictive servicing and proactive maintenance strategies." },
          { title: "Better Visibility", description: "Improved operational visibility across mobility workflows and service operations." },
          { title: "Stronger Retention", description: "Stronger customer retention with digital service journeys and enhanced experiences." }
        ],
        ctaTitle: "Accelerate Automotive Innovation",
        ctaDescription: "Deliver reliable, connected automotive solutions with measurable outcomes.",
        keywords: ["automotive software", "connected vehicles", "fleet management", "predictive maintenance", "mobility solutions", "telematics", "automotive technology"]
      },
      {
        name: "Education",
        slug: "education",
        tagline: "Learner-first education platforms for blended learning, engagement, and administration.",
        description: "Educational institutions need dependable tools for teaching, engagement, and administration. We develop digital learning ecosystems that support students, educators, and operations across in-person and online models.",
        seoTitle: "Education Industry Solutions | Yurekh Solutions",
        seoDescription: "Education technology solutions for learning management, student engagement, and academic administration. Modernize education experiences with Yurekh Solutions.",
        challenges: [
          { title: "Low Engagement", description: "Low learner engagement in remote and hybrid settings affects learning outcomes and student retention rates." },
          { title: "Fragmented Tools", description: "Fragmented tools for teaching, assessment, and communication create inefficiencies and frustrate both educators and students." },
          { title: "Manual Administration", description: "Manual administration for admissions, attendance, and records consumes valuable time and resources." }
        ],
        solutions: [
          { title: "Unified Portals", description: "Build unified portals for students, teachers, and administrators to streamline communication and collaboration." },
          { title: "Integrated Workflows", description: "Integrate content, assessments, and communication workflows for a seamless learning experience." },
          { title: "Automated Operations", description: "Automate core academic and administrative operations to reduce manual workload and errors." }
        ],
        capabilities: [
          { title: "Learning Management", description: "Comprehensive learning management and content delivery systems for effective education." },
          { title: "Progress Analytics", description: "Attendance, grading, and progress analytics for data-driven educational decisions." },
          { title: "Communication Dashboards", description: "Parent-student communication dashboards for transparent engagement." },
          { title: "Admin Workflows", description: "Admissions and academic administration workflows for efficient operations." }
        ],
        outcomes: [
          { title: "Higher Engagement", description: "Higher learner engagement and retention through interactive digital experiences." },
          { title: "Faster Processing", description: "Faster administrative processing and reduced manual effort for staff." },
          { title: "Better Visibility", description: "Improved visibility into academic performance trends and student outcomes." }
        ],
        ctaTitle: "Modernize Education Experiences",
        ctaDescription: "Create scalable digital learning systems that improve outcomes and efficiency.",
        keywords: ["education technology", "learning management", "e-learning", "student portal", "academic software", "edtech", "digital learning"]
      },
      {
        name: "Energy",
        slug: "energy",
        tagline: "Operational technology and software solutions for energy monitoring, reliability, and compliance.",
        description: "Energy businesses operate in highly regulated and distributed environments. We build software platforms that improve infrastructure visibility, automate critical workflows, and support resilient service operations.",
        seoTitle: "Energy Industry Solutions | Yurekh Solutions",
        seoDescription: "Energy sector digital solutions for asset monitoring, compliance, and operational efficiency. Power smarter energy operations with Yurekh Solutions.",
        challenges: [
          { title: "Limited Visibility", description: "Limited real-time visibility across distributed assets makes it difficult to monitor performance and respond to issues quickly." },
          { title: "Operational Delays", description: "Operational delays during incidents and outages impact service reliability and customer satisfaction." },
          { title: "Complex Compliance", description: "Complex regulatory and compliance reporting needs require significant resources and expertise." }
        ],
        solutions: [
          { title: "Centralized Monitoring", description: "Implement centralized monitoring for network and asset performance with real-time alerts." },
          { title: "Streamlined Response", description: "Streamline outage response and field coordination workflows for faster resolution." },
          { title: "Automated Reporting", description: "Automate data collection and compliance reporting pipelines to reduce manual effort." }
        ],
        capabilities: [
          { title: "Telemetry Dashboards", description: "Asset telemetry dashboards and threshold alerts for proactive monitoring." },
          { title: "Field Operations", description: "Field operations and maintenance scheduling for efficient resource deployment." },
          { title: "Incident Management", description: "Incident and outage response management for rapid resolution." },
          { title: "Compliance Systems", description: "Compliance and audit-ready reporting systems for regulatory requirements." }
        ],
        outcomes: [
          { title: "Better Reliability", description: "Improved network reliability and response time through proactive monitoring." },
          { title: "Reduced Risk", description: "Reduced operational risk through proactive monitoring and automated responses." },
          { title: "Efficient Compliance", description: "More efficient compliance management at scale with automated reporting." }
        ],
        ctaTitle: "Power Smarter Energy Operations",
        ctaDescription: "Build secure and resilient digital infrastructure for modern energy ecosystems.",
        keywords: ["energy software", "asset monitoring", "utility management", "compliance automation", "energy technology", "smart grid", "energy management"]
      },
      {
        name: "Fashion",
        slug: "fashion",
        tagline: "Digital commerce and supply workflows for faster launches and stronger brand engagement.",
        description: "Fashion brands need agility across design, inventory, and commerce channels. We create platforms that help teams respond to trends faster while delivering consistent customer experiences across digital and physical touchpoints.",
        seoTitle: "Fashion Industry Solutions | Yurekh Solutions",
        seoDescription: "Fashion industry digital solutions for inventory management, omnichannel commerce, and customer engagement. Scale fashion commerce with Yurekh Solutions.",
        challenges: [
          { title: "Rapid Trend Cycles", description: "Rapid trend cycles with short launch windows require agile systems that can quickly adapt to changing market demands." },
          { title: "Stock Imbalance", description: "Stock imbalance across channels and regions leads to lost sales and excess inventory costs." },
          { title: "Inconsistent Experience", description: "Inconsistent customer experience across platforms damages brand reputation and reduces loyalty." }
        ],
        solutions: [
          { title: "Real-Time Visibility", description: "Enable real-time visibility into inventory and product movement across all channels." },
          { title: "Connected Workflows", description: "Connect product data, merchandising, and storefront workflows for seamless operations." },
          { title: "Personalization", description: "Apply analytics-driven personalization in key customer journeys to boost engagement." }
        ],
        capabilities: [
          { title: "Catalog Management", description: "Catalog and merchandising management for efficient product lifecycle management." },
          { title: "Omnichannel Fulfillment", description: "Omnichannel inventory and fulfillment workflows for consistent customer experiences." },
          { title: "Customer Segmentation", description: "Customer segmentation and personalization tools for targeted marketing." },
          { title: "Campaign Analytics", description: "Performance analytics for campaigns and conversions to optimize ROI." }
        ],
        outcomes: [
          { title: "Faster Launches", description: "Faster go-to-market for new collections with agile digital workflows." },
          { title: "Better Sell-Through", description: "Improved sell-through and reduced stock inefficiencies through better inventory management." },
          { title: "Stronger Engagement", description: "Stronger digital engagement and repeat purchases through personalized experiences." }
        ],
        ctaTitle: "Scale Fashion Commerce with Confidence",
        ctaDescription: "Launch digital solutions that improve customer experience and operational speed.",
        keywords: ["fashion technology", "retail software", "inventory management", "omnichannel commerce", "fashion ecommerce", "fashion tech", "digital fashion"]
      },
      {
        name: "Finance",
        slug: "finance",
        tagline: "Secure fintech products for payments, compliance, and modern financial operations.",
        description: "Financial organizations need platforms that balance innovation, security, and compliance. We build digital finance solutions that modernize operations, reduce risk, and improve customer trust.",
        seoTitle: "Finance Industry Solutions | Yurekh Solutions",
        seoDescription: "Fintech and finance software solutions for payments, compliance, and risk management. Build secure financial products with Yurekh Solutions.",
        challenges: [
          { title: "Fraud Risk", description: "Fraud risk across digital transactions and channels requires sophisticated detection and prevention systems." },
          { title: "Regulatory Complexity", description: "Regulatory complexity across jurisdictions and products demands flexible, compliant architectures." },
          { title: "Legacy Systems", description: "Legacy systems that slow product innovation prevent organizations from competing effectively." }
        ],
        solutions: [
          { title: "Secure Architecture", description: "Design secure architectures with robust identity and access controls for maximum protection." },
          { title: "Automated Compliance", description: "Automate compliance workflows and audit trail management for efficiency and accuracy." },
          { title: "API-First Integration", description: "Modernize core operations with API-first integrations for flexibility and scalability." }
        ],
        capabilities: [
          { title: "Payment Infrastructure", description: "Digital payment and wallet infrastructure for seamless financial transactions." },
          { title: "Risk Monitoring", description: "KYC, AML, and risk monitoring workflows for regulatory compliance." },
          { title: "Account Management", description: "Customer onboarding and account lifecycle management for smooth user experiences." },
          { title: "Financial Analytics", description: "Financial analytics and operational reporting for strategic decision-making." }
        ],
        outcomes: [
          { title: "Lower Risk", description: "Lower risk exposure through stronger control frameworks and monitoring." },
          { title: "Faster Compliance", description: "Faster compliance operations with better traceability and automation." },
          { title: "Reduced Time-to-Market", description: "Reduced time-to-market for finance products with modern architectures." }
        ],
        ctaTitle: "Build Secure Financial Products",
        ctaDescription: "Create compliant, scalable finance platforms that support growth and trust.",
        keywords: ["fintech solutions", "payment software", "compliance automation", "financial technology", "banking software", "digital payments", "fintech"]
      },
      {
        name: "Food",
        slug: "food",
        tagline: "End-to-end food technology for ordering, delivery, and service operations.",
        description: "Food businesses operate under speed, quality, and demand volatility constraints. We build digital systems that unify customer ordering, kitchen operations, and delivery workflows for reliable service at scale.",
        seoTitle: "Food Industry Solutions | Yurekh Solutions",
        seoDescription: "Food technology solutions for order management, delivery optimization, and kitchen operations. Optimize food service operations with Yurekh Solutions.",
        challenges: [
          { title: "Order Complexity", description: "Order complexity across channels, locations, and peak windows creates operational challenges and customer frustration." },
          { title: "Delivery Delays", description: "Delivery delays and limited operational visibility impact customer satisfaction and brand reputation." },
          { title: "Quality Consistency", description: "Quality consistency across distributed service points is difficult to maintain without proper systems." }
        ],
        solutions: [
          { title: "Unified Ordering", description: "Unify ordering and fulfillment flows across touchpoints for consistent experiences." },
          { title: "Route Optimization", description: "Optimize dispatch and route management for delivery operations to reduce delays." },
          { title: "Real-Time Tracking", description: "Track service and quality metrics in real time for proactive management." }
        ],
        capabilities: [
          { title: "POS Integration", description: "Multi-channel order and POS integrations for seamless operations." },
          { title: "Kitchen Orchestration", description: "Kitchen and fulfillment workflow orchestration for efficient food preparation." },
          { title: "Delivery Tracking", description: "Driver dispatch and delivery tracking for reliable last-mile service." },
          { title: "Loyalty Features", description: "Customer loyalty and retention features for repeat business." }
        ],
        outcomes: [
          { title: "Better Accuracy", description: "Improved order accuracy and fulfillment speed through automated workflows." },
          { title: "Higher Satisfaction", description: "Higher customer satisfaction through reliable service and timely delivery." },
          { title: "Better Control", description: "Better operational control across locations with centralized management." }
        ],
        ctaTitle: "Optimize Food Service Operations",
        ctaDescription: "Build digital food platforms that scale with demand and quality expectations.",
        keywords: ["food technology", "restaurant software", "delivery management", "order management", "food service", "foodtech", "delivery optimization"]
      },
      {
        name: "Healthcare",
        slug: "healthcare",
        tagline: "Patient-centric healthcare platforms for care coordination, telehealth, and secure records.",
        description: "Healthcare providers need reliable, secure systems for patient care and operational efficiency. We build healthcare products that improve care journeys, clinical workflows, and data-driven decision-making.",
        seoTitle: "Healthcare Industry Solutions | Yurekh Solutions",
        seoDescription: "Healthcare technology solutions for patient care, clinical workflows, and compliance. Deliver better digital healthcare with Yurekh Solutions.",
        challenges: [
          { title: "Disconnected Data", description: "Disconnected patient data and fragmented care workflows lead to inefficiencies and potential safety issues." },
          { title: "Administrative Burden", description: "High administrative burden for providers and support teams reduces time available for patient care." },
          { title: "Privacy Requirements", description: "Strict privacy, security, and compliance requirements demand robust data protection frameworks." }
        ],
        solutions: [
          { title: "Unified Platform", description: "Connect patient, provider, and operational systems in one platform for comprehensive care." },
          { title: "Automated Workflows", description: "Automate appointment, communication, and care coordination workflows for efficiency." },
          { title: "Secure Architecture", description: "Implement secure data architecture with audit-ready controls for compliance." }
        ],
        capabilities: [
          { title: "Telehealth", description: "Telehealth and patient portal experiences for accessible healthcare." },
          { title: "Care Coordination", description: "Clinical scheduling and care coordination tools for efficient operations." },
          { title: "EHR Integration", description: "EHR integration and interoperability workflows for seamless data exchange." },
          { title: "Governance Frameworks", description: "Compliance and access governance frameworks for regulatory requirements." }
        ],
        outcomes: [
          { title: "Better Patient Experience", description: "Improved patient experience and continuity of care through connected systems." },
          { title: "Reduced Overhead", description: "Reduced administrative overhead for clinical teams through automation." },
          { title: "Regulatory Readiness", description: "Higher data confidence and regulatory readiness with proper governance." }
        ],
        ctaTitle: "Deliver Better Digital Healthcare",
        ctaDescription: "Build secure and scalable healthcare systems that improve both care and operations.",
        keywords: ["healthcare software", "telehealth", "patient portal", "EHR integration", "health technology", "healthtech", "digital health"]
      },
      {
        name: "Logistics",
        slug: "logistics",
        tagline: "Logistics technology for shipment visibility, routing optimization, and connected operations.",
        description: "Logistics businesses need real-time visibility and orchestration across distributed supply operations. We build platforms that streamline dispatch, tracking, and delivery performance management.",
        seoTitle: "Logistics Industry Solutions | Yurekh Solutions",
        seoDescription: "Logistics and supply chain software for shipment tracking, route optimization, and fleet management. Scale logistics with Yurekh Solutions.",
        challenges: [
          { title: "Limited Visibility", description: "Limited end-to-end visibility across shipments and fleets makes it difficult to track and optimize operations." },
          { title: "Inefficient Routing", description: "Inefficient dispatch and last-mile routing processes increase costs and delivery times." },
          { title: "Manual Workload", description: "High manual workload in proof-of-delivery and exception handling slows operations." }
        ],
        solutions: [
          { title: "Real-Time Dashboards", description: "Centralize shipment, fleet, and delivery data in real-time dashboards for complete visibility." },
          { title: "Dynamic Optimization", description: "Optimize routing and dispatch based on dynamic demand conditions for efficiency." },
          { title: "Digitized Workflows", description: "Digitize proof-of-delivery and exception management workflows for speed." }
        ],
        capabilities: [
          { title: "Shipment Tracking", description: "Real-time shipment tracking and ETA prediction for customer transparency." },
          { title: "Route Optimization", description: "Route and load optimization engines for efficient delivery operations." },
          { title: "Fleet Monitoring", description: "Fleet utilization and performance monitoring for operational efficiency." },
          { title: "Incident Management", description: "Delivery confirmation and incident management for reliable service." }
        ],
        outcomes: [
          { title: "Reduced Costs", description: "Reduced transportation cost and delivery delays through optimization." },
          { title: "Better Predictability", description: "Higher operational predictability across last-mile workflows." },
          { title: "Improved Reliability", description: "Improved service reliability for customers and partners." }
        ],
        ctaTitle: "Scale Logistics with Real-Time Control",
        ctaDescription: "Build intelligent logistics systems that improve speed, visibility, and efficiency.",
        keywords: ["logistics software", "supply chain", "fleet management", "route optimization", "delivery tracking", "logistics tech", "supply chain management"]
      },
      {
        name: "Manufacturing",
        slug: "manufacturing",
        tagline: "Smart manufacturing systems for quality, production intelligence, and plant efficiency.",
        description: "Manufacturers need connected systems to improve throughput, quality, and uptime. We design manufacturing solutions that bridge shop-floor data with enterprise workflows for better planning and execution.",
        seoTitle: "Manufacturing Industry Solutions | Yurekh Solutions",
        seoDescription: "Manufacturing software for production tracking, quality control, and operational efficiency. Modernize manufacturing operations with Yurekh Solutions.",
        challenges: [
          { title: "Production Bottlenecks", description: "Production bottlenecks and low visibility into root causes limit throughput and efficiency." },
          { title: "Quality Inconsistencies", description: "Quality inconsistencies across lines and shifts affect product reliability and customer satisfaction." },
          { title: "Disconnected Data", description: "Disconnected data between plant and enterprise systems prevents comprehensive insights." }
        ],
        solutions: [
          { title: "Unified Data Model", description: "Integrate MES, ERP, and machine-level telemetry in one data model for complete visibility." },
          { title: "Automated Quality", description: "Automate quality and compliance workflows across production stages for consistency." },
          { title: "Proactive Maintenance", description: "Enable proactive maintenance and operations planning to reduce downtime." }
        ],
        capabilities: [
          { title: "OEE Analytics", description: "Production tracking and OEE analytics for performance optimization." },
          { title: "Quality Control", description: "Quality control and traceability workflows for product reliability." },
          { title: "Maintenance Planning", description: "Maintenance planning and downtime alerts for proactive management." },
          { title: "Reporting Dashboards", description: "Plant-to-enterprise reporting dashboards for strategic decisions." }
        ],
        outcomes: [
          { title: "Higher Throughput", description: "Higher throughput and improved production reliability through optimization." },
          { title: "Reduced Defects", description: "Reduced defect rates through process transparency and quality control." },
          { title: "Faster Decisions", description: "Faster decision cycles with unified operational data." }
        ],
        ctaTitle: "Modernize Manufacturing Operations",
        ctaDescription: "Deploy software systems that improve quality, productivity, and resilience.",
        keywords: ["manufacturing software", "production tracking", "quality control", "MES", "industrial IoT", "smart manufacturing", "Industry 4.0"]
      },
      {
        name: "Media & Entertainment",
        slug: "media-entertainment",
        tagline: "Audience-centric media platforms for engagement, monetization, and content operations.",
        description: "Media and entertainment brands need platforms that deliver content at scale while maximizing engagement and revenue. We build products that optimize content operations, audience experiences, and delivery performance.",
        seoTitle: "Media & Entertainment Industry Solutions | Yurekh Solutions",
        seoDescription: "Media and entertainment software for content delivery, audience engagement, and monetization. Scale digital media experiences with Yurekh Solutions.",
        challenges: [
          { title: "Audience Churn", description: "High audience churn across digital channels requires engaging content and personalized experiences." },
          { title: "Complex Workflows", description: "Complex content workflows and rights management processes slow down content delivery." },
          { title: "Performance Bottlenecks", description: "Performance bottlenecks during high-traffic events impact user experience and revenue." }
        ],
        solutions: [
          { title: "Personalization", description: "Implement personalization and recommendation capabilities to boost engagement." },
          { title: "Streamlined Pipelines", description: "Streamline content pipeline and metadata operations for faster delivery." },
          { title: "Optimized Architecture", description: "Optimize delivery architecture for peak traffic reliability and performance." }
        ],
        capabilities: [
          { title: "Content Personalization", description: "User engagement and content personalization modules for better experiences." },
          { title: "Asset Management", description: "Publishing workflow and media asset management for efficient operations." },
          { title: "Monetization", description: "Subscription and ad monetization integrations for revenue optimization." },
          { title: "Audience Analytics", description: "Analytics for audience behavior and retention for strategic decisions." }
        ],
        outcomes: [
          { title: "Higher Retention", description: "Higher audience retention and watch-time metrics through engagement." },
          { title: "Faster Releases", description: "Improved content operations and release velocity." },
          { title: "Better Monetization", description: "Stronger monetization performance across channels." }
        ],
        ctaTitle: "Scale Digital Media Experiences",
        ctaDescription: "Launch media products that improve engagement, reliability, and revenue outcomes.",
        keywords: ["media software", "streaming platform", "content management", "audience analytics", "entertainment technology", "media tech", "digital media"]
      },
      {
        name: "Real Estate",
        slug: "real-estate",
        tagline: "Real estate technology for lead conversion, listing workflows, and digital property experiences.",
        description: "Real estate businesses require seamless digital experiences from discovery to deal closure. We deliver platforms that connect listings, CRM, communication, and transaction workflows for higher efficiency and conversion.",
        seoTitle: "Real Estate Industry Solutions | Yurekh Solutions",
        seoDescription: "Real estate software for property management, lead generation, and transaction workflows. Transform real estate operations with Yurekh Solutions.",
        challenges: [
          { title: "Slow Lead Response", description: "Slow lead response and limited follow-up consistency result in lost opportunities and reduced conversions." },
          { title: "Fragmented Workflows", description: "Fragmented listing and agent management workflows create inefficiencies and confusion." },
          { title: "Manual Documentation", description: "Manual documentation and transaction coordination slow down deal closures." }
        ],
        solutions: [
          { title: "Integrated Platform", description: "Integrate listings, CRM, and communication channels in one platform for efficiency." },
          { title: "Automated Follow-Up", description: "Automate lead scoring and follow-up workflows for consistent engagement." },
          { title: "Digitized Transactions", description: "Digitize transaction and documentation lifecycle processes for speed." }
        ],
        capabilities: [
          { title: "Portfolio Management", description: "Property listing and portfolio management for efficient operations." },
          { title: "Agent Automation", description: "Agent and broker workflow automation for productivity." },
          { title: "Lead Nurturing", description: "Lead capture, qualification, and nurturing tools for conversions." },
          { title: "Pipeline Dashboards", description: "Transaction pipeline and reporting dashboards for visibility." }
        ],
        outcomes: [
          { title: "Faster Conversion", description: "Faster lead conversion and improved response time." },
          { title: "Reduced Workload", description: "Reduced manual workload across sales operations." },
          { title: "Better Visibility", description: "Greater visibility into pipeline and deal performance." }
        ],
        ctaTitle: "Transform Real Estate Operations",
        ctaDescription: "Build digital solutions that drive conversion and operational control.",
        keywords: ["real estate software", "property management", "CRM", "lead generation", "real estate technology", "proptech", "digital real estate"]
      },
      {
        name: "Retail",
        slug: "retail",
        tagline: "Unified retail platforms for omnichannel commerce, inventory intelligence, and loyalty growth.",
        description: "Retailers need connected commerce systems that align inventory, operations, and customer journeys. We design retail products that improve conversion, reduce stock inefficiencies, and strengthen repeat business.",
        seoTitle: "Retail Industry Solutions | Yurekh Solutions",
        seoDescription: "Retail software for inventory management, omnichannel commerce, and customer engagement. Grow retail performance digitally with Yurekh Solutions.",
        challenges: [
          { title: "Stock Issues", description: "Stockouts and overstock caused by fragmented inventory data lead to lost sales and excess costs." },
          { title: "Inconsistent Journeys", description: "Inconsistent customer journeys across online and in-store channels damage brand experience." },
          { title: "Low Conversion", description: "Low conversion rates and weak retention performance impact revenue growth." }
        ],
        solutions: [
          { title: "Unified Platform", description: "Unify inventory, order, and fulfillment workflows in one platform for efficiency." },
          { title: "Omnichannel Experience", description: "Enable omnichannel customer journeys with consistent experiences." },
          { title: "Personalization", description: "Apply personalization and loyalty strategies across key touchpoints." }
        ],
        capabilities: [
          { title: "Inventory Management", description: "Order and inventory lifecycle management for optimal stock levels." },
          { title: "Loyalty Programs", description: "Customer profiles and loyalty program integration for retention." },
          { title: "Checkout Optimization", description: "Storefront and checkout optimization workflows for conversions." },
          { title: "Performance Analytics", description: "Sales and operational performance analytics for decisions." }
        ],
        outcomes: [
          { title: "Higher Conversion", description: "Higher conversion through smoother purchase journeys." },
          { title: "Reduced Inefficiency", description: "Reduced inventory inefficiency and lost sales." },
          { title: "Better Retention", description: "Better retention through data-driven customer engagement." }
        ],
        ctaTitle: "Grow Retail Performance Digitally",
        ctaDescription: "Create modern retail systems that improve revenue and customer satisfaction.",
        keywords: ["retail software", "ecommerce", "inventory management", "omnichannel", "retail technology", "retailtech", "digital retail"]
      },
      {
        name: "Sports",
        slug: "sports",
        tagline: "Sports technology for fan engagement, athlete performance, and event operations.",
        description: "Sports organizations need high-performance platforms that serve fans, teams, and operations in real time. We build digital products that increase engagement while improving operational coordination and analytics.",
        seoTitle: "Sports Industry Solutions | Yurekh Solutions",
        seoDescription: "Sports technology for fan engagement, team analytics, and event management. Launch winning sports experiences with Yurekh Solutions.",
        challenges: [
          { title: "Fragmented Engagement", description: "Fragmented fan engagement across channels and events reduces audience connection and loyalty." },
          { title: "Limited Data Access", description: "Limited access to unified performance and participation data hinders strategic decisions." },
          { title: "Operational Complexity", description: "Operational complexity in event and ticketing workflows creates inefficiencies." }
        ],
        solutions: [
          { title: "Fan-Centric Apps", description: "Build fan-centric digital experiences across mobile and web for engagement." },
          { title: "Centralized Analytics", description: "Centralize analytics for team, event, and user performance insights." },
          { title: "Integrated Operations", description: "Integrate event management and engagement workflows for efficiency." }
        ],
        capabilities: [
          { title: "Fan Apps", description: "Fan app experiences with live interactions for engagement." },
          { title: "Performance Analytics", description: "Performance analytics and team dashboards for insights." },
          { title: "Ticketing", description: "Ticketing and event operations integrations for seamless experiences." },
          { title: "Gamification", description: "Community engagement and gamification modules for loyalty." }
        ],
        outcomes: [
          { title: "Higher Participation", description: "Higher audience participation and retention." },
          { title: "Better Execution", description: "Improved event execution through operational visibility." },
          { title: "Better Insights", description: "Better performance insight for coaching and management teams." }
        ],
        ctaTitle: "Launch Winning Sports Experiences",
        ctaDescription: "Build digital products that connect fans, teams, and performance outcomes.",
        keywords: ["sports technology", "fan engagement", "ticketing", "sports analytics", "event management", "sportstech", "digital sports"]
      },
      {
        name: "Travel",
        slug: "travel",
        tagline: "Travel technology for booking optimization, itinerary management, and customer support.",
        description: "Travel businesses require dependable digital infrastructure for booking, support, and service orchestration. We develop travel platforms that improve customer journey continuity and operational performance.",
        seoTitle: "Travel Industry Solutions | Yurekh Solutions",
        seoDescription: "Travel technology for booking engines, itinerary management, and customer support. Modernize travel experiences with Yurekh Solutions.",
        challenges: [
          { title: "Complex Bookings", description: "Complex booking journeys with frequent drop-off points reduce conversion rates." },
          { title: "Dynamic Pricing", description: "Dynamic pricing and availability management at scale requires sophisticated systems." },
          { title: "High Support Load", description: "High support workload during schedule disruptions impacts customer satisfaction." }
        ],
        solutions: [
          { title: "Streamlined UX", description: "Design streamlined booking and itinerary user experiences for conversions." },
          { title: "Real-Time Integration", description: "Integrate pricing, inventory, and partner systems in real time." },
          { title: "Self-Service Support", description: "Enable self-service support and proactive communication workflows." }
        ],
        capabilities: [
          { title: "Booking Engine", description: "Booking engine and itinerary management modules for seamless reservations." },
          { title: "Pricing Sync", description: "Availability and pricing synchronization workflows for accuracy." },
          { title: "Support Automation", description: "Customer support and communication automation for efficiency." },
          { title: "Travel Analytics", description: "Travel operations analytics and reporting for decisions." }
        ],
        outcomes: [
          { title: "Higher Conversion", description: "Higher booking conversion and reduced abandonment." },
          { title: "Better Control", description: "Improved operational control during high-demand periods." },
          { title: "Better Satisfaction", description: "Better customer satisfaction across the full travel journey." }
        ],
        ctaTitle: "Modernize Travel Experiences",
        ctaDescription: "Build digital travel systems that increase conversion, reliability, and customer trust.",
        keywords: ["travel technology", "booking engine", "itinerary management", "travel software", "hospitality technology", "traveltech", "digital travel"]
      }
    ]
  }
];

// Helper functions
export const findIndustryBySlug = (slug: string) => {
  for (const category of industryCategories) {
    const industry = category.industries.find((i) => i.slug === slug);
    if (industry) {
      return { industry, category };
    }
  }
  return null;
};

export const findCategoryBySlug = (slug: string) => {
  return industryCategories.find((c) => c.slug === slug) || null;
};

export const getAllIndustries = () => {
  return industryCategories.flatMap((c) => c.industries);
};

export const getIndustryImage = (slug: string): string => {
  const images: Record<string, string> = {
    "agriculture": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Agriculture.webp",
    "automotive": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Automative.webp",
    "education": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Education-1.webp",
    "energy": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Energy.webp",
    "fashion": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Fashion.webp",
    "finance": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Finance.webp",
    "food": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Food.webp",
    "healthcare": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/HealthCare.webp",
    "logistics": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Logistic.webp",
    "manufacturing": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Manufacturing.webp",
    "media-entertainment": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Media-Entertentment.webp",
    "real-estate": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Real-State.webp",
    "retail": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Retail.webp",
    "sports": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Sports-1.webp",
    "travel": "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Travel.webp",
  };
  return images[slug] || "https://d2ekchuirvzqg3.cloudfront.net/wp-content/uploads/2026/02/Agriculture.webp";
};
