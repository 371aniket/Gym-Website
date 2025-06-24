import React from 'react';
import heroImg from '../assets/hero.png';
import './Home.css';
import { ReactTyped } from 'react-typed';

const Home = () => (
    <section className="home" id="home">
        <div className="home-content" data-aos="zoom-in">
            <h3>
                <ReactTyped
                    strings={["Build Your", "Dream Physique"]}
                    typeSpeed={60}
                    backSpeed={40}
                    backDelay={1200}
                    loop
                />
            </h3>
            <h1></h1>
            <h3><span className="multiple-text"></span></h3>
            <p>THE GYM is the brainchild of our founders G.Khatter who believe that healthy lifestyle lead to better quality of life. The main idea is to have our members enjoy their fitness trainings in classy and private settings. As such, it is not surprising that THE GYM is passionately led by a team of highly qualified and experienced fitness instructors and health professionals. Our team's passion is to serve our members with sheer dedication, warm friendliness and joyful helpfulness. </p>
            <a href="#" className="btn">Join Us</a>
        </div>
        <div className="home-img" data-aos="zoom-in">
            <img src={heroImg} alt="Home" />
        </div>
    </section>
);

export default Home; 