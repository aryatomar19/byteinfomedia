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
  overview: {
    title: "Overview",
    description:
      "Byte Infomedia helps businesses build a strong online presence through integrated digital marketing. From search visibility and compelling content to social engagement and conversion-focused websites, we create strategies that attract the right audience and turn interest into measurable growth.",
  },
  benefits: {
    title: "Benefits",
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
        title: "Website Development",
        description: "Custom business websites, landing pages, and enterprise web applications.",
        image: `${img}/marketing/website-development.jpg`,
        imageAlt: "Professional team collaborating on website development",
        href: "/website-development/",
      },
      {
        title: "Search Engine Optimization (SEO)",
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
  cta: {
    title: "Ready To Grow Your Business?",
    description: "Let's create a digital marketing strategy tailored for your goals.",
    primaryLabel: "Book Consultation",
    secondaryLabel: "Contact Us",
  },
} as const;
