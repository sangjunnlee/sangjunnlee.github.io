import React from "react";
import useAOS from "../../hooks/useAOS";
import { timelineData } from "./timelineData";
import "./Experience.css";
import '../../styles/common.css';

function ExperienceLogo({ item }) {
    if (item.imgSrc) {
        return (
            <img
                src={item.imgSrc}
                alt={item.imgAlt}
                className={`experience-logo${item.logoWide ? " wide" : ""}`}
            />
        );
    }

    return (
        <span className="experience-logo fallback" aria-hidden="true">
            {item.iconText || item.company?.charAt(0)}
        </span>
    );
}

function Experience() {

    useAOS();

    return (
        <div className="experience-container page-container">
            <h1 className="page-title" data-aos='slide-down'>Experience</h1>
            <div className="experience-list" data-aos="fade-up">
                {timelineData.map((item) => {
                    return (
                        <article className="experience-card" key={`${item.company}-${item.date}`}>
                            <div className="experience-meta">
                                <ExperienceLogo item={item} />
                                <p>{item.date}</p>
                                {item.location && <span>{item.location}</span>}
                            </div>
                            <div className="experience-content">
                                <h2>{item.company}</h2>
                                <h3>{item.position}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience;
