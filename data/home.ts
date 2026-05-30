import { Bot, Cloud, Server, Shield } from "lucide-react";

export const homeHero = {
  headline: "Secure AWS Cloud, DevOps & Cybersecurity Solutions for Modern Businesses",
  description:
    "BYTEINFOMEDIA helps organizations migrate, modernize, automate, secure and manage cloud infrastructure through enterprise-grade consulting and managed services.",
  primaryCta: { label: "Book Consultation", href: "#assessment" },
  secondaryCta: { label: "Request Free Assessment", href: "#assessment" },
};

export const aboutPreview = {
  eyebrow: "Who We Are",
  title: "Technology partners for ambitious enterprises",
  paragraphs: [
    "At BYTEINFOMEDIA, we focus on delivering reliable and modern technology solutions that help businesses grow in a digital world. Our team specializes in cloud services, cybersecurity, AWS solutions, and IT communication systems designed to improve efficiency and security.",
    "We believe in building long-term partnerships with our clients by providing solutions that are scalable, secure, and tailored to their business needs.",
  ],
  mission:
    "Empower organizations with secure, scalable cloud and DevOps capabilities that accelerate innovation without compromising governance.",
  vision:
    "Become the most trusted AWS, DevOps, security, and AI consulting partner for enterprises across India and global markets.",
  cta: { label: "Learn More", href: "/about-us/" },
};

export const serviceOverview = [
  {
    title: "Cloud Services",
    description:
      "AWS consulting, migration, modernization, FinOps, and cloud-native architecture for enterprise workloads.",
    href: "/cloud-services/",
    icon: Cloud,
    image: "/images/service-cloud.svg",
    accent: "from-[#E8F4FF] to-[#F8FBFF]",
  },
  {
    title: "Managed Services",
    description:
      "24×7 monitoring, cloud operations, incident management, and ongoing infrastructure support.",
    href: "/managed-services/",
    icon: Server,
    image: "/images/service-managed.svg",
    accent: "from-[#FFF4EC] to-[#FFFBF7]",
  },
  {
    title: "Cyber Security",
    description:
      "Security assessments, cloud hardening, compliance, threat detection, and risk-aware operations.",
    href: "/cyber-security/",
    icon: Shield,
    image: "/images/service-security.svg",
    accent: "from-[#F3EEFF] to-[#FBF9FF]",
  },
  {
    title: "Generative AI",
    description:
      "AI consulting, LLM integration, automation, and enterprise adoption strategies for modern teams.",
    href: "/generative-ai/",
    icon: Bot,
    image: "/images/service-ai.svg",
    accent: "from-[#EEFAF3] to-[#F8FFFB]",
  },
];

export const whyChooseUs = [
  { title: "AWS Expertise", description: "Certified cloud architects and engineers focused on AWS best practices." },
  { title: "Cloud Migration", description: "Structured migration planning with validation, rollback, and cutover support." },
  { title: "DevOps Automation", description: "CI/CD pipelines, IaC, and release governance for reliable delivery." },
  { title: "Security First", description: "Risk-aware design across IAM, network, monitoring, and compliance." },
  { title: "24×7 Monitoring", description: "Proactive observability, alerting, and incident response workflows." },
  { title: "Cost Optimization", description: "FinOps reviews, rightsizing, and spend governance for cloud efficiency." },
  { title: "Enterprise Support", description: "Dedicated consulting for decision-makers and technical teams." },
  { title: "Professional Consulting", description: "Clear documentation, practical roadmaps, and accountable delivery." },
];
