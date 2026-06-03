import type { BrandingServicePageData } from "@/data/branding-service-types";
import { defaultBenefits } from "@/data/branding-shared";

const img = "/images/branding/content-writing";

export const contentWritingPage: BrandingServicePageData = {
  slug: "content-writing",
  badge: "Branding Solutions",
  hero: {
    title: "Professional Content Writing",
    description:
      "Website copy, blogs, technical documentation, product descriptions, and SEO content crafted to educate buyers, build trust, and drive action.",
    image: `${img}/hero.jpg`,
    imageAlt: "Content writers collaborating on website and marketing copy",
  },
  overview: {
    title: "Content That Builds Authority and Converts",
    description:
      "BYTEINFOMEDIA produces clear, on-brand content for every stage of the buyer journey. Our writers work with your subject-matter experts to translate complex offerings into compelling narratives—optimized for search, structured for readability, and aligned with your tone of voice.",
    businessBenefits: [
      "Publish consistent, high-quality content without overloading internal teams",
      "Improve SEO with keyword-informed articles and landing page copy",
      "Accelerate sales cycles with case studies, whitepapers, and product messaging",
      "Maintain brand voice across web, email, and social channels",
      "Scale content production with editorial calendars and review workflows",
    ],
    useCases: [
      "Website copy for new launches and redesigns",
      "Weekly or monthly blog programs",
      "Technical guides and solution documentation",
      "E-commerce product and category descriptions",
      "Email nurture and newsletter content",
      "Thought leadership for executives and founders",
    ],
  },
  features: [
    { title: "Website Content", description: "Homepage, service, and about copy that communicates value fast.", icon: "globe" },
    { title: "Blog Writing", description: "Research-backed articles that attract traffic and nurture leads.", icon: "book" },
    { title: "Technical Writing", description: "Documentation, how-tos, and solution briefs for technical buyers.", icon: "fileCode" },
    { title: "Product Descriptions", description: "Persuasive copy for catalogs, marketplaces, and product pages.", icon: "package" },
    { title: "SEO Content", description: "Search-optimized pages and posts mapped to intent and keywords.", icon: "search" },
    { title: "Marketing Copywriting", description: "Ads, landing pages, emails, and campaign messaging.", icon: "megaphone" },
    { title: "Editorial Planning", description: "Content calendars aligned with campaigns and product milestones.", icon: "clipboard" },
    { title: "Proofreading & QA", description: "Grammar, style, and fact-check reviews before publication.", icon: "pen" },
  ],
  offerings: [
    { title: "Website Content", description: "Conversion-focused copy for core pages and service lines.", image: `${img}/website-content.jpg`, imageAlt: "Professional writing website content on a laptop" },
    { title: "Blog Writing", description: "Long-form posts and series that establish topical authority.", image: `${img}/blog.jpg`, imageAlt: "Blog writing and content marketing workspace" },
    { title: "Technical Writing", description: "Clear explanations for APIs, platforms, and complex services.", image: `${img}/technical.jpg`, imageAlt: "Technical writer documenting software solutions" },
    { title: "Product Descriptions", description: "Benefit-led descriptions that help shoppers decide quickly.", image: `${img}/product.jpg`, imageAlt: "Product description and e-commerce copywriting" },
    { title: "SEO Content", description: "Keyword-targeted pages designed to rank and convert.", image: `${img}/seo-content.jpg`, imageAlt: "SEO content strategy and article planning" },
    { title: "Marketing Copywriting", description: "Campaign assets that align creative with measurable goals.", image: `${img}/marketing.jpg`, imageAlt: "Marketing team reviewing campaign copy and creative" },
  ],
  benefits: defaultBenefits,
  showcase: {
    image: `${img}/showcase.jpg`,
    imageAlt: "Content team workshop for brand messaging and editorial planning",
    title: "Writers Who Understand Technology and Business",
    description:
      "We blend marketing storytelling with technical accuracy—ideal for IT services, cloud, cybersecurity, and B2B brands that need credibility without jargon overload.",
  },
  cta: {
    title: "Need Content That Drives Results?",
    description: "Tell us about your audience and publishing goals—we will recommend a content plan and sample topics.",
  },
};
