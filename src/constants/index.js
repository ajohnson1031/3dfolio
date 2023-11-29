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
    title: "Sr. Software Engineer",
    company_name: "JPMorgan Chase",
    icon: chase,
    iconBg: "#FFF",
    date: "2020 - Current",
    points: [
      "Break down complex requirements into independent coding tasks and strategies",
      "Develop high-quality, enterprise-scale web applications that operate across a secure and reliable infrastructure",
      "Diagnose and fix bugs, investigate performance bottlenecks, and have a proactive approach to maintaining our systems and applications",
      "Work cross-collaboratively with UX/UI, Product, Project Management & Executive teams efficiently on multiple priorities",
      "Mentor junior developers through code pairing, PR reviews and CI/CD workflow debugging",
    ],
  },
  {
    title: "Interactive Developer",
    company_name: "Post Studios",
    icon: nypost,
    iconBg: "#CC0000",
    date: "2018 - 2021",
    points: [
      "Create visually appealing and user-friendly ad campaigns for both the website and mobile app, ensuring a seamless and consistent experience across different platforms",
      "Utilize design best practices to optimize layouts, typography, colors, and imagery to enhance usability and overall aesthetics",
      "Work independently to explore concepts from beginning to end",
      "Collaborate, brainstorm, and strategize with internal teams for a wide range of deliverables",
    ],
  },
  {
    title: "Creative Manager",
    company_name: "Nexxen (Formerly Tremor Video)",
    icon: nexxen,
    iconBg: "#212121",
    date: "2014 - 2018",
    points: [
      "Develop creative strategies that drive action, set us apart and evolve based on performance and fresh insights",
      "Track and communicate best-in-class and innovative creative approaches in the market to keep up-to-date with industry trends",
      "Collaborate deeply with design, marketing strategy, product management, customer experience and other cross-company departments",
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
    demo_link: "https://ai-companion-three-mu.vercel.app/",
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
    demo_link: "https://discord-clone-production-7965.up.railway.app/",
  },
];

export { experiences, projects, services, technologies, testimonials };
