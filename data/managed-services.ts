import type { ServiceImageCardData } from "@/components/sections/ServiceImageCard";

export type ManagedFeature = {
  title: string;
  description: string;
};

export type ManagedProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const managedImages = {
  hero: "/images/managed/hero-managed.jpg",
  monitoring: "/images/managed/monitoring.jpg",
  patchManagement: "/images/managed/patch-management.jpg",
  infrastructure: "/images/managed/infrastructure.jpg",
  backupManagement: "/images/managed/backup-management.jpg",
  cloudOperations: "/images/managed/cloud-operations.jpg",
  incidentResponse: "/images/managed/incident-response.jpg",
} as const;

export const managedServicesPage = {
  badge: "24×7 MANAGED OPERATIONS",
  hero: {
    title: "Managed Cloud Services",
    description:
      "Proactive cloud operations, monitoring, incident response, patch management, and infrastructure support for AWS, Azure, and hybrid environments.",
    image: managedImages.hero,
    imageAlt: "Network operations center with live infrastructure monitoring",
  },
  coreServices: [
    {
      title: "24×7 Monitoring",
      description: "Real-time observability, alerting, and proactive triage across your cloud estate.",
      image: managedImages.monitoring,
      imageAlt: "NOC monitoring wall with real-time cloud dashboards",
    },
    {
      title: "Patch Management",
      description: "Scheduled, tested patching cycles with change control and compliance reporting.",
      image: managedImages.patchManagement,
      imageAlt: "Server infrastructure and security patch management",
    },
    {
      title: "Infrastructure Management",
      description: "Capacity planning, configuration management, and ongoing platform health.",
      image: managedImages.infrastructure,
      imageAlt: "Enterprise cloud infrastructure operations center",
    },
    {
      title: "Backup Management",
      description: "Validated backups, retention policies, and recovery readiness for critical workloads.",
      image: managedImages.backupManagement,
      imageAlt: "Secure backup storage and data replication systems",
    },
    {
      title: "Cloud Operations",
      description: "Day-to-day AWS and Azure operations aligned to your SLAs and runbooks.",
      image: managedImages.cloudOperations,
      imageAlt: "Cloud engineers monitoring enterprise infrastructure",
    },
    {
      title: "Incident Response",
      description: "Structured escalation, root-cause analysis, and rapid restoration of services.",
      image: managedImages.incidentResponse,
      imageAlt: "Security operations team responding to live incidents",
    },
  ] satisfies ServiceImageCardData[],
  whyManaged: [
    { title: "Proactive Monitoring", description: "Detect issues before they impact users or revenue." },
    { title: "24×7 Support", description: "Follow-the-sun coverage with defined response SLAs." },
    { title: "Incident Management", description: "Severity-based workflows from alert to resolution." },
    { title: "Patch Compliance", description: "Maintain security posture with governed patching." },
    { title: "Backup Validation", description: "Prove recoverability with tested restore procedures." },
    { title: "Performance Optimization", description: "Continuous tuning for stability and efficiency." },
    { title: "Cost Governance", description: "Spend visibility and optimization built into operations." },
    { title: "Security Monitoring", description: "Integrated threat visibility across cloud workloads." },
  ] satisfies ManagedFeature[],
  process: [
    { step: "01", title: "Assess", description: "Environment discovery, SLA alignment, and operational maturity review." },
    { step: "02", title: "Onboard", description: "Access, monitoring baselines, runbooks, and escalation paths." },
    { step: "03", title: "Operate", description: "24×7 monitoring, patching, incidents, and platform care." },
    { step: "04", title: "Optimize", description: "Monthly reviews, cost tuning, and continuous improvement." },
  ] satisfies ManagedProcessStep[],
};
