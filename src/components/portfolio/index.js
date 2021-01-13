import React from "react";
import "./index.scss";

import img from "../../utils/preview-6.jpg";

const Portfolio = ({ id, portfolio }) => (
    <section className="portfolio sectionItem" id={id}>
        <h2 className="sectionItemHeader">{id}</h2>
        <ul className="portfolio__list">
            {portfolio.map(({ name, link, git }) => (
                <li>
                    <img src={img} alt={name} />
                    <span>{name}</span>
                    <a href={link}>
                        View online{" "}
                        <svg>
                            <use xlinkHref="#link-icon" />
                        </svg>
                    </a>
                    <a href={git}>
                        Git repository
                        <svg>
                            <use xlinkHref="#link-icon" />
                        </svg>
                    </a>
                </li>
            ))}
        </ul>
    </section>
);

export default Portfolio;
