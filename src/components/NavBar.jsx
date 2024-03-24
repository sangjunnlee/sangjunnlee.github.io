import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import '../style/navbar.css'

function NavBar() {
    return (
        <nav>
            <div className="navbar">
                <Link className="navbarMenu" to="/">Home</Link>
                <Link className="navbarMenu" to="/about">About Me</Link>
                <Link className="navbarMenu" to="/todo">Todo</Link>
            </div>
        </nav>
    )
}

export default NavBar