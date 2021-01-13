import React from "react";
import "./index.scss";
// Components
import Home from "../home";
import About from "../about";
import Skills from "../skills";
import NavPanel from "../nav-panel";
import Portfolio from "../portfolio";
import Education from "../education";
import Experience from "../experience";
// Utils
import Icons from "../../utils/icons";
import { NAVIGATION_ITEMS, MAIN_INFO } from "../../utils/data";

const App = () => (
    <main className="app">
        <Icons />
        <NavPanel nav={NAVIGATION_ITEMS} name={MAIN_INFO.main.name} />
        <div className="app__scrollContainer">
            <Home id={NAVIGATION_ITEMS[0]} name={MAIN_INFO.main.name} />
            <About id={NAVIGATION_ITEMS[1]} {...MAIN_INFO.main} />
            <Skills id={NAVIGATION_ITEMS[2]} skills={MAIN_INFO.skills} />
            <Experience id={NAVIGATION_ITEMS[3]} experience={MAIN_INFO.experience} />
            <Education id={NAVIGATION_ITEMS[4]} education={MAIN_INFO.education} />
            <Portfolio id={NAVIGATION_ITEMS[5]} portfolio={MAIN_INFO.portfolio} />
            <About id={NAVIGATION_ITEMS[6]} />
        </div>
    </main>
);

export default App;
