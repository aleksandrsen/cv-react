import React, { useState } from "react";
import "./contact-form.scss";
import { validateEmail } from "../../../utils";

const ContactForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [focused, setFocused] = useState("");

    const [validate, setValidate] = useState({
        name: {
            touched: false,
            isValid: false,
        },
        email: {
            touched: false,
            isValid: false,
        },
        message: {
            touched: false,
            isValid: false,
        },
    });

    const handleChange = ({ target: { name, value } }) => {
        setValues({ ...values, [name]: value });
        setValidate(checkField(name, value));
    };

    const handleFocus = ({ target: { name } }) => setFocused(name);

    const checkField = (field, value) => {
        let isValid = true;
        const res = { ...validate };

        if ((field === "name" || field === "message") && !value) isValid = false;
        if (field === "email" && validateEmail(value)) isValid = false;

        if (!isValid) {
            res[field].touched = true;
            res[field].isValid = false;
        } else {
            res[field].touched = true;
            res[field].isValid = true;
        }

        return res;
    };

    const handleBlur = ({ target: { name, value } }) => {
        setFocused(() => "");
        setValidate(() => checkField(name, value));
    };

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
                {validate.name.touched && !validate.name.isValid && (
                    <span className="textInput__error">This field is required</span>
                )}
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
                {validate.email.touched && !validate.email.isValid && (
                    <span className="textInput__error">
                        {!values.email ? "This field is required" : "Email is invalid"}
                    </span>
                )}
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
                {validate.message.touched && !validate.message.isValid && (
                    <span className="textInput__error">This field is required</span>
                )}
            </div>
            <button
                type="submit"
                disabled={!validate.name.isValid || !validate.email.isValid || !validate.message.isValid}
            >
                Send message
            </button>
        </form>
    );
};

export default ContactForm;
