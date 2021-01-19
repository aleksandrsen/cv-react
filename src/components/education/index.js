import React from "react";
import "./index.scss";
import certificate from "../../utils/img/certificate.jpg";

const Education = ({ id, education }) => (
    <section className="education sectionItem" id={id}>
        <h2 className="sectionItemHeader">{id}</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis debitis deleniti dignissimos et ipsa
            iste maxime, minima necessitatibus neque nisi non pariatur, quae quibusdam rerum sequi similique, soluta
            vitae!
        </p>
        <ul className="experience__list">
            {education.map(({ name, degree, period, description, iconId }) => (
                <li className="education__listItem" key={name}>
                    <div>
                        <svg className="education__itemIcon" width="80" height="80">
                            <use xlinkHref={iconId} />
                        </svg>
                        <div className="education__listItemInfo">
                            <div className="orgName">{name}</div>
                            <div className="position">
                                {degree ? (
                                    degree
                                ) : (
                                    <a href={certificate} download>
                                        Certificate
                                    </a>
                                )}
                            </div>
                            <div className="period">{period}</div>
                        </div>
                    </div>
                    <div className="education__description">{description}</div>
                </li>
            ))}
        </ul>
    </section>
);

export default Education;
