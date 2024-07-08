import { FiGithub } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { FiLinkedin } from 'react-icons/fi';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { IoLogoInstagram } from 'react-icons/io5';
import HobbyZone from '@/public/hobby-zone.png';
import Oxinos from '@/public/oxinos.png';
import Dispusipda from '@/public/dispusipda.png';
import { Education, Experience, List, Social } from './types';

export const list: List[] = [
    {
        title: 'about',
    },
    {
        title: 'education',
    },
    {
        title: 'experience',
    },
    {
        title: 'project',
    },
    {
        title: 'contact',
    },
];
export const experience: Experience[] = [
    {
        title: 'Oxinos',
        title_full: 'Gebra Kreativa Global (Oxinos) - Backend Developer',
        date: 'July 2023 - Present',
        story: "I am responsible for designing, building, and maintaining the server-side logic of our applications. My primary duties include creating robust and efficient APIs that facilitate seamless communication between different services and the frontend. I focus on developing high-quality code by conducting thorough unit testing to ensure reliability and performance.In addition to API development and testing, I play a crucial role in designing and managing our databases. This involves creating well-structured and optimized database schemas that support the company's data requirements and business processes. I ensure that the database designs are scalable and efficient, enabling smooth data retrieval and storage operations.",
    },
    {
        title: 'Ruang Guru',
        title_full: 'Ruang Guru - English Tutor',
        date: 'Jan 2023 - July 2023',
        story: 'As a part-time English tutor, I facilitated engaging and interactive remote learning experiences for students of various proficiency levels. Leveraging digital platforms and innovative teaching methodologies, I tailored lessons to meet individual student needs and learning objectives. I provided personalized feedback to enhance language skills in reading, writing, speaking, and listening.',
    },
    {
        title: 'Garuda Indonesia',
        title_full: 'Garuda Indonesia - Human Resource Genralist',
        date: 'Jul 2022 - Dec 2022 ',
        story: 'I managed a wide range of HR functions to support organizational goals and enhance employee experience. My responsibilities included recruiting and onboarding new employees, administering benefits and compensation programs, and ensuring compliance with labor laws and company policies. I facilitated employee relations, addressing concerns and resolving conflicts to maintain a positive work environment. ',
    },
];

export const education: Education[] = [
    {
        title: 'Purwadhika Digital School',
        title_full: 'Full Stack Web Developer',
        date: 'Jan 2023 - July 2023',
        story: 'I gained hands-on experience with a variety of front-end and back-end technologies that emphasizes a practical approach and real-world projects that simulate industry scenarios. Gain hands-on experience in building robust and scalable web APIs, working with databases, handling authentication and security, and implementing efficient server-side architecture. creating responsive and visually appealing user interfaces, integrate APIs, handle user interactions, and optimize web performance.',
    },
    {
        title: 'Universitas Pendidikan Indonesia',
        title_full: 'Bachelors Degree - Human Resource Management',
        date: '2015 - 2019',
        story: 'Completed a comprehensive program in Human Resources Management, gaining in-depth knowledge in recruitment and staffing, employee relations, compensation and benefits, labor law compliance, and performance management. Developed strong analytical and interpersonal skills through coursework and practical projects. Prepared to effectively manage HR functions and contribute to organizational success.',
    },
];

export const social: Social[] = [
    {
        icon: FiGithub,
        link: 'https://github.com/Faudhya',
        title: 'Github',
    },
    {
        icon: TbBrandTelegram,
        link: 'https://t.me/faudhya',
        title: 'Telegram',
    },
    {
        icon: IoLogoInstagram,
        link: 'https://www.instagram.com/fauudhya/',
        title: 'Instagram',
    },
    {
        icon: AiOutlineWhatsApp,
        link: 'https://wa.me/6281214741324',
        title: 'WhatsApp',
    },
    {
        icon: FiLinkedin,
        link: 'https://www.linkedin.com/in/faudhy/',
        title: 'Linkedin',
    },
    {
        icon: AiOutlineMail,
        email: 'garaaudhy@gmail.com',
        link: 'mailto:garaaudhy@gmail.com',
        title: 'Email',
    },
];

export const project = [
    {
        title: 'Hobby Zone',
        desc: 'Hobby Zone is my full-stack final project designed as a multi-warehouse platform that sells a variety of hobby-related items. This project encompasses both frontend and backend development to create a seamless and efficient e-commerce experience.',
        tech: [
            'React',
            'ExpressJS',
            'MySQL',
            'Sequelize',
            'Tailwind',
            'Chakra',
        ],
        link: '',
        live: 'https://jcwdol0902.purwadhikabootcamp.com/',
        image: HobbyZone,
    },
    {
        title: 'Oxinos Company Website',
        desc: 'A company profile website for my company I worked for. I took part in the server side. My key responsibilities are designing and implementing RESTful APIs to support various features of the website, creating a well-structured and optimized database schema. ',
        tech: ['NodeJS', 'Sequelize', 'MySQL', 'Postman API'],
        link: '',
        image: Oxinos,
        live: 'https://oxinos.io/',
    },
    {
        title: 'Pusat Literasi Juara',
        desc: 'Pusat Literasi Juara is a website that provide events about books, literature and books forums. I took part in the sever side.',
        tech: ['NodeJS', 'Sequelize', 'MySQL', 'Postman API', 'socket'],
        link: '',
        image: Dispusipda,
        live: 'https://dispusipda.my.id/',
    },
];

export const otherProject = [
    {
        id: 0,
        title: 'Tracking Dashboard',
        desc: 'I created as part of challanges on FrontendMentor. This challanged me to create a responsive design that works seamlessly across both desktop and mobile devices.',
        tech: ['React', 'Tailwind', 'Netlify'],
        link: 'https://github.com/Zeddnyx/timeTrackingDashboard',
        live: 'https://time-tracking-dashboard.netlify.app',
    },
    {
        id: 1,
        title: 'Dashboard App',
        desc: 'A dashboard app built with React and Tailwind CSS. This fully responsive app uses context to manage state, authentication. With a sleek and intuitive user interface.',
        tech: ['React', 'Tailwind', 'Context', 'Vercel'],
        link: 'https://github.com/Zeddnyx/Dashboard',
        live: 'https://dashboard-zeddnyx.vercel.app',
    },
    {
        id: 2,
        title: 'News App',
        desc: 'News App is challanges from FrontendMentor, and this challanges is to make a grid system with responsive design, and get the data using API from NYTIMES',
        tech: ['React', 'Tailwind', 'Netlify'],
        link: 'https://github.com/Zeddnyx/News',
        live: 'https://zedd-news.netlify.app/',
    },
    {
        id: 3,
        title: 'Url Shortly',
        desc: 'A URL shortener built with React and API. With this app, you can quickly and easily shorten any URL to make it more manageable and shareable.',
        tech: ['React', 'Tailwind', 'Netlify'],
        link: 'https://github.com/Zeddnyx/urlShortly',
        live: 'https://zedd-url-shortly.netlify.app/',
    },
];
