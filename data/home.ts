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

export const aboutPreview = {
  title: "Your Strategic Cloud & Security Partner",
  description:
    "At Byte Infomedia, we help organizations accelerate cloud adoption, improve security posture, streamline DevOps processes, and modernize infrastructure.",
  // mission:
  //  "Our mission is to empower businesses with reliable, secure, and scalable technology solutions. We aim to simplify IT operations, optimize infrastructure, and provide innovative cloud and cybersecurity services that allow organizations to focus on growth and innovation.",
  // vision:
  //   "Our vision is to become a trusted technology partner for businesses worldwide by delivering cutting-edge IT solutions that drive digital transformation and create long-term value for our clients.",
  image: homeImages.about,
  cta: { label: "Learn More", href: "/about-us/" },
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
    logoAlt: "Microsoft Azure logo",
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
