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
    title: 'Software Engineer',
    company: 'Symph',
    duration: '12/2024 - Present',
    description: [
      'Architected React component systems for M Lhuillier and Symph products, implementing intuitive interfaces for approval workflows, status tracking, and multi-tier filtering capabilities.',
      'Developed Express.js REST APIs supporting financial transaction processing, automated notifications, and integration with SMS/email services for real-time status updates.',
      'Led proof-of-concept projects integrating Google Vertex AI and Gemini models into web applications, creating intelligent search features and automated content generation capabilities.',
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
