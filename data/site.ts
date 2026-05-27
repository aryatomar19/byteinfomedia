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
  address: "First Floor, PlotNo.27, Sector-19, Dwarka, New Delhi - 110075",
  country: "India",
  website: "https://www.byteinfomedia.com/",
  contactRoute: "https://www.byteinfomedia.com/about-2",
  tagline: "Technology Managed. Business Empowered.",
  description:
    "ByteInfomedia is a modern IT solutions company providing cloud services, cybersecurity, AWS solutions, and infrastructure management for businesses.",
};

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Architecture", href: "#architecture" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = ["AWS Cloud Solutions", "DevOps Experts", "Security First", "24/7 Managed Support"];

export const metrics = [
  { value: 20, suffix: "+", label: "Years of Experience", detail: "A legacy of excellence in IT services." },
  { value: 1200, suffix: "+", label: "Projects Completed", detail: "Cloud, security, infrastructure, and digital projects." },
  { value: 90, suffix: "%", label: "Client Satisfaction", detail: "Trusted by businesses across sectors." },
  { value: 70, suffix: "%", label: "Efficiency Gains", detail: "Streamlined operations and improved workflow." },
];

export const services = [
  {
    icon: CloudUpload,
    title: "AWS Cloud Migration",
    description: "Move workloads to AWS with discovery, landing zones, migration waves, and rollback-safe cutovers.",
  },
  {
    icon: CloudCog,
    title: "Cloud Architecture Design",
    description: "Design secure, scalable VPC, compute, storage, CDN, identity, and monitoring foundations.",
  },
  {
    icon: Workflow,
    title: "DevOps Automation",
    description: "Automate infrastructure provisioning, releases, quality gates, and operational workflows.",
  },
  {
    icon: Zap,
    title: "CI/CD Pipelines",
    description: "Build reliable pipelines for faster deployments, approvals, tests, and environment promotion.",
  },
  {
    icon: Boxes,
    title: "Kubernetes Deployment",
    description: "Deploy resilient Kubernetes and container platforms with observability and security controls.",
  },
  {
    icon: Layers3,
    title: "Docker Solutions",
    description: "Containerize applications with efficient images, registries, runtime policies, and rollouts.",
  },
  {
    icon: ServerCog,
    title: "Managed Cloud Operations",
    description: "Operate infrastructure with patching, backups, capacity planning, incident response, and SLAs.",
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description: "Gain visibility across metrics, logs, traces, alerts, uptime, performance, and cloud costs.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Services",
    description: "Strengthen cloud, network, endpoint, and application security with practical controls.",
  },
  {
    icon: LockKeyhole,
    title: "Security Audits & VAPT",
    description: "Identify vulnerabilities, prioritize risk, and remediate gaps across infrastructure and apps.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup & Disaster Recovery",
    description: "Protect business continuity with backup policies, recovery objectives, and DR testing.",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Design, secure, and manage connectivity across offices, cloud networks, VPNs, and firewalls.",
  },
  {
    icon: Code2,
    title: "Web Application Development",
    description: "Develop secure, scalable web platforms and APIs ready for modern cloud deployment.",
  },
  {
    icon: Rocket,
    title: "SaaS Infrastructure",
    description: "Launch SaaS products on cloud-native foundations built for growth, reliability, and compliance.",
  },
  {
    icon: BrainCircuit,
    title: "Generative AI Enablement",
    description: "Implement intelligent agents, GPT workflows, and AI infrastructure aligned to business goals.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Cloud Cost Optimization",
    description: "Apply FinOps visibility, rightsizing, budgets, and governance to improve cloud ROI.",
  },
];

export const differentiators = [
  "AWS-focused expertise with practical enterprise delivery",
  "Security-first architecture across every cloud and network layer",
  "Zero-downtime migration planning and phased implementation",
  "DevOps automation that shortens release cycles and reduces errors",
  "Cloud cost optimization with FinOps discipline and governance",
  "24/7 managed support for infrastructure stability and incident response",
  "Reliable IT infrastructure management across Linux, Windows, and databases",
  "Custom IT solutions tailored to growth goals and operational needs",
];

export const industries = [
  { icon: HeartPulse, title: "Healthcare", description: "Secure patient platforms, uptime-focused infrastructure, backups, and privacy-aware cloud operations." },
  { icon: Landmark, title: "FinTech", description: "Resilient environments, audit-ready controls, observability, encryption, and rapid release pipelines." },
  { icon: Rocket, title: "SaaS", description: "Multi-environment product infrastructure, Kubernetes/ECS, CI/CD, scale planning, and monitoring." },
  { icon: ShoppingCart, title: "eCommerce", description: "High-traffic storefront infrastructure, CDN acceleration, WAF protection, and checkout reliability." },
  { icon: GraduationCap, title: "Education", description: "Cost-efficient cloud platforms for learning portals, content delivery, security, and analytics." },
  { icon: Factory, title: "Manufacturing", description: "Connected operations, network resilience, infrastructure modernization, and secure data platforms." },
  { icon: Zap, title: "Startups", description: "Launch-ready AWS foundations, DevOps automation, scalable architecture, and cost guardrails." },
  { icon: Building2, title: "Enterprise", description: "Governed cloud transformation, managed operations, security assessments, and modernization roadmaps." },
];

