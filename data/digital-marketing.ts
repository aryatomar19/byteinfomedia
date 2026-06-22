const img = "/images/dm-landing";

const serviceItems = [
  {
    id: "website" as const,
    title: "Website Development",
    description: "Fast, elegant websites engineered to impress visitors and drive conversions.",
    href: "/website-development/",
    image: `${img}/website.jpg`,
    imageAlt: "Orange laptop digital marketing and website development scene",
  },
  {
    id: "seo" as const,
    title: "Search Engine Optimization",
    description: "Rank higher, attract qualified traffic, and grow organic visibility.",
    href: "/search-engine-optimization/",
    image: `${img}/seo.jpg`,
    imageAlt: "Glowing SEO analytics and growth dashboard scene",
  },
  {
    id: "content" as const,
    title: "Content Writing",
    description: "Clear, compelling copy that builds trust, authority, and engagement.",
    href: "/content-writing/",
    image: `${img}/content.jpg`,
    imageAlt: "Content writing and brand storytelling",
  },
  {
    id: "social" as const,
    title: "Social Media Marketing",
    description: "Grow your brand presence and engage audiences across social channels.",
    href: "/social-media-marketing/",
    image: `${img}/social.jpg`,
    imageAlt: "Floating social media marketing and analytics scene",
  },
] as const;

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
  whoWeAre: {
    title: "Strategic Digital Marketing for Modern Businesses",
    description:
      "Byte Infomedia partners with ambitious brands to deliver measurable growth through premium digital marketing — from stunning websites to search visibility, compelling content, and social engagement.",
    image: `${img}/who-we-are.jpg`,
    imageAlt: "Digital marketing strategy team collaboration",
    features: [
      "End-to-end digital marketing under one roof",
      "Transparent reporting with clear ROI metrics",
      "Strategies tailored to your industry and goals",
    ],
  },
  services: {
    title: "Our Digital Marketing Services",
    items: serviceItems,
  },
  process: {
    title: "Our Process",
    steps: [
      { title: "Discover", description: "Understand your brand, audience, and goals." },
      { title: "Research", description: "Analyze market, competitors, and opportunities." },
      { title: "Strategy", description: "Build a data-led roadmap for growth." },
      { title: "Execute", description: "Launch campaigns and assets with precision." },
      { title: "Optimize", description: "Measure, refine, and scale what works." },
    ],
  },
  whyByte: {
    title: "Why Byte Infomedia",
    image: `${img}/why-byte-3d.jpg`,
    imageAlt: "3D digital marketing professional illustration",
    stats: heroStats,
    features: [
      { title: "Dedicated Team", description: "Experts focused on your growth goals." },
      { title: "Data Driven Strategy", description: "Decisions backed by real analytics." },
      { title: "Transparent Reporting", description: "Clear dashboards you can act on." },
      { title: "Affordable Solutions", description: "Premium quality within your budget." },
      { title: "Custom Campaigns", description: "Tailored to your industry and audience." },
      { title: "Long Term Growth", description: "Sustainable results that compound." },
    ],
  },
} as const;
