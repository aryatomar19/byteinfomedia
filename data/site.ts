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
  taglineLine1: "CLOUD | DEVOPS | SECURITY",
  taglineLine2: "Enterprise Consulting",
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
    "BYTEINFOMEDIA provides AWS cloud consulting, DevOps automation, cybersecurity, managed cloud services, and generative AI solutions for modern enterprises.",
};

export const serviceNav = [
  { label: "Cloud Services", href: "/cloud-services/" },
  { label: "Managed Services", href: "/managed-services/" },
  { label: "Cyber Security", href: "/cyber-security/" },
  { label: "Generative AI", href: "/generative-ai/" },
] as const;

export const headerNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  ...serviceNav,
] as const;

export const footerLinks = headerNav;

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
