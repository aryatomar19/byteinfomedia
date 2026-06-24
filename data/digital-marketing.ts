const img = "/images/dm-landing";
const svc = `${img}/services`;

export const digitalMarketingPage = {
  hero: {
    title: "Grow Your Business With Smart Digital Marketing",
    description:
      "Data-driven SEO, PPC, Social Media Marketing and Growth Strategies that generate real business results.",
    primaryCta: "Book Consultation",
    secondaryCta: "View Services",
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
  },
  speciality: {
    eyebrow: "WHAT WE DO BEST",
    title: "Our Speciality",
    items: [
      {
        id: "branding",
        title: "Branding",
        description:
          "Build a strong brand identity that stands out and connects with your audience.",
        image: `${img}/speciality/branding.svg`,
        imageAlt: "Branding illustration with logo, creative assets and brand identity graphics",
        variant: "orange",
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        description:
          "Data-driven strategies to improve visibility, generate leads, and grow your business.",
        image: `${img}/speciality/digital-marketing.svg`,
        imageAlt: "Marketing dashboard illustration with people, charts and campaign planning",
        variant: "white",
      },
      {
        id: "mobile-marketing",
        title: "Mobile Marketing",
        description: "Reach your audience on the go with targeted mobile marketing campaigns.",
        image: `${img}/speciality/mobile-marketing.svg`,
        imageAlt: "Smartphone marketing illustration with notifications and customer engagement",
        variant: "orange",
      },
      {
        id: "online-marketing",
        title: "Online Marketing",
        description: "Boost your online presence with result-driven online marketing solutions.",
        image: `${img}/speciality/online-marketing.svg`,
        imageAlt: "Social media and online advertising illustration with megaphone and platform icons",
        variant: "white",
      },
      {
        id: "sem",
        title: "Search Engine Marketing",
        description: "Drive quality traffic and increase conversions with smart SEM strategies.",
        image: `${img}/speciality/search-engine-marketing.svg`,
        imageAlt: "Search engine and keyword targeting illustration with analytics graphs",
        variant: "white",
      },
      {
        id: "paid-marketing",
        title: "Paid Marketing",
        description: "Maximize ROI with targeted paid ad campaigns across multiple platforms.",
        image: `${img}/speciality/paid-marketing.svg`,
        imageAlt: "Facebook Ads and Google Ads illustration with campaign targeting",
        variant: "orange",
      },
      {
        id: "seo",
        title: "Search Engine Optimization",
        description: "Improve rankings, drive organic traffic, and grow your online visibility.",
        image: `${img}/speciality/seo.svg`,
        imageAlt: "SEO growth and ranking illustration with search analytics",
        variant: "white",
      },
      {
        id: "social-media",
        title: "Social Media Marketing",
        description:
          "Engage your audience and build strong connections on social media platforms.",
        image: `${img}/speciality/social-media.svg`,
        imageAlt: "Instagram, Facebook and LinkedIn audience engagement illustration",
        variant: "orange",
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
        description:
          "Improve search visibility and drive organic traffic with proven SEO strategies.",
        href: "/search-engine-optimization/",
        image: `${svc}/seo.svg`,
        imageAlt: "SEO optimization illustration with search engine and magnifying glass",
      },
      {
        id: "google-ads",
        title: "Google Ads",
        description:
          "Launch high-converting ad campaigns that deliver quality leads and sales.",
        href: "/book-consultation/",
        image: `${svc}/google-ads.svg`,
        imageAlt: "Google Ads illustration with campaign performance charts and targeting",
      },
      {
        id: "social",
        title: "Social Media Marketing",
        description:
          "Grow brand presence and engage your audience across social platforms.",
        href: "/social-media-marketing/",
        image: `${svc}/social-media.svg`,
        imageAlt: "Social media marketing illustration with megaphone and platform icons",
      },
      {
        id: "content",
        title: "Content Marketing",
        description:
          "Create valuable content that attracts, engages, and converts your audience.",
        href: "/content-writing/",
        image: `${svc}/content-marketing.svg`,
        imageAlt: "Content marketing illustration with blog, video, and creative assets",
      },
      {
        id: "website",
        title: "Website Development",
        description: "Build fast, responsive, and user-friendly websites that drive results.",
        href: "/website-development/",
        image: `${svc}/website-development.svg`,
        imageAlt: "Website development illustration with code editor and UI design",
      },
      {
        id: "analytics",
        title: "Analytics & Reporting",
        description:
          "Track performance, analyze data, and make smarter marketing decisions.",
        href: "/book-consultation/",
        image: `${svc}/analytics.svg`,
        imageAlt: "Analytics and reporting illustration with charts and performance data",
      },
    ],
  },
  process: {
    title: "Our Working Process",
    steps: [
      {
        number: "01",
        shortLabel: "Analysis",
        title: "Research & Analysis",
        description: "Deep market, competitor, and audience research to uncover growth opportunities.",
      },
      {
        number: "02",
        shortLabel: "Design",
        title: "Strategy Planning",
        description: "A tailored roadmap with the right channels, messaging, and campaign structure.",
      },
      {
        number: "03",
        shortLabel: "Development",
        title: "Campaign Execution",
        description: "SEO, Google Ads, and social campaigns launched with precision and creativity.",
      },
      {
        number: "04",
        shortLabel: "Live",
        title: "Optimization & Growth",
        description: "Continuous analytics, testing, and scaling of what drives the best results.",
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
