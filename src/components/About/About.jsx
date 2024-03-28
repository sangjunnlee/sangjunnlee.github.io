import React, {useEffect} from "react";
import "./About.css";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imagePaths = [
    '/assets/about/highschool-grad.JPG',
    '/assets/about/korea-pic.jpg',
    '/assets/about/korea.jpg',
    '/assets/about/rokaf.PNG'
]

function About() {

    useEffect(() => {
        AOS.init({duration:2000})
    }, [])

    const timelineData = [
        {
            imgSrc: "/assets/flags/guatemala.jpeg",
            imgAlt: "temp",
            country: "Guatemala",
            date: "2021-2022"
        },
        {
            imgSrc: "/assets/flags/usa.png",
            imgAlt: "temp",
            country: "USA",
            date: "2021-2022"
        },
        {
            imgSrc: "/assets/flags/korea.jpeg",
            imgAlt: "temp",
            country: "Korea",
            date: "2021-2022"
        },
        
    ];

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
                    <p>
                    I’m Kelly Hu (hoo, like an owl 🦉), a junior at UC Berkeley studying Electrical Engineering & Computer Science (EECS) with a certification in Design Innovation. As a proud Canadian (I'm from Toronto!), ex-bioengineering major, and occasional video-maker, I try to be intentional about exploring a hodgepodge of disciplines that help inform my passion for design.
                    Always growing and reflecting, I'm currently really interested in designing for human connection and social impact. Creating delightful yet intuitive and highly polished interfaces that are purposeful and well-intentioned is what excites me!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;