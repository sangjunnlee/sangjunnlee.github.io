import React, {useEffect} from "react";
import {projects} from './projectsData.js';
import ProjectContainer from "./ProjectContainer";
import uniqid from 'uniqid'
import AOS from "aos";
import './projects.css';

function Projects() {
    useEffect(() => {
        AOS.init({ duration:2000 })
    });
    return (
        <div className="projects-container">
            <h1 data-aos='slide-down'>My Projects</h1>
        <div className='grid-container' data-aos="zoom-in">
            {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
            ))}
        </div>
        </div>
    )
}

export default Projects;