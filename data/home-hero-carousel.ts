import { homeImages } from "@/data/site";

export type HeroCarouselCard = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  accent: "orange" | "navy";
};

export type HeroCarouselSlide = {
  id: string;
  label: string;
  cards: HeroCarouselCard[];
};

const m = "/images/home/marketing";
const b = "/images/branding";

export const heroCarouselSlides: HeroCarouselSlide[] = [
  {
    id: "cloud-overview",
    label: "Cloud Overview",
    cards: [
      {
        title: "Cloud Consulting",
        href: "/cloud-services/",
        image: homeImages.cloudServices,
        imageAlt: "Cloud consulting and enterprise architecture",
        accent: "orange",
      },
      {
        title: "Cloud Security",
        href: "/cyber-security/",
        image: homeImages.cyberSecurity,
        imageAlt: "Cloud security and cyber protection",
        accent: "navy",
      },
      {
        title: "Cloud Migration",
        href: "/cloud-services/",
        image: homeImages.hero,
        imageAlt: "Cloud migration and infrastructure modernization",
        accent: "navy",
      },
      {
        title: "DevOps Automation",
        href: "/cloud-services/",
        image: homeImages.managedServices,
        imageAlt: "DevOps automation and CI/CD pipelines",
        accent: "orange",
      },
    ],
  },
  {
    id: "cloud-services",
    label: "Cloud Services",
    cards: [
      {
        title: "Cloud Services",
        href: "/cloud-services/",
        image: homeImages.cloudServices,
        imageAlt: "Enterprise cloud services",
        accent: "orange",
      },
      {
        title: "Managed Services",
        href: "/managed-services/",
        image: homeImages.managedServices,
        imageAlt: "Managed cloud operations",
        accent: "navy",
      },
      {
        title: "Cyber Security",
        href: "/cyber-security/",
        image: homeImages.cyberSecurity,
        imageAlt: "Cybersecurity services",
        accent: "navy",
      },
      {
        title: "Generative AI",
        href: "/generative-ai/",
        image: homeImages.generativeAi,
        imageAlt: "Generative AI solutions",
        accent: "orange",
      },
    ],
  },
  {
    id: "marketing-services",
    label: "Marketing Services",
    cards: [
      {
        title: "Website Development",
        href: "/website-development/",
        image: `${m}/website-development.jpg`,
        imageAlt: "Website development services",
        accent: "orange",
      },
      {
        title: "Search Engine Optimization (SEO)",
        href: "/search-engine-optimization/",
        image: `${m}/seo.jpg`,
        imageAlt: "SEO and organic search marketing",
        accent: "navy",
      },
      {
        title: "Content Writing",
        href: "/content-writing/",
        image: `${m}/content-writing.jpg`,
        imageAlt: "Professional content writing",
        accent: "navy",
      },
      {
        title: "Social Media Marketing",
        href: "/social-media-marketing/",
        image: `${m}/social-media-marketing.jpg`,
        imageAlt: "Social media marketing campaigns",
        accent: "orange",
      },
    ],
  },
  {
    id: "advanced-marketing",
    label: "Advanced Marketing Services",
    cards: [
      {
        title: "Branding Solutions",
        href: "/website-development/",
        image: `${b}/website-development/hero.jpg`,
        imageAlt: "Branding and digital presence solutions",
        accent: "orange",
      },
      {
        title: "Performance Marketing",
        href: "/book-consultation/",
        image: `${b}/social-media/paid.jpg`,
        imageAlt: "Performance marketing and paid campaigns",
        accent: "navy",
      },
      {
        title: "Email Marketing",
        href: "/book-consultation/",
        image: `${b}/content-writing/marketing.jpg`,
        imageAlt: "Email marketing and nurture campaigns",
        accent: "navy",
      },
      {
        title: "Lead Generation",
        href: "/book-consultation/",
        image: `${b}/seo/keywords.jpg`,
        imageAlt: "Lead generation and conversion strategy",
        accent: "orange",
      },
    ],
  },
];
