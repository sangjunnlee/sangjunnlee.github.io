import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import { IoMdPerson } from "react-icons/io";
import { IoCodeSlashOutline, IoDocumentOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import resume from './SangJunLee_Resume.pdf';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(false);
    }
    
    return (
        <nav>
            <Link className="title" to="/"> SJL</Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink className='tab' to="/about" onClick={handleMenuClick}>
                        <IoMdPerson className="icon" />
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/experience" onClick={handleMenuClick}><MdComputer className="icon" /> Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" onClick={handleMenuClick}><IoCodeSlashOutline className="icon" /> Projects</NavLink>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer"><IoDocumentOutline className="icon" />Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
