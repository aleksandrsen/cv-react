import React from "react";
import "./index.scss";
import NavPanel from "../nav-panel";
import Home from "../home";
import About from "../about";
import Experience from "../experience";

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
            description:
                "I am working with web application using React, Redux, Redux-Forms, Redux-thunk, React-dnd. A platform for the US market that allows customers to set up various alarm systems, upload building plans, draw walls, place equipment, lay cables and calculate signal coverage for your plan and building, configure equipment, create equipment installations. As a result, customers receive a PDF file of your building with the required signal coverage area and needed equipment.",
        },
        {
            orgName: 'OP "Atomremontservіs" DP NAEK "Energoatom"',
            position: "Repair technician",
            period: "Aug 2015 - Dec 2019",
            link: "http://ars.atom.gov.ua/",
            description:
                "I was working with electric machines, motors, electric generators, electrical switches, transformers at all nuclear power plants in our country..",
        },
    ],
};

const App = (props) => (
    <main className="app">
        <NavPanel nav={navigationItems} />
        <div className="app__scrollContainer">
            <Home id={navigationItems[0]} name={info.main.name} />
            <About id={navigationItems[1]} {...info.main} />
            <About id={navigationItems[2]} />
            <Experience id={navigationItems[3]} experience={info.experience} />
            <About id={navigationItems[4]} />
            <About id={navigationItems[5]} />
            <About id={navigationItems[6]} />
        </div>
    </main>
);

export default App;
