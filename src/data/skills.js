import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React.js",
        level: 95,
        icon: FaReact,
      },
      {
        name: "JavaScript",
        level: 92,
        icon: SiJavascript,
      },
      {
        name: "HTML5",
        level: 95,
        icon: FaHtml5,
      },
      {
        name: "CSS3",
        level: 92,
        icon: FaCss3Alt,
      },
      {
        name: "Tailwind CSS",
        level: 90,
        icon: SiTailwindcss,
      },
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        level: 90,
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        level: 88,
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        level: 85,
        icon: SiMongodb,
      },
    ],
  },

  {
    category: "Tools",
    skills: [
      {
        name: "Git",
        level: 90,
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        level: 90,
        icon: FaGithub,
      },
      {
        name: "VS Code",
        level: 95,
        icon: VscVscode,
      },
      {
        name: "Postman",
        level: 90,
        icon: SiPostman,
      },
    ],
  },
];

export default skills;
