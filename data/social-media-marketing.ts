import type { BrandingServicePageData } from "@/data/branding-service-types";
import { defaultBenefits, defaultWhyChoose } from "@/data/branding-shared";

const img = "/images/branding/social-media";

export const socialMediaMarketingPage: BrandingServicePageData = {
  slug: "social-media-marketing",
  badge: "Branding Solutions",
  hero: {
    title: "Social Media Marketing",
    description:
      "Strategic Facebook, Instagram, and LinkedIn programs—organic and paid—that grow brand awareness, engage audiences, and generate qualified leads.",
    image: `${img}/hero.jpg`,
    imageAlt: "Social media marketing team planning brand campaigns",
  },
  overview: {
    title: "Turn Social Channels Into Growth Engines",
    description:
      "We design social strategies rooted in your brand positioning and buyer personas. From content calendars and creative production to paid campaigns and community engagement, BYTEINFOMEDIA helps you show up consistently where your customers already spend time.",
    businessBenefits: [
      "Expand reach with platform-specific content and ad formats",
      "Humanize your brand through authentic storytelling and engagement",
      "Retarget website visitors and nurture warm audiences",
      "Generate leads with gated offers and conversion-focused creatives",
      "Measure ROI with clear reporting on reach, engagement, and conversions",
    ],
    useCases: [
      "B2B LinkedIn thought leadership and lead gen",
      "Instagram brand building for consumer and lifestyle brands",
      "Facebook ads for local and regional service businesses",
      "Product launch teasers and announcement campaigns",
      "Employer branding and recruitment marketing",
      "Always-on social retainers for marketing teams",
    ],
  },
  features: [
    { title: "Facebook Marketing", description: "Page management, community engagement, and Meta ad campaigns.", icon: "facebook" },
    { title: "Instagram Marketing", description: "Reels, stories, and feed creative that showcase your brand.", icon: "instagram" },
    { title: "LinkedIn Marketing", description: "Company pages, executive posts, and B2B lead-generation ads.", icon: "linkedin" },
    { title: "Brand Awareness", description: "Consistent visual identity and messaging across platforms.", icon: "sparkles" },
    { title: "Audience Engagement", description: "Community management, polls, and conversation-driven content.", icon: "users" },
    { title: "Paid Campaigns", description: "Targeting, budgeting, A/B tests, and conversion tracking.", icon: "target" },
    { title: "Social Media Strategy", description: "Platform mix, cadence, and KPIs aligned to business goals.", icon: "barChart" },
    { title: "Creative Production", description: "Graphics, short-form video briefs, and ad copy variations.", icon: "layout" },
  ],
  offerings: [
    { title: "Facebook Marketing", description: "Organic posts plus paid campaigns optimized for your objectives.", image: `${img}/facebook.jpg`, imageAlt: "Facebook social media marketing on mobile device" },
    { title: "Instagram Marketing", description: "Visual storytelling and influencer-ready creative assets.", image: `${img}/instagram.jpg`, imageAlt: "Instagram content creation and social branding" },
    { title: "LinkedIn Marketing", description: "Professional content and ads that reach decision-makers.", image: `${img}/linkedin.jpg`, imageAlt: "LinkedIn B2B social media marketing strategy" },
    { title: "Brand Awareness", description: "Campaigns that introduce your value proposition to new audiences.", image: `${img}/brand.jpg`, imageAlt: "Brand awareness creative planning session" },
    { title: "Audience Engagement", description: "Two-way communication that builds loyalty and trust.", image: `${img}/engagement.jpg`, imageAlt: "Social media engagement and community management" },
    { title: "Paid Campaigns", description: "Full-funnel ad sets with ongoing optimization and reporting.", image: `${img}/paid.jpg`, imageAlt: "Paid social media advertising performance review" },
  ],
  whyChoose: defaultWhyChoose,
  benefits: defaultBenefits,
  showcase: {
    image: `${img}/showcase.jpg`,
    imageAlt: "Marketing team collaborating on social media strategy",
    title: "Social Programs Aligned With Your Funnel",
    description:
      "We connect social activity to landing pages, forms, and CRM follow-up so marketing leaders can attribute impact beyond vanity metrics.",
  },
  cta: {
    title: "Ready to Grow on Social Media?",
    description: "Book a consultation to review your channels and get a tailored social media growth plan.",
  },
};
