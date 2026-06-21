import React from "react";
import {projects} from './projectsData.js';
import ProjectContainer from "./ProjectContainer";
import uniqid from 'uniqid'
import useAOS from "../../hooks/useAOS.js";
import './projects.css';
import '../../styles/common.css';

function Projects() {
    useAOS();
    return (
        <div className="projects-container page-container">
            <h1 className="page-title" data-aos='slide-down'>Projects</h1>
            <div className='grid-container' data-aos="fade-up">
                {projects.map((project) => (
                    <ProjectContainer key={uniqid()} project={project} />
                ))}
            </div>
        </div>
    )
}
export default Projects;
