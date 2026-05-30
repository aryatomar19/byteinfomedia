export type GenerativeAiCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type GenerativeAiBenefit = {
  title: string;
  description: string;
};

export const generativeAiImages = {
  hero: "/images/ai/hero-ai.jpg",
  customAiAgents: "/images/ai/custom-ai-agents.jpg",
  enterpriseChatbots: "/images/ai/enterprise-chatbots.jpg",
  gptIntegration: "/images/ai/gpt-integration.jpg",
  aiWorkflowAutomation: "/images/ai/ai-workflow-automation.jpg",
  knowledgeManagement: "/images/ai/knowledge-management.jpg",
  aiAnalytics: "/images/ai/ai-analytics.jpg",
  customerSupport: "/images/ai/customer-support.jpg",
  documentIntelligence: "/images/ai/document-intelligence.jpg",
  internalKnowledge: "/images/ai/internal-knowledge.jpg",
  salesAutomation: "/images/ai/sales-automation.jpg",
  aiContentGeneration: "/images/ai/ai-content-generation.jpg",
  businessAnalytics: "/images/ai/business-analytics.jpg",
} as const;

export const generativeAiPageData = {
  badge: "Enterprise AI Solutions",
  hero: {
    title: "Generative AI Solutions For Modern Enterprises",
    description:
      "Build intelligent AI systems, automate workflows, deploy custom chatbots, and unlock business value with enterprise-grade AI consulting.",
    image: generativeAiImages.hero,
    imageAlt: "Generative AI neural network and enterprise AI technology visualization",
    featureTags: [
      "Custom AI Agents",
      "GPT Integration",
      "AI Automation",
      "Enterprise Chatbots",
      "Knowledge Assistants",
    ],
  },
  capabilities: [
    {
      title: "Custom AI Agents",
      description: "Autonomous agents tailored to your workflows, data, and governance requirements.",
      image: generativeAiImages.customAiAgents,
      imageAlt: "Custom AI agents orchestrating enterprise automation workflows",
    },
    {
      title: "Enterprise Chatbots",
      description: "Secure conversational AI for customer and employee support at scale.",
      image: generativeAiImages.enterpriseChatbots,
      imageAlt: "Enterprise chatbot interface with intelligent assistant visualization",
    },
    {
      title: "GPT Integration",
      description: "OpenAI, Azure OpenAI, and AWS Bedrock integrations with enterprise guardrails.",
      image: generativeAiImages.gptIntegration,
      imageAlt: "GPT and large language model integration architecture",
    },
    {
      title: "AI Workflow Automation",
      description: "Automate repetitive processes with intelligent triggers and human-in-the-loop controls.",
      image: generativeAiImages.aiWorkflowAutomation,
      imageAlt: "AI workflow automation pipeline and intelligent process orchestration",
    },
    {
      title: "Knowledge Management AI",
      description: "RAG-powered search across documents, wikis, and institutional knowledge bases.",
      image: generativeAiImages.knowledgeManagement,
      imageAlt: "Knowledge management AI assistant with enterprise document intelligence",
    },
    {
      title: "AI Analytics",
      description: "Predictive insights, anomaly detection, and decision support powered by ML models.",
      image: generativeAiImages.aiAnalytics,
      imageAlt: "AI analytics dashboard with enterprise data intelligence",
    },
  ] satisfies GenerativeAiCard[],
  whyGenerativeAi: [
    {
      title: "Increase Productivity",
      description: "Automate knowledge work and accelerate teams with AI-assisted workflows.",
    },
    {
      title: "Reduce Operational Costs",
      description: "Lower support load and manual processing through intelligent automation.",
    },
    {
      title: "Faster Decision Making",
      description: "Surface insights from data and documents in seconds, not days.",
    },
    {
      title: "Enhanced Customer Experience",
      description: "Deliver instant, accurate responses with governed enterprise chatbots.",
    },
  ] satisfies GenerativeAiBenefit[],
  useCases: [
    {
      title: "Customer Support AI",
      description: "24×7 intelligent support with escalation, sentiment analysis, and CRM integration.",
      image: generativeAiImages.customerSupport,
      imageAlt: "Customer support AI assistant handling enterprise service requests",
    },
    {
      title: "Document Intelligence",
      description: "Extract, classify, and summarize contracts, invoices, and regulatory filings.",
      image: generativeAiImages.documentIntelligence,
      imageAlt: "Document intelligence AI processing enterprise content at scale",
    },
    {
      title: "Internal Knowledge Assistant",
      description: "Secure employee copilot across policies, runbooks, and institutional knowledge.",
      image: generativeAiImages.internalKnowledge,
      imageAlt: "Internal knowledge assistant for enterprise employee self-service",
    },
    {
      title: "Sales Automation",
      description: "AI-assisted prospecting, proposal drafting, and pipeline intelligence.",
      image: generativeAiImages.salesAutomation,
      imageAlt: "Sales automation AI enhancing revenue operations workflows",
    },
    {
      title: "AI Content Generation",
      description: "Governed content creation for marketing, product, and communications teams.",
      image: generativeAiImages.aiContentGeneration,
      imageAlt: "AI content generation for enterprise marketing and communications",
    },
    {
      title: "Business Analytics",
      description: "Natural-language queries and predictive analytics across your data estate.",
      image: generativeAiImages.businessAnalytics,
      imageAlt: "Business analytics AI dashboard with enterprise intelligence metrics",
    },
  ] satisfies GenerativeAiCard[],
  cta: {
    title: "Ready To Build AI-Powered Business Operations?",
  },
};
