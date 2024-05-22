import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactDOMServer from "react-dom/server";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import ContactEmailTemplate from "./ContactEmailTemplate";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    });

    const emailContact = ReactDOMServer.renderToString(<ContactEmailTemplate message={form.message} />);
    const emailConfig = {
        subject: `Thank You for Contacting me, ${form.name.split(" ")[0]} 🚀`,
        from: "Gabriel Jeannot",
        receiverEmail1: "gabriel.jeannot.personal@gmail.com",
    };

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasErrors = false;
        const newErrors = {
            name: form.name === "",
            email: form.email === "",
            message: form.message === "",
        };

        if (newErrors.name || newErrors.email || newErrors.message) {
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            return;
        }

        setLoading(true);

        const data = {
            name: form.name,
            email: form.email,
            companyId: "Gabriel",
            office: "Portfolio",
            emailConfig: emailConfig,
            htmlContactTemplate: emailContact,
        };

        fetch("https://videface-carinspection-backend-gy5kmoo55q-vp.a.run.app/send-contact-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then(
                () => {
                    setLoading(false);
                    setEmailSent(true);

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert(
                        "Ahh, something went wrong. Kindly notify me that the email service is not working so I can fix it ASAP!"
                    );
                }
            );
    };

    return (
        <div id="contact" className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact me.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nice to meet you! 🤝"
                            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                                errors.name ? "border-red-500" : ""
                            }`}
                        />
                        {errors.name && <span className="text-red-500">Please, write your name here.</span>}
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Won't spam you! 🙌"
                            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                                errors.email ? "border-red-500" : ""
                            }`}
                        />
                        {errors.email && <span className="text-red-500">Don't forget to write your email.</span>}
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                                errors.message ? "border-red-500" : ""
                            }`}
                        />
                        {errors.message && (
                            <span className="text-red-500">The message can't be empty. Please, don't be shy!</span>
                        )}
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                        disabled={emailSent}
                    >
                        {loading ? "Sending..." : emailSent ? "Email sent successfully 🚀" : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default Contact;
