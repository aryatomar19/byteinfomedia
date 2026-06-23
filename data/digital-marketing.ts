const img = "/images/dm-landing";

const heroStats = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 300, suffix: "%", label: "Average Growth" },
  { value: null as number | null, display: "24x7", label: "Support" },
] as const;

export const digitalMarketingPage = {
  hero: {
    badge: "DIGITAL MARKETING SOLUTIONS",
    title: "Grow Your Business With Smart Digital Marketing",
    description:
      "Data-led strategies across web, SEO, content, and social — built to attract, engage, and convert your ideal customers.",
    primaryCta: "Book Consultation",
    secondaryCta: "View Services",
    stats: heroStats,
  },
  whyByte: {
    eyebrow: "WHY CHOOSE BYTE INFOMEDIA",
    title: "Driving Measurable Growth Through Strategy, Creativity & Performance",
    description:
      "Byte Infomedia is a full-service digital marketing agency built for brands that demand results. We engineer high-performance campaigns across SEO, Google Ads, social media marketing, and website development — combining data, creativity, and conversion strategy to generate qualified leads and maximize ROI at every stage of growth.",
    image: `${img}/why-byte-growth.jpg`,
    imageAlt:
      "Digital marketing team collaborating in a modern office while reviewing SEO analytics, campaign performance dashboards, and growth reports",
    trustIndicators: [
      "Proven ROI-Focused Campaigns",
      "Dedicated Digital Growth Team",
      "Real-Time Analytics & Reporting",
      "SEO, Ads & Social Media Experts",
      "Scalable Marketing Strategies",
    ],
    highlightStats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "300%", label: "Average Growth" },
      { value: "1000+", label: "Qualified Leads Generated" },
      { value: "24/7", label: "Expert Support" },
    ],
  },
  expertise: {
    title: "Our Expertise",
    subheading: "Helping brands grow through strategy, creativity, and performance marketing.",
    items: [
      {
        id: "seo",
        title: "SEO Optimization",
        description: "Improve rankings, traffic, and visibility.",
        image: `${img}/expertise/expertise-seo.jpg`,
        imageAlt: "SEO dashboard with ranking growth analytics",
        size: "tall" as const,
      },
      {
        id: "google-ads",
        title: "Google Ads Management",
        description: "Maximize ROI with performance campaigns.",
        image: `${img}/expertise/expertise-google-ads.jpg`,
        imageAlt: "PPC campaign performance dashboard",
        size: "short" as const,
      },
      {
        id: "social",
        title: "Social Media Marketing",
        description: "Build engagement and brand awareness.",
        image: `${img}/expertise/expertise-social.jpg`,
        imageAlt: "Social media marketing analytics across major platforms",
        size: "medium" as const,
      },
      {
        id: "content",
        title: "Content Writing",
        description: "Content that drives traffic and conversions.",
        image: `${img}/expertise/expertise-content.jpg`,
        imageAlt: "Content creation and blog writing illustration",
        size: "short" as const,
      },
      {
        id: "website",
        title: "Website Development",
        description: "Fast, responsive business websites.",
        image: `${img}/expertise/expertise-website.jpg`,
        imageAlt: "Modern responsive website design mockup",
        size: "tall" as const,
      },
      {
        id: "analytics",
        title: "Analytics & Reporting",
        description: "Real-time performance insights.",
        image: `${img}/expertise/expertise-analytics.jpg`,
        imageAlt: "Marketing analytics and reporting dashboard",
        size: "medium" as const,
      },
      {
        id: "leads",
        title: "Lead Generation",
        description: "Generate high-quality business leads.",
        image: `${img}/expertise/expertise-leads.jpg`,
        imageAlt: "Sales funnel and lead generation visualization",
        size: "short" as const,
      },
      {
        id: "brand",
        title: "Brand Growth Strategy",
        description: "Long-term business growth and positioning.",
        image: `${img}/expertise/expertise-brand.jpg`,
        imageAlt: "Brand growth chart and strategic positioning",
        size: "medium" as const,
      },
    ],
  },
  services: {
    title: "Digital Marketing Services",
    subheading: "Complete digital marketing solutions under one roof.",
    items: [
      {
        id: "seo",
        title: "SEO Optimization",
        description: "Rank higher and attract qualified organic traffic that converts.",
        href: "/search-engine-optimization/",
        bullets: ["Keyword Research", "Technical SEO", "On Page SEO", "Local SEO"],
      },
      {
        id: "google-ads",
        title: "Google Ads Management",
        description: "High-intent paid campaigns engineered for leads and revenue.",
        href: "/book-consultation/",
        bullets: ["Search Ads", "Display Ads", "Remarketing", "Performance Max"],
      },
      {
        id: "social",
        title: "Social Media Marketing",
        description: "Build brand presence and engage audiences across social platforms.",
        href: "/social-media-marketing/",
        bullets: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "Content Strategy"],
      },
      {
        id: "content",
        title: "Content Writing",
        description: "Compelling copy that builds trust, authority, and conversions.",
        href: "/content-writing/",
        bullets: ["Blog Writing", "Website Content", "SEO Content", "Copywriting"],
      },
      {
        id: "website",
        title: "Website Development",
        description: "Fast, elegant websites built to impress and convert visitors.",
        href: "/website-development/",
        bullets: ["Business Websites", "Landing Pages", "WordPress Development", "Performance Optimization"],
      },
      {
        id: "analytics",
        title: "Analytics & Reporting",
        description: "Data-driven insights that power smarter marketing decisions.",
        href: "/book-consultation/",
        bullets: ["GA4 Setup", "Conversion Tracking", "Search Console", "Monthly Reports"],
      },
    ],
  },
  process: {
    eyebrow: "HOW WE WORK",
    title: "Our Working Process",
    steps: [
      {
        number: "01",
        title: "Research & Analysis",
        items: ["Market research", "Competitor analysis", "Audience insights"],
        glow: "green" as const,
      },
      {
        number: "02",
        title: "Strategy Planning",
        items: ["Marketing roadmap", "Channel selection", "Campaign planning"],
        glow: "orange" as const,
      },
      {
        number: "03",
        title: "Campaign Execution",
        items: ["SEO implementation", "Google Ads", "Social Media Marketing"],
        glow: "blue" as const,
      },
      {
        number: "04",
        title: "Optimization & Growth",
        items: ["Analytics monitoring", "Conversion optimization", "Scaling successful campaigns"],
        glow: "orange" as const,
      },
    ],
    features: [
      {
        icon: "target" as const,
        title: "Strategy First",
        description: "Every campaign starts with research and planning.",
      },
      {
        icon: "chart" as const,
        title: "Data-Driven Decisions",
        description: "All decisions backed by analytics and real insights.",
      },
      {
        icon: "trending" as const,
        title: "Performance Focused",
        description: "Focused on leads, conversions and ROI.",
      },
      {
        icon: "rocket" as const,
        title: "Long-Term Growth",
        description: "Scalable strategies for sustainable business growth.",
      },
    ],
  },
  results: {
    title: "Results That Speak",
    eyebrow: "Our Impact",
    metrics: [
      { value: 100, suffix: "+", label: "Projects Delivered" },
      { value: 95, suffix: "%", label: "Client Satisfaction" },
      { value: 300, suffix: "%", label: "Average Growth" },
      { value: 50, suffix: "+", label: "Active Campaigns" },
      { value: 1000, suffix: "+", label: "Qualified Leads Generated" },
      { value: null as number | null, display: "24/7", label: "Expert Support" },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    eyebrow: "FAQ",
    items: [
      {
        question: "What digital marketing services do you provide?",
        answer:
          "We offer SEO optimization, Google Ads management, social media marketing, website development, content marketing, marketing analytics, lead generation, and full-funnel growth strategy — all tailored to your business goals.",
      },
      {
        question: "How can SEO help my business grow?",
        answer:
          "SEO improves your visibility in search results, driving qualified organic traffic to your website. With technical SEO, keyword strategy, and content optimization, we help you attract customers actively searching for your products or services.",
      },
      {
        question: "Do you manage Google Ads campaigns?",
        answer:
          "Yes. We manage Search, Display, Shopping, Remarketing, and Performance Max campaigns with continuous optimization to lower cost-per-lead and maximize return on ad spend.",
      },
      {
        question: "How do you measure campaign success?",
        answer:
          "We track KPIs including traffic, leads, conversions, cost-per-acquisition, and ROI using GA4, Search Console, and custom dashboards — with transparent monthly reporting you can act on.",
      },
      {
        question: "Can you help generate qualified leads?",
        answer:
          "Absolutely. We build integrated lead generation systems across paid and organic channels, combining landing pages, ad campaigns, SEO, and content funnels to attract and convert high-intent prospects.",
      },
      {
        question: "Do you provide monthly reporting?",
        answer:
          "Yes. Every client receives clear monthly reports covering campaign performance, key metrics, insights, and recommended next steps — so you always know what's working and where to invest.",
      },
    ],
  },
  cta: {
    title: "Ready to Accelerate Your Digital Growth?",
    description:
      "Partner with Byte Infomedia for data-driven strategies, transparent reporting, and measurable ROI. Book a free consultation and discover how we can scale your business.",
    primaryCta: "Book Free Consultation",
    secondaryCta: "Explore Services",
  },
} as const;
