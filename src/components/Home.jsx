import React, {useEffect, useState} from "react";
import "../style/Home.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import 'aos/dist/aos.css'

function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        AOS.init({duration:2000})

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
                    <h1 className="title" data-aos='fade-down'>sangjunlee</h1> 
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
                </div>
            </div>
            <div className="scroll-arrow" data-aos='slide-up' style={{ opacity: 1 - scrollPosition / 400 }}>
                <i className="arrow down"></i>
            </div>
            <div className="extra-content" data-aos='zoom-in'>
                <h1>extra</h1>
            </div>
        </div>
    )
}

export default Home;