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
    title: "Your Growth Partner for Digital Success",
    description:
      "Byte Infomedia delivers end-to-end digital marketing built for measurable growth. From SEO and Google Ads to social media, website development, and content marketing, we combine strategy, creativity, and analytics to generate qualified leads and maximize ROI for ambitious brands.",
    imageAlt: "Digital marketing growth ecosystem with analytics and connected channels",
    trustIndicators: [
      "95% Client Retention",
      "Data-Driven Marketing",
      "Transparent Reporting",
    ],
    highlightStats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "300%", label: "Average Growth" },
      { value: "24/7", label: "Support" },
    ],
    faqs: [
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
  expertise: {
    title: "Our Expertise",
    subheading: "Helping brands grow through strategy, creativity, and performance marketing.",
    items: [
      {
        id: "seo",
        title: "SEO Strategy",
        description: "Technical SEO, On-page SEO, Local SEO, Keyword Research.",
        size: "tall" as const,
      },
      {
        id: "google-ads",
        title: "Google Ads",
        description: "Search, Display, Shopping, Performance Max Campaigns.",
        size: "medium" as const,
      },
      {
        id: "social",
        title: "Social Media Marketing",
        description: "Instagram, Facebook, LinkedIn, Content Planning.",
        size: "short" as const,
      },
      {
        id: "content",
        title: "Content Marketing",
        description: "Blogs, Landing Pages, Content Strategy, Copywriting.",
        size: "medium" as const,
      },
      {
        id: "website",
        title: "Website Development",
        description: "Business Websites, Landing Pages, Conversion Optimization.",
        size: "tall" as const,
      },
      {
        id: "analytics",
        title: "Marketing Analytics",
        description: "GA4, Search Console, Tracking, Reporting Dashboards.",
        size: "short" as const,
      },
      {
        id: "leads",
        title: "Lead Generation",
        description: "Qualified leads through paid and organic channels.",
        size: "medium" as const,
      },
      {
        id: "brand",
        title: "Brand Growth",
        description: "Long-term visibility, trust, and customer acquisition.",
        size: "short" as const,
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
    title: "Our Process",
    eyebrow: "How We Work",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description: "Understand business goals and target audience.",
      },
      {
        number: "02",
        title: "Research",
        description: "Analyze competitors and opportunities.",
      },
      {
        number: "03",
        title: "Strategy Planning",
        description: "Build customized marketing roadmap.",
      },
      {
        number: "04",
        title: "Campaign Launch",
        description: "Execute campaigns across channels.",
      },
      {
        number: "05",
        title: "Optimization",
        description: "Track, improve and scale performance.",
      },
      {
        number: "06",
        title: "Growth & Scaling",
        description: "Expand successful campaigns and maximize ROI.",
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
} as const;
