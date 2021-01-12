import React from "react";
import "./index.scss";
// Components
import Home from "../home";
import About from "../about";
import Skills from "../skills";
import NavPanel from "../nav-panel";
import Education from "../education";
import Experience from "../experience";
// Utils
import Icons from "../../utils/icons";

const navigationItems = ["home", "about", "skills", "experience", "education", "portfolio", "contact"];

const info = {
    main: {
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
            name: "National University of Food Technologies",
            degree: "Master's Degree",
            period: "Sep 2010 - Jun 2015",
            description: "Obtained qualification of Master in Electrical Engineering Systems and Power Consumption.",
        },
        {
            name: "React development course (learn.js)",
            degree: "",
            period: "Sep 2010 - Jun 2015",
            description:
                "Familiarity with React and its ecosystem. Building Applications with React, Redux. React for SPA, react-router and advanced React APIs.",
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
                { lang: "UR RU", level: "native" },
            ],
        },
    },
};

const App = () => (
    <main className="app">
        <Icons />
        <NavPanel nav={navigationItems} name={info.main.name} />
        <div className="app__scrollContainer">
            <Home id={navigationItems[0]} name={info.main.name} />
            <About id={navigationItems[1]} {...info.main} />
            <Skills id={navigationItems[2]} skills={info.skills} />
            <Experience id={navigationItems[3]} experience={info.experience} />
            <Education id={navigationItems[4]} education={info.education} />
            <About id={navigationItems[5]} />
            <About id={navigationItems[6]} />
        </div>
    </main>
);

export default App;
