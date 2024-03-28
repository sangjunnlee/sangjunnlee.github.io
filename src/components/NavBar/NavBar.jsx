import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import './navbar.css'
import { IoMdPerson } from "react-icons/io";
import { IoCodeSlashOutline, IoDocumentOutline} from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import resume from './SangJunLee_Resume.pdf';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <Link className="title" to="/"> SJL</Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>               
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about"><IoMdPerson className="icon"/> About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/experience"><MdComputer className="icon"/>Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/projects"><IoCodeSlashOutline className="icon"/>Projects</NavLink>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer"><IoDocumentOutline className="icon"/>Resume</a>
                </li>
                
            </ul>
        </nav>
    )
} 

export default NavBar