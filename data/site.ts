import {
  Activity,
  BadgeCheck,
  Building2,
  ChartNoAxesCombined,
  CloudCog,
  CloudUpload,
  HeartPulse,
  Landmark,
  LifeBuoy,
  LockKeyhole,
  Rocket,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const company = {
  name: "ByteInfomedia",
  legalName: "Byte InfoMedia LLP",
  logo: "/byteinfomedia-logo.png",
  favicon: "/favicon.png",
  address: "First Floor, Plot No. 27, Sector-19, Dwarka, New Delhi - 110075",
  addressLines: ["First Floor, Plot No. 27", "Sector-19", "Dwarka", "New Delhi - 110075"],
  country: "India",
  phone: "+91 70427 27803",
  phoneHref: "tel:+917042727803",
  whatsappHref: "https://wa.me/917042727803",
  email: "byteinfomedia@gmail.com",
  website: "https://www.byteinfomedia.com/",
  contactRoute: "https://www.byteinfomedia.com/about-2",
  linkedin: "https://www.linkedin.com/company/byte-infomedia",
  tagline: "Technology Managed. Business Empowered.",
  description:
    "ByteInfomedia provides AWS cloud consulting, DevOps automation, cybersecurity, managed cloud services, cloud migration, and cloud cost optimization for modern businesses.",
};

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = [
  "AWS-focused cloud expertise",
  "DevOps automation specialists",
  "Security-first delivery",
  "Managed operations support",
  "Fast response consultation",
  "Architecture-first engagement",
];

export const credibilitySignals = [
  {
    label: "Architecture-first consulting",
    detail: "Every engagement starts with business goals, workload context, risk areas, and a practical cloud roadmap.",
  },
  {
    label: "Security-first implementation",
    detail: "Cloud, DevOps, network, IAM, backup, and monitoring decisions are planned with risk reduction in mind.",
  },
  {
    label: "Real access to consultants",
    detail: "Phone, WhatsApp, email, and LinkedIn are visible so enterprise buyers can reach the team quickly.",
  },
];

export const services = [
  {
    icon: CloudCog,
    title: "AWS Cloud Consulting",
    description: "Cloud architecture, landing zones, governance, workload planning, and AWS modernization guidance.",
  },
  {
    icon: CloudUpload,
    title: "Cloud Migration",
    description: "Migration readiness, phased workload movement, validation, rollback planning, and cutover support.",
  },
  {
    icon: Workflow,
    title: "DevOps Automation",
    description: "CI/CD strategy, infrastructure automation, release controls, deployment visibility, and delivery governance.",
  },
  {
    icon: ServerCog,
    title: "Managed Cloud Services",
    description: "Monitoring, maintenance, backup checks, response workflows, optimization, and ongoing cloud operations.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Security reviews, IAM hardening, WAF strategy, VAPT support, resilience planning, and remediation guidance.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Cloud Cost Optimization",
    description: "FinOps reviews, cost visibility, rightsizing recommendations, budget controls, and spend governance.",
  },
];

export const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Secure infrastructure for patient platforms, backups, uptime-sensitive systems, and privacy-aware operations.",
  },
  {
    icon: Landmark,
    title: "FinTech",
    description: "Resilient cloud foundations, security controls, controlled releases, and audit-minded infrastructure planning.",
  },
  {
    icon: Rocket,
    title: "SaaS",
    description: "Scalable environments, deployment automation, monitoring, cost visibility, and production readiness.",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "Governed modernization, managed operations, migration planning, and security-first delivery support.",
  },
];

export const caseStudies = [
  {
    title: "AWS Cost Optimization for SaaS Platforms",
    context: "A SaaS platform needed better visibility into AWS spend and clearer ownership before scaling infrastructure further.",
    solution: "ByteInfomedia structured a FinOps review model covering tagging, budget alerts, rightsizing checks, and storage lifecycle policy.",
    outcomes: ["Cost visibility", "Governed scaling", "Optimization roadmap"],
  },
  {
    title: "DevOps Pipeline Modernization",
    context: "A product engineering team needed a safer release process and more consistent deployment promotion across environments.",
    solution: "The engagement focused on CI/CD planning, quality gates, infrastructure-as-code review, approval controls, and release visibility.",
    outcomes: ["Safer releases", "Repeatable delivery", "Improved visibility"],
  },
  {
    title: "Cloud Security Hardening Review",
    context: "A business-critical cloud environment required a practical review of access, network exposure, logging, and recovery readiness.",
    solution: "ByteInfomedia reviewed IAM, WAF posture, network controls, backup validation, monitoring coverage, and remediation priorities.",
    outcomes: ["Prioritized risks", "Security roadmap", "Recovery readiness"],
  },
];

export const leadOffers = [
  {
    title: "Free AWS Assessment",
    description: "Review cloud architecture, migration readiness, security posture, reliability, and scaling opportunities.",
  },
  {
    title: "Security Review",
    description: "Identify practical risk areas across cloud, access, network, monitoring, and backup readiness.",
  },
  {
    title: "Cost Optimization Review",
    description: "Find rightsizing, governance, budget, storage, and operational improvements for cloud spend.",
  },
];

export const faqs = [
  {
    question: "How quickly can you start?",
    answer:
      "ByteInfomedia can begin with a focused discovery call, review your current environment, and define practical next steps for AWS, DevOps, security, or managed cloud needs.",
  },
  {
    question: "Do you provide AWS migration support?",
    answer:
      "Yes. Support includes migration readiness assessment, landing zone planning, workload grouping, phased migration, validation, and cutover guidance.",
  },
  {
    question: "Do you manage existing infrastructure?",
    answer:
      "Yes. ByteInfomedia supports existing cloud, Linux, Windows, database, network, monitoring, backup, and application infrastructure environments.",
  },
  {
    question: "Do you support cybersecurity audits?",
    answer:
      "Yes. The team supports security reviews, VAPT-oriented assessments, IAM checks, WAF hardening, network resilience testing, and remediation planning.",
  },
];

export const contactTrustCards = [
  {
    title: "Fast response team",
    description: "Reach consultants directly by phone, WhatsApp, email, or LinkedIn for urgent cloud and security discussions.",
  },
  {
    title: "Enterprise engagement support",
    description: "Structured discovery, clear next steps, and professional documentation for decision-makers and technical teams.",
  },
  {
    title: "Managed support availability",
    description: "Mon-Sat support hours and managed operations practices for reliability-focused cloud environments.",
  },
];

export const footerLinks = [
  "AWS Cloud Consulting",
  "Cloud Migration",
  "DevOps Automation",
  "Managed Cloud Services",
  "Cybersecurity",
  "Cloud Cost Optimization",
];

export const certifications = [BadgeCheck, LifeBuoy, ShieldCheck, LockKeyhole, Activity];
