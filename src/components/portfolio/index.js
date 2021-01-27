import React from "react";
import "./index.scss";
// Components
import PortfolioItem from "./portfolio-item";

const Portfolio = ({ id, portfolio, componentRef }) => (
    <section className="portfolio sectionItem" id={id} ref={componentRef}>
        <h2 className="sectionItemHeader portfolio">{id}</h2>
        <ul className="portfolio__list">
            {portfolio.map((project) => (
                <PortfolioItem key={project.name} project={project} />
            ))}
        </ul>
    </section>
);

export default Portfolio;
