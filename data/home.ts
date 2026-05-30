import { Bot, Cloud, Server, Shield } from "lucide-react";

export const homeHero = {
  headline: "Secure AWS Cloud, DevOps & Cybersecurity Solutions for Modern Businesses",
  description:
    "BYTEINFOMEDIA helps organizations migrate, modernize, automate, secure and manage cloud infrastructure through enterprise-grade consulting and managed services.",
  primaryCta: { label: "Book Consultation", href: "#assessment" },
  secondaryCta: { label: "Request Free Assessment", href: "#assessment" },
  trustBadges: [
    "AWS-focused expertise",
    "Enterprise SLAs",
    "24×7 managed ops",
    "Security-first delivery",
    "FinOps certified",
  ],
};

export const aboutPreview = {
  eyebrow: "Who We Are",
  title: "Your strategic cloud & security partner",
  paragraphs: [
    "At BYTEINFOMEDIA, we deliver reliable, modern technology solutions that help enterprises grow in a digital world. Our consultants specialize in AWS cloud, DevOps automation, cybersecurity, and generative AI.",
    "We build long-term partnerships through scalable, secure, and tailored solutions — backed by architecture-first consulting and accountable delivery.",
  ],
  mission:
    "Empower enterprises with secure, scalable cloud platforms that accelerate innovation without compromising governance.",
  vision:
    "Be the most trusted AWS, DevOps, security, and AI consulting partner for enterprises across India and global markets.",
  cta: { label: "Learn More", href: "/about-us/" },
};

export const serviceOverview = [
  {
    title: "Cloud Services",
    description:
      "AWS consulting, migration, landing zones, FinOps, Kubernetes, and cloud-native modernization for enterprise workloads.",
    href: "/cloud-services/",
    icon: Cloud,
    image: "/images/service-cloud.svg",
    gradient: "from-[#1a3a6e] via-[#0f2440] to-[#0a0f1c]",
    benefits: ["AWS Well-Architected", "Migration at scale", "FinOps governance"],
  },
  {
    title: "Managed Services",
    description:
      "24×7 NOC monitoring, incident management, patching, backup validation, and ongoing cloud operations.",
    href: "/managed-services/",
    icon: Server,
    image: "/images/service-managed.svg",
    gradient: "from-[#1e3a2f] via-[#0f2820] to-[#0a0f1c]",
    benefits: ["24×7 coverage", "<15m P1 response", "99.95% SLA"],
  },
  {
    title: "Cyber Security",
    description:
      "SOC-aligned security operations, assessments, compliance, threat detection, and cloud hardening.",
    href: "/cyber-security/",
    icon: Shield,
    image: "/images/service-security.svg",
    gradient: "from-[#2d1f4e] via-[#1a1230] to-[#0a0f1c]",
    benefits: ["VAPT & pen testing", "SIEM monitoring", "Compliance ready"],
  },
  {
    title: "Generative AI",
    description:
      "AI strategy, LLM integration, RAG knowledge bases, chatbots, and enterprise automation with governance.",
    href: "/generative-ai/",
    icon: Bot,
    image: "/images/service-ai.svg",
    gradient: "from-[#1a3d4a] via-[#0f2830] to-[#0a0f1c]",
    benefits: ["LLM integration", "RAG at scale", "AI governance"],
  },
];

export const whyChooseUs = [
  { title: "AWS Expertise", description: "Certified architects for Well-Architected, migration, and modernization.", icon: "aws" },
  { title: "Cloud Migration", description: "Phased waves with validation, rollback, and executive reporting.", icon: "migrate" },
  { title: "DevOps Automation", description: "CI/CD, IaC, GitOps, and platform engineering at scale.", icon: "devops" },
  { title: "Security First", description: "Zero-trust patterns, IAM, WAF, and continuous monitoring.", icon: "security" },
  { title: "24×7 Monitoring", description: "NOC operations with proactive alerting and incident response.", icon: "noc" },
  { title: "Cost Optimization", description: "FinOps dashboards, rightsizing, and spend governance.", icon: "finops" },
  { title: "Enterprise Support", description: "Dedicated leads, SLAs, and monthly service reviews.", icon: "support" },
  { title: "Professional Consulting", description: "Clear roadmaps, documentation, and measurable outcomes.", icon: "consult" },
];
