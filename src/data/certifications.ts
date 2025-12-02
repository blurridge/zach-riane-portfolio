export interface Certification {
  title: string;
  issuer: string;
  validFrom: string;
  validUntil: string;
  certificationId: string;
  url: string;
  issuerLogo: string;
  description: string[];
}

export const certifications: Certification[] = [
  {
    title: 'Professional Data Engineer',
    issuer: 'Google Cloud',
    validFrom: '12/2025',
    validUntil: '12/2027',
    certificationId: 'e7a93402230b44fdb304bf8f106958d6',
    url: 'https://www.credly.com/badges/48a60f95-8ba3-466c-9a6a-efc58c8f6171/public_url',
    issuerLogo: 'tech-icons/GCP.svg',
    description: [
      'Design and build data processing systems',
      'Prepare and process data for machine learning',
      'Ensure solution quality, security, and scalability',
    ],
  },
  {
    title: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    validFrom: '09/2025',
    validUntil: '09/2027',
    certificationId: 'ed4d9bc7d967494eae8c90922ab5fdc6',
    url: 'https://www.credly.com/badges/5fc1193c-5fb1-4574-a36a-4bbd7b5be6ad/public_url',
    issuerLogo: 'tech-icons/GCP.svg',
    description: [
      'Design and plan cloud solution architecture',
      'Manage and provision cloud solution infrastructure',
      'Design for security and compliance requirements',
    ],
  },
  {
    title: 'Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    validFrom: '03/2025',
    validUntil: '03/2027',
    certificationId: 'eccf2be49baf455183af4ea01abc21a8',
    url: 'https://www.credly.com/badges/aee10280-c1e6-4225-ac5e-e99e02fc6d61/public_url',
    issuerLogo: 'tech-icons/GCP.svg',
    description: [
      'Frame ML problems and architect ML solutions',
      'Prepare and process data for ML models',
      'Develop and operationalize ML models at scale',
    ],
  },
];
