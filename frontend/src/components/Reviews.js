import React from 'react';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import './Reviews.css';

const Reviews = () => (
    <section className="review" id="review">
        <div className="Review-box">
            <h2 className="heading" data-aos="zoom-in-down">Client<span>Reviews</span></h2>
            <div className="wrapper" data-aos="zoom-in-up">
                <div className="review-item">
                    <img src={img2} alt="John" />
                    <h2>John</h2>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <i className='bx bxs-star' id="Star" key={i}></i>
                        ))}
                    </div>
                    <p> Gym is amazing. Amazing facility, top equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional athletes to train at. I have a great trainer Mr Saurabh Sir, who truly understands my needs and knows how to motivate me</p>
                </div>
                <div className="review-item">
                    <img src={img2} alt="Steve" />
                    <h2>Steve</h2>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <i className='bx bxs-star' id="Star" key={i}></i>
                        ))}
                    </div>
                    <p>Everything about this gym is really good. Amazing facility, Grand slam machines and great environment. Good service with friendly staff and clean and comfortable gym for everyone .
                        Fitness life club have different sections for Zumba , weight training, cardio, track , CrossFit and calisthenic area . They have also for kids game it means u can bring ur small kids with you .</p>
                </div>
                <div className="review-item">
                    <img src={img3} alt="David" />
                    <h2>David</h2>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <i className='bx bxs-star' id="Star" key={i}></i>
                        ))}
                    </div>
                    <p>One of the best gym in crossing Republik. Ambience is amazing and the trainers are very supportive specially Ankit Tiwari. His nature is amazing and the guidance which he gives is top notch. Thank you</p>
                </div>
            </div>
        </div>
    </section>
);

export default Reviews; 