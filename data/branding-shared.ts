import type { BrandingValueItem } from "@/data/branding-service-types";

export const defaultWhyChoose = [
  {
    title: "Proven Expertise",
    description: "Consultants with deep experience across digital marketing, content, and web delivery.",
    icon: "award" as const,
  },
  {
    title: "Dedicated Support",
    description: "Responsive account management and clear communication throughout every engagement.",
    icon: "headphones" as const,
  },
  {
    title: "Proven Process",
    description: "Structured discovery, execution, and reporting so you always know what comes next.",
    icon: "workflow" as const,
  },
  {
    title: "Cost-Effective Solutions",
    description: "Right-sized packages that balance quality, speed, and budget for growing businesses.",
    icon: "wallet" as const,
  },
  {
    title: "Results-Driven Approach",
    description: "KPIs, analytics, and optimization cycles tied to leads, traffic, and revenue goals.",
    icon: "target" as const,
  },
  {
    title: "Experienced Consultants",
    description: "Cross-functional specialists in design, SEO, content, and social working as one team.",
    icon: "users" as const,
  },
] satisfies BrandingValueItem[];

export const defaultBenefits = [
  {
    title: "Business Growth",
    description: "Expand reach and revenue with digital channels built for sustainable scale.",
    icon: "target" as const,
  },
  {
    title: "Lead Generation",
    description: "Capture qualified prospects through optimized pages, content, and campaigns.",
    icon: "users" as const,
  },
  {
    title: "Brand Visibility",
    description: "Strengthen recognition across search, social, and owned media touchpoints.",
    icon: "award" as const,
  },
  {
    title: "Customer Engagement",
    description: "Build trust with audiences through consistent messaging and valuable content.",
    icon: "headphones" as const,
  },
  {
    title: "ROI Improvement",
    description: "Measure performance and reinvest in tactics that deliver measurable returns.",
    icon: "wallet" as const,
  },
  {
    title: "Competitive Advantage",
    description: "Outperform competitors with faster sites, stronger SEO, and sharper creative.",
    icon: "workflow" as const,
  },
] satisfies BrandingValueItem[];
