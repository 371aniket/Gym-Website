import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <header>
        <Link to="/" className="logo">Royal <span>Fitness</span></Link>
        <div className='bx bx-menu' id="menu-icon"></div>
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#review">Review</a></li>
        </ul>
        <div className="top-btn">
            <Link to="/register" className="nav-btn">Join Us</Link>
        </div>
    </header>
);

export default Navbar; 