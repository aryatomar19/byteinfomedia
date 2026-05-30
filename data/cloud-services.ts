export type CloudServiceCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const cloudImages = {
  hero: "/images/cloud/hero-cloud.jpg",
  privateCloud: "/images/cloud/private-cloud.jpg",
  publicCloud: "/images/cloud/public-cloud.jpg",
  applicationModernization: "/images/cloud/application-modernization.jpg",
  finops: "/images/cloud/finops.jpg",
  cloudMigration: "/images/cloud/cloud-migration.jpg",
  cloudSecurity: "/images/cloud/cloud-security.jpg",
  kubernetes: "/images/cloud/kubernetes.jpg",
  containerization: "/images/cloud/containerization.jpg",
  disasterRecovery: "/images/cloud/disaster-recovery.jpg",
  devopsAutomation: "/images/cloud/devops-automation.jpg",
} as const;

export const cloudServicesPage = {
  badge: "AWS Advanced Consulting",
  hero: {
    title: "Enterprise Cloud Services",
    description:
      "Architecture-led AWS consulting for private and public cloud, modernization, FinOps, and secure operations.",
    image: cloudImages.hero,
    imageAlt: "Enterprise multi-cloud infrastructure and global cloud network",
  },
  capabilities: [
    {
      title: "Private Cloud",
      description:
        "Secure and scalable private cloud environments built for performance, control and compliance.",
      image: cloudImages.privateCloud,
      imageAlt: "Enterprise private datacenter and secure cloud infrastructure",
    },
    {
      title: "Public Cloud",
      description:
        "Flexible and cost-effective cloud solutions designed for growth and innovation.",
      image: cloudImages.publicCloud,
      imageAlt: "Enterprise public cloud platform and multi-cloud services",
    },
    {
      title: "Application Modernization",
      description:
        "Transform legacy applications into modern, cloud-native platforms.",
      image: cloudImages.applicationModernization,
      imageAlt: "Application modernization and transformation",
    },
    {
      title: "FinOps",
      description:
        "Optimize cloud spending and maximize business value with FinOps practices.",
      image: cloudImages.finops,
      imageAlt: "Cloud cost optimization and FinOps",
    },
  ] satisfies CloudServiceCard[],
  additionalServices: [
    {
      title: "Cloud Migration",
      description: "Structured migration programs with validation and minimal business disruption.",
      image: cloudImages.cloudMigration,
      imageAlt: "Cloud migration and hybrid to cloud transformation",
    },
    {
      title: "Cloud Security",
      description: "Hardened architectures, compliance alignment, and continuous threat visibility.",
      image: cloudImages.cloudSecurity,
      imageAlt: "Cloud security operations and secure infrastructure",
    },
    {
      title: "Kubernetes",
      description: "Production-grade container platforms on AWS EKS and managed Kubernetes.",
      image: cloudImages.kubernetes,
      imageAlt: "Kubernetes orchestration",
    },
    {
      title: "Containerization",
      description: "Docker-based delivery pipelines and portable workload packaging.",
      image: cloudImages.containerization,
      imageAlt: "Docker containers and DevOps container workflow",
    },
    {
      title: "Disaster Recovery",
      description: "RTO and RPO-aligned backup, failover, and business continuity planning.",
      image: cloudImages.disasterRecovery,
      imageAlt: "Backup infrastructure and disaster recovery environment",
    },
    {
      title: "DevOps Automation",
      description: "CI/CD, infrastructure as code, and release governance at scale.",
      image: cloudImages.devopsAutomation,
      imageAlt: "DevOps automation and pipelines",
    },
  ] satisfies CloudServiceCard[],
  faqs: [
    {
      question: "Do you support multi-account AWS Organizations?",
      answer: "Yes. We design landing zones with centralized logging, IAM, and guardrails across accounts.",
    },
    {
      question: "Can you help with legacy datacenter migration?",
      answer: "We assess workloads, plan migration waves, and execute with validation at every stage.",
    },
    {
      question: "What FinOps capabilities do you provide?",
      answer: "Cost allocation, budget alerts, rightsizing, reserved capacity planning, and executive reporting.",
    },
  ],
  cta: {
    title: "Start your cloud transformation",
    description: "Request a free assessment and receive a practical roadmap from certified consultants.",
  },
};
