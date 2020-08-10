import React from "react";
import "./index.scss";
import { getTitle } from "../../utils";

const About = ({ id, name, email, phone, birthDate, address, about }) => (
    <section className="about sectionItem" id={id}>
        <h2 className="sectionItemHeader">{getTitle(id)}</h2>
        <ul className="about__list">
            <li className="about__infoItem">Name: {name}</li>
            <li className="about__infoItem">Email: {email}</li>
            <li className="about__infoItem">Phone: {phone}</li>
            <li className="about__infoItem">Date of birth: {birthDate}</li>
            <li className="about__infoItem">Address: {address}</li>
        </ul>
        <h2 className="about__profile">Professional profile</h2>
        <p className="about__profileContent">
            I'm inspired by studying and working in web development. I like implementing modern design in the web with
            new technologies. I like application development using JavaScript and React.
        </p>
    </section>
);

export default About;
