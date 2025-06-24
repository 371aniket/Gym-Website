import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyright">
                <p>&copy; 2024 Fitness Hub. All rights reserved.</p>
            </div>
            <div className="social">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
            </div>
        </footer>
    );
};

export default Footer; 