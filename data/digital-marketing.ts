import type { FaqItem } from "@/data/service-page-types";

const dmImg = "/images/digital-marketing";

export const digitalMarketingPage = {
  hero: {
    badge: "BRANDING SOLUTIONS",
    titleLines: ["Build Better Brands.", "Create Better Experiences.", "Grow Your Business."],
    description: "We craft premium digital brands through web, SEO, content, and social.",
    primaryCta: "Book Consultation",
    secondaryCta: "Explore Services",
    trustBadges: ["100+ Brands", "SEO Experts", "Creative Team"],
  },
  services: {
    title: "Our Branding Solutions",
    subtitle: "Four services. One creative partner.",
    items: [
      {
        id: "website" as const,
        title: "Website Development",
        description: "Fast, elegant sites that impress and convert.",
        href: "/website-development/",
        image: `${dmImg}/website-development.jpg`,
      },
      {
        id: "seo" as const,
        title: "Search Engine Optimization (SEO)",
        description: "Rank higher and grow organic traffic.",
        href: "/search-engine-optimization/",
        image: `${dmImg}/seo.jpg`,
      },
      {
        id: "content" as const,
        title: "Content Writing",
        description: "Copy that builds trust and authority.",
        href: "/content-writing/",
        image: `${dmImg}/content-writing.jpg`,
      },
      {
        id: "social" as const,
        title: "Social Media Marketing",
        description: "Engage audiences across every channel.",
        href: "/social-media-marketing/",
        image: `${dmImg}/social-media-marketing.jpg`,
      },
    ],
  },
  whyByte: {
    title: "Why Byte Infomedia",
    image: `${dmImg}/hero.jpg`,
    imageAlt: "Byte Infomedia creative team",
    features: [
      { title: "Dedicated Team", description: "Experts focused on your brand." },
      { title: "Creative Strategy", description: "Bold ideas backed by data." },
      { title: "SEO Experts", description: "Rankings that compound." },
      { title: "Content Specialists", description: "Stories that resonate." },
      { title: "Social Growth", description: "Audiences that engage." },
      { title: "Long Term Support", description: "Partnership beyond launch." },
    ],
  },
  metrics: [
    { value: 100, suffix: "+", label: "Projects" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 300, suffix: "%", label: "Growth" },
    { value: null as number | null, display: "24/7", label: "Support" },
  ],
  process: {
    title: "How We Work",
    steps: [
      { title: "Discover", description: "Audit brand, audience, and goals." },
      { title: "Plan", description: "Map strategy across all channels." },
      { title: "Create", description: "Design assets that stand out." },
      { title: "Launch", description: "Deploy with precision." },
      { title: "Grow", description: "Optimize and scale results." },
    ],
  },
  featuredStory: {
    title: "Featured Success Story",
    project: "Regional B2B Brand",
    metric: "+180%",
    metricLabel: "Traffic Growth",
    description: "Organic traffic lift in six months through SEO and content.",
    image: `${dmImg}/seo.jpg`,
    imageAlt: "SEO traffic growth case study",
  },
  testimonials: {
    title: "Client Testimonials",
    items: [
      {
        quote: "Byte Infomedia transformed our online presence. Creative and results-driven.",
        name: "Rajesh K.",
        role: "Business Owner",
      },
      {
        quote: "SEO rankings improved dramatically. Transparent and professional.",
        name: "Priya S.",
        role: "Marketing Director",
      },
      {
        quote: "Stunning website. Fast, beautiful, and more conversions.",
        name: "Amit M.",
        role: "Founder",
      },
      {
        quote: "Social campaigns gave us visibility we never had before.",
        name: "Neha R.",
        role: "CMO",
      },
      {
        quote: "A true creative partner. Every deliverable exceeded expectations.",
        name: "Vikram D.",
        role: "CEO",
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What services do you offer?",
        answer: "Website Development, SEO, Content Writing, and Social Media Marketing.",
      },
      {
        question: "How quickly will I see results?",
        answer: "Social traction in weeks. SEO and content build over 3–6 months.",
      },
      {
        question: "Do you work with small businesses?",
        answer: "Yes — startups, SMBs, and growing enterprises.",
      },
      {
        question: "How do you measure success?",
        answer: "Traffic, leads, engagement, and ROI with clear reporting.",
      },
      {
        question: "Can I start with one service?",
        answer: "Absolutely. Scale across services as your brand grows.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    title: "Ready To Build Your Brand?",
    description: "Let's Grow Together.",
    primaryLabel: "Book Free Consultation",
  },
} as const;
