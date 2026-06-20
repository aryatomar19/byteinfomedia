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
      },
      {
        id: "seo" as const,
        title: "Search Engine Optimization (SEO)",
        description: "Rank higher, attract qualified traffic, and grow organically.",
        href: "/search-engine-optimization/",
      },
      {
        id: "content" as const,
        title: "Content Writing",
        description: "Clear, compelling copy that builds trust and authority.",
        href: "/content-writing/",
      },
      {
        id: "social" as const,
        title: "Social Media Marketing",
        description: "Engage audiences and grow your brand across social channels.",
        href: "/social-media-marketing/",
      },
    ],
  },
  metrics: [
    { value: 100, suffix: "+", label: "Projects Completed" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 300, suffix: "%", label: "Average Growth" },
    { value: null as number | null, display: "24/7", label: "Support" },
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
        description: "180% organic traffic lift in six months.",
        image: `${dmImg}/seo.jpg`,
        imageAlt: "SEO growth results",
      },
      {
        title: "Social Media Campaign",
        description: "3× engagement across brand channels.",
        image: `${dmImg}/social-media-marketing.jpg`,
        imageAlt: "Social media campaign results",
      },
      {
        title: "Lead Generation",
        description: "250+ qualified leads per month.",
        image: `${dmImg}/website-development.jpg`,
        imageAlt: "Lead generation results",
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
      },
      {
        quote: "Our SEO rankings improved dramatically. Transparent reporting and a team that truly cares.",
        name: "Priya S.",
        role: "Marketing Director",
      },
      {
        quote: "The website they built is stunning. Clean design, fast performance, and more conversions.",
        name: "Amit M.",
        role: "Founder",
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
