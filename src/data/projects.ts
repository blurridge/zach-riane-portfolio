import type { ImageMetadata } from 'astro';

export interface Project {
  title: string;
  tools: string[];
  duration: string;
  description: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Image Classification of Omnivores and Herbivores using the CIFAR-100 Dataset',
    tools: ['Python', 'TensorFlow'],
    duration: '03/2024',
    description: [
      'The project aims to classify images into two categories: omnivores and herbivores, utilizing the CIFAR-100 dataset.',
      'After 300 epochs of initial training and transfer learning, the model yielded testing accuracy of 0.79, accompanied by a testing loss of 1.53.',
    ],
    link: 'https://github.com/blurridge/cifar-omni-herbi-ml',
    image: 'cifar.png',
  },
  {
    title: 'Project Taytayan - A Centralized Hub for Trainings and Jobs',
    tools: ['Next.js', 'Tailwind', 'Firebase'],
    duration: '01/2024',
    description: [
      'The web application provides a platform for users to register for different local trainings.',
      'The web application also provides a means for training centers and professionals to help open up employment opportunities for out-of-school youth within the local community through upskilling.',
      'This project was submitted to the 2024 Google Solutions Challenge.',
    ],
    link: 'https://github.com/Lavelliane/project-taytayan-next',
    image: 'taytayan.png',
  },
  {
    title: 'Accred - An On-demand Event E-Certificate Generator Web App',
    tools: ['Next.js', 'Tailwind', 'Firebase'],
    duration: '05/2023',
    description: [
      'Accred automates the certificate generation process and eliminates the need for storing them in the cloud.',
      'It generates certificates on-demand, ensuring that no unnecessary data is stored and saving valuable storage space.',
      'Used in PyCon PH 2024, and in Google Developer Student Clubs - University of San Carlos events.',
    ],
    link: 'https://github.com/blurridge/Accred',
    image: 'accred.png',
  },
  {
    title: 'Singapore Exchange Derivative Downloader',
    tools: ['Python'],
    duration: '05/2023',
    description: [
      'A Python script which downloads daily derivatives from Singapore Exchange.',
      'It accepts Linux commands and config files.',
    ],
    link: 'https://github.com/blurridge/sgx-derivative-downloader',
    image: 'sgx.png',
  },
  {
    title: "Predicting Filipino Students' Employability Based on Mock Interview Results",
    tools: ['Python', 'Sci-kit Learn', 'Seaborn', 'matplotlib', 'pandas'],
    duration: '05/2023',
    description: [
      'A machine learning project predicting Filipino Student employability through Mock Interview Results using Logistic Regression, K-Nearest Neighbors, and Support Vector Machine.',
      'KNN Clasification managed to get the highest accuracy at around 87%, followed by SVM (RBF) at 86%, Logistic Regression at 60%, and SVM (Linear) at 59%.',
    ],
    link: 'https://github.com/blurridge/ph-student-employability-ml',
    image: 'mock.png',
  },
  {
    title: 'Gender and Economic-centric Approach on Life Satisfaction',
    tools: ['Python', 'Seaborn', 'matplotlib', 'pandas'],
    duration: '12/2022',
    description: [
      'Concluded that based on the Pearson Correlation Coefficient, GDP per capita and suicide rate have a very weak, negative linear relationship. This shows that suicide rates are not heavily correlated with the economic status of the country. ',
      'It is proof that suicide can happen in first-world or third-world countries and that the risk of suicide is probable to anyone without relation to their status.',
    ],
    link: 'https://github.com/blurridge/life-satisfaction-analysis',
    image: 'happiness.png',
  },
];
