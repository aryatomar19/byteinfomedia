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
      { value: "100+", label: "Projects" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "300%", label: "Average Growth" },
      { value: "24/7", label: "Support" },
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
        title: "Google Ads",
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
        image: `${img}/expertise/expertise-seo.jpg`,
        imageAlt: "SEO dashboard with ranking growth analytics",
        bullets: ["Keyword Research", "Technical SEO", "On Page SEO", "Local SEO"],
      },
      {
        id: "google-ads",
        title: "Google Ads",
        description: "High-intent paid campaigns engineered for leads and revenue.",
        href: "/book-consultation/",
        image: `${img}/expertise/expertise-google-ads.jpg`,
        imageAlt: "PPC campaign performance dashboard",
        bullets: ["Search Ads", "Display Ads", "Remarketing", "Performance Max"],
      },
      {
        id: "social",
        title: "Social Media Marketing",
        description: "Build brand presence and engage audiences across social platforms.",
        href: "/social-media-marketing/",
        image: `${img}/expertise/expertise-social.jpg`,
        imageAlt: "Social media marketing analytics across major platforms",
        bullets: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "Content Strategy"],
      },
      {
        id: "content",
        title: "Content Writing",
        description: "Compelling copy that builds trust, authority, and conversions.",
        href: "/content-writing/",
        image: `${img}/expertise/expertise-content.jpg`,
        imageAlt: "Content creation and blog writing illustration",
        bullets: ["Blog Writing", "Website Content", "SEO Content", "Copywriting"],
      },
      {
        id: "website",
        title: "Website Development",
        description: "Fast, elegant websites built to impress and convert visitors.",
        href: "/website-development/",
        image: `${img}/expertise/expertise-website.jpg`,
        imageAlt: "Modern responsive website design mockup",
        bullets: ["Business Websites", "Landing Pages", "WordPress Development", "Performance Optimization"],
      },
      {
        id: "analytics",
        title: "Analytics & Reporting",
        description: "Data-driven insights that power smarter marketing decisions.",
        href: "/book-consultation/",
        image: `${img}/expertise/expertise-analytics.jpg`,
        imageAlt: "Marketing analytics and reporting dashboard",
        bullets: ["GA4 Setup", "Conversion Tracking", "Search Console", "Monthly Reports"],
      },
    ],
  },
  process: {
    title: "Our Working Process",
    steps: [
      {
        number: "01",
        title: "Research & Analysis",
        description: "Deep market, competitor, and audience research to uncover growth opportunities.",
        image: `${img}/expertise/expertise-analytics.jpg`,
        imageAlt: "3D analytics dashboard illustration for research and analysis",
      },
      {
        number: "02",
        title: "Strategy Planning",
        description: "A tailored roadmap with the right channels, messaging, and campaign structure.",
        image: `${img}/expertise/expertise-brand.jpg`,
        imageAlt: "3D brand strategy illustration for marketing planning",
      },
      {
        number: "03",
        title: "Campaign Execution",
        description: "SEO, Google Ads, and social campaigns launched with precision and creativity.",
        image: `${img}/expertise/expertise-google-ads.jpg`,
        imageAlt: "3D Google Ads campaign illustration for execution",
      },
      {
        number: "04",
        title: "Optimization & Growth",
        description: "Continuous analytics, testing, and scaling of what drives the best results.",
        image: `${img}/expertise/expertise-leads.jpg`,
        imageAlt: "3D lead generation illustration for optimization and growth",
      },
    ],
  },
  results: {
    title: "Results That Speak",
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
    description:
      "Everything you need to know about our digital marketing services. Can't find your answer? Book a free consultation and our team will walk you through the right strategy.",
    image: `${img}/why-byte-team.jpg`,
    imageAlt: "Byte Infomedia marketing team ready for consultation",
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
    secondaryCta: "View Our Services",
  },
} as const;
