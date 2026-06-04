export type HeroBannerSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  learnMoreHref: string;
  showCloudPartners?: boolean;
};

const slideImages = "/images/home/hero-slides";

export const heroBannerSlides: HeroBannerSlide[] = [
  {
    id: "cloud-services",
    eyebrow: "Cloud Services",
    title: "Transforming Cloud Infrastructure for Modern Enterprises",
    description:
      "AWS consulting, cloud migration, managed services, DevOps automation, cybersecurity and AI-powered solutions.",
    image: `${slideImages}/cloud-services.jpg`,
    imageAlt: "Enterprise datacenter with cloud infrastructure and engineering professionals",
    learnMoreHref: "/cloud-services/",
    showCloudPartners: true,
  },
  {
    id: "digital-marketing",
    eyebrow: "Digital Marketing",
    title: "Digital Marketing That Drives Real Business Growth",
    description: "SEO, Social Media Marketing, Content Writing and Lead Generation services.",
    image: `${slideImages}/digital-marketing.jpg`,
    imageAlt: "Marketing professionals reviewing SEO analytics and campaign performance dashboards",
    learnMoreHref: "/search-engine-optimization/",
  },
  {
    id: "cloud-security",
    eyebrow: "Cloud Security",
    title: "Secure, Scale and Optimize Your Business",
    description:
      "Cloud security, monitoring, compliance, disaster recovery and infrastructure modernization.",
    image: `${slideImages}/cloud-security.jpg`,
    imageAlt: "Cybersecurity operations center with analysts monitoring cloud infrastructure",
    learnMoreHref: "/cyber-security/",
    showCloudPartners: true,
  },
  {
    id: "web-branding",
    eyebrow: "Website & Branding",
    title: "Build Powerful Brands and High-Converting Websites",
    description:
      "Website Development, Branding Solutions, User Experience Design and Digital Growth.",
    image: `${slideImages}/web-branding.jpg`,
    imageAlt: "Web developers and UX designers collaborating on a digital product",
    learnMoreHref: "/website-development/",
  },
];

export const heroCloudPartners = [
  { name: "Amazon Web Services", logo: "/images/partners/aws.svg", logoAlt: "AWS logo" },
  { name: "Microsoft Azure", logo: "/images/partners/azure.svg", logoAlt: "Microsoft Azure logo" },
  { name: "Google Cloud", logo: "/images/partners/gcp.svg", logoAlt: "Google Cloud Platform logo" },
  { name: "Oracle Cloud", logo: "/images/partners/oracle.svg", logoAlt: "Oracle Cloud logo" },
] as const;
