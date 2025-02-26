import React, {useEffect, useState} from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import useAOS from "../../hooks/useAOS";
import Contact from "../Contact/Contact";
import { HiOutlineMail } from "react-icons/hi"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Home() {
    const useScrollPosition = () => {
        const [scrollPosition, setScrollPosition] = useState(0);
    
        useEffect(() => {
            const handleScroll = () => setScrollPosition(window.pageYOffset);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
        return scrollPosition;
    };

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

    const scrollPosition = useScrollPosition();
    useAOS();

    return (
        <div className="home-container">
            <div className="home-content">
                <img 
                    src="/assets/about/portrait.jpeg" 
                    alt="SangJun's portrait" 
                    className="profile-image" 
                    data-aos="fade-up"
                />
                <div className="text-container">
                    <h1 className="home-title" data-aos="fade-down">
                        sangjunlee
                    </h1> 
                    <h3 className="description">
                        I am{" "}
                        <span style={{ display: "inline-block" }}>
                            <Typewriter options={TYPEWRITER_OPTIONS} />
                        </span>
                    </h3>
                    <div className="icon-container">
                        {SOCIAL_LINKS.map(({ href, Icon, ariaLabel }) => (
                            <a 
                                key={href} 
                                href={href} 
                                aria-label={ariaLabel}
                            >
                                <Icon className="icon-contact" color="white" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>     
    );
}

export default Home;