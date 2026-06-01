import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CloudCog,
  Eye,
  Headphones,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const aboutPage = {
  hero: {
    badge: "ABOUT BYTEINFOMEDIA",
    titleLine1: "Transforming Cloud, Security & AI",
    titleLine2: "For Modern Businesses",
    description:
      "BYTEINFOMEDIA helps organizations modernize infrastructure, accelerate cloud adoption, strengthen cybersecurity, and implement scalable AI solutions.",
  },
  mission: {
    title: "Mission",
    body: "Enable organizations to build secure, scalable, and cost-efficient cloud platforms that support long-term business growth.",
  },
  vision: {
    title: "Vision",
    body: "Be the preferred technology partner for enterprises seeking trusted AWS, DevOps, security, and AI transformation.",
  },
  whyChoose: [
    {
      title: "Cloud & DevOps Expertise",
      description: "Architecture-led AWS delivery, automation, and platform engineering for enterprise scale.",
      icon: Workflow,
    },
    {
      title: "Security-First Architecture",
      description: "Risk reduction embedded across cloud design, IAM, networking, and operations.",
      icon: ShieldCheck,
    },
    {
      title: "Certified Consultants",
      description: "Experienced specialists aligned to AWS, DevOps, and cybersecurity best practices.",
      icon: BadgeCheck,
    },
    {
      title: "24×7 Managed Services",
      description: "Monitoring, incident response, patching, and backup validation when you need continuity.",
      icon: Headphones,
    },
    {
      title: "Transparent Delivery",
      description: "Clear roadmaps, direct consultant access, and measurable milestones throughout engagement.",
      icon: Target,
    },
    {
      title: "Business-Focused Solutions",
      description: "Technology decisions tied to outcomes — cost, speed, compliance, and reliability.",
      icon: CloudCog,
    },
  ] satisfies { title: string; description: string; icon: LucideIcon }[],
  expertise: [
    {
      title: "Cloud Consulting",
      description: "Landing zones, workload design, migration, modernization, and AWS governance.",
      icon: CloudCog,
      href: "/cloud-services/",
    },
    {
      title: "Managed Services",
      description: "Monitoring, patching, backup validation, and incident management.",
      icon: Headphones,
      href: "/managed-services/",
    },
    {
      title: "Cyber Security",
      description: "Assessments, hardening, compliance support, and security operations.",
      icon: ShieldCheck,
      href: "/cyber-security/",
    },
    {
      title: "DevOps Engineering",
      description: "CI/CD, infrastructure automation, release controls, and platform engineering.",
      icon: Workflow,
      href: "/cloud-services/",
    },
    {
      title: "Generative AI",
      description: "AI strategy, LLM integration, chatbots, and enterprise automation.",
      icon: Sparkles,
      href: "/generative-ai/",
    },
  ] satisfies { title: string; description: string; icon: LucideIcon; href: string }[],
  stats: [
    { value: "120+", numeric: 120, suffix: "+", label: "Projects Delivered" },
    { value: "45+", numeric: 45, suffix: "+", label: "Cloud Migrations" },
    { value: "80+", numeric: 80, suffix: "+", label: "Security Audits" },
    { value: "98%", numeric: 98, suffix: "%", label: "Customer Satisfaction" },
  ],
  missionIcon: Target,
  visionIcon: Eye,
};
