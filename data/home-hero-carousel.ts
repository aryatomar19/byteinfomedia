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
    image: `${slideImages}/cloud-image-1.jpg`,
    imageAlt:
      "Glowing blue cloud network with digital circuit patterns representing enterprise cloud infrastructure",
    learnMoreHref: "/cloud-services/",
    showCloudPartners: true,
  },
  {
    id: "cloud-security",
    eyebrow: "CLOUD & SECURITY",
    title: "Secure, Scale and Optimize Your Business",
    description:
      "End-to-end cloud security, infrastructure modernization, monitoring, compliance, disaster recovery, and managed cloud operations.",
    image: `${slideImages}/cloud-image-2.jpg`,
    imageAlt:
      "Isometric cloud server architecture with connected workstations representing secure cloud operations",
    learnMoreHref: "/cyber-security/",
    showCloudPartners: true,
  },
  {
    id: "growth-marketing",
    eyebrow: "GROWTH MARKETING",
    title: "Digital Marketing That Drives Real Growth",
    description:
      "Increase visibility, generate qualified leads, and grow your brand through SEO, content marketing, social media marketing, and performance campaigns.",
    image: `${slideImages}/growth-marketing-seo.jpg`,
    imageAlt:
      "SEO marketing hub illustration with connected search, keywords, rankings, and traffic nodes",
    learnMoreHref: "/search-engine-optimization/",
  },
  {
    id: "web-branding",
    eyebrow: "BRANDING & WEB",
    title: "Build Strong Brands and High-Converting Websites",
    description:
      "Professional website development, branding, content strategy, user experience, and digital growth solutions for modern businesses.",
    image: `${slideImages}/branding-social-media.jpg`,
    imageAlt:
      "Social media marketing illustration with connected devices and engagement analytics",
    learnMoreHref: "/website-development/",
  },
];

export const heroCloudPartners = [
  { name: "Amazon Web Services", logo: "/images/partners/aws.svg", logoAlt: "AWS logo" },
  { name: "Microsoft Azure", logo: "/images/partners/azure.svg", logoAlt: "Microsoft Azure logo" },
  { name: "Google Cloud", logo: "/images/partners/gcp.svg", logoAlt: "Google Cloud Platform logo" },
  { name: "Oracle Cloud", logo: "/images/partners/oracle.svg", logoAlt: "Oracle Cloud logo" },
] as const;
