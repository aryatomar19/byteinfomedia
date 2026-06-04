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
    eyebrow: "Enterprise Cloud",
    title: "Transforming Cloud Infrastructure for Modern Enterprises",
    description:
      "Accelerate your cloud journey with AWS consulting, cloud migration, managed services, DevOps automation, cybersecurity, and AI-driven solutions.",
    image: `${slideImages}/cloud-infrastructure.jpg`,
    imageAlt: "Enterprise cloud datacenter and global digital infrastructure",
    learnMoreHref: "/cloud-services/",
    showCloudPartners: true,
  },
  {
    id: "cloud-security",
    eyebrow: "Cloud & Security",
    title: "Secure, Scale and Optimize Your Business",
    description:
      "End-to-end cloud security, infrastructure modernization, monitoring, compliance, disaster recovery, and managed cloud operations.",
    image: `${slideImages}/security-operations.jpg`,
    imageAlt: "Cybersecurity operations center and cloud engineering professionals",
    learnMoreHref: "/cyber-security/",
    showCloudPartners: true,
  },
  {
    id: "digital-marketing",
    eyebrow: "Growth Marketing",
    title: "Digital Marketing That Drives Real Growth",
    description:
      "Increase visibility, generate qualified leads, and grow your brand through SEO, content marketing, social media marketing, and performance campaigns.",
    image: `${slideImages}/digital-marketing.jpg`,
    imageAlt: "Marketing team analyzing digital campaign performance on dashboards",
    learnMoreHref: "/search-engine-optimization/",
  },
  {
    id: "branding-web",
    eyebrow: "Branding & Web",
    title: "Build Strong Brands and High-Converting Websites",
    description:
      "Professional website development, content strategy, branding, user experience, and digital growth solutions for modern businesses.",
    image: `${slideImages}/branding-web.jpg`,
    imageAlt: "Creative agency team collaborating on website and brand design",
    learnMoreHref: "/website-development/",
  },
];

export const heroCloudPartners = [
  { name: "Amazon Web Services", logo: "/images/partners/aws.svg", logoAlt: "AWS logo" },
  { name: "Microsoft Azure", logo: "/images/partners/azure.svg", logoAlt: "Microsoft Azure logo" },
  { name: "Google Cloud", logo: "/images/partners/gcp.svg", logoAlt: "Google Cloud Platform logo" },
  { name: "Oracle Cloud", logo: "/images/partners/oracle.svg", logoAlt: "Oracle Cloud logo" },
] as const;
