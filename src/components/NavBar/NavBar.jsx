import React, { useState } from "react";
import './navbar.css';
import { IoMdPerson } from "react-icons/io";
import { IoCodeSlashOutline, IoDocumentOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import resume from './SangJunLee_Resume.pdf';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (id) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    return (
        <nav>
            <div className="title" onClick={() => handleMenuClick('home')}> SJL</div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <a onClick={() => handleMenuClick('about')}>
                        <IoMdPerson className="icon" />
                        About Me
                    </a>
                </li>
                <li>
                    <a onClick={() => handleMenuClick('experience')}>
                        <MdComputer className="icon" /> 
                        Experience
                    </a>
                </li>
                <li>
                    <a onClick={() => handleMenuClick('projects')}>
                        <IoCodeSlashOutline className="icon" /> 
                        Projects
                    </a>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <IoDocumentOutline className="icon" />
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
