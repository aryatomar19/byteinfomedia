import type { FaqItem } from "@/data/service-page-types";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Globe,
  Mail,
  Megaphone,
  Search,
  Share2,
} from "lucide-react";

const img = "/images/branding/content-writing";

export type ContentWritingService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ContentWritingWhyCard = {
  title: string;
  description: string;
};

export type ContentWritingProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type ContentJourneyStage = {
  stage: string;
  items: string[];
};

export const contentWritingPage = {
  hero: {
    title: "Content That Connects, Engages & Converts",
    description:
      "Professional content writing services that strengthen your brand, improve search visibility, and turn visitors into customers.",
    image: `${img}/hero.jpg`,
    imageAlt: "Content writers collaborating on website and marketing copy",
    highlights: ["SEO-Friendly Content", "Industry-Specific Writers", "Conversion-Focused Copy"],
    primaryCta: "Request Content Strategy",
    secondaryCta: "Get a Free Quote",
  },
  services: {
    title: "Content Tailored to Your Business Goals",
    items: [
      {
        title: "Website Content",
        description: "Clear, compelling copy for homepages, service pages, and core brand messaging.",
        icon: Globe,
      },
      {
        title: "Blog & Article Writing",
        description: "Research-backed articles that build authority and attract organic traffic.",
        icon: BookOpen,
      },
      {
        title: "SEO Content Writing",
        description: "Keyword-informed content designed to rank and convert search visitors.",
        icon: Search,
      },
      {
        title: "Marketing & Ad Copy",
        description: "Persuasive campaign copy for ads, landing pages, and promotional assets.",
        icon: Megaphone,
      },
      {
        title: "Email Content",
        description: "Engaging newsletters, nurture sequences, and email campaigns that drive action.",
        icon: Mail,
      },
      {
        title: "Social Media Content",
        description: "On-brand posts and captions tailored for engagement across social platforms.",
        icon: Share2,
      },
    ] satisfies ContentWritingService[],
  },
  whyContent: {
    title: "More Than Just Words",
    items: [
      {
        title: "Build Brand Authority",
        description: "Establish trust with your audience.",
      },
      {
        title: "Improve SEO Rankings",
        description: "Rank higher with optimized content.",
      },
      {
        title: "Increase Engagement",
        description: "Keep visitors interested and informed.",
      },
      {
        title: "Generate More Leads",
        description: "Guide readers toward action.",
      },
    ] satisfies ContentWritingWhyCard[],
  },
  process: {
    title: "From Research to Results",
    steps: [
      { step: 1, title: "Research", description: "Audience & Market Research" },
      { step: 2, title: "Strategy", description: "Content Planning" },
      { step: 3, title: "Writing", description: "High-Quality Content Creation" },
      { step: 4, title: "Review", description: "Editing & Quality Check" },
      { step: 5, title: "Optimization", description: "SEO & Performance Enhancement" },
      { step: 6, title: "Publish", description: "Distribution & Performance Tracking" },
    ] satisfies ContentWritingProcessStep[],
  },
  contentTypes: {
    title: "Content for Every Stage of the Customer Journey",
    stages: [
      {
        stage: "Awareness",
        items: ["Blogs", "Articles", "Social Posts"],
      },
      {
        stage: "Consideration",
        items: ["Case Studies", "Guides", "Email Campaigns"],
      },
      {
        stage: "Conversion",
        items: ["Landing Pages", "Sales Copy", "Product Descriptions"],
      },
    ] satisfies ContentJourneyStage[],
  },
  whyChoose: {
    title: "Content That Delivers Business Results",
    features: [
      "Experienced Writers",
      "SEO-Optimized Content",
      "Industry Research",
      "Original & Plagiarism-Free",
      "Consistent Brand Voice",
      "Fast Turnaround Time",
    ],
    illustration: `${img}/showcase.jpg`,
    illustrationAlt: "Content marketing team planning editorial strategy",
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What industries do you write for?",
        answer:
          "We write for B2B technology, cloud services, cybersecurity, healthcare, e-commerce, professional services, and other industries requiring clear, credible messaging.",
      },
      {
        question: "Is the content SEO optimized?",
        answer:
          "Yes. Our writers incorporate keyword research, search intent, meta elements, and on-page best practices to help your content rank and convert.",
      },
      {
        question: "Do you provide blog writing services?",
        answer:
          "Yes. We offer ongoing blog programs, editorial calendars, topic research, and long-form articles tailored to your audience and business goals.",
      },
      {
        question: "How do you ensure originality?",
        answer:
          "Every piece is written from scratch, reviewed for quality, and checked with plagiarism detection tools before delivery to ensure unique, original content.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    title: "Ready to Tell Your Story Better?",
    description:
      "Let our content experts create compelling content that attracts, engages, and converts your audience.",
    primaryLabel: "Get Started Today",
    secondaryLabel: "Talk to a Content Expert",
  },
};
