import { ExperienceCard } from "@/components/react-components/ExperienceCard";

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  link: string;
}

const experienceArray: Experience[] = [
  {
    title: "Full-stack Web Developer",
    company: "Project Taytayan",
    duration: "12/2023 - Present",
    description: [
      "Modeled NoSQL databases for optimal data organization and efficiency.",
      "Crafted website components with attention to detail and adherence to specifications.",
      "Collaborated with UI/UX designers to translate mockups into functional interfaces.",
      "Implemented industry best practices to optimize codebase efficiency and scalability.",
      "Conducted thorough testing to ensure a seamless user experience.",
      "Provided constructive feedback and contributed to team improvement initiatives.",
    ],
    link: "",
  },
  {
    title: "Data Science Officer",
    company: "Google Developer Student Clubs - University of San Carlos",
    duration: "09/2023 - Present",
    description: [
      "Spearheaded scholarship distribution to 80+ students, providing access to DataCamp's resources.",
      "Monitored scholarship recipients' progress, documenting advancements and providing detailed reports.",
      "Designed tailored assignments to reinforce key concepts in data science for scholarship recipients.",
    ],
    link: "",
  },
  {
    title: "Lead",
    company: "Google Developer Student Clubs - University of San Carlos",
    duration: "08/2022 - 07/2023",
    description: [
      "Led GDSC chapter, providing guidance and fostering collaboration.",
      "Increased member count from 246 to 311.",
      "Successfully hosted 8 events, 6 of which have the most attendees in GDSC San Carlos' top 10.",
      "Accommodated 1000+ participants with an average of 129 per event, covering various topics.",
      "Expanded officer and member portfolio with internships at companies like Dashlabs.ai, Symph.co, and Expedock.",
      "Core team officers accepted leadership roles in GDSC, Notion, and MLSA.",
    ],
    link: "",
  },
  {
    title: "Client Success Intern",
    company: "Dashlabs.ai (YC W21)",
    duration: "12/2022 - 03/2023",
    description: [
      "Spearheaded B2C communications, ensuring prompt resolution of concerns and technical issues, enhancing customer satisfaction.",
      "Managed standup meetings and daily reports for B2C analytics, offering insights to optimize client success strategies.",
      "Contributed to lead generation, expanding the client base through effective marketing techniques.",
    ],
    link: "",
  },
];

export const ExperienceComponent = () => {
  return (
    <div className="w-screen flex flex-col">
      {experienceArray.map((experience, index) => (
        <ExperienceCard
          key={index}
          experience={experience}
          align={index % 2 === 0 ? "right" : "left"}
        />
      ))}
    </div>
  );
};