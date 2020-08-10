import React from "react";
import "./index.scss";
import NavPanel from "../nav-panel";
import Home from "../home";
import About from "../about";

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
};

const App = (props) => (
    <main className="app">
        <NavPanel nav={navigationItems} />
        <div className="app__scrollContainer">
            <Home id={navigationItems[0]} name={info.main.name} />
            <About id={navigationItems[1]} {...info.main} />
            <About id={navigationItems[2]} />
            <About id={navigationItems[3]} />
            <About id={navigationItems[4]} />
            <About id={navigationItems[5]} />
            <About id={navigationItems[6]} />
        </div>
    </main>
);

export default App;
