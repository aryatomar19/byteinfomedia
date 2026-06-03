import type { BrandingValueItem } from "@/data/branding-service-types";

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
