import type { FaqItem } from "@/data/service-page-types";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Globe,
  LayoutTemplate,
  RefreshCw,
  ShoppingCart,
  Wrench,
} from "lucide-react";

const img = "/images/branding/website-development";

export type WebsiteDevelopmentOffering = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type WebsiteDevelopmentProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type WebsiteDevelopmentProject = {
  title: string;
  industry: string;
  result: string;
  image: string;
  imageAlt: string;
};

export const websiteDevelopmentPage = {
  hero: {
    badge: "BRANDING SOLUTIONS",
    title: "Build a Website That Grows Your Business",
    description:
      "Custom, responsive, and SEO-friendly websites designed to attract customers and drive results.",
    image: `${img}/hero.jpg`,
    imageAlt: "Modern website development across laptop, desktop, and mobile devices",
  },
  offerings: {
    title: "Complete Website Development Solutions",
    items: [
      {
        title: "Business Websites",
        description: "Professional company sites that establish credibility and convert visitors into leads.",
        icon: Globe,
      },
      {
        title: "E-commerce Stores",
        description: "Online storefronts with product catalogs, secure checkout, and sales-focused UX.",
        icon: ShoppingCart,
      },
      {
        title: "Custom Web Applications",
        description: "Tailored portals, dashboards, and workflow tools built for your business needs.",
        icon: Code2,
      },
      {
        title: "WordPress Development",
        description: "Flexible, easy-to-manage WordPress sites with custom themes and plugin integration.",
        icon: LayoutTemplate,
      },
      {
        title: "Website Redesign",
        description: "Modernize outdated websites with refreshed design, improved UX, and better performance.",
        icon: RefreshCw,
      },
      {
        title: "Website Maintenance",
        description: "Ongoing updates, security patches, backups, and performance monitoring for peace of mind.",
        icon: Wrench,
      },
    ] satisfies WebsiteDevelopmentOffering[],
  },
  whyChoose: {
    title: "Your Trusted Technology Partner",
    features: [
      "Mobile-First Design",
      "SEO-Optimized Structure",
      "Fast Loading Performance",
      "Secure Development",
      "Scalable Solutions",
      "Dedicated Support",
    ],
    highlight: {
      experience: "20+ Years of Industry Experience",
      projects: "1200+ Projects Delivered",
    },
  },
  process: {
    title: "Simple & Transparent Development Journey",
    steps: [
      {
        step: 1,
        title: "Discovery",
        description: "Understanding your business goals and requirements.",
      },
      {
        step: 2,
        title: "Design",
        description: "Creating intuitive and engaging user experiences.",
      },
      {
        step: 3,
        title: "Development",
        description: "Building secure and scalable solutions.",
      },
      {
        step: 4,
        title: "Testing",
        description: "Ensuring quality, speed, and reliability.",
      },
      {
        step: 5,
        title: "Launch",
        description: "Deploying your website for maximum impact.",
      },
    ] satisfies WebsiteDevelopmentProcessStep[],
  },
  recentWork: {
    title: "Websites We've Built",
    projects: [
      {
        title: "Healthcare Portal",
        industry: "Healthcare",
        result: "+40% Online Appointments",
        image: `${img}/corporate.jpg`,
        imageAlt: "Healthcare portal website project",
      },
      {
        title: "E-commerce Store",
        industry: "E-commerce",
        result: "+65% Online Sales",
        image: `${img}/ecommerce.jpg`,
        imageAlt: "E-commerce store website project",
      },
      {
        title: "Corporate Website",
        industry: "Corporate",
        result: "Improved Lead Generation",
        image: `${img}/landing.jpg`,
        imageAlt: "Corporate business website project",
      },
    ] satisfies WebsiteDevelopmentProject[],
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How long does website development take?",
        answer:
          "Most business websites take 4–8 weeks from discovery to launch. E-commerce and custom web applications typically require 8–12 weeks depending on complexity, integrations, and content readiness.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes. Every website we build follows a mobile-first approach, ensuring responsive layouts, touch-friendly navigation, and consistent performance across phones, tablets, and desktops.",
      },
      {
        question: "Do you provide SEO optimization?",
        answer:
          "Yes. We implement SEO-friendly structure, clean URLs, meta tags, schema markup, fast load times, and technical foundations that help search engines index and rank your site effectively.",
      },
      {
        question: "Do you offer post-launch support?",
        answer:
          "Yes. We provide website maintenance, security updates, performance monitoring, content updates, and dedicated support packages to keep your site secure, fast, and up to date after launch.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    title: "Ready to Launch Your New Website?",
    description:
      "Let's build a fast, secure, and professional website that helps your business grow.",
    primaryLabel: "Request a Quote",
    secondaryLabel: "Schedule a Call",
  },
};
