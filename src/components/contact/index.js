import React from "react";
import "./index.scss";
import ContactForm from "./contact-form/contact-form";

const Contact = ({ id, contacts, componentRef }) => (
    <section className="contact sectionItem" id={id} ref={componentRef}>
        <h2 className="sectionItemHeader">{id}</h2>
        <div className="contact__content">
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
            <ContactForm />
        </div>
    </section>
);

export default React.memo(Contact);
