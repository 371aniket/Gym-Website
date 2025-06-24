import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => (
    <section className="plans" id="Pricing">
        <h2 className="heading" data-aos="zoom-in-down">Our<span>Plans</span></h2>
        <div className="plans-content" data-aos="zoom-in-up">
            <div className="box">
                <h3>BASIC</h3>
                <h2><span>$100/Month</span></h2>
                <ul>
                    <li>Smart Workout Plans</li>
                    <li>At Home Workout</li>
                </ul>
                <Link to="/register">
                    <i className='bx bx-right-arrow-alt'></i>
                    Join Now
                </Link>
            </div>
            <div className="box">
                <h3>PRO</h3>
                <h2><span>$150/Month</span></h2>
                <ul>
                    <li>Pros GYMs</li>
                    <li>Smart Workout Plans</li>
                    <li>At Home Workout</li>
                </ul>
                <Link to="/register">
                    <i className='bx bx-right-arrow-alt'></i>
                    Join Now
                </Link>
            </div>
            <div className="box">
                <h3>PREMIUM</h3>
                <h2><span>$300/Month</span></h2>
                <ul>
                    <li>ELITE GYMs and Classes </li>
                    <li>Pros GYMs</li>
                    <li>Smart Workout Plans</li>
                    <li>At Home Workout</li>
                    <li>Personal Training</li>
                </ul>
                <Link to="/register">
                    <i className='bx bx-right-arrow-alt'></i>
                    Join Now
                </Link>
            </div>
        </div>
    </section>
);

export default Pricing; 