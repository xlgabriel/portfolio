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
    boga,
    projects_videface,
    rentacar4less,
} from "../assets";

import cristianAvalo from "../assets/cristianavalo.webp";
import carlosOsorio from "../assets/carlososorio.webp";
import valentinaLoaiza from "../assets/valentinaloaiza.webp";

export const navLinks = [
    {
        id: "#about",
        title: "About me",
    },
    {
        id: "#work",
        title: "Projects",
    },
    {
        id: "#contact",
        title: "Contact",
    },
];

export const linkTreeNavLinks = [
    {
        id: "/",
        title: "Portfolio",
    },
    {
        id: "",
        title: "Connect",
    },
    {
        id: "#contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Multimedia Developer",
        icon: web,
    },
    {
        title: "FullStack/DevOps Engineer",
        icon: mobile,
    },
    {
        title: "A.I. and Cloud Developer",
        icon: backend,
    },
    {
        title: "Video game Creator",
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
        title: "LinkScribe | A.I. & Web Dev",
        company_name: "Docker, Vagrant, Kaggle, Edge Impulse, ML Flow, API Rest, JS, Python, React, CSS, HTML, MUI",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/xlgabriel/linkscribe",
        date: "August 2023 - December 2023",
        points: [
            "Effortlessly create, organize, and categorize web links using NLP (Natural Language Processing). Copy and paste links to extract content information, categorize, and search with custom keywords.",
            "Model trained from scratch and used in the backend, connected by API.",
        ],
    },
    {
        title: "AcademIA | Scrum Master",
        company_name:
            "Scrum, Jira, Miro, Taiga, Slack, Notion, KPIs, User Stories, Metrics, Daily Scrum, Sprints, soft skills",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/xlgabriel/academia",
        date: "February 2023 - June 2023",
        points: [
            "LMS-type open-source collaborative project where the user (teacher, student) can access their academic courses, upload and review multimedia content.",
            "It also has Hangouts-style chat, with a plus of AItype virtual assistant integrated inside the system.",
        ],
    },
    {
        title: "Lecturando | A.I. & Game Dev",
        company_name: "Unity, GitHub, GitLab, Miro, Scrum, Doc & Testing, Tesseract OCR, ONNX, Barracuda, Firebase, C#",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://gitlab.com/media-collab/dm2_lecturando",
        date: "February 2022 - December 2022",
        points: [
            "Unity game focused on solving the letter inversion problem (p,q,b,d) detected in kids from schools from Cali, Colombia.",
            "Using image recognition and database in this gamification-based videogame, we offered solutions for teachers to help solving this problem.",
        ],
    },
    {
        title: "GoPance | Front-end Dev",
        company_name: "React, HTML, CSS, JavaScript, Bootstrap, Canva, Netlify, Firebase, Node.js, Postman.",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/Johannes910/gopance",
        date: "August 2022 - December 2022",
        points: [
            "Web application similar to Rappi or Uber Eats, focused on Pance town in Cali, Colombia.",
            "The purpose is to connect the different business and services located here with people around the city to impulse its economy and development.",
        ],
    },
    {
        title: "Minecraft Speech to Text",
        company_name: "Python, CNN, Colab, Jupyter Notebook, ursina, h5py, keras, Speech recognizer, TensorFlow.",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://videface.app",
        date: "August 2022 - December 2022",
        points: [
            "Python-based Minecraft with words recognizer (Convolutional Neural Network), with our own dataset and training.",
            "By saying one of the five words, it changes the block to use within the game.",
            "Great project to learn about speech recognition and A.I. from training to implementation.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "A man with many ideas and the ability to carry them out. We are happy with the software he developed for us. He's always proposing new ways of doing things under his experience and abilities. I definitely recommend him as a person and engineer.",
        name: "Cristian Ávalo",
        designation: "General director",
        company: "Rent a car 4 less, located in Miami, Orlando, Fort Lauderdale and Houston.",
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
            "It's a pleasure to recommend Gabriel due to his exceptional commitment and dedication. His extensive knowledge in software development and artificial intelligence combines to produce impressive projects.",
        name: "Valentina Loaiza",
        designation: "Front-end Developer, Multimedia Engineer, UX/UI Dev",
        company: "VideFace App",
        image: valentinaLoaiza,
        linkedin: "https://www.linkedin.com/in/valentina-loaiza-mejia-4587ba261/",
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
        upper_title: "Fast-growing SaaS with real clients",
        date: "July 2023 - Present",
        name: "VideFace",
        description:
            "Transforms remote sales and customer service. Creation of a web app from scratch ready for commercial use. Build and maintain a scalable, multi-tenant and monetizing product. In charge of the other developers as a CTO and Scrum Master. Supervising the new features, code refactor, infrastructure improvements and more.",
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
                name: "webrtc",
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
            {
                name: "cloudflare",
                color: "text-orange-500",
            },
        ],
        image: projects_videface,
        source_code_link: "https://videface.app",
    },
    {
        upper_title: "Giving real value to the company",
        date: "March 2023 - May 2024",
        name: "Rent a car 4 less",
        description:
            "Development of web-based software to automatize car rental process in the offices. Automate internal processes related to the management of sensitive information. Development of new features on the WordPress page. In charge of social networks management, content creation, user experience and more.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "nodemailer",
                color: "green-text-gradient",
            },
            {
                name: "node.js",
                color: "pink-text-gradient",
            },
            {
                name: "google cloud",
                color: "text-yellow-500",
            },
            {
                name: "react",
                color: "text-orange-500",
            },
            {
                name: "material-ui",
                color: "text-gray-300",
            },
        ],
        image: rentacar4less,
        source_code_link: "https://www.rac4less.com/",
    },
    {
        upper_title: "Getting to know the professional world",
        date: "June 2020 - December 2023",
        name: "BOGA and Electronet",
        description:
            "BOGA and Siluetas Spa: in charge of editing content focused on text and audiovisual elements on a continuous basis for the social networks. Multimedia experiences developer. Electronet: in charge of the creation of the intro to the edition of the Opener and promotion of electronic events, all with high quality audiovisual detail. ",
        tags: [
            {
                name: "premiere pro",
                color: "blue-text-gradient",
            },
            {
                name: "canva",
                color: "green-text-gradient",
            },
            {
                name: "pro tools",
                color: "pink-text-gradient",
            },
            {
                name: "after effects",
                color: "blue-text-gradient",
            },
            {
                name: "adobe media encoder",
                color: "text-yellow-400",
            },
        ],
        image: boga,
        source_code_link: "https://instagram.com/boga.peluqueria",
    },
];

export { services, technologies, experiences, testimonials, projects };
