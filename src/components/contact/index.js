import React from "react";
import "./index.scss";

const Contact = ({ id, contacts }) => (
    <section className="contact sectionItem" id={id}>
        <h2 className="sectionItemHeader">{id}</h2>
        <ul className="contact__list">
            {contacts.map(({ value, iconId, link }) => (
                <li className="contact__infoItem" key={iconId}>
                    <svg width="18" height="18">
                        <use xlinkHref={iconId} />
                    </svg>
                    {link ? (
                        <a href={link} target="blank">
                            {link}
                        </a>
                    ) : (
                        `${value}`
                    )}
                </li>
            ))}
        </ul>
    </section>
);

export default Contact;
