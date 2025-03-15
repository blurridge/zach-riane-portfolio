import type { ImageMetadata } from 'astro';

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  link: string;
  companyLogo: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Symph",
    duration: "12/2024 - Present",
    description: [
      "Built responsive React components and UI for M Lhuillier, improving transaction workflows and customer experience.",
      "Developed RESTful APIs and services with Express.js, enabling seamless frontend-backend integration.",
    ],
    link: "",
    companyLogo: "symph_logo.svg"
  },
  {
    title: "Software Engineer",
    company: "Norg.ai",
    duration: "09/2024 - 11/2024",
    description: [
      "Built efficient task pipelines using FastAPI, TaskIQ, and Redis for web crawling, document ingestion, and real-time notifications.",
      "Designed and implemented React components with Storybook for an internal library, enhancing design consistency.",
      "Optimized prompts with OpenAI GPT, Meta Llama, and Anthropic Claude models, improving LLM accuracy and relevance.",
      "Built full-stack features for assistant creation with templates, enabling customized classification workflows with LLMs.",
    ],
    link: "",
    companyLogo: "norg_ai_logo.svg"
  },
  {
    title: "Lead Developer",
    company: "Gard Technologies Inc.",
    duration: "06/2024 - 09/2024",
    description: [
      "Designed and implemented intuitive, responsive mobile interfaces using React Native for 3,000+ active users.",
      "Built and maintained admin-side web applications with Next.js serving 8 security agencies and 38 client locations.",
      "Created an in-house invoice generation system which reduced errors in receivables by 10%.",
      "Integrated OpenAI API functionalities for RAG features for location assistants and report summaries.",
    ],
    link: "",
    companyLogo: "gard_logo.svg"
  },
  {
    title: "Client Success Intern",
    company: "Dashlabs.ai (YC W21)",
    duration: "12/2022 - 03/2023",
    description: [
      "Spearheaded B2C communications for prompt issue resolution and enhanced satisfaction.",
      "Managed meetings and reports for B2C analytics, optimizing strategies.",
      "Contributed to lead generation and client base expansion through effective marketing.",
    ],
    link: "",
    companyLogo: "dashlabs.svg"
  },
]; 