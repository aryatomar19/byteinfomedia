import type { ServicePageData } from "./service-page-types";

export const cloudServicesPage: ServicePageData = {
  slug: "cloud-services",
  title: "Cloud Services",
  badge: "AWS Advanced Consulting",
  hero: {
    title: "Enterprise AWS & Cloud Transformation",
    description:
      "Architecture-first AWS consulting for landing zones, migration, modernization, FinOps, and governed cloud operations at enterprise scale.",
    visual: "aws-architecture",
  },
  overview:
    "BYTEINFOMEDIA partners with CIOs and platform teams to design secure AWS foundations, execute phased migrations, and establish FinOps and governance models that scale with your business.",
  businessValue: [
    "Accelerate cloud adoption with reduced migration risk",
    "Establish multi-account landing zones aligned to AWS Well-Architected",
    "Improve cost visibility and optimization through FinOps practices",
    "Enable DevOps velocity with container and CI/CD platforms",
  ],
  services: [
    { name: "AWS Consulting", benefit: "Expert-led architecture and roadmap planning" },
    { name: "Cloud Migration", benefit: "Phased workload movement with validation gates" },
    { name: "Landing Zone Design", benefit: "Multi-account governance and guardrails" },
    { name: "FinOps", benefit: "Cost allocation, budgets, and rightsizing" },
    { name: "Kubernetes & Containers", benefit: "EKS/ECS platforms for cloud-native apps" },
    { name: "Disaster Recovery", benefit: "RTO/RPO-aligned backup and failover" },
  ],
  benefits: [
    { title: "Faster Time-to-Value", description: "Structured discovery and migration waves reduce uncertainty and delay." },
    { title: "Security by Design", description: "IAM, network segmentation, and logging built into every architecture." },
    { title: "Operational Excellence", description: "Observability, automation, and runbooks for production readiness." },
    { title: "Cost Governance", description: "Tagging, budgets, and optimization reviews embedded in delivery." },
  ],
  visualBlocks: [
    {
      id: "arch",
      title: "AWS Reference Architecture",
      description: "Production-ready VPC, compute, data, and security layers designed for scale and compliance.",
      visual: "aws-architecture",
    },
    {
      id: "migration",
      title: "Cloud Migration Roadmap",
      description: "Assess → Plan → Migrate → Validate → Optimize — a proven enterprise migration framework.",
      visual: "migration-roadmap",
    },
    {
      id: "landing",
      title: "Landing Zone Architecture",
      description: "Multi-account AWS Organizations structure with centralized logging, IAM, and guardrails.",
      visual: "landing-zone",
    },
    {
      id: "finops",
      title: "FinOps Dashboard",
      description: "Real-time cost visibility, anomaly detection, and rightsizing recommendations.",
      visual: "finops",
    },
    {
      id: "gov",
      title: "Cloud Governance Framework",
      description: "Policies, tagging standards, and compliance controls across your AWS estate.",
      visual: "governance",
    },
  ],
  process: [
    { step: "01", title: "Discover", description: "Workload inventory, dependency mapping, and maturity assessment." },
    { step: "02", title: "Architect", description: "Landing zone, network, security, and migration wave design." },
    { step: "03", title: "Build", description: "Migrate, modernize, and automate with IaC and CI/CD." },
    { step: "04", title: "Operate", description: "Monitor, optimize, and govern with managed support options." },
  ],
  technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "Jenkins", "GitHub Actions", "Prometheus", "Grafana"],
  outcomes: [
    { metric: "40%", label: "Cost Reduction", detail: "FinOps optimization" },
    { metric: "6mo", label: "Migration", detail: "Enterprise timeline" },
    { metric: "99.9%", label: "Uptime", detail: "HA architecture" },
    { metric: "SOC2", label: "Ready", detail: "Compliance alignment" },
  ],
  caseStudy: {
    title: "SaaS Platform AWS Modernization",
    challenge: "A growing SaaS company needed to exit datacenter contracts and establish governed AWS operations.",
    solution: "BYTEINFOMEDIA delivered a landing zone, phased migration, FinOps dashboards, and EKS-based delivery platform.",
    results: ["Completed migration in 5 waves", "32% AWS cost reduction in 90 days", "Automated CI/CD for 40+ services"],
  },
  faqs: [
    { question: "Do you support multi-account AWS Organizations?", answer: "Yes. We design and implement landing zones with centralized logging, IAM, and guardrails across accounts." },
    { question: "Can you help with legacy datacenter migration?", answer: "We assess workloads, build migration waves, and execute with rollback and validation at each stage." },
    { question: "What FinOps capabilities do you provide?", answer: "Cost allocation, budget alerts, rightsizing, reserved instance planning, and executive reporting." },
  ],
  cta: {
    title: "Start your cloud transformation",
    description: "Request a free AWS assessment and receive a practical roadmap from certified consultants.",
  },
};
