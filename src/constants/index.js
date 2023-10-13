import { ai, chase, css, discord, figma, git, html, javascript, nextjs, nexxen, nodejs, nypost, postgres, reactjs, redux, tailwind, typescript } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "xp",
    title: "XP",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "JPMorgan Chase",
    icon: chase,
    iconBg: "#FFF",
    date: "2021 - Current",
    points: [
      "Developing and maintaining web applications using React.js, Redux and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Interactive Developer",
    company_name: "Post Studios",
    icon: nypost,
    iconBg: "#CC0000",
    date: "2019 - 2021",
    points: [
      "Intensive usage of HTML, CSS & JavaScript in the creation of fully interactive, immersive advertising experiences.",
      "Use of multiple APIs within creative templates for dynamic data retrieval.",
      " Extend creative platform with custom code integration for a variety of desired effects.",
    ],
  },
  {
    title: "Creative Manager",
    company_name: "Nexxen (Formerly Tremor Video)",
    icon: nexxen,
    iconBg: "#212121",
    date: "2014 - 2018",
    points: [
      "Mentoring junior personnel including instructive sessions, code review and pairing assistance as needed.",
      "Cross-team collaboration with developer and project manager teams in outer offices (Los Angeles, Singapore, London). ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Ideation and integration of custom features with development and engineering support teams targeting multiple formats (Mobile, Desktop & OTT).",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Companion",
    description: "SaaS AI Companion using Next.js, Prisma, Tailwind & Stripe.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/ajohnson1031/ai-companion",
  },
  {
    name: "Discord Clone",
    description:
      "An end-to-end fullstack and real-time discord clone, all with servers, channels, video calls, audio calls, editing and deleting messages as well as member roles.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: discord,
    source_code_link: "https://github.com/ajohnson1031/discord-clone",
  },
];

export { experiences, projects, services, technologies, testimonials };