export const caseStudies = [
  {
    title: "Healthcare Cloud Migration",
    challenge: "A healthcare platform needed to move legacy workloads without compromising availability or sensitive data controls.",
    solution: "Designed segmented AWS networking, encrypted storage, staged migration waves, managed backups, and observability dashboards.",
    results: ["Low-risk cutover", "Improved backup posture", "Centralized monitoring"],
  },
  {
    title: "DevOps Modernization",
    challenge: "A SaaS team was slowed by manual releases, inconsistent environments, and limited deployment visibility.",
    solution: "Implemented CI/CD pipelines, container standards, IaC workflows, approval gates, and release telemetry.",
    results: ["Faster deployments", "Repeatable environments", "Lower release risk"],
  },
  {
    title: "AWS Infrastructure Optimization",
    challenge: "A growing business needed better performance, reliability, and control over cloud spending.",
    solution: "Audited resources, rightsized compute, added CDN caching, improved alerting, and introduced FinOps reporting.",
    results: ["Cost transparency", "Performance uplift", "Governed scaling"],
  },
  {
    title: "Security Transformation",
    challenge: "An organization needed a practical roadmap for vulnerabilities across network, cloud, and application layers.",
    solution: "Delivered VAPT, remediation guidance, WAF hardening, IAM review, backup validation, and SecOps monitoring practices.",
    results: ["Reduced risk exposure", "Actionable remediation", "Stronger resilience"],
  },
];

export const architectureSteps = [
  "Users",
  "CloudFront CDN",
  "AWS WAF",
  "Load Balancer",
  "Kubernetes / ECS",
  "Data Layer",
  "Monitoring",
  "Backup & DR",
];

export const leadOffers = [
  {
    title: "Free AWS Assessment",
    description: "Review architecture, availability, migration readiness, and scalability opportunities.",
  },
  {
    title: "Free Security Review",
    description: "Assess exposure across cloud, network, access, backups, and application layers.",
  },
  {
    title: "Free Cloud Cost Optimization Review",
    description: "Identify rightsizing, reserved capacity, storage, and governance improvements.",
  },
];

export const testimonials = [
  {
    quote:
      "ByteInfomedia gave our leadership team a clear cloud roadmap and helped us move faster with confidence.",
    name: "IT Director",
    role: "Healthcare Technology Company",
  },
  {
    quote:
      "Their DevOps approach reduced manual release effort and made our infrastructure significantly easier to operate.",
    name: "Founder",
    role: "SaaS Product Business",
  },
  {
    quote:
      "The security assessment was practical, prioritized, and aligned with how our business actually runs.",
    name: "Operations Head",
    role: "FinTech Services Firm",
  },
];

export const insights = [
  "AWS landing zone best practices for growing companies",
  "DevOps automation patterns that reduce release risk",
  "Cloud security essentials for SMEs and enterprises",
  "Kubernetes deployment readiness checklist",
  "Cloud migration planning without downtime",
  "FinOps controls for predictable cloud spending",
];

export const faqs = [
  {
    question: "What is included in ByteInfomedia cloud services?",
    answer:
      "Cloud strategy, AWS architecture, migration planning, infrastructure deployment, monitoring, optimization, security hardening, and managed operations.",
  },
  {
    question: "Can you help migrate existing infrastructure to AWS?",
    answer:
      "Yes. ByteInfomedia plans staged migrations, designs secure target architecture, validates workloads, and supports cutover with minimal disruption.",
  },
  {
    question: "How do the website forms connect to a CRM?",
    answer:
      "Forms support frontend-only HubSpot, Zoho, and Salesforce Web-to-Lead integrations through public environment variables, making submissions CRM-ready without a custom backend.",
  },
  {
    question: "Do you support cybersecurity and VAPT?",
    answer:
      "Yes. Services include comprehensive risk assessments, VAPT, network resilience testing, managed SecOps practices, and remediation guidance.",
  },
];

export const partnerLogos = ["AWS", "Azure", "Cloudflare", "Kubernetes", "Docker", "Datadog"];

export const footerLinks = [
  "AWS Cloud Consulting",
  "DevOps Automation",
  "Cybersecurity",
  "Managed Services",
  "Cloud Migration",
  "Digital Transformation",
];

export const certifications = [
  BadgeCheck,
  LifeBuoy,
  ShieldCheck,
  CloudCog,
];
