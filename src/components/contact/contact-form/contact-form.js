import React, { useState } from "react";
import "./contact-form.scss";
import { validateEmail, sendEmail } from "../../../utils";
import Spinner from "../../spinner/spinner";

const ContactForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [requestInfo, setRequestInfo] = useState({
        sending: false,
        isSend: false,
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

    const handleChange = ({ target: { name, value } }) => {
        setValues({ ...values, [name]: value });
        setValidate(checkField(name, value));
    };

    const handleFocus = ({ target: { name } }) => setFocused(name);

    const handleBlur = ({ target: { name, value } }) => {
        setFocused(() => "");
        setValidate(() => checkField(name, value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRequestInfo({ ...requestInfo, sending: true });
        sendEmail(values)
            .then((res) => {
                setRequestInfo({ sending: false, isSend: true });
                setValues({ name: "", email: "", message: "" });
            })
            .catch((err) => setRequestInfo({ ...requestInfo, sending: false }));
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
                disabled={
                    !validate.name.isValid ||
                    !validate.email.isValid ||
                    !validate.message.isValid ||
                    requestInfo.sending ||
                    requestInfo.isSend
                }
            >
                Send message {requestInfo.sending && <Spinner />}
            </button>
        </form>
    );
};

export default ContactForm;
