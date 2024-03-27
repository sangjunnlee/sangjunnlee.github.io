import React, {useState} from "react";
import "../style/About.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imagePaths = [
    '/images/highschool-grad.JPG',
    '/images/korea-pic.jpg',
    '/images/korea.jpg',
    '/images/rokaf.PNG'
]

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 style={{textAlign: 'center', marginBottom: '5%'}}>Who am I?</h1>
                <div className="img-text">
                    <Carousel className="crsl" autoPlay infiniteLoop showIndicators={false} showArrows={false} showStatus={false} showThumbs={false}> 
                        {imagePaths.map((imagePath, index) => (
                            <img key={index} src={imagePath} alt={'Image ${index}'}/>
                        ))}
                    </Carousel>
                    <p style={{marginLeft: '10%'}}> jfkalsjdlkfajsdlkfjald; </p>
                </div>
                
            </div>
        </div>
    )
}

export default About;