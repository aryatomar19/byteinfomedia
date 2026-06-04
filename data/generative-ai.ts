import type { ServicePageData } from "./service-page-types";

export const generativeAiPage: ServicePageData = {
  slug: "generative-ai",
  title: "Generative AI",
  badge: "Enterprise AI Consulting",
  hero: {
    title: "Generative AI for Enterprise",
    description:
      "Strategy, custom AI solutions, LLM integration, and automation — designed for security, governance, and measurable business outcomes.",
    visual: "ai-workflow",
  },
  overview:
    "BYTEINFOMEDIA helps enterprises move beyond AI pilots to production systems — with secure architecture, RAG patterns, governance, and adoption programs that align with your data and compliance requirements.",
  businessValue: [
    "Define AI strategy aligned to revenue and efficiency goals",
    "Deploy secure LLM integrations with enterprise guardrails",
    "Automate knowledge work with chatbots and workflows",
    "Establish governance for responsible AI adoption",
  ],
  services: [
    { name: "AI Consulting", benefit: "Use-case prioritization and ROI modeling" },
    { name: "Custom AI Solutions", benefit: "Tailored models and application layers" },
    { name: "LLM Integration", benefit: "OpenAI, Bedrock, Microsoft Azure OpenAI connectivity" },
    { name: "Chatbot Development", benefit: "Customer and internal support bots" },
    { name: "RAG & Knowledge Base", benefit: "Enterprise document intelligence" },
    { name: "AI Automation", benefit: "Workflow automation with AI agents" },
  ],
  benefits: [
    { title: "Production-Ready AI", description: "Move from prototype to governed production systems." },
    { title: "Secure by Design", description: "Data isolation, PII handling, and access controls." },
    { title: "Measurable ROI", description: "KPIs and success metrics defined before build." },
    { title: "Vendor Agnostic", description: "Best-fit models across AWS Bedrock and leading LLM APIs." },
  ],
  visualBlocks: [
    { id: "flow", title: "AI Workflow Architecture", description: "End-to-end pipeline from data ingestion to application delivery.", visual: "ai-workflow" },
    { id: "chat", title: "Chatbot Architecture", description: "Conversational AI with RAG, guardrails, and human handoff.", visual: "chatbot" },
    { id: "llm", title: "LLM Integration Flow", description: "Secure API gateways, prompt management, and observability.", visual: "llm-flow" },
    { id: "adopt", title: "Enterprise AI Adoption Journey", description: "Strategy → Pilot → Scale → Govern.", visual: "ai-adoption" },
    { id: "auto", title: "AI Automation Examples", description: "Document processing, support triage, and code assistance.", visual: "ai-automation" },
  ],
  process: [
    { step: "01", title: "Strategy", description: "Use cases, data readiness, risk, and ROI." },
    { step: "02", title: "Prototype", description: "Rapid pilots with success criteria." },
    { step: "03", title: "Integrate", description: "Production APIs, security, and monitoring." },
    { step: "04", title: "Scale", description: "Governance, adoption, and continuous improvement." },
  ],
  technologies: ["AWS Bedrock", "OpenAI", "LangChain", "Python", "Vector DB", "Kubernetes", "FastAPI", "React"],
  outcomes: [
    { metric: "50%", label: "Efficiency", detail: "Support automation" },
    { metric: "10×", label: "Faster", detail: "Document search" },
    { metric: "30+", label: "AI Projects", detail: "Delivered" },
    { metric: "100%", label: "Governed", detail: "Enterprise guardrails" },
  ],
  caseStudy: {
    title: "Enterprise Knowledge Assistant",
    challenge: "A professional services firm needed secure internal search across 50,000+ documents.",
    solution: "BYTEINFOMEDIA built a RAG-based assistant with Bedrock, vector search, and SSO integration.",
    results: ["85% reduction in search time", "Adopted by 400+ employees in 90 days", "Zero data leakage incidents"],
  },
  faqs: [
    { question: "How do you handle data privacy with LLMs?", answer: "We implement data isolation, PII redaction, private endpoints, and policy guardrails for enterprise compliance." },
    { question: "Which LLM platforms do you support?", answer: "AWS Bedrock, OpenAI, Microsoft Azure OpenAI, and open-source models depending on your requirements." },
  ],
  cta: {
    title: "Explore enterprise AI",
    description: "Request a consultation to define your generative AI roadmap.",
  },
};
