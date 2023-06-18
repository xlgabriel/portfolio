import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Knowledge",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Multimedia Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "A.I. and Cloud Developer",
    icon: backend,
  },
  {
    title: "Videogame Creator",
    icon: creator,
  },
];

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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Multimedia Systems Development",
    company_name: "I can create complex multimedia ecosystems",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Example: No Tomorrows",
    points: [
      "Game Dev: Unity, Unreal Engine, Godot, C, C#, C++, Java, OOP. AI systems (Tesseract OCR, ONNX, Unity Barracuda, UE4 Trees).",
      "Web Dev: JavaScript, TypeScript, CSS, HTML, React, Node.js, Vite, Three.js, Wordpress, Figma, VS Code, APIs, Web Design.",
      "Content Production: Maya, Blender, Adobe, Canva, Pro Tools.",
    ],
  },
  {
    title: "Multimedia Systems Management",
    company_name: "I have experience working with agile teams",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Example: AcademIA",
    points: [
      "Concept design, Scrum management, project development, Git, GitHub, Jira, Miro, Taiga, Slack, Microsoft Teams. Engineering knowledge and soft skills.",
      "Collaborating with cross-functional teams including designers, product owners, and other developers to create high-quality products.",
    ],
  },
  {
    title: "IoT and Cloud Computing",
    company_name: "I'm constantly learning in this area",
    icon: shopify,
    iconBg: "#383E56",
    date: "Example: IMDB emotions clasificator",
    points: [
      "Virtualization, Provisioning, Containers, Arduino, OSI Model, Packet Tracer, Linux, VirtualBox, Vagrant, Docker, Kubernetes, Puppet, Postman, HTTP, Apache, Nginx, Centos 7, Ubuntu.",
      "I have experience working with Microsoft Azure services like Speech Studio, Azure ML, virtualization and some others.",
    ],
  },
  {
    title: "Artificial Intelligence Development",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Example: Minecraft voice recognition",
    points: [
      "Python, AWS, Colab, Jupyter, HuggingFace, Kaggle, Azure.",
      "Deep Learning, Machine Learning, Tiny ML, Computer Vision, audio and image processing, Prompt Engineering, AI Tools (GPT, Stable Diffusion, Whisper, GANs, etc).",
      "Capable of deploying and working with AI-based products and projects, both as a developer and coordinator.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
