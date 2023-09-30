import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import netflixLogo from "/Netflix.svg"

export default function Navbar() {
    return (
        <nav className="navbar fixed-top">
            <div className="navbar__logo">
                <img src={netflixLogo} alt="Netflix Logo" />
            </div>
            <div className="navbar__menu">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">TV Shows</NavLink></li>
                    <li><NavLink to="/">Movies</NavLink></li>
                    <li><NavLink to="/">New & Popular</NavLink></li>
                    <li><NavLink to="/">My List</NavLink></li>
                </ul>
            </div>
            <div className="navbar__search">
                <input type="text" placeholder="Search" />
            </div>
        </nav>
    )
}