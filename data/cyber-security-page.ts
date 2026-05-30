export type CyberSecurityCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const cyberImages = {
  hero: "/images/cyber/hero-cyber.jpg",
  threatDetection: "/images/cyber/threat-detection.jpg",
  vulnerabilityAssessment: "/images/cyber/vulnerability-assessment.jpg",
  soc: "/images/cyber/soc.jpg",
  compliance: "/images/cyber/compliance.jpg",
  cloudSecurity: "/images/cyber/cloud-security.jpg",
  penetrationTesting: "/images/cyber/penetration-testing.jpg",
} as const;

export const cyberSecurityPageData = {
  badge: "Enterprise Security",
  hero: {
    title: "Enterprise Cyber Security",
    description:
      "Threat detection, vulnerability management, SOC operations, and compliance programs for cloud-first enterprises.",
    image: cyberImages.hero,
    imageAlt: "Cybersecurity operations center with threat monitoring dashboards",
  },
  services: [
    {
      title: "Threat Detection",
      description:
        "Continuous monitoring, SIEM correlation, and automated alerting to surface attacks before impact.",
      image: cyberImages.threatDetection,
      imageAlt: "Security analyst reviewing real-time threat detection alerts",
    },
    {
      title: "Vulnerability Assessment",
      description:
        "Structured scanning, risk prioritization, and remediation tracking across cloud and on-prem assets.",
      image: cyberImages.vulnerabilityAssessment,
      imageAlt: "Vulnerability assessment dashboard with prioritized security findings",
    },
    {
      title: "Security Operations Center",
      description:
        "24×7 SOC coverage with playbooks, escalation paths, and integrated cloud-native security tooling.",
      image: cyberImages.soc,
      imageAlt: "Security operations center with multi-screen SOC monitoring",
    },
    {
      title: "Compliance Management",
      description:
        "Control mapping, evidence collection, and audit readiness for ISO, SOC 2, and industry frameworks.",
      image: cyberImages.compliance,
      imageAlt: "Compliance management analytics and governance reporting",
    },
    {
      title: "Cloud Security",
      description:
        "AWS and Azure hardening, IAM governance, GuardDuty, and workload protection at scale.",
      image: cyberImages.cloudSecurity,
      imageAlt: "Cloud security architecture and multi-cloud protection controls",
    },
    {
      title: "Penetration Testing",
      description:
        "Controlled offensive testing of applications, APIs, and infrastructure with executive reporting.",
      image: cyberImages.penetrationTesting,
      imageAlt: "Penetration testing and ethical hacking security assessment",
    },
  ] satisfies CyberSecurityCard[],
};
