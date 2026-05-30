import { homeImages } from "@/data/site";

export const homeHero = {
  badge: "PREMIUM AWS • DEVOPS • SECURITY CONSULTING",
  headline: "Secure AWS Cloud, DevOps & Cybersecurity Solutions for Modern Businesses",
  description:
    "BYTEINFOMEDIA helps organizations migrate, modernize, automate, secure and manage cloud infrastructure through enterprise-grade consulting services.",
  primaryCta: { label: "Book Consultation", href: "/book-consultation/" },
  secondaryCta: { label: "Request Free Assessment", href: "#assessment" },
  image: homeImages.hero,
  trustPoints: [
    "AWS Consulting",
    "Cloud Migration",
    "Cyber Security",
    "DevOps Automation",
    "24x7 Support",
  ],
};

export const aboutPreview = {
  title: "Your Strategic Cloud & Security Partner",
  description:
    "At BYTEINFOMEDIA, we help organizations accelerate cloud adoption, improve security posture, streamline DevOps processes, and modernize infrastructure.",
  mission:
    "Empower enterprises with secure, scalable cloud platforms that accelerate innovation without compromising governance or compliance.",
  vision:
    "Be the trusted consulting partner for AWS, DevOps, security, and AI transformation across India and global markets.",
  image: homeImages.about,
  cta: { label: "Learn More", href: "/about-us/" },
};

export const servicesSection = {
  title: "Premium Consulting Services",
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

export const whySection = {
  title: "Trusted By Businesses That Demand Excellence",
};

export const capabilityCards = [
  { title: "AWS Consulting", description: "Architecture, governance, and AWS modernization for enterprise workloads." },
  { title: "Cloud Migration", description: "Structured migration programs with validation and minimal business risk." },
  { title: "Cyber Security", description: "Assessments, hardening, compliance, and continuous threat visibility." },
  { title: "DevOps Automation", description: "CI/CD pipelines, infrastructure as code, and release governance." },
  { title: "Managed Operations", description: "24×7 monitoring, incident response, and ongoing cloud support." },
  { title: "Generative AI", description: "AI strategy, LLM integration, and enterprise automation." },
  { title: "Enterprise Support", description: "Dedicated consulting for leadership and technical teams." },
  { title: "Cloud Optimization", description: "FinOps, rightsizing, and cost governance across your cloud estate." },
];
