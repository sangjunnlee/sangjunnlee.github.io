import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";
import "../../styles/common.css";

function Contact() {
    const links = [
        {
            href: "mailto:sjlee9920@gmail.com",
            label: "email",
            value: "sjlee9920@gmail.com",
            Icon: HiOutlineMail
        },
        {
            href: "https://github.com/sangjunnlee",
            label: "github",
            value: "github.com/sangjunnlee",
            Icon: FaGithub
        },
        {
            href: "https://www.linkedin.com/in/sangjunnlee/",
            label: "linkedin",
            value: "linkedin.com/in/sangjunnlee",
            Icon: FaLinkedin
        }
    ];

    return (
        <div className="contact-container page-container">
            <h1 className="page-title">Contact</h1>
            <div className="contact-shell">
                <div className="contact-grid">
                    {links.map(({ href, label, value, Icon }) => (
                        <a key={href} href={href} className="contact-link" target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                            <Icon className="contact-icon" />
                            <span>{label}</span>
                            <strong>{value}</strong>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact;
