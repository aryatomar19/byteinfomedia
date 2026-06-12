import type { LucideIcon } from "lucide-react";
import {
  CloudCog,
  Eye,
  Globe,
  Headphones,
  Megaphone,
  ShieldCheck,
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
  whyChooseDescription:
    "From cloud infrastructure and security to DevOps, websites, SEO, and digital marketing — BYTEINFOMEDIA delivers integrated technology and growth services for modern businesses.",
  whyChoose: [
    {
      title: "Cloud Consulting",
      points: ["AWS & Azure Cloud Solutions", "Migration & Modernization"],
      icon: CloudCog,
    },
    {
      title: "Managed Services",
      points: ["24x7 Monitoring", "Backup & Incident Management"],
      icon: Headphones,
    },
    {
      title: "Cyber Security",
      points: ["Security Assessments", "Compliance & Protection"],
      icon: ShieldCheck,
    },
    {
      title: "DevOps Engineering",
      points: ["CI/CD Automation", "Infrastructure as Code"],
      icon: Workflow,
    },
    {
      title: "Website Development & SEO",
      points: ["Professional Websites", "Search Engine Optimization"],
      icon: Globe,
    },
    {
      title: "Digital Marketing",
      points: ["Social Media Marketing", "Content Marketing & Paid Campaigns"],
      icon: Megaphone,
    },
  ] satisfies { title: string; points: readonly string[]; icon: LucideIcon }[],
  expertise: [
    {
      title: "Cloud Consulting",
      description: "AWS & Azure Cloud Solutions · Migration & Modernization",
      icon: CloudCog,
      href: "/cloud-services/",
    },
    {
      title: "Managed Services",
      description: "24x7 Monitoring · Backup & Incident Management",
      icon: Headphones,
      href: "/managed-services/",
    },
    {
      title: "Cyber Security",
      description: "Security Assessments · Compliance & Protection",
      icon: ShieldCheck,
      href: "/cyber-security/",
    },
    {
      title: "DevOps Engineering",
      description: "CI/CD Automation · Infrastructure as Code",
      icon: Workflow,
      href: "/cloud-services/",
    },
    {
      title: "Website Development & SEO",
      description: "Professional Websites · Search Engine Optimization",
      icon: Globe,
      href: "/website-development/",
    },
    {
      title: "Digital Marketing",
      description: "Social Media Marketing · Content Marketing & Paid Campaigns",
      icon: Megaphone,
      href: "/social-media-marketing/",
    },
  ] satisfies { title: string; description: string; icon: LucideIcon; href: string }[],
  missionIcon: Target,
  visionIcon: Eye,
};
