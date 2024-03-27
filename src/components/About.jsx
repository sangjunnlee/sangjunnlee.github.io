import React, {useEffect} from "react";
import "../style/About.css";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imagePaths = [
    '/images/highschool-grad.JPG',
    '/images/korea-pic.jpg',
    '/images/korea.jpg',
    '/images/rokaf.PNG'
]

function About() {

    useEffect(() => {
        AOS.init({duration:2000})
    }, [])

    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      }];

    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="title" data-aos='slide-right' style={{textAlign: 'center', marginBottom: '5%'}}>Who am I?</h1>
                <div className="core">
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
                <div className="timeline">
                    <div class="timeline-container left-container">
                        <img src="/images/highschool-grad.jpg" alt="temp" />
                        <div class="text-box">
                            <h2>Guatemala</h2>
                            <small>2021-2022</small>
                            <p>saklfjdlkafajksfjadskfsdfjaskldkj</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>
                    <div class="timeline-container right-container">
                        <img src="/images/highschool-grad.jpg" alt="temp" />
                        <div class="text-box">
                            <h2 >USA</h2>
                            <small>2021-2022</small>
                            <p >saklfjdlkafajksfjadskfsdfjaskldkj</p>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>
                    <div class="timeline-container left-container">
                        <img src="/images/highschool-grad.jpg" alt="temp" />
                        <div class="text-box">
                            <h2 >Korea</h2>
                            <small>2021-2022</small>
                            <p>saklfjdlkafajksfjadskfsdfjaskldkj</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;