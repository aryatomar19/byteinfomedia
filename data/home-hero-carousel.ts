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
    eyebrow: "CLOUD SERVICES",
    title: "Transforming Cloud Infrastructure for Modern Enterprises",
    description:
      "Accelerate your cloud journey with AWS consulting, cloud migration, managed services, DevOps automation, cybersecurity, and AI-driven solutions.",
    image: `${slideImages}/cloud-services.jpg`,
    imageAlt:
      "Enterprise cloud computing infrastructure with modern cloud network and AWS cloud architecture",
    learnMoreHref: "/cloud-services/",
    showCloudPartners: true,
  },
  {
    id: "digital-marketing-seo",
    eyebrow: "DIGITAL MARKETING & SEO",
    title: "Digital Marketing That Drives Real Growth",
    description:
      "Increase visibility, generate qualified leads, and grow your brand through SEO, content marketing, social media marketing, and performance campaigns.",
    image: `${slideImages}/digital-marketing-seo.jpg`,
    imageAlt:
      "SEO analytics dashboards and digital marketing performance charts showing growth metrics",
    learnMoreHref: "/search-engine-optimization/",
  },
  {
    id: "cloud-migration-devops",
    eyebrow: "CLOUD MIGRATION & DEVOPS",
    title: "Accelerate Cloud Migration & DevOps Automation",
    description:
      "Streamline cloud migration, CI/CD pipelines, Kubernetes orchestration, and infrastructure automation with proven DevOps practices and enterprise-grade tooling.",
    image: `${slideImages}/cloud-migration-devops.jpg`,
    imageAlt:
      "Cloud migration architecture with DevOps pipelines, CI/CD workflows, and Kubernetes automation",
    learnMoreHref: "/cloud-services/",
    showCloudPartners: true,
  },
  {
    id: "branding-social-media",
    eyebrow: "BRANDING & SOCIAL MEDIA",
    title: "Build Strong Brands and High-Converting Websites",
    description:
      "Professional website development, branding, content strategy, user experience, and digital growth solutions for modern businesses.",
    image: `${slideImages}/branding-social-media.jpg`,
    imageAlt:
      "Social media marketing, branding strategy, content creation, and audience engagement visuals",
    learnMoreHref: "/website-development/",
  },
];

export const heroCloudPartners = [
  { name: "Amazon Web Services", logo: "/images/partners/aws.svg", logoAlt: "AWS logo" },
  { name: "Microsoft Azure", logo: "/images/partners/azure.svg", logoAlt: "Microsoft Azure logo" },
  { name: "Google Cloud", logo: "/images/partners/gcp.svg", logoAlt: "Google Cloud Platform logo" },
  { name: "Oracle Cloud", logo: "/images/partners/oracle.svg", logoAlt: "Oracle Cloud logo" },
] as const;
