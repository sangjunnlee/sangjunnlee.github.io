import React, {useEffect, useState} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import AOS from "aos";
import 'react-vertical-timeline-component/style.min.css';
import "../style/Experience.css";

function Experience() {
    const timelineData = [
        {
            date: "2023-present",
            imgSrc: "/images/experience/rokaf.jpeg",
            imgAlt: "rokaf-icon",
            company: "Republic of Korea Air Force",
            position: "Software Engineer",
            location: "South Korea",
            description: "AI, backend, etc."
        },
        {
            date: "2023 June-August",
            imgSrc: "/images/experience/cs61c.png",
            imgAlt: "cs61c-icon",
            company: "Great Ideas in Computer Architecture (Machine Structures)",
            position: "Teacher Assistant",
            location: "Berkeley, USA",
            description: "Taught lessons, computer architecture, etc."
        },
        {
            date: "2023 June-August",
            imgSrc: "/images/experience/async-health.jpeg",
            imgAlt: "asynchealth-icon",
            company: "AsyncHealth:",
            position: "Software Engineer Intern",
            location: "Remote",
            description: "Flutter, etc."
        },
        {
            date: "2023 June-August",
            imgSrc: "/images/experience/alecto-ai.jpeg",
            imgAlt: "alectoAI-icon",
            company: "Alecto AI",
            position: "Software Engineer Intern",
            location: "Remote",
            description: "Creative Direction, UI, Visual Design, etc."
        },
        {
            date: "2022 June-August",
            imgSrc: "/images/experience/exoatlet.jpeg",
            imgAlt: "exoatlet-icon",
            company: "Exoatlet",
            position: "Software Engineer Intern",
            location: "Seoul, Korea",
            description: "Creative Direction, UI, Visual Design, etc."
        },
        {
            date: "2022-2023",
            imgSrc: "/images/experience/neighbor-ride.svg",
            imgAlt: "neighbor-ride-icon",
            company: "Neighbor Ride",
            position: "Backend Developer",
            location: "Berkeley, USA",
            description: "Retool, dtabse ,etc"
        },
        {
            date: "2021-present",
            imgSrc: "/images/experience/mdb.jpeg",
            imgAlt: "mdb-icon",
            company: "Mobile Developers at Berkeley",
            position: "Member",
            location: "Berkeley, USA",
            description: "Training Program, dev ops, etc"
        },     
    ]

    useEffect(() => {
        AOS.init({ duration:2000 })
    });

    return (
        <div className="experience-container">
            <h1 data-aos='slide-down'>My Experience</h1>
            <VerticalTimeline>
                {timelineData.map((item) => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fff', color: '#000' }}
                            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                            dateClassName="date-timeline"
                            date= {item.date}
                            iconStyle={{ background: '#E7F2F7FF', color: '#fff' }}
                            icon={<img src={item.imgSrc} alt={item.imgAlt} className="icon-image" />}
                        >
                            <h2 className="vertical-timeline-element-title">{item.company}</h2>
                            <h3 className="vertical-timeline-element-title">{item.position}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>  
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Experience;