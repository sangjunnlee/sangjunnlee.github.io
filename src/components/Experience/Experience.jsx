import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import useAOS from "../../hooks/useAOS";
import { timelineData } from "./timelineData";
import 'react-vertical-timeline-component/style.min.css';
import "./Experience.css";

function Experience() {

    useAOS();

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