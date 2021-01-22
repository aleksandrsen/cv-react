import React from "react";
import "./index.scss";

const Home = ({ id, name }) => (
    <section className="home sectionItem" id={id}>
        <h1 className="sectionItemHeader">
            Hello, I'm
            <span>{name}</span>
        </h1>
        <div className="position">Frontend developer</div>
    </section>
);

export default Home;
