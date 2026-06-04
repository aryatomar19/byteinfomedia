import { homeImages } from "@/data/site";

export const homeHero = {
  badge: "DEVOPS • CYBER SECURITY • GENERATIVE AI",
  headline: "Transforming Cloud Infrastructure for Modern Enterprises",
  description:
    "Cloud consulting, cloud migration, DevOps automation, managed services, cybersecurity, and AI solutions that help businesses scale securely.",
  primaryCta: { label: "Book Consultation", href: "/book-consultation/" },
  secondaryCta: { label: "Request Free Assessment", href: "#assessment" },
  image: homeImages.hero,
  imageAlt: "Enterprise cloud operations, datacenter infrastructure and technology consulting",
  trustPoints: [
    "Cloud Consulting",
    "Cloud Migration",
    "DevOps Automation",
    "Cyber Security",
    "24x7 Managed Services",
  ],
};

export const visionSection = {
  title: "Our Vision",
  description:
    "At Byte Infomedia, we empower businesses through cloud transformation, cybersecurity, DevOps automation, AI-driven solutions, and digital marketing services. Our mission is to combine technology, innovation, and strategic thinking to help organizations scale faster, operate securely, and achieve sustainable growth. We focus on delivering reliable, scalable, and future-ready solutions that help businesses adapt to changing market demands and achieve long-term digital success. Our expertise helps organizations stay competitive in an evolving digital landscape.",
  image: "/images/home/our-vision.jpg",
  imageAlt:
    "Business team collaborating with cloud technology dashboards, analytics screens, and enterprise collaboration",
};

export const aboutByteInfomediaSection = {
  eyebrow: "ABOUT BYTE INFOMEDIA",
  title: "Why Businesses Choose Byte Infomedia",
  description:
    "Byte Infomedia delivers cloud, cybersecurity, DevOps, AI, website development, SEO, content marketing, and social media marketing solutions under one roof. We help businesses modernize technology, improve security, increase online visibility, and accelerate growth through scalable digital solutions.",
  highlights: [
    {
      image: "/images/home/about-highlights/cloud-devops.jpg",
      imageAlt: "Enterprise cloud infrastructure and DevOps automation",
      title: "Cloud & DevOps",
      description: "Secure cloud infrastructure, migration and automation.",
    },
    {
      image: "/images/home/about-highlights/cyber-security.jpg",
      imageAlt: "Cybersecurity operations and enterprise threat protection",
      title: "Cyber Security",
      description: "Enterprise-grade protection and compliance solutions.",
    },
    {
      image: "/images/home/about-highlights/digital-marketing.jpg",
      imageAlt: "SEO analytics and digital marketing performance dashboards",
      title: "Digital Marketing",
      description: "SEO, social media marketing and brand growth.",
    },
    {
      image: "/images/home/about-highlights/ai-innovation.jpg",
      imageAlt: "Artificial intelligence and machine learning innovation",
      title: "AI & Innovation",
      description: "AI-powered automation and intelligent business solutions.",
    },
  ],
};

export const servicesSection = {
  title: "Our Services",
  subtitle: "Deep expertise across cloud, operations, security and AI.",
};

export const serviceOverview = [
  {
    title: "Cloud Services",
    image: homeImages.cloudServices,
    imageAlt: "Enterprise cloud infrastructure and computing",
    description:
      "AWS consulting, migration, modernization, cloud security and cost optimization.",
    href: "/cloud-services/",
  },
  {
    title: "Managed Services",
    image: homeImages.managedServices,
    imageAlt: "Enterprise operations and IT management",
    description: "24×7 monitoring, incident response and cloud operations.",
    href: "/managed-services/",
  },
  {
    title: "Cyber Security",
    image: homeImages.cyberSecurity,
    imageAlt: "Cybersecurity and threat protection",
    description: "Security assessments, compliance, threat detection and cloud hardening.",
    href: "/cyber-security/",
  },
  {
    title: "Generative AI",
    image: homeImages.generativeAi,
    imageAlt: "Generative AI and enterprise automation",
    description: "AI consulting, automation, chatbot development and enterprise adoption.",
    href: "/generative-ai/",
  },
];

export const marketingServiceOverview = [
  {
    title: "Website Development",
    image: "/images/home/marketing/website-development.jpg",
    imageAlt: "Professional team collaborating on website development",
    description: "Custom business websites, landing pages, and enterprise web applications.",
    href: "/website-development/",
  },
  {
    title: "Search Engine Optimization (SEO)",
    image: "/images/home/marketing/seo.jpg",
    imageAlt: "Marketing team planning search engine optimization strategy",
    description: "Improve search rankings, organic traffic, and online visibility.",
    href: "/search-engine-optimization/",
  },
  {
    title: "Content Writing",
    image: "/images/home/marketing/content-writing.jpg",
    imageAlt: "Professionals creating website and marketing content",
    description: "Professional website, blog, marketing, and technical content creation.",
    href: "/content-writing/",
  },
  {
    title: "Social Media Marketing",
    image: "/images/home/marketing/social-media-marketing.jpg",
    imageAlt: "Creative team developing social media marketing campaigns",
    description: "Brand awareness, audience engagement, and social media growth strategies.",
    href: "/social-media-marketing/",
  },
];

export const partnersSection = {
  title: "Trusted Technology Partners",
  subtitle:
    "Delivering enterprise solutions across leading cloud platforms and enterprise technologies.",
};

export const technologyPartners = [
  {
    name: "Amazon Web Services",
    logo: "/images/partners/aws.svg",
    logoAlt: "Amazon Web Services (AWS) logo",
  },
  {
    name: "Microsoft Azure",
    logo: "/images/partners/azure.svg",
    logoAlt: "Microsoft Azure official logo",
  },
  {
    name: "Google Cloud Platform",
    logo: "/images/partners/gcp.svg",
    logoAlt: "Google Cloud Platform (GCP) logo",
  },
  {
    name: "Oracle Cloud",
    logo: "/images/partners/oracle.svg",
    logoAlt: "Oracle Cloud logo",
  },
] as const;

export const whySection = {
  title: "Trusted By Businesses That Demand Excellence",
};

export const capabilityCards = [
  {
    title: "Cloud Consulting",
    description: "Architecture, governance, and cloud modernization for enterprise workloads.",
  },
  { title: "Cloud Migration", description: "Structured migration programs with validation and minimal business risk." },
  { title: "Cyber Security", description: "Assessments, hardening, compliance, and continuous threat visibility." },
  { title: "DevOps Automation", description: "CI/CD pipelines, infrastructure as code, and release governance." },
  { title: "Managed Operations", description: "24×7 monitoring, incident response, and ongoing cloud support." },
  { title: "Generative AI", description: "AI strategy, LLM integration, and enterprise automation." },
  { title: "Enterprise Support", description: "Dedicated consulting for leadership and technical teams." },
  { title: "Cloud Optimization", description: "FinOps, rightsizing, and cost governance across your cloud estate." },
];
