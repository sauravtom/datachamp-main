import React from 'react'
import react, { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const sendEmail = (email, name, message) => {
        setLoading(true);
        const templateParams = {
            from_name: email,
            to_name: name,
            receiver_email: 'saurav.kumar@favcy.in',
            message: message
        };

        emailjs
            .send(
                "service_ti90q0o",
                "template_r0j2n7e",
                templateParams,
                "ZUt0dcGRzZT5HlzKz"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    setLoading(false)
                    toast.success("Mail sent.")
                },
                function (error) {
                    console.log("FAILED...", error);
                    setLoading(false)
                    toast.error("Mail sent failed")
                }
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = e.target[0].value;
        let email = e.target[1].value;
        let message = e.target[2].value;
        console.log(name, email, message);

        try {
            sendEmail(email, name, message);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container mx-auto max-w-lg">
            <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
                <h2 className='text--center'>Contact Us</h2>
                <input id="name" placeholder="Your Name" required type="text" />
                <input id="email" placeholder="Your Email" required type="email" />
                <textarea id="message" rows={5} placeholder="Your Message" required />
                <button disabled={loading} type="submit">{loading ? "sending mail..." : "Submit"}</button>
            </form>
        </div>
    )
}

export default ContactForm