import type { BrandingServicePageData } from "@/data/branding-service-types";
import { defaultBenefits, defaultWhyChoose } from "@/data/branding-shared";

const img = "/images/branding/seo";

export const searchEngineOptimizationPage: BrandingServicePageData = {
  slug: "search-engine-optimization",
  badge: "Branding Solutions",
  hero: {
    title: "Search Engine Optimization (SEO)",
    description:
      "Technical SEO, on-page optimization, keyword strategy, and local search programs that increase organic visibility, qualified traffic, and long-term growth.",
    image: `${img}/hero.jpg`,
    imageAlt: "SEO specialists analyzing search rankings and organic growth metrics",
  },
  overview: {
    title: "Grow Organic Traffic With Data-Led SEO",
    description:
      "Our SEO consultants audit your site, fix technical blockers, and build content strategies aligned with how your buyers search. We focus on sustainable rankings—not shortcuts—so your brand earns visibility on Google and other search engines while supporting sales and marketing goals.",
    businessBenefits: [
      "Increase qualified organic traffic without rising ad spend",
      "Improve discoverability for high-intent product and service keywords",
      "Strengthen domain authority with ethical off-page practices",
      "Align content and landing pages with buyer search journeys",
      "Track rankings, clicks, and conversions with transparent reporting",
    ],
    useCases: [
      "New website SEO foundations and migrations",
      "Local SEO for multi-location businesses",
      "B2B service and SaaS keyword programs",
      "E-commerce category and product optimization",
      "Competitive gap analysis and content roadmaps",
      "Ongoing SEO retainers for marketing teams",
    ],
  },
  features: [
    { title: "Technical SEO", description: "Crawlability, indexing, schema, site speed, and architecture fixes.", icon: "code" },
    { title: "On-Page SEO", description: "Titles, meta descriptions, headings, and internal linking optimization.", icon: "fileText" },
    { title: "Off-Page SEO", description: "Authority building through ethical outreach and digital PR.", icon: "link" },
    { title: "Keyword Research", description: "Search intent mapping and priority keyword portfolios.", icon: "key" },
    { title: "Local SEO", description: "Google Business Profile, citations, and geo-targeted landing pages.", icon: "mapPin" },
    { title: "SEO Audits", description: "Comprehensive site reviews with prioritized remediation plans.", icon: "clipboard" },
    { title: "Organic Growth Strategy", description: "Editorial calendars and content clusters for sustained visibility.", icon: "trending" },
    { title: "Analytics & Reporting", description: "Search Console, GA4, and ranking dashboards for stakeholders.", icon: "barChart" },
  ],
  offerings: [
    { title: "Technical SEO", description: "Resolve crawl errors, Core Web Vitals issues, and indexation gaps.", image: `${img}/technical.jpg`, imageAlt: "Technical SEO audit on website infrastructure" },
    { title: "On-Page SEO", description: "Optimize pages for relevance, readability, and conversion.", image: `${img}/onpage.jpg`, imageAlt: "On-page SEO content optimization workflow" },
    { title: "Off-Page SEO", description: "Earn links and mentions that strengthen domain trust.", image: `${img}/offpage.jpg`, imageAlt: "Digital marketing team discussing link-building strategy" },
    { title: "Keyword Research", description: "Identify winnable terms aligned with revenue goals.", image: `${img}/keywords.jpg`, imageAlt: "Keyword research and search analytics on screen" },
    { title: "Local SEO", description: "Dominate map pack and local queries in your service areas.", image: `${img}/local.jpg`, imageAlt: "Local SEO and location-based search marketing" },
    { title: "SEO Audits", description: "Baseline assessments with clear quick wins and long-term plays.", image: `${img}/audit.jpg`, imageAlt: "SEO performance dashboard with traffic trends" },
  ],
  whyChoose: defaultWhyChoose,
  benefits: defaultBenefits,
  showcase: {
    image: `${img}/showcase.jpg`,
    imageAlt: "Marketing team reviewing SEO growth and analytics",
    title: "SEO Built for Business Outcomes",
    description:
      "We connect search performance to pipeline metrics so leadership sees how organic channels contribute to leads, demos, and revenue—not just rankings.",
  },
  cta: {
    title: "Ready to Improve Your Search Rankings?",
    description: "Request an SEO assessment and receive a prioritized plan for technical fixes, content, and growth opportunities.",
  },
};
