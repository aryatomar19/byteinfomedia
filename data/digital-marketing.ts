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
  whyChoose: {
    title: "Why Businesses Choose Digital Marketing",
    items: [
      {
        title: "Increase Traffic",
        description: "Reach more qualified visitors through search, social, and paid channels that align with your audience.",
      },
      {
        title: "Generate Leads",
        description: "Convert interest into pipeline with landing pages, content funnels, and campaigns built for action.",
      },
      {
        title: "Build Brand Awareness",
        description: "Strengthen recognition and trust with consistent messaging across every digital touchpoint.",
      },
      {
        title: "Improve ROI",
        description: "Measure what works, optimize spend, and reinvest in strategies that deliver measurable returns.",
      },
    ],
  },
  services: {
    title: "Our Digital Marketing Services",
    items: [
      {
        title: "SEO",
        description: "Improve rankings, organic traffic, and search visibility with technical and content-led optimization.",
        href: "/search-engine-optimization/",
      },
      {
        title: "Social Media Marketing",
        description: "Grow engagement and community across platforms with strategic content and paid social campaigns.",
        href: "/social-media-marketing/",
      },
      {
        title: "Content Marketing",
        description: "Attract and nurture audiences with blogs, guides, and messaging that builds authority.",
        href: "/content-writing/",
      },
      {
        title: "Website Development",
        description: "Launch fast, conversion-focused websites and landing pages designed for growth.",
        href: "/website-development/",
      },
      {
        title: "Performance Marketing",
        description: "Drive measurable results with data-backed paid campaigns across search and display networks.",
      },
      {
        title: "Email Marketing",
        description: "Stay top of mind with targeted email sequences, newsletters, and lifecycle automation.",
      },
      {
        title: "Brand Strategy",
        description: "Define positioning, voice, and visual identity that resonates with your ideal customers.",
      },
      {
        title: "Online Reputation Management",
        description: "Protect and enhance your brand presence with review monitoring and reputation strategies.",
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
      "Dedicated Team",
      "Data Driven Strategy",
      "Transparent Reporting",
      "Affordable Solutions",
      "Custom Campaigns",
      "Long Term Growth",
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
        title: "SEO Growth",
        result: "180% increase in organic traffic within 6 months",
        image: "/images/branding/seo/showcase.jpg",
        imageAlt: "SEO growth dashboard showing improved search rankings",
      },
      {
        title: "Social Media Campaign",
        result: "3x engagement rate across brand channels",
        image: "/images/branding/social-media/showcase.jpg",
        imageAlt: "Social media campaign performance metrics",
      },
      {
        title: "Lead Generation",
        result: "250+ qualified leads per month from paid campaigns",
        image: "/images/home/marketing/website-development.jpg",
        imageAlt: "Lead generation funnel and conversion analytics",
      },
    ],
  },
  industries: {
    title: "Industries We Serve",
    items: [
      "Healthcare",
      "Education",
      "Real Estate",
      "Ecommerce",
      "Manufacturing",
      "Technology",
      "Finance",
      "Hospitality",
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
