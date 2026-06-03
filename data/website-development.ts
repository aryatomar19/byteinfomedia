import type { BrandingServicePageData } from "@/data/branding-service-types";
import { defaultBenefits } from "@/data/branding-shared";

const img = "/images/branding/website-development";

export const websiteDevelopmentPage: BrandingServicePageData = {
  slug: "website-development",
  badge: "Branding Solutions",
  hero: {
    title: "Professional Website Development",
    description:
      "Custom corporate websites, high-converting landing pages, e-commerce stores, and enterprise web applications engineered for performance, security, and growth.",
    image: `${img}/hero.jpg`,
    imageAlt: "Professional web development team collaborating on a business website project",
  },
  overview: {
    title: "Build a Digital Presence That Converts",
    description:
      "BYTEINFOMEDIA designs and develops modern websites that reflect your brand, engage visitors, and support measurable business outcomes. From marketing sites to complex web applications, we combine UX strategy, responsive engineering, and performance optimization so your digital storefront works as hard as your sales team.",
    businessBenefits: [
      "Establish credibility with a polished, mobile-first web presence",
      "Increase conversions with clear information architecture and CTAs",
      "Reduce maintenance overhead with scalable, standards-based code",
      "Improve search visibility with technical SEO foundations built in",
      "Launch faster with structured discovery, design, and delivery phases",
    ],
    useCases: [
      "Corporate and company profile websites",
      "Product launch and campaign landing pages",
      "B2B lead-generation funnels",
      "E-commerce and catalog storefronts",
      "Customer portals and lightweight web applications",
      "Website redesigns and platform migrations",
    ],
  },
  features: [
    { title: "Corporate Websites", description: "Brand-aligned sites with clear messaging, service pages, and lead capture.", icon: "globe" },
    { title: "Landing Pages", description: "Focused pages optimized for campaigns, ads, and conversion goals.", icon: "layout" },
    { title: "E-Commerce", description: "Product catalogs, checkout flows, and integrations for online sales.", icon: "shopping" },
    { title: "Web Applications", description: "Custom dashboards, portals, and workflow tools for your teams.", icon: "code" },
    { title: "Responsive Design", description: "Flawless experiences across desktop, tablet, and mobile devices.", icon: "smartphone" },
    { title: "Performance Optimization", description: "Fast load times, Core Web Vitals, and caching best practices.", icon: "gauge" },
    { title: "UX Strategy", description: "Wireframes and user journeys that reduce friction and improve engagement.", icon: "target" },
    { title: "Secure Deployment", description: "HTTPS, hardened hosting, and release practices for production reliability.", icon: "sparkles" },
  ],
  offerings: [
    { title: "Corporate Websites", description: "Executive-ready company sites with service pages, case studies, and contact flows.", image: `${img}/corporate.jpg`, imageAlt: "Corporate business website design on laptop" },
    { title: "Landing Pages", description: "Campaign-specific pages built to maximize clicks, sign-ups, and demo requests.", image: `${img}/landing.jpg`, imageAlt: "Marketing landing page design on mobile and desktop" },
    { title: "E-Commerce Websites", description: "Online stores with product management, payments, and order workflows.", image: `${img}/ecommerce.jpg`, imageAlt: "E-commerce website checkout and product browsing" },
    { title: "Web Applications", description: "Custom tools for clients, partners, or internal teams with role-based access.", image: `${img}/webapp.jpg`, imageAlt: "Developer building a custom web application" },
    { title: "Responsive Design", description: "Adaptive layouts tested across breakpoints and real devices.", image: `${img}/responsive.jpg`, imageAlt: "Responsive website displayed on multiple devices" },
    { title: "Performance Optimization", description: "Audits, image optimization, and code improvements for speed and SEO.", image: `${img}/performance.jpg`, imageAlt: "Website performance analytics dashboard" },
  ],
  benefits: defaultBenefits,
  showcase: {
    image: `${img}/showcase.jpg`,
    imageAlt: "Web development team planning a client website project",
    title: "Enterprise-Grade Web Delivery",
    description:
      "Our consultants partner with marketing and IT leaders to ship websites that look premium, load quickly, and integrate with your CRM, analytics, and content workflows.",
  },
  cta: {
    title: "Ready to Launch Your Next Website?",
    description: "Share your goals and timeline—we will propose a practical roadmap for design, development, and go-live.",
  },
};
