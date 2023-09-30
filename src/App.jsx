import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Details from './pages/details';
import Home from './pages/home';
import Login from './pages/login';
import Search from './pages/search';
import SignUp from './pages/signup';

export default function App() {

    return (
        <Router>
            <Navbar />
            {/* <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </nav> */}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie/:id" element={<Details />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
        </Router>

    )
}