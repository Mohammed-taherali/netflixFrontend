import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"
import netflixLogo from "/Netflix.svg"

export default function Navbar() {
    let navigate = useNavigate();
    const [session, setSession] = useState(false);

    function logoutUser() {
        console.log("entered logout");
        fetch("/api/logout", {
            method: "POST",
            body: {},
        })
            .then((response) => response.json())
            .then(resp => {
                if (resp.status === "success") {
                    navigate("/login");
                }
            })
    }
    useEffect(() => {
        fetch("/api/session", {
            method: "POST",
            body: {},
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                console.log(data);
                if (data.status === "failure") {
                    // navigate('/login')
                    setSession(false);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [])
    return (
        <nav className="navbar fixed-top">
            <div className="nav-1">
                <div className="navbar__logo">
                    <img src={netflixLogo} alt="Netflix Logo" />
                </div>
                <div className="navbar__menu">
                    <ul style={{ marginBottom: 0 }}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/">TV Shows</NavLink></li>
                        <li><NavLink to="/">Movies</NavLink></li>
                        <li><NavLink to="/">Recently added</NavLink></li>
                        <li><NavLink to="/">My List</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="nav-2">
                <div className="navbar__search">
                    <input type="text" placeholder="Search" />
                </div>
                {/* <div > */}
                <img src="/Netflix-avatar.png" className="userIcon" alt="" />
                <button className="dropdownAnchor">&#x25BC;</button>
                <select name="logout" id="logout">
                    <option style={{ display: "none" }} selected value=""></option>
                    <option value="logout">logout</option>
                </select>
                <div className="dropdown" >
                </div>
            </div>
        </nav>
    )
}