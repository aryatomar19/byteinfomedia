export type ProcessStep = { step: string; title: string; description: string };

export type FaqItem = { question: string; answer: string };

export type OutcomeItem = { metric: string; label: string; detail: string };

export type VisualBlock = {
  id: string;
  title: string;
  description: string;
  visual: "aws-architecture" | "migration-roadmap" | "landing-zone" | "finops" | "governance" | "noc" | "monitoring" | "incident" | "support" | "soc" | "threat" | "compliance" | "security-lifecycle" | "risk" | "ai-workflow" | "chatbot" | "llm-flow" | "ai-adoption" | "ai-automation";
};

export type ServicePageData = {
  slug: string;
  title: string;
  badge: string;
  hero: { title: string; description: string; visual: VisualBlock["visual"] };
  overview: string;
  businessValue: string[];
  services: { name: string; benefit: string }[];
  benefits: { title: string; description: string }[];
  visualBlocks: VisualBlock[];
  process: ProcessStep[];
  technologies: string[];
  outcomes: OutcomeItem[];
  caseStudy: { title: string; challenge: string; solution: string; results: string[] };
  faqs: FaqItem[];
  cta: { title: string; description: string };
};
