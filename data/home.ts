import { homeImages } from "@/data/site";

export const homeHero = {
  badge: "PREMIUM AWS, DEVOPS & SECURITY CONSULTING",
  headline: "Secure AWS Cloud, DevOps & Cybersecurity Solutions for Modern Businesses",
  description:
    "BYTEINFOMEDIA helps organizations migrate, modernize, automate, secure and manage cloud infrastructure through enterprise-grade consulting services.",
  primaryCta: { label: "Book Consultation", href: "#assessment" },
  secondaryCta: { label: "Request Free Assessment", href: "#assessment" },
  image: homeImages.hero,
  trustPoints: [
    "AWS Consulting",
    "Cloud Migration",
    "Cyber Security",
    "DevOps Automation",
    "24×7 Support",
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
    imageAlt: "Cloud infrastructure and enterprise technology",
    description:
      "AWS consulting, migration, modernization, cloud security and cost optimization.",
    href: "/cloud-services/",
  },
  {
    title: "Managed Services",
    image: homeImages.managedServices,
    imageAlt: "Monitoring operations center and cloud infrastructure",
    description: "24×7 monitoring, incident response and cloud operations.",
    href: "/managed-services/",
  },
  {
    title: "Cyber Security",
    image: homeImages.cyberSecurity,
    imageAlt: "Cybersecurity operations and digital protection",
    description: "Security assessments, compliance, threat detection and cloud hardening.",
    href: "/cyber-security/",
  },
  {
    title: "Generative AI",
    image: homeImages.generativeAi,
    imageAlt: "Artificial intelligence and enterprise innovation",
    description: "AI consulting, automation, chatbot development and enterprise adoption.",
    href: "/generative-ai/",
  },
];

export const whySection = {
  title: "Trusted By Businesses That Demand Excellence",
  metrics: [
    { value: "120+", label: "Projects" },
    { value: "45+", label: "Migrations" },
    { value: "98%", label: "Client Satisfaction" },
  ],
};

export const whyChooseUs = [
  { title: "AWS Expertise", description: "Certified cloud architects and AWS best-practice delivery." },
  { title: "Cloud Migration", description: "Structured migration programs with validation and governance." },
  { title: "DevOps Automation", description: "CI/CD, infrastructure automation, and release excellence." },
  { title: "Security First", description: "Risk-aware security embedded across cloud and DevOps." },
  { title: "24×7 Monitoring", description: "Proactive operations and incident response for critical workloads." },
  { title: "Cost Optimization", description: "FinOps practices to control spend without sacrificing performance." },
  { title: "Enterprise Support", description: "Dedicated consulting for executives and technical teams." },
  { title: "Professional Consulting", description: "Clear roadmaps, documentation, and accountable outcomes." },
];
