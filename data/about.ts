import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CloudCog,
  Eye,
  Headphones,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const aboutPage = {
  hero: {
    badge: "ABOUT BYTEINFOMEDIA",
    titleLine1: "Transforming Technology & Digital Growth",
    titleLine2: "For Modern Businesses",
    description:
      "BYTEINFOMEDIA helps organizations modernize cloud, DevOps, cybersecurity, and AI while driving website development, SEO, content writing, social media marketing, and digital marketing growth.",
  },
  heroImage: {
    src: "/images/about/hero-enterprise.jpg",
    alt: "Enterprise data center with server racks and blue lighting for cloud infrastructure operations",
  },
  mission: {
    title: "Mission",
    body: "Our mission is to empower businesses with reliable, secure, and scalable technology solutions. We simplify IT operations, optimize infrastructure, and drive digital growth through cloud, cybersecurity, and marketing services that let organizations focus on innovation.",
  },
  vision: {
    title: "Vision",
    body: "Our vision is to become a trusted partner for businesses worldwide by delivering technology transformation and digital growth solutions that create long-term value for our clients.",
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
      title: "Digital Growth Solutions",
      description: "SEO, website development, social media, and digital marketing programs that expand reach and generate qualified leads.",
      icon: Megaphone,
    },
    {
      title: "Business-Focused Solutions",
      description: "Technology and marketing decisions tied to outcomes — cost, speed, compliance, and revenue growth.",
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
    {
      title: "Digital Marketing",
      description: "SEO, website development, content marketing, social media management, paid campaigns, and online brand growth.",
      icon: Megaphone,
      href: "/social-media-marketing/",
    },
  ] satisfies { title: string; description: string; icon: LucideIcon; href: string }[],
  expertiseBanner: {
    src: "/images/about/expertise-enterprise.jpg",
    alt: "Enterprise cloud data center infrastructure for AWS, DevOps, and security operations",
  },
  missionIcon: Target,
  visionIcon: Eye,
};
