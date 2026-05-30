import type { ServicePageData } from "./service-page-types";

export const managedServicesPage: ServicePageData = {
  slug: "managed-services",
  title: "Managed Services",
  badge: "24×7 Enterprise Operations",
  hero: {
    title: "Managed Cloud Operations & NOC",
    description:
      "24×7 monitoring, incident response, patching, and infrastructure management for mission-critical AWS and hybrid environments.",
    visual: "noc",
  },
  overview:
    "Our managed services practice operates as an extension of your team — with defined SLAs, runbooks, escalation paths, and proactive optimization across cloud and on-prem workloads.",
  businessValue: [
    "Reduce downtime with 24×7 NOC monitoring and alerting",
    "Free internal teams to focus on product innovation",
    "Improve MTTR with structured incident management",
    "Maintain compliance through patching and backup validation",
  ],
  services: [
    { name: "24×7 Monitoring", benefit: "Real-time observability and alert triage" },
    { name: "Infrastructure Management", benefit: "Proactive maintenance and capacity planning" },
    { name: "Incident Management", benefit: "Severity-based escalation and RCA" },
    { name: "Patch Management", benefit: "Scheduled, tested patching cycles" },
    { name: "Backup Management", benefit: "Validated recovery and retention policies" },
    { name: "Performance Tuning", benefit: "Continuous optimization of workloads" },
  ],
  benefits: [
    { title: "Always-On Coverage", description: "Follow-the-sun and India-based NOC engineers for enterprise SLAs." },
    { title: "Predictable Operations", description: "Documented runbooks, change control, and monthly service reviews." },
    { title: "Faster Resolution", description: "Tiered support with AWS-certified engineers on escalation." },
    { title: "Cost Control", description: "Capacity and spend reviews included in managed engagements." },
  ],
  visualBlocks: [
    { id: "noc", title: "24×7 NOC Dashboard", description: "Unified visibility across cloud, network, and application layers.", visual: "noc" },
    { id: "mon", title: "Monitoring & Alerting", description: "CloudWatch, Prometheus, and custom dashboards with intelligent alerting.", visual: "monitoring" },
    { id: "inc", title: "Incident Response Process", description: "Detect → Triage → Resolve → Review with defined SLAs.", visual: "incident" },
    { id: "sup", title: "Support Model", description: "Tiered support with dedicated customer success and technical leads.", visual: "support" },
  ],
  process: [
    { step: "01", title: "Onboard", description: "Environment discovery, access, monitoring baseline." },
    { step: "02", title: "Stabilize", description: "Alert tuning, runbooks, backup validation." },
    { step: "03", title: "Operate", description: "24×7 monitoring, patching, incident response." },
    { step: "04", title: "Improve", description: "Monthly reviews, optimization, maturity roadmap." },
  ],
  technologies: ["AWS", "CloudWatch", "Prometheus", "Grafana", "PagerDuty", "Terraform", "Linux", "Windows Server"],
  outcomes: [
    { metric: "<15m", label: "P1 Response", detail: "SLA target" },
    { metric: "99.95%", label: "Uptime", detail: "Managed environments" },
    { metric: "24/7", label: "Coverage", detail: "NOC operations" },
    { metric: "500+", label: "Incidents", detail: "Resolved annually" },
  ],
  caseStudy: {
    title: "FinTech Production Operations",
    challenge: "A FinTech platform required 24×7 operations without expanding internal headcount.",
    solution: "BYTEINFOMEDIA deployed NOC monitoring, incident workflows, and monthly optimization reviews.",
    results: ["99.97% uptime over 12 months", "42% reduction in P1 MTTR", "Automated patching for 200+ instances"],
  },
  faqs: [
    { question: "What SLAs do you offer?", answer: "We define P1–P4 response and resolution targets based on your business requirements and environment criticality." },
    { question: "Do you manage hybrid environments?", answer: "Yes — AWS, on-prem, and hybrid workloads with unified monitoring and escalation." },
  ],
  cta: {
    title: "Upgrade your operations",
    description: "Speak with our managed services team about 24×7 coverage and SLAs.",
  },
};
