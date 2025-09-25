// skillsConfig.ts
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiGit, SiDocker 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const skillsConfig = {
  title: "Skills & Expertise",
  centerText: "DEV",
  techIcons: [
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiExpress, color: "#000000", name: "Express" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    { icon: SiGit, color: "#F05032", name: "Git" },
    { icon: SiDocker, color: "#2496ED", name: "Docker" },
    { icon: FaAws, color: "#FF9900", name: "AWS" }
  ],
  skillCategories: [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", level: 90, icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", level: 88, icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", level: 92, icon: SiTailwindcss, color: "#06B6D4" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 93, icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", level: 90, icon: SiExpress, color: "#000000" },
        { name: "MongoDB", level: 87, icon: SiMongodb, color: "#47A248" } // <-- fixed
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85, icon: SiGit, color: "#F05032" },
        { name: "Docker", level: 80, icon: SiDocker, color: "#2496ED" },
        { name: "AWS", level: 75, icon: FaAws, color: "#FF9900" }
      ]
    }
  ]
};
