export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  link: string;
  companyLogo: string;
  location: string;
}

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'DTN',
    duration: '09/2026 - Present',
    description: [
      'Develop and maintain a Python/FastAPI weather observations API, supporting multi-source data aggregation and gap filling.',
      'Implement 12-hour aggregation and improve data accuracy through deterministic device selection and merging.',
      'Conduct API performance benchmarking and profiling, identifying database bottlenecks and optimization opportunities.',
      'Investigate and resolve production issues involving data ingestion, aggregation, and API reliability.',
      'Collaborate with cross-functional teams on database migrations, automated testing, code reviews, and deployments.',
    ],
    link: 'https://www.dtn.com/',
    companyLogo: 'dtn_logo.svg',
    location: 'Manila, Philippines',
  },
  {
    title: 'Mid-level Software Engineer',
    company: 'Symph',
    duration: '01/2026 - 09/2026',
    description: [
      "Led end-to-end development of ML ASYS, M Lhuillier's jewelry inventory platform, supporting head-office workflows across 3,000+ branches.",
      'Architected NestJS, BullMQ, Redis/GCP Memorystore, and Cloud Run pipelines to synchronize legacy and modern ASYS data, processing 3,000-5,000 jobs daily.',
      'Increased sync capacity from ~100 to 4,000-8,000 items/day through queue tuning, workload separation, and job processing improvements.',
      'Managed GCP infrastructure across QA through production, including Cloud Run, IAM, Load Balancers, Cloud Armor, and Cloud Build CI/CD.',
      'Improved production observability with trace correlation and structured NestJS logging in Google Cloud Logging.',
      "Shipped a production LLM chatbot for Platename's industrial workers in 14 days through Symph's Speedrun initiative.",
      'Architected multi-agent systems with agent-to-agent workflows, tool integrations, and multi-provider LLM orchestration.',
      'Led Gemini Enterprise proof-of-concepts with clients, validating AI workflows and automation opportunities.',
    ],
    link: 'https://www.symph.co/',
    companyLogo: 'symph_logo.svg',
    location: 'Cebu City, Philippines (Remote)',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Symph',
    duration: '12/2024 - 12/2025',
    description: [
      "Built reusable React systems for M Lhuillier Kwarta Padala X (KPX), supporting the Business Center Administration team's operational and financial workflows.",
      'Implemented financial approvals, status tracking, audit history, role-based access, and multi-tier filtering.',
      'Reduced financial approval turnaround from up to one week to 1-2 days through workflow visibility and process controls.',
      'Developed Express.js and NestJS APIs for financial transactions, automated notifications, and third-party messaging.',
      'Optimized MySQL stored procedures for cash requests, balance tracking, and courier operations.',
    ],
    link: 'https://www.symph.co/',
    companyLogo: 'symph_logo.svg',
    location: 'Cebu City, Philippines (Remote)',
  },
  {
    title: 'Software Engineer',
    company: 'Norg.ai',
    duration: '09/2024 - 11/2024',
    description: [
      'Built efficient task pipelines using FastAPI, TaskIQ, and Redis for web crawling, document ingestion, and real-time notifications.',
      'Designed and implemented React components with Storybook for an internal library, enhancing design consistency.',
      'Optimized prompts with OpenAI GPT, Meta Llama, and Anthropic Claude models, improving LLM accuracy and relevance.',
      'Built full-stack features for assistant creation with templates, enabling customized classification workflows with LLMs.',
    ],
    link: 'https://www.norg.ai/',
    companyLogo: 'norg_ai_logo.svg',
    location: 'Melbourne, Australia (Remote)',
  },
  {
    title: 'Lead Developer',
    company: 'Gard Technologies',
    duration: '06/2024 - 09/2024',
    description: [
      'Designed and implemented intuitive, responsive mobile interfaces using React Native for 3,000+ active users.',
      'Built and maintained admin-side web applications with Next.js serving 8 security agencies and 38 client locations.',
      'Created an in-house invoice generation system which reduced errors in receivables by 10%.',
      'Integrated OpenAI API functionalities for RAG features for location assistants and report summaries.',
    ],
    link: 'https://www.gardtechnologies.com/',
    companyLogo: 'gard_logo.svg',
    location: 'Lexington, Kentucky, USA (Remote)',
  },
  {
    title: 'Client Success Intern',
    company: 'Dashlabs.ai (YC W21)',
    duration: '12/2022 - 03/2023',
    description: [
      'Spearheaded B2C communications for prompt issue resolution and enhanced satisfaction.',
      'Managed meetings and reports for B2C analytics, optimizing strategies.',
      'Contributed to lead generation and client base expansion through effective marketing.',
    ],
    link: 'https://www.dashlabs.ai/',
    companyLogo: 'dashlabs.svg',
    location: 'Manila, Philippines (Remote)',
  },
];
