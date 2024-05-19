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
        title: "Multimedia Systems Development",
        company_name: "I can create complex multimedia ecosystems",
        icon: github,
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
        iconLink: "https://videface.app",
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
        date: "March 2023 - Present",
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
        source_code_link: "https://videface.app/",
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
