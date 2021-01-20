import React from "react";
import "./index.scss";

const Experience = ({ id, experience }) => (
    <section className="experience sectionItem" id={id}>
        <h2 className="sectionItemHeader">{id}</h2>
        <ul className="experience__list">
            {experience.map(({ orgName, position, period, link, description, iconId }) => (
                <li className="experience__listItem" key={orgName}>
                    <div>
                        <svg className="experience__itemIcon" width="80" height="80">
                            <use xlinkHref={iconId} />
                        </svg>
                        <div className="experience__listItemInfo">
                            <div className="orgName">
                                <a href={link} target="blank">
                                    <svg width="16" height="16">
                                        <use xlinkHref="#link-icon" />
                                    </svg>
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
