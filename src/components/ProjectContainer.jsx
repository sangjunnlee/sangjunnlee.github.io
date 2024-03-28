import React, {useState} from "react";
import '../style/ProjectContainer.css'
import uniqid from 'uniqid'

function ProjectContainer({project}) {
    return (
        <div className='project'>
            <h3>{project.name}</h3>

            <p className='project-description'>{project.description}</p>
            <img src="/images/flag-usa.png"/>
            {project.stack && (
            <ul className='project-stack'>
                {project.stack.map((item) => (
                <li key={uniqid()} className='project-stack-item'>
                    {item}
                </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ProjectContainer;