import React from "react";
import "./index.scss";

const Home = ({ id, name, componentRef }) => (
    <section className="home sectionItem" id={id} ref={componentRef}>
        <h1>
            Hello, I'm
            <br />
            {name}
            <br />
            front-end developer
        </h1>
    </section>
);

export default Home;
