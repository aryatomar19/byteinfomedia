import {
  Activity,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  CloudCog,
  CloudUpload,
  Code2,
  DatabaseBackup,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Workflow,
  Zap,
} from "lucide-react";

export const company = {
  name: "ByteInfomedia",
  legalName: "Byte InfoMedia LLP",
  logo: "/byteinfomedia-logo.png",
  favicon: "/favicon.png",
  address: "First Floor, PlotNo.27, Sector-19, Dwarka, New Delhi - 110075",
  country: "India",
  phone: "+91 70427 27803",
  phoneHref: "tel:+917042727803",
  whatsappHref: "https://wa.me/917042727803",
  email: "info@byteinfomedia.com",
  website: "https://www.byteinfomedia.com/",
  contactRoute: "https://www.byteinfomedia.com/about-2",
  linkedin: "https://www.linkedin.com/company/byte-infomedia",
  tagline: "Technology Managed. Business Empowered.",
  description:
    "ByteInfomedia is a modern IT solutions company providing cloud services, cybersecurity, AWS solutions, and infrastructure management for businesses.",
};

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Architecture", href: "#architecture" },
  { label: "Delivery", href: "#delivery" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = [
  "AWS Cloud Experts",
  "DevOps Automation Specialists",
  "Security-First Infrastructure",
  "24/7 Managed Support",
  "Fast Response Team",
];

export const credibilitySignals = [
  {
    label: "AWS & Cloud Architecture",
    detail: "Landing zones, migration planning, cloud-native application foundations, and governance-first infrastructure.",
  },
  {
    label: "DevOps Delivery Model",
    detail: "CI/CD, infrastructure automation, container platforms, release controls, and operational visibility.",
  },
  {
    label: "Security-First Execution",
    detail: "VAPT, network resilience, IAM hardening, backup validation, WAF, and SecOps-aligned remediation.",
  },
  {
    label: "Real Contact Accessibility",
    detail: "Direct phone, WhatsApp, office address, and structured consultation intake for faster enterprise response.",
  },
];

export const technologyEcosystem = ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Grafana", "CloudFront", "WAF", "Linux", "Nginx"];

export const featuredServices = [
  {
    icon: CloudUpload,
    title: "AWS Cloud Migration",
    description: "Assessment, landing zones, migration waves, and production cutover planning for AWS workloads.",
  },
  {
    icon: Workflow,
    title: "DevOps Automation",
    description: "CI/CD, IaC, release controls, and automation that help teams ship reliably with less manual effort.",
  },
  {
    icon: ServerCog,
    title: "Managed Cloud Operations",
    description: "Monitoring, patching, backup validation, incident response, and ongoing infrastructure optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description: "Security reviews, VAPT, WAF hardening, access governance, resilience testing, and remediation support.",
  },
];

export const secondaryServices = [
  { icon: Zap, title: "CI/CD Pipelines", description: "Automated build, test, deploy, and approval workflows." },
  { icon: Boxes, title: "Kubernetes", description: "Container orchestration for resilient application platforms." },
  { icon: Layers3, title: "Docker", description: "Application containerization and runtime best practices." },
  { icon: Activity, title: "Monitoring", description: "Metrics, logs, traces, uptime checks, and alerting." },
  { icon: DatabaseBackup, title: "Backup", description: "Backup policy design, validation, and recovery readiness." },
  { icon: Network, title: "Network", description: "VPC, VPN, firewall, load balancing, and secure connectivity." },
  { icon: Code2, title: "Web Development", description: "Cloud-ready websites, portals, and digital platforms." },
  { icon: Rocket, title: "SaaS Infrastructure", description: "Scalable foundations for modern SaaS product teams." },
  { icon: ChartNoAxesCombined, title: "Cloud Cost Optimization", description: "FinOps visibility, rightsizing, budgets, and cost controls." },
];

export const services = [...featuredServices, ...secondaryServices];

export const differentiators = [
  "AWS-focused expertise for production cloud environments",
  "Security-first delivery across architecture, network, and application layers",
  "Zero downtime migration planning with phased rollout strategy",
  "DevOps automation for faster and safer delivery pipelines",
  "Fast implementation using proven cloud and infrastructure patterns",
  "Cost optimization through FinOps visibility and governance controls",
  "Managed support for reliability, monitoring, and incident response",
  "Scalable infrastructure designed for startups, SMEs, SaaS, and enterprise teams",
];

export const industries = [
  { icon: HeartPulse, title: "Healthcare", description: "Secure platforms with uptime, backup, and privacy-aware infrastructure controls." },
  { icon: Landmark, title: "FinTech", description: "Resilient cloud foundations, audit-minded security, and controlled release pipelines." },
  { icon: Rocket, title: "SaaS", description: "Containerized product infrastructure, monitoring, scaling, and CI/CD acceleration." },
  { icon: ShoppingCart, title: "eCommerce", description: "CDN acceleration, WAF protection, high-traffic readiness, and reliable checkout stacks." },
  { icon: GraduationCap, title: "Education", description: "Cost-aware digital learning infrastructure with secure access and content delivery." },
  { icon: Factory, title: "Manufacturing", description: "Reliable networks, modernization roadmaps, backup strategy, and connected operations." },
  { icon: Zap, title: "Startups", description: "Launch-ready AWS foundations, automation, and governance before scale becomes complex." },
  { icon: Building2, title: "Enterprise", description: "Governed modernization, managed operations, security reviews, and multi-team delivery." },
];

export const caseStudies = [
  {
    title: "AWS Cost Optimization for SaaS Platforms",
    context: "A SaaS infrastructure footprint needed better cost ownership, tagging discipline, and visibility before scaling further.",
    solution: "Structured a FinOps review model covering budget alerts, rightsizing checks, storage lifecycle policy, and environment-level accountability.",
    outcomes: ["Cost visibility", "Governed scaling", "Optimization roadmap"],
  },
  {
    title: "DevOps Pipeline Modernization",
    context: "A product engineering team needed a safer release process and more consistent promotion across environments.",
    solution: "Planned CI/CD workflow improvements with quality gates, infrastructure-as-code review, approval controls, and deployment visibility.",
    outcomes: ["Safer releases", "Repeatable delivery", "Improved visibility"],
  },
  {
    title: "Cloud Security Hardening Review",
    context: "A business-critical cloud environment required a practical review of access, network exposure, logging, and recovery readiness.",
    solution: "Reviewed IAM, WAF posture, network controls, backup validation, monitoring coverage, and remediation priorities.",
    outcomes: ["Prioritized risks", "Security roadmap", "Recovery readiness"],
  },
  {
    title: "Managed Infrastructure Transformation",
    context: "An operations team needed more reliable monitoring, backup governance, and incident response practices for existing infrastructure.",
    solution: "Defined managed operations workflows for alerts, maintenance windows, escalation, documentation, and continuous optimization.",
    outcomes: ["Operational clarity", "Support readiness", "Knowledge transfer"],
  },
];

export const deliveryModel = [
  {
    title: "Discovery & Architecture Consultation",
    description: "Understand current infrastructure, business priorities, risk areas, and the right AWS, DevOps, or security roadmap.",
  },
  {
    title: "Secure Implementation Planning",
    description: "Plan environments, access controls, migration phases, rollback paths, monitoring, and backup readiness before execution.",
  },
  {
    title: "Managed Deployment & Monitoring",
    description: "Support deployments with observability, release coordination, incident response paths, and operational ownership.",
  },
  {
    title: "Continuous Optimization",
    description: "Improve performance, cost, reliability, and security posture with structured reviews and practical remediation cycles.",
  },
  {
    title: "Incident Response Support",
    description: "Help teams respond to infrastructure, availability, security, and performance incidents with clear escalation and action plans.",
  },
  {
    title: "Documentation & Knowledge Transfer",
    description: "Provide implementation notes, operational runbooks, architecture context, and handover support for internal teams.",
  },
];

export const supportCapabilities = [
  {
    title: "AWS-Focused Cloud Expertise",
    description: "Architecture-first consulting for AWS migration, cloud modernization, governance, and scalable infrastructure foundations.",
  },
  {
    title: "DevOps Automation Specialists",
    description: "Pipeline, IaC, container, release, and monitoring practices designed to reduce operational friction.",
  },
  {
    title: "Security-First Delivery",
    description: "Security reviews, access hardening, WAF, backup validation, and remediation planning embedded into delivery.",
  },
  {
    title: "Managed Operations Support",
    description: "Monitoring, maintenance, escalation, incident response, and continuous optimization support for production systems.",
  },
];

export const contactTrustCards = [
  {
    title: "Fast Response Consultation",
    description: "Direct phone and WhatsApp access for urgent AWS, DevOps, cloud migration, and cybersecurity discussions.",
  },
  {
    title: "Priority Engagement Support",
    description: "Structured discovery for decision-makers who need practical next steps before investing in implementation.",
  },
  {
    title: "Security-First Consulting",
    description: "Every engagement considers access, network exposure, backup readiness, observability, and risk reduction.",
  },
  {
    title: "Managed Support Availability",
    description: "Support hours and managed operations practices designed around reliable enterprise infrastructure response.",
  },
];


export const architectureSteps = [
  "Users",
  "CloudFront",
  "AWS WAF",
  "Load Balancer",
  "App Layer",
  "Containers / Kubernetes",
  "Database",
  "Monitoring",
  "Backup",
];

export const floatingTech = ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Grafana"];

export const leadOffers = [
  {
    title: "Free AWS Assessment",
    description: "Review architecture, migration readiness, cloud security, reliability, and scaling opportunities.",
  },
  {
    title: "Free Security Review",
    description: "Identify cloud, network, IAM, backup, and application exposure with a prioritized action plan.",
  },
  {
    title: "Free Cloud Cost Optimization Review",
    description: "Spot waste, rightsizing opportunities, storage improvements, and FinOps governance gaps.",
  },
];

export const faqs = [
  {
    question: "How quickly can you start?",
    answer:
      "ByteInfomedia can begin with a focused discovery call, review your current environment, and define the highest-priority AWS, DevOps, or security actions.",
  },
  {
    question: "Do you provide AWS migration support?",
    answer:
      "Yes. Services include migration readiness assessment, landing zone planning, workload grouping, phased migration, validation, and cutover support.",
  },
  {
    question: "Do you manage existing infrastructure?",
    answer:
      "Yes. ByteInfomedia supports existing cloud, Linux, Windows, database, network, monitoring, backup, and application infrastructure environments.",
  },
  {
    question: "Do you support cybersecurity audits?",
    answer:
      "Yes. The team supports VAPT-oriented assessments, risk reviews, WAF hardening, IAM checks, network resilience testing, and remediation planning.",
  },
  {
    question: "Do you sign NDA?",
    answer:
      "Yes. NDA-based discovery can be supported before reviewing sensitive infrastructure, application, or security information.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "ByteInfomedia supports startups, SMEs, SaaS, healthcare, fintech, eCommerce, education, manufacturing, and enterprise technology teams.",
  },
];

export const footerLinks = [
  "AWS Cloud Consulting",
  "DevOps Automation",
  "Cybersecurity",
  "Managed Services",
  "Cloud Migration",
  "Digital Transformation",
];

export const certifications = [BadgeCheck, LifeBuoy, ShieldCheck, CloudCog];
