import img1 from "./img/preview-5.jpg";
import img2 from "./img/preview-7.jpg";
import img from "./img/preview-6.jpg";

export const NAVIGATION_ITEMS = ["home", "about", "skills", "experience", "education", "portfolio", "contact"];

export const MAIN_INFO = {
    about: {
        name: "Oleksandr Oksen",
        email: "aleksandr7en@gmail.com",
        phone: "+38-095-58-31-872",
        birthDate: "30 June 1993",
        address: "Prospekt Nauki, 33, (Kyiv)",
        about:
            "I'm inspired by studying and working in web development. I like implementing modern design in the web with new technologies. I like application development using JavaScript and React.",
    },
    experience: [
        {
            orgName: "Tower IQ",
            position: "Frontend developer",
            period: "Jan 2020 - nowadays",
            link: "https://jobs.dou.ua/companies/toweriq/",
            iconId: "#icon-laptop",
            description:
                "I am working with web application using React, Redux, Redux-Forms, Redux-thunk, React-dnd. A platform for the US market that allows customers to set up various alarm systems, upload building plans, draw walls, place equipment, lay cables and calculate signal coverage for your plan and building, configure equipment, create equipment installations. As a result, customers receive a PDF file of your building with the required signal coverage area and needed equipment.",
        },
        {
            orgName: 'OP "Atomremontservіs" DP NAEK "Energoatom"',
            position: "Repair technician",
            period: "Aug 2015 - Dec 2019",
            link: "http://ars.atom.gov.ua/",
            iconId: "#icon-tool",
            description:
                "I was working with electric machines, motors, electric generators, electrical switches, transformers at all nuclear power plants in our country..",
        },
    ],
    education: [
        {
            name: "React development course (learn.js)",
            degree: "",
            period: "Jun 2019",
            iconId: "#icon-react",
            description:
                "Familiarity with React and its ecosystem. Building Applications with React, Redux. React for SPA, react-router and advanced React APIs.",
        },
        {
            name: "National University of Food Technologies",
            degree: "Master's Degree",
            period: "Sep 2010 - Jun 2015",
            iconId: "#icon-graduation",
            description: "Obtained qualification of Master in Electrical Engineering Systems and Power Consumption.",
        },
    ],
    skills: {
        technical: {
            title: "TECHNICAL SKILLS",
            list: [
                "HTML 5",
                "CSS 3",
                "SCSS",
                "JAVASCRIPT",
                "TYPESCRIPT",
                "GULP",
                "WEBPACK",
                "RESPONSIVE",
                "REDUX HOOKS",
                "REACT",
                "REDUX",
                "REDUX SAGA",
                "REDUX THUNK",
                "WEBSOCKETS",
                "MIDDLEWARE",
                "JIRA",
                "FORMIK",
                "REDUX FORM",
                "REACT DND",
                "BEM",
                "BOOTSTRAP",
                "MATERIAL UI",
                "ANT-DESIGN",
                "NPM",
                "GIT",
                "FIGMA",
                "PHOTOSHOP",
                "AVOCODE",
                "MATERIALIZE",
                "JEST",
            ],
        },
        language: {
            title: "LANGUAGE",
            list: [
                { lang: "EN", level: "intermediate" },
                { lang: "UK", level: "native" },
            ],
        },
    },
    portfolio: [
        { name: "TowerIQ app", link: "https://tiq.cloud/", screenshots: [img1, img2, img] },
        {
            name: "Cocktails shop",
            link: "https://cocktails-shop.herokuapp.com/",
            git: "https://github.com/aleksandrsen/cocktail-shop",
            screenshots: [img1, img2, img],
        },
        {
            name: "React todo list",
            link: "https://my-t0d0-list.herokuapp.com/",
            git: "https://github.com/aleksandrsen/react-todo-list",
            screenshots: [img1, img2, img],
        },
        {
            name: "Js news app",
            link: "https://js-news-app.herokuapp.com/login",
            git: "https://github.com/aleksandrsen/js-news-app",
            screenshots: [img1, img2, img],
        },
        {
            name: "Js countries app",
            link: "https://js-countries-app.herokuapp.com/",
            git: "https://github.com/aleksandrsen/js-countries-app",
            screenshots: [img1, img2, img],
        },
        {
            name: "Waxom landing page",
            link: "https://aleksandrsen.github.io/waxom/",
            git: "https://github.com/aleksandrsen/waxom-landing-page",
            screenshots: [img1, img2, img],
        },
        {
            name: "Brandi landing page",
            link: "https://aleksandrsen.github.io/brandi/",
            git: "https://github.com/aleksandrsen/brandi-landing-page",
            screenshots: [img1, img2, img],
        },
        {
            name: "Bouncy landing page",
            link: "https://aleksandrsen.github.io/bouncy/",
            git: "https://github.com/aleksandrsen/bouncy-landing-page",
            screenshots: [img1, img2, img],
        },
        {
            name: "Thomas Rhythm landing page",
            link: "https://aleksandrsen.github.io/thomas-rhythm/",
            git: "https://github.com/aleksandrsen/thomas-rhythm-landing-page",
            screenshots: [img1, img2, img],
        },
    ],
    contact: [
        { value: "+38-095-58-31-872", iconId: "#icon-phone" },
        { value: "aleksandr7en@gmail.com", iconId: "#icon-email" },
        {
            link: "https://www.linkedin.com/in/aleksandr-oksen",
            iconId: "#icon-linkedin",
        },
        {
            link: "https://github.com/aleksandrsen",
            iconId: "#icon-github",
        },
    ],
};
