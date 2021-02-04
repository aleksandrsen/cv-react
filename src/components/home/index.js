import React from "react";
import "./index.scss";

const Home = ({ id, name, componentRef }) => (
    <section className="home sectionItem" id={id} ref={componentRef}>
        Hello, I'm
        <br />
        {name}
        <br />
        Frontend developer
    </section>
);

export default Home;
