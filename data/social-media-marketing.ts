import type { FaqItem } from "@/data/service-page-types";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Calendar,
  Heart,
  Megaphone,
  MessageCircle,
  Palette,
  Rocket,
  Smartphone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const img = "/images/branding/social-media";

export type SocialMediaService = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SocialMediaProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type SocialMediaKpi = {
  title: string;
  icon: LucideIcon;
};

export const socialMediaMarketingPage = {
  hero: {
    title: "Grow Your Brand Through Social Media",
    description:
      "Reach the right audience, increase engagement, and drive business growth with strategic social media marketing.",
    image: `${img}/hero.jpg`,
    imageAlt: "Social media marketing team planning brand campaigns",
    highlights: ["Increased Brand Visibility", "Audience Engagement", "Lead Generation"],
    primaryCta: "Get Free Social Media Audit",
    secondaryCta: "Schedule a Consultation",
  },
  services: {
    title: "Complete Social Media Marketing Solutions",
    items: [
      {
        title: "Social Media Strategy",
        description: "Custom roadmaps aligned with your brand goals, audience, and growth objectives.",
        icon: Smartphone,
      },
      {
        title: "Content Creation & Design",
        description: "Eye-catching posts, reels, and creatives that reflect your brand identity.",
        icon: Palette,
      },
      {
        title: "Social Media Management",
        description: "Consistent publishing, scheduling, and channel management across platforms.",
        icon: Calendar,
      },
      {
        title: "Paid Social Advertising",
        description: "Targeted ad campaigns optimized for reach, leads, and conversions.",
        icon: Megaphone,
      },
      {
        title: "Community Management",
        description: "Active engagement, comment moderation, and relationship building with followers.",
        icon: Users,
      },
      {
        title: "Analytics & Performance Reporting",
        description: "Transparent metrics and insights to track growth and ROI.",
        icon: BarChart3,
      },
    ] satisfies SocialMediaService[],
  },
  platforms: {
    title: "Reach Customers Where They Spend Their Time",
    items: ["Facebook", "Instagram", "LinkedIn", "YouTube", "X"],
  },
  process: {
    title: "A Data-Driven Approach to Growth",
    steps: [
      {
        step: 1,
        title: "Research",
        description: "Understand your audience and competitors.",
      },
      {
        step: 2,
        title: "Strategy",
        description: "Create a custom social media roadmap.",
      },
      {
        step: 3,
        title: "Content",
        description: "Design engaging posts and campaigns.",
      },
      {
        step: 4,
        title: "Publish",
        description: "Share content across the right channels.",
      },
      {
        step: 5,
        title: "Engage",
        description: "Maintain consistent brand communication.",
      },
      {
        step: 6,
        title: "Optimize",
        description: "Track results and improve performance.",
      },
    ] satisfies SocialMediaProcessStep[],
  },
  results: {
    title: "Results That Matter",
    items: [
      { title: "Increased Brand Awareness", icon: TrendingUp },
      { title: "Higher Audience Engagement", icon: MessageCircle },
      { title: "Quality Lead Generation", icon: Target },
      { title: "Improved Website Traffic", icon: Rocket },
      { title: "Stronger Customer Relationships", icon: Heart },
      { title: "Measurable ROI", icon: BarChart3 },
    ] satisfies SocialMediaKpi[],
  },
  whyChoose: {
    title: "Your Social Media Growth Partner",
    features: [
      "Creative Content Team",
      "Platform-Specific Strategies",
      "Paid & Organic Marketing Expertise",
      "Consistent Brand Messaging",
      "Detailed Performance Reports",
      "Dedicated Account Management",
    ],
    illustration: `${img}/showcase.jpg`,
    illustrationAlt: "Professional marketing team discussing social media strategy in a modern office",
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Which social media platforms should my business use?",
        answer:
          "The right platforms depend on your audience and goals. B2B brands often prioritize LinkedIn, while visual and consumer brands thrive on Instagram and Facebook. We recommend a tailored mix based on research.",
      },
      {
        question: "Do you create content and graphics?",
        answer:
          "Yes. Our team produces posts, stories, reels briefs, ad creatives, and branded graphics aligned with your visual identity and campaign objectives.",
      },
      {
        question: "Can you manage paid social media campaigns?",
        answer:
          "Yes. We plan, launch, and optimize paid campaigns on Meta, LinkedIn, and other platforms with targeting, budgeting, and conversion tracking.",
      },
      {
        question: "How do you measure campaign success?",
        answer:
          "We track reach, engagement, clicks, leads, conversions, and ROI using platform analytics and reporting dashboards tailored to your KPIs.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    title: "Ready to Grow Your Social Presence?",
    description:
      "Let's create a social media strategy that increases visibility, engagement, and business growth.",
    primaryLabel: "Start Your Campaign",
    secondaryLabel: "Talk to a Social Media Expert",
  },
};
