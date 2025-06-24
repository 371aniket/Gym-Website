import React from 'react';
import aboutImg from '../assets/about.jpg';
import './About.css';

const About = () => (
    <section className="About" id="about">
        <div className="about-img" data-aos="zoom-in-down">
            <img src={aboutImg} alt="About" />
        </div>
        <div className="about-content" data-aos="zoom-in-up">
            <h2 className="heading">Why Choose Us?</h2>
            <p>Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated.</p>
            <p>Unlock your potential with our expert Personal Trainers.</p>
            <p>Elevate your fitness with practice sessions.</p>
            <p>We provide Supportive management, for your fitness success.</p>
            <a href="#" className="btn">Book a Free class</a>
        </div>
    </section>
);

export default About; 