import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm () {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {

        if (e.target.name=== 'email') {

            const isValid = validateEmail(e.target.value);
           
            if (!isValid) {
                setErrorMessage('Please enter a valid email address');
            } else {
                setErrorMessage('');
            } 
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }

        if (errorMessage) {
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange}  rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );

}

export default ContactForm;