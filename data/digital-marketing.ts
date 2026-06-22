const heroStats = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 300, suffix: "%", label: "Average Growth" },
  { value: null as number | null, display: "24x7", label: "Support" },
] as const;

const whyByteStats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "%", label: "Client Retention" },
  { value: 300, suffix: "%", label: "Average Growth" },
  { value: null as number | null, display: "24/7", label: "Expert Support" },
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
    title: "Why Byte Infomedia",
    imageAlt: "Immersive digital marketing ecosystem with analytics, globe, and connected channels",
    stats: whyByteStats,
    features: [
      {
        title: "Growth-Focused Team",
        description: "Digital marketers, designers, and strategists working as one unified team.",
      },
      {
        title: "Data-Driven Strategy",
        description: "Every campaign backed by analytics and measurable business insights.",
      },
      {
        title: "Transparent Reporting",
        description: "Real-time performance tracking with clear KPIs you can act on.",
      },
      {
        title: "ROI-Focused Campaigns",
        description: "Marketing strategies engineered to maximize revenue and growth.",
      },
      {
        title: "Tailored Marketing Solutions",
        description: "Customized campaigns designed for every business stage and goal.",
      },
      {
        title: "Long-Term Brand Growth",
        description: "Sustainable strategies that build authority, trust, and market share.",
      },
    ],
  },
  capabilities: {
    title: "Digital Marketing Capabilities",
    eyebrow: "What We Deliver",
    items: [
      {
        id: "seo",
        title: "SEO Optimization",
        description: "Dominate search rankings with technical SEO, content strategy, and authority building.",
        href: "/search-engine-optimization/",
      },
      {
        id: "google-ads",
        title: "Google Ads Management",
        description: "High-intent PPC campaigns that convert clicks into qualified leads and revenue.",
        href: "/book-consultation/",
      },
      {
        id: "social",
        title: "Social Media Marketing",
        description: "Build engaged communities and drive brand awareness across every major platform.",
        href: "/social-media-marketing/",
      },
      {
        id: "content",
        title: "Content Marketing",
        description: "Compelling content that educates, converts, and positions your brand as an authority.",
        href: "/content-writing/",
      },
      {
        id: "website",
        title: "Website Development",
        description: "High-performance websites engineered for speed, conversions, and growth.",
        href: "/website-development/",
      },
      {
        id: "analytics",
        title: "Marketing Analytics",
        description: "Deep performance insights that turn data into actionable growth decisions.",
        href: "/book-consultation/",
      },
    ],
  },
  performanceMetrics: {
    title: "Performance That Speaks for Itself",
    eyebrow: "Our Impact",
    metrics: [
      { value: 100, suffix: "+", label: "Projects Delivered" },
      { value: 95, suffix: "%", label: "Client Satisfaction" },
      { value: 300, suffix: "%", label: "Average ROI Growth" },
      { value: null as number | null, display: "24/7", label: "Support" },
      { value: 50, suffix: "+", label: "Active Campaigns" },
      { value: 1000, suffix: "+", label: "Qualified Leads Generated" },
    ],
  },
  workflow: {
    title: "Digital Marketing Workflow",
    eyebrow: "How We Work",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description: "Deep-dive into your brand, audience, goals, and competitive landscape.",
      },
      {
        number: "02",
        title: "Market Research",
        description: "Analyze trends, competitors, and opportunities to uncover growth levers.",
      },
      {
        number: "03",
        title: "Strategy Planning",
        description: "Build a data-led roadmap with clear KPIs and channel priorities.",
      },
      {
        number: "04",
        title: "Campaign Launch",
        description: "Execute campaigns, creative assets, and tracking with precision.",
      },
      {
        number: "05",
        title: "Optimization",
        description: "Continuously test, refine, and improve performance across all channels.",
      },
      {
        number: "06",
        title: "Scaling",
        description: "Scale winning strategies to accelerate revenue and market presence.",
      },
    ],
  },
  resultsApproach: {
    eyebrow: "Results Driven",
    title: "Marketing That Drives Measurable Growth",
    description:
      "We don't just run campaigns — we engineer growth systems. From traffic acquisition to lead generation and conversion optimization, every strategy is built around ROI, qualified leads, and sustainable business outcomes.",
    cta: "Book Free Consultation",
  },
  clientsChoose: {
    title: "Why Clients Choose Us",
    eyebrow: "The Byte Advantage",
    cards: [
      {
        title: "Dedicated Account Managers",
        description: "A single point of contact who knows your business inside and out.",
        size: "large" as const,
      },
      {
        title: "Transparent Reporting",
        description: "Real-time dashboards with clear metrics you can trust.",
        size: "small" as const,
      },
      {
        title: "Fast Campaign Execution",
        description: "Rapid deployment without sacrificing quality or strategy.",
        size: "small" as const,
      },
      {
        title: "Data-Driven Decisions",
        description: "Every move backed by analytics, not assumptions.",
        size: "medium" as const,
      },
      {
        title: "Custom Marketing Strategies",
        description: "Tailored plans built for your industry, audience, and goals.",
        size: "medium" as const,
      },
      {
        title: "Long-Term Growth Focus",
        description: "Strategies designed to compound results over time.",
        size: "full" as const,
      },
    ],
  },
} as const;
