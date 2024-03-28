import React, {useState} from "react";
import {projects} from '../projects.js';
import ProjectContainer from "./ProjectContainer";
import uniqid from 'uniqid'
import '../style/Projects.css'

function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
        <div className='grid-container'>
            {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
            ))}
        </div>
        </div>
    )
}

export default Projects;