import type { FaqItem } from "@/data/service-page-types";

const dmImg = "/images/digital-marketing";

export const digitalMarketingPage = {
  hero: {
    badge: "BRANDING SOLUTIONS",
    title: "Build Strong Brands That Drive Real Business Growth",
    description:
      "Premium websites, SEO, content, and social media — crafted to elevate your brand and convert attention into revenue.",
    primaryCta: "Get Free Consultation",
    secondaryCta: "Explore Services",
    trustBadges: ["SEO & Web Experts", "Data-Led Growth", "Trusted by 100+ Brands"],
  },
  services: {
    title: "Our Branding Solutions",
    subtitle: "Four focused services. One premium partner.",
    items: [
      {
        id: "website" as const,
        title: "Website Development",
        description: "Fast, elegant websites built to impress and convert.",
        href: "/website-development/",
        image: `${dmImg}/website-development.jpg`,
        span: "large" as const,
      },
      {
        id: "seo" as const,
        title: "Search Engine Optimization (SEO)",
        description: "Rank higher, attract qualified traffic, and grow organically.",
        href: "/search-engine-optimization/",
        image: `${dmImg}/seo.jpg`,
        span: "medium" as const,
      },
      {
        id: "content" as const,
        title: "Content Writing",
        description: "Clear, compelling copy that builds trust and authority.",
        href: "/content-writing/",
        image: `${dmImg}/content-writing.jpg`,
        span: "medium" as const,
      },
      {
        id: "social" as const,
        title: "Social Media Marketing",
        description: "Engage audiences and grow your brand across social channels.",
        href: "/social-media-marketing/",
        image: `${dmImg}/social-media-marketing.jpg`,
        span: "large" as const,
      },
    ],
  },
  metrics: [
    { value: 100, suffix: "+", label: "Projects Completed" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 300, suffix: "%", label: "Average Growth" },
    { value: null as number | null, display: "24/7", label: "Support" },
  ],
  process: {
    title: "How We Build Your Brand",
    subtitle: "A proven four-step journey from strategy to measurable growth.",
    steps: [
      {
        title: "Discover",
        description: "Audit your brand, audience, and competitive landscape.",
        image: `${dmImg}/hero.jpg`,
      },
      {
        title: "Strategize",
        description: "Craft a data-led roadmap across web, SEO, content, and social.",
        image: `${dmImg}/seo.jpg`,
      },
      {
        title: "Create & Launch",
        description: "Design, develop, and deploy premium assets that convert.",
        image: `${dmImg}/website-development.jpg`,
      },
      {
        title: "Optimize & Scale",
        description: "Measure, refine, and compound results month over month.",
        image: `${dmImg}/social-media-marketing.jpg`,
      },
    ],
  },
  floatingProof: [
    { label: "4.9★ Rating", detail: "Client reviews" },
    { label: "100+ Brands", detail: "Trusted partners" },
    { label: "300% Avg Growth", detail: "Campaign results" },
  ],
  whyByte: {
    title: "Why Byte Infomedia",
    features: [
      { title: "Dedicated Team", description: "Experts focused on your brand goals." },
      { title: "Data Driven Strategy", description: "Decisions backed by real analytics." },
      { title: "Transparent Reporting", description: "Clear insights you can act on." },
      { title: "Affordable Solutions", description: "Premium quality within your budget." },
      { title: "Custom Solutions", description: "Tailored to your industry and audience." },
      { title: "Long Term Growth", description: "Sustainable results that compound." },
    ],
  },
  caseStudies: {
    title: "Case Studies",
    items: [
      {
        title: "SEO Growth",
        description: "180% organic traffic lift in six months for a regional B2B brand.",
        image: `${dmImg}/seo.jpg`,
        imageAlt: "SEO growth results",
        metric: "+180%",
        tag: "Organic Traffic",
      },
      {
        title: "Social Media Campaign",
        description: "3× engagement and 2.4× follower growth across brand channels.",
        image: `${dmImg}/social-media-marketing.jpg`,
        imageAlt: "Social media campaign results",
        metric: "3×",
        tag: "Engagement",
      },
      {
        title: "Lead Generation",
        description: "250+ qualified leads per month from a redesigned conversion funnel.",
        image: `${dmImg}/website-development.jpg`,
        imageAlt: "Lead generation results",
        metric: "250+",
        tag: "Leads / Month",
      },
      {
        title: "Content Authority",
        description: "Top-3 rankings for 40+ keywords through strategic content clusters.",
        image: `${dmImg}/content-writing.jpg`,
        imageAlt: "Content authority results",
        metric: "40+",
        tag: "Top Keywords",
      },
    ],
  },
  testimonials: {
    title: "What Clients Say",
    items: [
      {
        quote: "Byte Infomedia transformed our online presence. Professional, creative, and results-driven.",
        name: "Rajesh K.",
        role: "Business Owner",
        company: "Retail Brand",
        rating: 5,
      },
      {
        quote: "Our SEO rankings improved dramatically. Transparent reporting and a team that truly cares.",
        name: "Priya S.",
        role: "Marketing Director",
        company: "SaaS Startup",
        rating: 5,
      },
      {
        quote: "The website they built is stunning. Clean design, fast performance, and more conversions.",
        name: "Amit M.",
        role: "Founder",
        company: "E-commerce",
        rating: 5,
      },
      {
        quote: "Their social campaigns gave us visibility we never had before. ROI was clear within 90 days.",
        name: "Neha R.",
        role: "CMO",
        company: "Healthcare",
        rating: 5,
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What branding services do you offer?",
        answer:
          "We specialize in Website Development, SEO, Content Writing, and Social Media Marketing — four focused services to grow your brand online.",
      },
      {
        question: "How quickly can I see results?",
        answer:
          "Paid and social campaigns can show traction within weeks. SEO and content typically build strong momentum over 3–6 months.",
      },
      {
        question: "Do you work with small businesses?",
        answer: "Yes. We design scalable branding programs for startups, SMBs, and growing enterprises.",
      },
      {
        question: "How do you measure success?",
        answer: "We track traffic, leads, engagement, and ROI with clear dashboards and regular updates.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    title: "Ready To Grow Your Brand?",
    description: "Let's build a branding strategy tailored to your goals.",
    primaryLabel: "Get Free Consultation",
    secondaryLabel: "Contact Us",
  },
} as const;
