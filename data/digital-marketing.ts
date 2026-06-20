import type { FaqItem } from "@/data/service-page-types";

const img = "/images/home";

export const digitalMarketingPage = {
  hero: {
    badge: "DIGITAL MARKETING SOLUTIONS",
    title: "Grow Your Business With Smart Digital Marketing",
    description:
      "We help businesses increase visibility, generate qualified leads, and build lasting customer relationships through SEO, social media, content marketing, and performance-driven campaigns.",
    image: `${img}/hero-slides/digital-marketing-seo.jpg`,
    imageAlt: "Digital marketing team analyzing campaign performance and growth metrics",
  },
  about: {
    eyebrow: "About Us",
    title: "Strategic Digital Marketing for Modern Businesses",
    description:
      "Byte Infomedia helps businesses build a strong online presence through integrated digital marketing. From search visibility and compelling content to social engagement and conversion-focused websites, we create strategies that attract the right audience and turn interest into measurable growth.",
    highlights: [
      "Data-driven campaigns tailored to your goals",
      "Full-funnel strategy across search, social, and web",
      "Transparent reporting with measurable ROI",
    ],
    image: `${img}/about-highlights/digital-marketing.jpg`,
    imageAlt: "Digital marketing professionals reviewing analytics and campaign strategy",
  },
  benefits: {
    title: "Why Businesses Choose Digital Marketing",
    items: [
      {
        title: "Increase Traffic",
        description: "Reach more qualified visitors through search, social, and paid channels.",
      },
      {
        title: "Generate Leads",
        description: "Convert interest into pipeline with landing pages and campaigns built for action.",
      },
      {
        title: "Build Brand Awareness",
        description: "Strengthen recognition with consistent messaging across every touchpoint.",
      },
      {
        title: "Improve ROI",
        description: "Measure what works, optimize spend, and reinvest in high-performing strategies.",
      },
    ],
  },
  services: {
    title: "Our Digital Marketing Services",
    items: [
      {
        title: "Website Development",
        description: "Custom business websites, landing pages, and enterprise web applications.",
        image: `${img}/marketing/website-development.jpg`,
        imageAlt: "Professional team collaborating on website development",
        href: "/website-development/",
      },
      {
        title: "SEO",
        description: "Improve search rankings, organic traffic, and online visibility.",
        image: `${img}/marketing/seo.jpg`,
        imageAlt: "Marketing team planning search engine optimization strategy",
        href: "/search-engine-optimization/",
      },
      {
        title: "Content Writing",
        description: "Professional website, blog, marketing, and technical content creation.",
        image: `${img}/marketing/content-writing.jpg`,
        imageAlt: "Professionals creating website and marketing content",
        href: "/content-writing/",
      },
      {
        title: "Social Media Marketing",
        description: "Brand awareness, audience engagement, and social media growth strategies.",
        image: `${img}/marketing/social-media-marketing.jpg`,
        imageAlt: "Creative team developing social media marketing campaigns",
        href: "/social-media-marketing/",
      },
    ],
  },
  process: {
    title: "Our Process",
    steps: [
      { title: "Discover", description: "Understand your goals, audience, and current digital footprint." },
      { title: "Research", description: "Analyze competitors, keywords, channels, and market opportunities." },
      { title: "Strategy", description: "Build a tailored roadmap with clear priorities and KPIs." },
      { title: "Execute", description: "Launch campaigns, content, and optimizations across chosen channels." },
      { title: "Optimize", description: "Track performance, refine tactics, and scale what delivers results." },
    ],
  },
  whyByte: {
    title: "Why Byte Infomedia",
    image: `${img}/marketing/social-media-marketing.jpg`,
    imageAlt: "Byte Infomedia digital marketing team collaborating on strategy",
    features: [
      { title: "Dedicated Team", description: "Specialists focused on your brand, channels, and growth targets." },
      { title: "Data Driven Strategy", description: "Every decision backed by analytics, testing, and performance insights." },
      { title: "Transparent Reporting", description: "Clear dashboards and regular updates so you always know what's working." },
      { title: "Affordable Solutions", description: "Enterprise-quality marketing tailored to your budget and scale." },
      { title: "Custom Campaigns", description: "Strategies built around your industry, audience, and business goals." },
      { title: "Long Term Growth", description: "Sustainable programs that compound results month over month." },
    ],
  },
  metrics: [
    { value: 100, suffix: "+", label: "Projects" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 300, suffix: "%", label: "Average Growth" },
    { value: null as number | null, display: "24x7", label: "Support" },
  ],
  caseStudies: {
    title: "Case Studies",
    items: [
      {
        category: "SEO",
        title: "SEO Growth",
        result: "180% increase in organic traffic within 6 months",
        image: "/images/branding/seo/showcase.jpg",
        imageAlt: "SEO growth dashboard showing improved search rankings",
      },
      {
        category: "Social Media",
        title: "Social Media Campaign",
        result: "3x engagement rate across brand channels",
        image: "/images/branding/social-media/showcase.jpg",
        imageAlt: "Social media campaign performance metrics",
      },
      {
        category: "Lead Generation",
        title: "Lead Generation",
        result: "250+ qualified leads per month from paid campaigns",
        image: `${img}/marketing/website-development.jpg`,
        imageAlt: "Lead generation funnel and conversion analytics",
      },
    ],
  },
  strategies: {
    title: "Why Our Digital Strategies Work",
    items: [
      {
        title: "Data Driven",
        description: "Every campaign is guided by analytics, audience insights, and performance benchmarks.",
      },
      {
        title: "ROI Focused",
        description: "We prioritize tactics that deliver measurable returns on your marketing investment.",
      },
      {
        title: "Creative Campaigns",
        description: "Compelling creative and messaging that captures attention and drives engagement.",
      },
      {
        title: "Transparent Reporting",
        description: "Regular updates and clear dashboards so you always know what's working.",
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What digital marketing services do you offer?",
        answer:
          "We offer SEO, social media marketing, content marketing, website development, performance marketing, email marketing, brand strategy, and online reputation management tailored to your business goals.",
      },
      {
        question: "How long does it take to see results from digital marketing?",
        answer:
          "Timelines vary by channel. Paid campaigns can generate leads quickly, while SEO and content marketing typically build momentum over 3–6 months with compounding returns.",
      },
      {
        question: "Do you work with small businesses and enterprises?",
        answer:
          "Yes. We design scalable strategies for startups, growing SMBs, and enterprise teams — from focused campaigns to full-funnel digital programs.",
      },
      {
        question: "How do you measure campaign success?",
        answer:
          "We track KPIs such as traffic, leads, conversion rates, engagement, and ROI with transparent reporting so you always know what is working.",
      },
      {
        question: "Can you manage our existing website and marketing channels?",
        answer:
          "Absolutely. We can audit your current setup, optimize underperforming assets, and manage ongoing campaigns across search, social, email, and web.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    title: "Ready To Grow Your Business?",
    description: "Let's create a digital marketing strategy tailored for your goals.",
    primaryLabel: "Book Consultation",
    secondaryLabel: "Contact Us",
  },
} as const;
