import React from "react";
import useAOS from "../../hooks/useAOS";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {imagePaths} from './imagePath.js';
import "./About.css";

function About() {

    useAOS();
    
    return (
        <div className="about-container">
            <div className="crsl-container">
                <Carousel className="crsl" autoPlay infiniteLoop showIndicators={false} showArrows={false} showStatus={false} showThumbs={false} centerMode={true} centerSlidePercentage={100}> 
                    {imagePaths.map((imagePath, index) => (
                        <img key={index} src={imagePath} alt={'Image ${index}'}/>
                    ))}
                </Carousel>
            </div>
            <div className="text-about">
                <h1 data-aos='slide-down'>
                    <u><i>Who am I?</i></u>
                </h1>
                <p data-aos='slide-left'>
                    Hi! I'm a junior at <u>UC Berkeley</u> studying <u>Electrical Engineering and Computer Science</u> 💻.
                    I spent my childhood in the country of enternal spring, <u>Guatemala</u> 🇬🇹, took flight to the <u>United States</u> for college 🇺🇸, and currently am proudly serving in the Air Force in <u>South Korea</u> 🇰🇷.<br /><br />

                    On the professional front, I have a strong interest in <u>backend development</u>, <u>web scraping</u>, and <u>automation</u>. 
                    I've also gained hands-on experience in training and fine-tuning <u>AI</u> models and creating servers to support them. 
                    While my primary focus is on backend work, I have interest in <u>full stack development</u> and enjoy exploring frontend technologies that enhance user experiences.<br /><br />

                    Outside of my studies, I’m an avid <u>traveler</u> 🛬, immersing myself in new cultures, indulging in <u>sports</u> like basketball, soccer, and tennis, and savoring diverse <u>cuisines</u> with friends and family. Each adventure fuels my curiosity and broadens my perspective!


                </p>
            </div>
                
        </div>
    )
}

export default About;