import React from "react";
import "./index.scss";

const About = ({ id, name, email, phone, birthDate, address, about }) => (
    <section className="about sectionItem" id={id}>
        <h2 className="sectionItemHeader">{id}</h2>
        <ul className="about__list">
            <li className="about__infoItem">Name: {name}</li>
            <li className="about__infoItem">Email: {email}</li>
            <li className="about__infoItem">Phone: {phone}</li>
            <li className="about__infoItem">Date of birth: {birthDate}</li>
            <li className="about__infoItem">Address: {address}</li>
        </ul>
        <h2 className="about__profile">Professional profile</h2>
        <p className="about__profileContent">{about}</p>
    </section>
);

export default About;
