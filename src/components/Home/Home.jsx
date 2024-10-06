import React, {useEffect, useState} from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import useAOS from "../../hooks/useAOS";
import Contact from "../Contact/Contact";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);
    useAOS();

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="home-container">
            <div className="home-content">
                <img src='/assets/about/portrait.jpeg' alt="SangJun's portrait" className="profile-image" data-aos='fade-up'/>
                <div className="text-container">
                    <h1 className="home-title" data-aos='fade-down'>sangjunlee</h1> 
                    <h3> I am a {" "}
                        <span style={{display: "inline-block"}}>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    strings: ["software engineer", "option2", "option3"]
                                }}
                            />
                        </span>
                    </h3>
                    <div className="icon-container">
                        <a href="https://www.linkedin.com/in/sangjunnlee/">
                            <FaLinkedin className="icon" color="white" />
                        </a>
                        <a href="https://github.com/sangjunnlee">
                            <FaGithub className="icon" color="white"/>
                        </a>
                        <a href="mailto:sjlee9920@gmail.com">
                            <HiOutlineMail className="icon" color="white"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;