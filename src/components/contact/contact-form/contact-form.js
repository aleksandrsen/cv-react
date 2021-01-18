import React, { useState } from "react";
import "./contact-form.scss";

const ContactForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [focused, setFocused] = useState("");

    const handleChange = ({ target: { name, value } }) => setValues({ ...values, [name]: value });

    const handleFocus = ({ target: { name } }) => setFocused(() => name);

    const handleBlur = (e) => setFocused(() => "");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="contactForm" onSubmit={handleSubmit}>
            <div className={`textInput ${focused === "name" ? "focused" : ""}`}>
                <input
                    className="textInput__input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <div className={`textInput ${focused === "email" ? "focused" : ""}`}>
                <input
                    className="textInput__input"
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Email"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <div className={`textInput ${focused === "message" ? "focused" : ""}`}>
                <textarea
                    className="textInput__input"
                    name="message"
                    value={values.message}
                    placeholder="Message"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            <button type="submit">Send message</button>
        </form>
    );
};

export default ContactForm;
