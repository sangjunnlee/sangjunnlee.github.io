import React, {useEffect, useState} from "react";
import "../style/Home.css";
import profileImage from "../images/portrait.jpeg"
import Typewriter from "typewriter-effect";
import AOS from "aos";
import 'aos/dist/aos.css'

function Home() {
    useEffect(() => {
        AOS.init({duration:2000})
    }, [])
    return (
        <div className="home-container">
            <div className="content">
                <img src={profileImage} alt="SangJun's portrait" className="profile-image" data-aos='fade-up'/>
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
            <div className="top">
                <h1>Welcome</h1> <br /> <br /> <br /> 
                <h1>Fade</h1>
                <div className='animation' data-aos='fade-up'></div>
                <div className='animation' data-aos='fade-down'></div>
                <div className='animation' data-aos='fade-right'></div>
                <h1>Flip</h1>
                <div className='animation' data-aos='flip-up'></div>
                <div className='animation'></div>
                <h1>Zoom</h1>
                <div className='animation' data-aos='zoom-in'></div>
            </div>
        </div>
    )
}

export default Home;