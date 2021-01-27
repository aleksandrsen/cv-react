import React from "react";
import "./index.scss";
// Components
import Nav from "../nav";
import Home from "../home";
import About from "../about";
import Skills from "../skills";
import Contact from "../contact";
import Portfolio from "../portfolio";
import Education from "../education";
import Experience from "../experience";
import ScrollContainer from "../ScrollContainer";
// Utils
import Icons from "../../utils/icons";
import { NAVIGATION_ITEMS, MAIN_INFO } from "../../utils/data";

const App = () => (
    <main className="app">
        <Icons />
        <Nav />
        <ScrollContainer>
            <Home id={NAVIGATION_ITEMS[0]} name={MAIN_INFO.about.name} />
            <About id={NAVIGATION_ITEMS[1]} {...MAIN_INFO.about} />
            <Skills id={NAVIGATION_ITEMS[2]} skills={MAIN_INFO.skills} />
            <Experience id={NAVIGATION_ITEMS[3]} experience={MAIN_INFO.experience} />
            <Education id={NAVIGATION_ITEMS[4]} education={MAIN_INFO.education} />
            <Portfolio id={NAVIGATION_ITEMS[5]} portfolio={MAIN_INFO.portfolio} />
            <Contact id={NAVIGATION_ITEMS[6]} contacts={MAIN_INFO.contact} />
        </ScrollContainer>
    </main>
);

export default App;
