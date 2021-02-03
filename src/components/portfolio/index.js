import React, { useEffect, useState } from "react";
import "./index.scss";
import { fetchPortfolioData } from "../../utils";
// Components
import PortfolioItem from "./portfolio-item";

const Portfolio = ({ id, componentRef }) => {
    const [portfolioItems, setPortfolioItems] = useState(null);

    useEffect(() => {
        fetchPortfolioData()
            .then((res) => {
                setPortfolioItems(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="portfolio sectionItem" id={id} ref={componentRef}>
            <h2 className="sectionItemHeader portfolio">{id}</h2>
            <ul className="portfolio__list">
                {portfolioItems &&
                    portfolioItems.length &&
                    portfolioItems.map((project) => <PortfolioItem key={project.name} project={project} />)}
            </ul>
        </section>
    );
};

export default React.memo(Portfolio);
