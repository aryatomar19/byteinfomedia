import { homeImages } from "@/data/site";

const img = "/images/home";

export const techSolutionsPage = {
  hero: {
    badge: "TECH SOLUTIONS",
    title: "Enterprise Technology Built for Scale and Security",
    description:
      "From cloud consulting and migration to managed operations and cybersecurity, we help organizations modernize infrastructure, reduce risk, and operate with confidence.",
    image: "/images/tech-solutions/hero-enterprise-tech.jpg",
    imageAlt: "Premium enterprise cloud infrastructure with glowing digital network connections in dark navy and blue tones",
  },
  overview: {
    title: "Overview",
    description:
      "Byte Infomedia delivers end-to-end technology services for businesses that need reliable cloud platforms, proactive operations, and enterprise-grade security. Our consultants design, deploy, and manage solutions across AWS and modern cloud ecosystems — so your teams can focus on growth instead of infrastructure complexity.",
  },
  benefits: {
    title: "Why Choose Tech Solutions",
    items: [
      {
        title: "Cloud Modernization",
        description: "Migrate, optimize, and scale workloads on secure, high-performance cloud architecture.",
      },
      {
        title: "Always-On Operations",
        description: "24×7 monitoring, incident response, and managed services that keep systems running.",
      },
      {
        title: "Enterprise Security",
        description: "Protect data and infrastructure with assessments, compliance, and threat visibility.",
      },
      {
        title: "Faster Innovation",
        description: "Automate delivery pipelines and adopt modern tooling to ship with confidence.",
      },
    ],
  },
  services: {
    title: "Explore Our Tech Services",
    items: [
      {
        title: "Cloud Services",
        description: "AWS consulting, migration, modernization, cloud security and cost optimization.",
        image: homeImages.cloudServices,
        imageAlt: "Enterprise cloud infrastructure and computing",
        href: "/cloud-services/",
      },
      {
        title: "Managed Services",
        description: "24×7 monitoring, incident response and cloud operations.",
        image: homeImages.managedServices,
        imageAlt: "Enterprise operations and IT management",
        href: "/managed-services/",
      },
      {
        title: "Cyber Security",
        description: "Security assessments, compliance, threat detection and cloud hardening.",
        image: homeImages.cyberSecurity,
        imageAlt: "Cybersecurity and threat protection",
        href: "/cyber-security/",
      },
      {
        title: "Generative AI",
        description: "AI consulting, automation, chatbot development and enterprise adoption.",
        image: homeImages.generativeAi,
        imageAlt: "Generative AI and enterprise automation",
        href: "/generative-ai/",
      },
    ],
  },
  cta: {
    title: "Ready To Modernize Your Technology?",
    description: "Speak with our consultants about cloud, security, and managed operations tailored to your business.",
    primaryLabel: "Book Consultation",
    secondaryLabel: "Contact Us",
  },
} as const;
