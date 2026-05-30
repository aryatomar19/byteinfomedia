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
    imageAlt: "Enterprise data center corridor with server racks and cloud infrastructure lighting",
  },
  capabilities: [
    {
      title: "Private Cloud",
      description:
        "Secure and scalable private cloud environments built for performance, control and compliance.",
      image: cloudImages.privateCloud,
      imageAlt: "Private cloud server racks with enterprise networking and status monitoring",
    },
    {
      title: "Public Cloud",
      description:
        "Flexible and cost-effective cloud solutions designed for growth and innovation.",
      image: cloudImages.publicCloud,
      imageAlt: "Public cloud data center server hardware with enterprise storage and networking",
    },
    {
      title: "Application Modernization",
      description:
        "Transform legacy applications into modern, cloud-native platforms.",
      image: cloudImages.applicationModernization,
      imageAlt: "Cloud-native application code and software modernization engineering",
    },
    {
      title: "FinOps",
      description:
        "Optimize cloud spending and maximize business value with FinOps practices.",
      image: cloudImages.finops,
      imageAlt: "Cloud cost analytics and FinOps financial dashboard",
    },
  ] satisfies CloudServiceCard[],
  additionalServices: [
    {
      title: "Cloud Migration",
      description: "Structured migration programs with validation and minimal business disruption.",
      image: cloudImages.cloudMigration,
      imageAlt: "Cloud migration data center with enterprise server infrastructure",
    },
    {
      title: "Cloud Security",
      description: "Hardened architectures, compliance alignment, and continuous threat visibility.",
      image: cloudImages.cloudSecurity,
      imageAlt: "Cybersecurity operations center and threat monitoring",
    },
    {
      title: "Kubernetes",
      description: "Production-grade container platforms on AWS EKS and managed Kubernetes.",
      image: cloudImages.kubernetes,
      imageAlt: "Kubernetes container orchestration and distributed cloud cluster architecture",
    },
    {
      title: "Containerization",
      description: "Docker-based delivery pipelines and portable workload packaging.",
      image: cloudImages.containerization,
      imageAlt: "Containerized application development and Docker workflow code",
    },
    {
      title: "Disaster Recovery",
      description: "RTO and RPO-aligned backup, failover, and business continuity planning.",
      image: cloudImages.disasterRecovery,
      imageAlt: "Disaster recovery enterprise server infrastructure and resilient data center",
    },
    {
      title: "DevOps Automation",
      description: "CI/CD, infrastructure as code, and release governance at scale.",
      image: cloudImages.devopsAutomation,
      imageAlt: "DevOps automation and CI/CD engineering workflow",
    },
  ] satisfies CloudServiceCard[],
};
