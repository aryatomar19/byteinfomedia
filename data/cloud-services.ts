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
    imageAlt: "Enterprise datacenter and cloud infrastructure operations",
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
      imageAlt: "Public cloud platform and AWS-style cloud infrastructure",
    },
    {
      title: "Application Modernization",
      description:
        "Transform legacy applications into modern, cloud-native platforms.",
      image: cloudImages.applicationModernization,
      imageAlt: "Software engineering team modernizing cloud applications",
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
      imageAlt: "Cloud migration and hybrid infrastructure transformation",
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
      imageAlt: "Container orchestration and Kubernetes platform engineering",
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
      imageAlt: "Disaster recovery datacenter and backup infrastructure",
    },
    {
      title: "DevOps Automation",
      description: "CI/CD, infrastructure as code, and release governance at scale.",
      image: cloudImages.devopsAutomation,
      imageAlt: "DevOps automation and CI/CD engineering workflow",
    },
  ] satisfies CloudServiceCard[],
};
