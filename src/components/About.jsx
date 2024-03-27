import React, {useState} from "react";
import "../style/About.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profileImage from "../images/portrait.jpeg"

function About() {
    return (
        <div className="about-container">
            <h1>About</h1>
            <Carousel className="crsl" autoPlay infiniteLoop centerMode showArrows={false} showStatus={false} showThumbs={false}> 
                <img src={profileImage} alt="image 1"/>
                <img src={profileImage} alt="image 2"/>
                <img src={profileImage} alt="image 3"/>
                <img src={profileImage} alt="image 4"/>
            </Carousel>
        </div>
    )
}

export default About;