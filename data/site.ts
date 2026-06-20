export const company = {
  name: "BYTEINFOMEDIA",
  displayName: "ByteInfomedia",
  legalName: "Byte InfoMedia LLP",
  logo: "/byteinfomedia-logo.png",
  favicon: "/favicon.ico",
  faviconPng16: "/favicon-16x16.png",
  faviconPng32: "/favicon-32x32.png",
  faviconPng48: "/favicon-48x48.png",
  appleTouchIcon: "/apple-touch-icon.png",
  taglineLine1: "CLOUD SERVICES | DIGITAL MARKETING",
  taglineLine2: "Cloud & Digital Growth Solutions",
  address: "First Floor, Plot No. 27, Sector 19, Nanda Enclave, Dwarka, Delhi - 110075",
  addressLines: [
    "First Floor, Plot No. 27, Sector 19,",
    "Nanda Enclave, Dwarka, Delhi - 110075",
  ],
  phone: "+91 70427 27803",
  phoneHref: "tel:+917042727803",
  whatsappHref: "https://wa.me/917042727803",
  email: "byteinfomedia@gmail.com",
  website: "https://www.byteinfomedia.com/",
  linkedin: "https://www.linkedin.com/company/byte-infomedia",
  instagram: "https://www.instagram.com/byte_infomedia_/",
  instagramHandle: "byte_infomedia_",
  description:
    "BYTEINFOMEDIA delivers cloud, DevOps, AI, website development, SEO and digital marketing solutions for modern businesses.",
};

export const serviceNav = [
  { label: "Cloud Services", href: "/cloud-services/" },
  { label: "Managed Services", href: "/managed-services/" },
  { label: "Cyber Security", href: "/cyber-security/" },
  { label: "Generative AI", href: "/generative-ai/" },
] as const;

export const techSolutionsServiceNav = [
  { label: "Tech Solutions Home", href: "/tech-solutions/" },
  ...serviceNav,
] as const;

export const brandingServiceNav = [
  { label: "Digital Marketing Home", href: "/digital-marketing/" },
  { label: "Website Development", href: "/website-development/" },
  { label: "SEO", href: "/search-engine-optimization/" },
  { label: "Content Writing", href: "/content-writing/" },
  { label: "Social Media Marketing", href: "/social-media-marketing/" },
] as const;

export const headerNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  ...serviceNav,
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Digital Marketing", href: "/digital-marketing/" },
  { label: "Tech Solutions", href: "/tech-solutions/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact Us", href: "/#assessment" },
] as const;

export const serviceFormOptions = [
  "Cloud Services",
  "Managed Services",
  "Cyber Security",
  "Generative AI",
  "AWS Migration",
  "DevOps Automation",
  "Other",
];

export const contactMethodOptions = [
  "Phone Call",
  "WhatsApp",
  "Email",
  "Video Consultation",
];

export const homeImages = {
  hero: "/images/home/hero-cinematic.jpg",
  about: "/images/home/about-partner.jpg",
  cloudServices: "/images/home/cloud-services.jpg",
  managedServices: "/images/home/managed-services.jpg",
  cyberSecurity: "/images/home/cyber-security.jpg",
  generativeAi: "/images/home/generative-ai.jpg",
} as const;
