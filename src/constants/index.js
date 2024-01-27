import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
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
  projects_videface,
  notomorrows,
} from "../assets";

import cristianAvalo from "../assets/cristianavalo.jpg";
import carlosOsorio from "../assets/carlososorio.jpg";

export const navLinks = [
  {
    id: "about",
    title: "Overview",
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
    title: "FullStack Developer",
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
      "Web Dev: JavaScript, CSS, HTML, React, Node.js, Vite, Three.js, Wordpress, Figma, VS Code, APIs, Web Design.",
      "Content Production: Maya, Blender, Adobe, Canva, Pro Tools.",
    ],
  },
  {
    title: "FullStack Development",
    company_name: "Front-end, back-end and everything around",
    icon: github,
    iconBg: "#383076",
    iconLink: "https://videface.netlify.app/about",
    date: "Example: VideFace",
    points: [
      "HTML, CSS, JavaScript, React, Node.js, Firebase, Git, APIs, Web Design, Bootstrap, MUI, Express, Socket, HTTP, WebRTC, MySQL and more.",
      "I have real web applications used by real users and companies. I always try to learn with practice and real projects, so I can improve my skills and knowledge.",
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
      "Virtualization, Containers, Arduino, OSI Model, Packet Tracer, Linux, VirtualBox, Vagrant, Docker, Kubernetes, Puppet, Postman, HTTP, Apache, Nginx, Centos 7, Ubidots, MQTT, NODE-Red.",
      "I've worked with Google Cloud (Cloud Run and App Engine), Microsoft Azure (Speech Studio, Azure ML, virtualization and some others).",
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
      "Python, AWS, Colab, Jupyter, HuggingFace, Kaggle, Azure, Edge Impulse",
      "Deep Learning, Machine Learning, Tiny ML, Computer Vision, audio and image processing, Prompt Engineering, AI Tools (GPTs, Stable Diffusion, Whisper, GANs, etc).",
      "Capable of deploying and working with AI-based products and projects, both as a developer and coordinator.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A man with many ideas and the ability to carry them out. We are happy with the software he developed for us. He's always proposing new ways of doing things under his experience and abilities. I definitely recommend him as a person and engineer.",
    name: "Cristian Ávalo",
    designation: "General director",
    company: "Rent a car 4 less, located in Miami, Orlando, Fortlauderdale and Houston.",
    image: cristianAvalo,
    linkedin: "https://www.linkedin.com/in/cristian-avalo-4less",
  },
  {
    testimonial:
      "A great student and undoubtedly a great professional in his field. He always demonstrated in class and with his grades an ability to excel in the areas that he is passionate about and master the ones he needs to master.",
    name: "Andrés Gallego",
    designation: "Multimedia engineering career director",
    company: "Universidad Autónoma de Occidente",
    image: "https://www.uao.edu.co/wp-content/uploads/2020/04/Andrés-Gallego-Small.jpg",
    linkedin: "https://www.linkedin.com/in/andresfox",
  },
  {
    testimonial:
      "Working with Gabriel helped me to discover a person with a lot of discipline and persistence in each task he takes on. I am still surprised by the way he approaches each problem and his multiple abilities to solve them.",
    name: "Carlos Osorio",
    designation: "NodeJS Developer at Globant, student",
    company: "Universidad Autónoma de Occidente",
    image: carlosOsorio,
    linkedin: "https://www.linkedin.com/in/carlos-ivan-osorio",
  },
];

const projects = [
  {
    upper_title: "+80 active users per day",
    name: "VideFace",
    description:
      "Full stack project used by real companies. Web App using FERN distribution (Firebase, React, Express, Node). communication between company, represented by agents, and users (B2C) through video calls, with different solutions adapted to improve the experience of both the agent and the client.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
      {
        name: "socket.io",
        color: "text-gray-300",
      },
      {
        name: "simple-peer",
        color: "text-green-300",
      },
      {
        name: "cloud run",
        color: "orange-text-gradient",
      },
      {
        name: "node.js",
        color: "text-green-500",
      },
    ],
    image: projects_videface,
    source_code_link: "https://videface.netlify.app/about",
  },
  {
    upper_title: "Some people on the web like it",
    name: "No Tomorrows",
    description:
      "Developer of a Survival Horror/Shooter videogame in UE4, based on the book 'All Tomorrows'. We dive into a planet with a post-apocalyptic environment, Stirner must escape to the surface and complete his mission, but he must avoid and face some terrifying enemies.",
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
      {
        name: "game design",
        color: "text-yellow-500",
      },
      {
        name: "3d",
        color: "text-orange-500",
      },
      {
        name: "storytelling",
        color: "text-gray-300",
      },
    ],
    image: notomorrows,
    source_code_link: "https://www.youtube.com/watch?v=uG0P2nIrGOM&t",
  },
  {
    upper_title: "A project with a lot of potential",
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
      {
        name: "kpis",
        color: "text-yellow-400",
      },
      {
        name: "slack",
        color: "text-gray-300",
      },
      {
        name: "planning poker",
        color: "text-green-400",
      },
      {
        name: "scrum master",
        color: "text-orange-500",
      },
    ],
    image: academia,
    source_code_link: "https://github.com/xlgabriel/AcademIA",
  },
];

export { services, technologies, experiences, testimonials, projects };
