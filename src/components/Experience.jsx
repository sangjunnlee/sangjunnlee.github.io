import React, {useState} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../style/Experience.css";

function Experience() {
    const timelineData = [
        {
            date: "2011-present",
            imgSrc: "/images/flag-usa.png",
            imgAlt: "icon",
            position: "Creative Director",
            location: "Miami, FL",
            description: "Creative Direction, UI, Visual Design, etc."
        },
        {
            date: "2011-present",
            imgSrc: "/images/flag-korean.jpeg",
            imgAlt: "icon",
            position: "Creative Director2",
            location: "Miami, FL",
            description: "Creative Direction, UI, Visual Design, etc."
        },
        {
            date: "2011-present",
            imgSrc: "/images/flag-korean.jpeg",
            imgAlt: "icon",
            position: "Creative Director2",
            location: "Miami, FL",
            description: "Creative Direction, UI, Visual Design, etc."
        },
        {
            date: "2011-present",
            imgSrc: "/images/flag-korean.jpeg",
            imgAlt: "icon",
            position: "Creative Director2",
            location: "Miami, FL",
            description: "Creative Direction, UI, Visual Design, etc."
        },
        {
            date: "2011-present",
            imgSrc: "/images/flag-korean.jpeg",
            imgAlt: "icon",
            position: "Creative Director2",
            location: "Miami, FL",
            description: "Creative Direction, UI, Visual Design, etc."
        },

    ]

    return (
        <div className="experience-container">
            <h1>Professional Journey</h1>
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