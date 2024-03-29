import React from "react";
import useAOS from "../../hooks/useAOS";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {imagePaths} from './imagePath.js';
import { timelineData } from "./timelineData.js";
import "./About.css";

function About() {

    useAOS();
    
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="title" data-aos='slide-right' style={{textAlign: 'center', marginBottom: '5%'}}>Who am I?</h1>
                <div className="core">
                    <div className="timeline">
                        <div className="line"></div>
                        {timelineData.map((item, index) => {
                            return (
                                <div className={`timeline-container ${index % 2 === 0 ? 'left-container' : 'right-container'}`} key={index}>
                                    <img src={item.imgSrc} alt={item.imgAlt} />
                                    <div className="text-box">
                                        <h2>{item.country}</h2>
                                        <small>{item.date}</small>
                                        <span className={`${index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow'}`}></span>
                                    </div>
                                </div>
                            );
                            
                        })} 
                    </div>
                    <Carousel className="crsl" autoPlay infiniteLoop showIndicators={false} showArrows={false} showStatus={false} showThumbs={false}> 
                        {imagePaths.map((imagePath, index) => (
                            <img key={index} src={imagePath} alt={'Image ${index}'}/>
                        ))}
                    </Carousel>
                    <p style={{fontSize: 'medium'}}>
                        Hi! I'm SangJun Lee, currently a junior at UC Berkeley studying Electrical Engineering and Computer Science (EECS) 🚀🚀. <br /> <br />
                        I have had the privilege of being able to call three different countries my home 🌏: Guatemala, Korea, and the United States. My diverse childhood has endowed me with a broad perspective and deeper appreciation of different cultures. <br /><br />
                        Some of my hobbies include traveling, sports, and programming. I love exploring new places around the world. Furthermore, I enjoy playing sports as a way to relieve myself from studying and work. I'm especially in love with basketball 🏀 and football ⚽️. <br /><br />
                        Professionally 💻, I specialize in backend development, but my journey in tech is not limited to one domain. I've also ventured in full stack development and the process of training and fine-tuning AI models. Embracing challenges and new opportunities to learn in this dynamic field is what drives my passion towards programming. I love working with new people and embracing new challenges. <br /><br />
                        Feel free to contact me if you want to know more! 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;