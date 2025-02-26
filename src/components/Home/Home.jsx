import React, {useEffect, useState} from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import useAOS from "../../hooks/useAOS";
import { HiOutlineMail } from "react-icons/hi"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const TYPEWRITER_OPTIONS = {
        autoStart: true,
        loop: true,
        delay: 50,
        strings: [
            "a passionate software engineer",
            "a driven learner",
            "a culturally diverse being",
            "a sportsman",
            "an enthusiastic traveler"
        ]
    };

    const SOCIAL_LINKS = [
        {
            href: "https://www.linkedin.com/in/sangjunnlee/",
            Icon: FaLinkedin,
            ariaLabel: "LinkedIn Profile"
        },
        {
            href: "https://github.com/sangjunnlee",
            Icon: FaGithub,
            ariaLabel: "GitHub Profile"
        },
        {
            href: "mailto:sjlee9920@gmail.com",
            Icon: HiOutlineMail,
            ariaLabel: "Email Contact"
        }
    ];

    useAOS();

    return (
        <div className="home-container">
            <ParticlesBackground />
            <div className={`home-content ${isVisible ? 'visible' : ''}`}>
                <div className="left-content">
                    <img 
                        src="/assets/about/portrait.jpeg" 
                        alt="SangJun's portrait" 
                        className="profile-image" 
                        data-aos="fade-up"
                    />
                    <div className="icon-container">
                        {SOCIAL_LINKS.map(({ href, Icon, ariaLabel }) => (
                            <a 
                                key={href} 
                                href={href} 
                                aria-label={ariaLabel}
                                className="social-icon"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="right-content">
                    <h1 className="home-title" data-aos="fade-down">
                        Hi, I'm SangJun Lee
                    </h1>
                    <h3 className="description">
                        I am{" "}
                        <span className="typewriter">
                            <Typewriter options={TYPEWRITER_OPTIONS} />
                        </span>
                    </h3>
                    <div className="cta-buttons">
                        <a href="#about" className="cta-button primary">About Me</a>
                        <a href="mailto:sjlee9920@gmail.com" className="cta-button secondary">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>     
    );
}

export default Home;