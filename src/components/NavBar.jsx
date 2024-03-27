import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import '../style/navbar.css'
import { IoMdPerson } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";


function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <Link className="title" to="/"> sangjunlee</Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>               
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about"><IoMdPerson className="icon"/> About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/work"><IoCodeSlashOutline className="icon"/>Work</NavLink>
                </li>
                <li>
                    <NavLink to="/experience"><MdComputer className="icon"/>Experience</NavLink>
                </li>
            </ul>
        </nav>
    )
} 

export default NavBar