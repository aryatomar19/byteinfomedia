import type { ServicePageData } from "./service-page-types";

export const cyberSecurityPage: ServicePageData = {
  slug: "cyber-security",
  title: "Cyber Security",
  badge: "Security Operations",
  hero: {
    title: "Enterprise Cybersecurity & Cloud Security",
    description:
      "Security assessments, SOC-aligned monitoring, compliance frameworks, and threat detection for cloud-first enterprises.",
    visual: "soc",
  },
  overview:
    "BYTEINFOMEDIA security consultants combine offensive and defensive expertise to reduce risk across AWS, identity, network, and application layers — with practical remediation, not checkbox audits.",
  businessValue: [
    "Prioritize risks based on business impact and exploitability",
    "Align controls to ISO, SOC 2, and industry frameworks",
    "Improve detection and response with SIEM and cloud-native tooling",
    "Harden IAM, network, and data protection across environments",
  ],
  services: [
    { name: "Security Assessment", benefit: "Holistic review of cloud and identity posture" },
    { name: "Vulnerability Assessment", benefit: "Continuous scanning and prioritization" },
    { name: "Penetration Testing", benefit: "Controlled testing of critical assets" },
    { name: "Cloud Security", benefit: "AWS Config, GuardDuty, WAF hardening" },
    { name: "SIEM Monitoring", benefit: "Centralized log analysis and alerting" },
    { name: "Compliance Management", benefit: "Audit readiness and control mapping" },
  ],
  benefits: [
    { title: "Risk-Based Approach", description: "Focus investment on threats that matter to your business." },
    { title: "Cloud-Native Security", description: "Leverage AWS security services with expert configuration." },
    { title: "Continuous Monitoring", description: "Detect anomalies and respond before impact escalates." },
    { title: "Audit Confidence", description: "Documented controls and evidence for compliance reviews." },
  ],
  visualBlocks: [
    { id: "soc", title: "Security Operations Center", description: "Unified threat visibility across cloud, network, and endpoints.", visual: "soc" },
    { id: "threat", title: "Threat Detection Dashboard", description: "Real-time alerts, MITRE mapping, and automated response playbooks.", visual: "threat" },
    { id: "comp", title: "Compliance Framework", description: "Control libraries mapped to ISO 27001, SOC 2, and PCI requirements.", visual: "compliance" },
    { id: "life", title: "Security Lifecycle", description: "Identify → Protect → Detect → Respond → Recover.", visual: "security-lifecycle" },
    { id: "risk", title: "Risk Assessment Workflow", description: "Structured assessment, scoring, and remediation tracking.", visual: "risk" },
  ],
  process: [
    { step: "01", title: "Assess", description: "Scope assets, threats, and control gaps." },
    { step: "02", title: "Prioritize", description: "Risk scoring and remediation roadmap." },
    { step: "03", title: "Remediate", description: "Implement controls and hardening." },
    { step: "04", title: "Monitor", description: "SIEM, alerting, and continuous improvement." },
  ],
  technologies: ["AWS Security Hub", "GuardDuty", "WAF", "SIEM", "CrowdStrike", "Terraform", "Palo Alto", "Okta"],
  outcomes: [
    { metric: "80+", label: "Audits", detail: "Supported annually" },
    { metric: "70%", label: "Risk Reduction", detail: "Avg. remediation" },
    { metric: "<1hr", label: "Alert Triage", detail: "SOC SLA" },
    { metric: "Zero", label: "Trust", detail: "Security-first culture" },
  ],
  caseStudy: {
    title: "Enterprise Cloud Security Hardening",
    challenge: "A regulated enterprise needed rapid security improvement before an external audit.",
    solution: "BYTEINFOMEDIA executed assessment, IAM overhaul, WAF deployment, and SIEM integration.",
    results: ["Closed 94% critical findings in 60 days", "Passed external audit on first attempt", "Reduced alert noise by 60%"],
  },
  faqs: [
    { question: "Do you perform penetration testing?", answer: "Yes — web, API, network, and cloud penetration testing with executive and technical reporting." },
    { question: "Can you help with VAPT compliance?", answer: "We support VAPT-oriented assessments and remediation aligned to regulatory requirements." },
  ],
  cta: {
    title: "Strengthen your security posture",
    description: "Request a security assessment and prioritized remediation roadmap.",
  },
};
