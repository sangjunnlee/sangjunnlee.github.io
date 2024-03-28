import React, {useEffect} from "react";
import '../style/ProjectContainer.css'
import uniqid from 'uniqid';

function ProjectContainer({project}) {
    return (
        <div className='project'>
            <h3>{project.name}</h3>

            <p className='project-description'>{project.description}</p>
            <img src={project.imgSrc}/>
            {project.stack && (
            <ul className='project-stack'>
                {project.stack.map((item) => (
                <li key={uniqid()} className='project-stack-item'>
                    {item}
                </li>
                ))}
            </ul>
            )}
            {project.sourceCode && (
                <a href={project.sourceCode} aria-label='source code' className='link'>
                    <img src="/images/github.webp" />
                </a>
            )}
        </div>
    )
}

export default ProjectContainer;