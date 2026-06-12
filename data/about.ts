import type { LucideIcon } from "lucide-react";
import {
  CloudCog,
  Eye,
  Globe,
  Headphones,
  Megaphone,
  Search,
  ShieldCheck,
  Target,
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
    "BYTEINFOMEDIA delivers cloud consulting, managed services, cybersecurity, website development, SEO, and digital marketing solutions that help modern businesses grow with confidence.",
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
      title: "Website Development",
      points: ["Custom Business Websites", "Landing Pages & Enterprise Solutions"],
      icon: Globe,
    },
    {
      title: "Search Engine Optimization (SEO)",
      points: ["Organic Search Growth", "Technical & On-Page SEO"],
      icon: Search,
    },
    {
      title: "Digital Marketing",
      points: ["Social Media Marketing", "Content Marketing & Paid Campaigns"],
      icon: Megaphone,
    },
  ] satisfies { title: string; points: readonly string[]; icon: LucideIcon }[],
  missionIcon: Target,
  visionIcon: Eye,
};
