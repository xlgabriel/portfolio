import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  video,
  c,
  aframe,
  colab,
  maya,
  python,
  unity,
  vagrant,
  vuforia,
  githubblack,
  academia,
  gopance,
  notomorrows,
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
    name: "C",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Vagrant",
    icon: vagrant,
  },
  {
    name: "Vuforia",
    icon: vuforia,
  },
  {
    name: "A-frame",
    icon: aframe,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "GitHub",
    icon: githubblack,
  },
  {
    name: "Colab",
    icon: colab,
  },
  {
    name: "Maya",
    icon: maya,
  },
];

const experiences = [
  {
    title: "Multimedia Systems Development",
    company_name: "I can create complex multimedia ecosystems",
    icon: video,
    iconBg: "#383E56",
    iconLink: "https://youtube.com/watch?v=uG0P2nIrGOM&t",
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
    icon: github,
    iconBg: "#383076",
    iconLink: "https://github.com/xlgabriel/AcademIA",
    date: "Example: AcademIA",
    points: [
      "Concept design, Scrum management, project development, Git, GitHub, Jira, Miro, Taiga, Slack, Microsoft Teams. Engineering knowledge and soft skills.",
      "Collaborating with cross-functional teams including designers, product owners, and other developers to create high-quality products.",
    ],
  },
  {
    title: "IoT and Cloud Computing",
    company_name: "I'm constantly learning in this area",
    icon: github,
    iconBg: "#383E56",
    iconLink: "https://github.com/diegoperea20/Clasification-Reviews",
    date: "Example: IMDB emotions clasificator",
    points: [
      "Virtualization, Provisioning, Containers, Arduino, OSI Model, Packet Tracer, Linux, VirtualBox, Vagrant, Docker, Kubernetes, Puppet, Postman, HTTP, Apache, Nginx, Centos 7, Ubuntu.",
      "I have experience working with Microsoft Azure services like Speech Studio, Azure ML, virtualization and some others.",
    ],
  },
  {
    title: "Artificial Intelligence Development",
    company_name: "I love to apply this emergent technology",
    icon: video,
    iconBg: "#383076",
    iconLink: "https://www.youtube.com/watch?v=oTOu82YL1io",
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
      "A man with many ideas and the ability to carry them out. He helped us a lot everytime he saw the chance, proposing new ways of doing things under his experience and abilities. I definitely recommend him as a person and professional for any job.",
    name: "Cristian Ávalo",
    designation: "General director",
    company: "Rent a car 4 less, located in Miami, Orlando, Fortlauderdale and Houston.",
    image: "https://media.licdn.com/dms/image/D4E03AQFHBZaSlHf8Pw/profile-displayphoto-shrink_800_800/0/1685462514987?e=2147483647&v=beta&t=643sjGcJXm__dOYU7c2ypELpeaia0fINb0iR9j3U9VI",
  },
  {
    testimonial:
      "A great student and undoubtedly a great professional in his field. He always demonstrated in class and with his grades an ability to excel in the areas that he is passionate about and master the ones he needs to master.",
    name: "Andrés Gallego",
    designation: "Multimedia engineering career director",
    company: "Universidad Autónoma de Occidente",
    image: "https://www.uao.edu.co/wp-content/uploads/2020/04/Andrés-Gallego-Small.jpg",
  },
  {
    testimonial:
      "Working with Gabriel helped me to discover a person with a lot of discipline and persistence in each task he takes on. I am still surprised by the way he approaches each problem and his multiple abilities to solve them.",
    name: "Carlos Osorio",
    designation: "NodeJS Developer at Globant, student",
    company: "Universidad Autónoma de Occidente",
    image: "https://media.licdn.com/dms/image/C4E03AQHvmOoZuCE30g/profile-displayphoto-shrink_800_800/0/1537657777340?e=2147483647&v=beta&t=qys6-TrHYGGB0Qg0xl8PBcI4QaCVdrwKGL4e3lNZ3aU",
  },
];

const projects = [
  {
    name: "Go Pance",
    description:
      "UX/UI + Front-end Developer in a web application similar to Rappi or Uber Eats, focused on Pance town in Cali, Colombia. The purpose is to connect the different business and services located here with people around the city, in order to impulse its economy and development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gopance,
    source_code_link: "https://github.com/Johannes910/gopance",
  },
  {
    name: "No Tomorrows",
    description:
      "Main developer of a Survival Horror/Shooter videogame in UE4, based on the book 'All Tomorrows'. We dive into a planet with a post-apocalyptic environment, Stirner must escape to the surface and complete his mission, but he must avoid and face some terrifying enemies.",
    tags: [
      {
        name: "unreal engine 4",
        color: "blue-text-gradient",
      },
      {
        name: "blueprints",
        color: "green-text-gradient",
      },
      {
        name: "game dev",
        color: "pink-text-gradient",
      },
    ],
    image: notomorrows,
    source_code_link: "https://github.com/xlgabriel/NoTomorrows",
  },
  {
    name: "AcademIA",
    description:
      "Working as Scrum Master in a LMS-type open-source collaborative project where the user (teacher, student) can access their academic courses, upload and review multimedia content for educational purposes. It also has Hangouts-style chat, with a plus of AI-type virtual assistant.",
    tags: [
      {
        name: "scrum",
        color: "blue-text-gradient",
      },
      {
        name: "jira",
        color: "green-text-gradient",
      },
      {
        name: "miro",
        color: "pink-text-gradient",
      },
      {
        name: "taiga",
        color: "blue-text-gradient",
      },
    ],
    image: academia,
    source_code_link: "https://github.com/xlgabriel/AcademIA",
  },
];

export { services, technologies, experiences, testimonials, projects };
