import type { FaqItem } from "@/data/service-page-types";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  FileText,
  Link2,
  MapPin,
  Search,
  Settings,
} from "lucide-react";

const img = "/images/branding/seo";

export type SeoService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SeoWhyCard = {
  title: string;
  description: string;
};

export type SeoProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const searchEngineOptimizationPage = {
  hero: {
    title: "Get Found on Google. Grow Organically.",
    description:
      "Increase your website visibility, attract qualified traffic, and generate more leads with data-driven SEO strategies.",
    image: `${img}/hero.jpg`,
    imageAlt: "SEO specialists analyzing search rankings and organic growth metrics",
    highlights: ["Higher Rankings", "More Organic Traffic", "Better Conversions"],
    primaryCta: "Get Free SEO Audit",
    secondaryCta: "Request Proposal",
  },
  services: {
    title: "Everything You Need to Rank Higher",
    items: [
      {
        title: "Keyword Research & Strategy",
        description: "Identify high-intent keywords and build a roadmap aligned with your business goals.",
        icon: Search,
      },
      {
        title: "Technical SEO",
        description: "Fix crawlability, indexing, site speed, and architecture issues holding back rankings.",
        icon: Settings,
      },
      {
        title: "On-Page SEO",
        description: "Optimize titles, headings, content, and internal links for relevance and conversions.",
        icon: FileText,
      },
      {
        title: "Link Building",
        description: "Earn authoritative backlinks that strengthen domain trust and search visibility.",
        icon: Link2,
      },
      {
        title: "Local SEO",
        description: "Improve map pack rankings, citations, and geo-targeted visibility for local customers.",
        icon: MapPin,
      },
      {
        title: "SEO Reporting & Analytics",
        description: "Track rankings, traffic, and conversions with transparent monthly performance reports.",
        icon: BarChart3,
      },
    ] satisfies SeoService[],
  },
  whySeo: {
    title: "Turn Searches Into Customers",
    items: [
      {
        title: "Increase Visibility",
        description: "Appear when customers search for your services.",
      },
      {
        title: "Drive Qualified Traffic",
        description: "Attract visitors actively looking for solutions.",
      },
      {
        title: "Build Authority",
        description: "Establish trust and credibility in your industry.",
      },
      {
        title: "Generate Long-Term Results",
        description: "Unlike ads, SEO continues delivering value over time.",
      },
    ] satisfies SeoWhyCard[],
  },
  process: {
    title: "A Proven Strategy for Sustainable Growth",
    steps: [
      {
        step: 1,
        title: "Audit",
        description: "Website & Competitor Analysis",
      },
      {
        step: 2,
        title: "Research",
        description: "Keyword Research",
      },
      {
        step: 3,
        title: "Optimize",
        description: "Technical Optimization",
      },
      {
        step: 4,
        title: "Create",
        description: "Content Enhancement",
      },
      {
        step: 5,
        title: "Build Authority",
        description: "Link Building",
      },
      {
        step: 6,
        title: "Report",
        description: "Performance Tracking",
      },
    ] satisfies SeoProcessStep[],
  },
  whyChoose: {
    title: "Your SEO Growth Partner",
    features: [
      "SEO Audit Report",
      "Keyword Opportunity Analysis",
      "On-Page Optimization",
      "Technical Fix Recommendations",
      "Monthly Performance Reports",
      "Continuous SEO Improvements",
    ],
    illustration: `${img}/showcase.jpg`,
    illustrationAlt: "SEO team reviewing search performance and growth strategy",
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How long does SEO take?",
        answer:
          "Most businesses begin seeing measurable improvements within 3–6 months. Competitive industries may take longer, but SEO builds compounding value that continues to grow over time.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No ethical SEO provider can guarantee specific rankings. We focus on proven strategies, transparent reporting, and sustainable growth that improves visibility, traffic, and conversions.",
      },
      {
        question: "What's included in monthly SEO services?",
        answer:
          "Monthly services typically include technical monitoring, on-page optimization, content recommendations, link-building outreach, local SEO updates, and detailed performance reports.",
      },
      {
        question: "Do you provide Local SEO?",
        answer:
          "Yes. We optimize Google Business Profiles, local citations, geo-targeted landing pages, and map pack visibility to help businesses attract nearby customers.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    title: "Ready to Rank Higher on Google?",
    description:
      "Let's create an SEO strategy that increases visibility, traffic, and revenue.",
    primaryLabel: "Get Free SEO Audit",
    secondaryLabel: "Talk to an SEO Expert",
  },
};
