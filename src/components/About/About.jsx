import React from "react";
import useAOS from "../../hooks/useAOS";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {imagePaths} from './imagePath.js';
import "./About.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function About() {
    useAOS();
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        adaptiveHeight: false,
        fade: true,
        cssEase: 'linear'
    };

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="about-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        opacity: 0
                    },
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        opacity: {
                            value: 0.1
                        },
                        size: {
                            value: 3
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.1,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 1
                        }
                    }
                }}
                style={{
                    position: "absolute",
                    zIndex: 0
                }}
            />
            <div className="crsl-container">
                <Slider {...settings}> 
                    {imagePaths.map((imagePath, index) => (
                        <div key={index} className="slide-item">
                            <img src={imagePath} alt={`Image ${index}`}/>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="text-about">
                <h1 data-aos='slide-down'>
                    <u><i>Who am I?</i></u>
                </h1>
                <p data-aos='slide-left'>
                    Hi! I'm a junior at <u>UC Berkeley</u> studying <u>Electrical Engineering and Computer Science</u> 💻.
                    I spent my childhood in the country of eternal spring, <u>Guatemala</u> 🇬🇹, took flight to the <u>United States</u> for college 🇺🇸, and currently am proudly serving in the Air Force in <u>South Korea</u> 🇰🇷.
                </p>
                <p data-aos='slide-left' data-aos-delay="100">
                    On the professional front, I have a strong interest in <u>backend development</u>, <u>web scraping</u>, and <u>automation</u>. 
                    I've also gained hands-on experience in training and fine-tuning <u>AI</u> models and creating servers to support them. 
                    While my primary focus is on backend work, I have interest in <u>full stack development</u> and enjoy exploring frontend technologies that enhance user experiences.
                </p>
                <p data-aos='slide-left' data-aos-delay="200">
                    Outside of my studies, I'm an avid <u>traveler</u> 🛬, immersing myself in new cultures, indulging in <u>sports</u> like basketball, soccer, and tennis, and savoring diverse <u>cuisines</u> with friends and family. Each adventure fuels my curiosity and broadens my perspective!
                </p>
            </div>
        </div>
    )
}

export default About;