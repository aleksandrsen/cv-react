import React from "react";
import "./index.scss";
import { getTitle } from "../../utils";

const Experience = ({ id, experience }) => (
    <section className="experience sectionItem" id={id}>
        <h2 className="sectionItemHeader">{getTitle(id)}</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis debitis deleniti dignissimos et ipsa
            iste maxime, minima necessitatibus neque nisi non pariatur, quae quibusdam rerum sequi similique, soluta
            vitae!
        </p>
        <ul className="experience__list">
            {experience.map(({ orgName, position, period, link, description }) => (
                <li className="experience__listItem" key={orgName}>
                    <div>
                        <div className="experience__listItemIcon">LOGO???</div>
                        <div className="experience__listItemInfo">
                            <div className="orgName">
                                <a href={link} target="blank">
                                    {orgName}
                                </a>
                            </div>
                            <div className="position">{position}</div>
                            <div className="period">{period}</div>
                        </div>
                    </div>
                    <div className="experience__description">{description}</div>
                </li>
            ))}
        </ul>
    </section>
);

export default Experience;
