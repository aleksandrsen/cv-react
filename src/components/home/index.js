import React from "react";
import "./index.scss";

const Home = ({ id, name }) => {
    return (
        <section className="home sectionItem" id={id}>
            <h1 className="sectionItemHeader">Hello, I'm {name}</h1>
            <div className="position">Frontend developer</div>
        </section>
    );
};

export default Home;
