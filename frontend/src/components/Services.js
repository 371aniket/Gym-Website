import React, { useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/Image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import './Services.css';

const serviceData = [
    {
        img: image1,
        title: 'Physical Fitness',
        description: 'Improve your overall health, flexibility, and endurance with our physical fitness programs.',
        goal: [
            'Start with a fitness assessment to determine your current level.',
            'Set realistic and achievable fitness goals.',
            'Follow a balanced workout routine including cardio, strength, and flexibility exercises.',
            'Track your progress and adjust your plan as needed.',
            'Maintain consistency and stay motivated.'
        ]
    },
    {
        img: image2,
        title: 'Weight Gain',
        description: 'Structured plans to help you gain healthy weight and build muscle mass.',
        goal: [
            'Consult with a trainer or nutritionist to set a healthy weight gain target.',
            'Increase calorie intake with nutrient-rich foods.',
            'Incorporate strength training to build muscle mass.',
            'Monitor your progress weekly and adjust your diet/workout as needed.',
            'Stay consistent and patient for sustainable results.'
        ]
    },
    {
        img: image3,
        title: 'Strength Training',
        description: 'Increase your strength and muscle power with our expert-led strength training sessions.',
        goal: [
            'Begin with a warm-up to prepare your muscles.',
            'Follow a structured strength training program targeting all major muscle groups.',
            'Gradually increase weights and intensity over time.',
            'Ensure proper form and technique to prevent injuries.',
            'Track your lifts and celebrate your progress.'
        ]
    },
    {
        img: image4,
        title: 'Fat Lose',
        description: 'Burn fat effectively with our cardio and HIIT routines tailored for all levels.',
        goal: [
            'Start with a body composition analysis to set a fat loss goal.',
            'Adopt a calorie deficit diet with balanced nutrition.',
            'Engage in regular cardio and HIIT workouts.',
            'Monitor your progress and adjust your plan as needed.',
            'Stay motivated and celebrate small victories.'
        ]
    },
    {
        img: image5,
        title: 'Weight Lifting',
        description: 'Master the art of weight lifting with personalized guidance and safe techniques.',
        goal: [
            'Learn the basics of weight lifting and proper form.',
            'Start with lighter weights and gradually increase load.',
            'Follow a structured lifting program for your goals.',
            'Track your progress and focus on technique.',
            'Consult trainers for advanced tips and injury prevention.'
        ]
    },
    {
        img: image6,
        title: 'Running',
        description: 'Boost your stamina and cardiovascular health with our running programs.',
        goal: [
            'Set a running goal (distance, time, or frequency).',
            'Start with a warm-up and stretching routine.',
            'Follow a progressive running plan to build endurance.',
            'Track your runs and celebrate milestones.',
            'Stay hydrated and listen to your body.'
        ]
    }
];

const Services = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleKnowMore = idx => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="Services" id="services">
            <h2 className="heading" data-aos="zoom-in-down">Our<span>services</span></h2>
            <div className="services-content" data-aos="zoom-in-up">
                {serviceData.map((service, idx) => (
                    <div className="row" key={service.title}>
                        <img src={service.img} alt={service.title} />
                        <h4>{service.title}</h4>
                        <button className="btn know-more-btn" onClick={() => handleKnowMore(idx)}>
                            {openIndex === idx ? 'Hide' : 'Know More'}
                        </button>
                        {openIndex === idx && (
                            <div className="service-details">
                                <p><strong>Description:</strong> {service.description}</p>
                                <div><strong>Goal:</strong>
                                    <ol style={{ margin: '0.7rem 0 0 1.2rem', fontSize: '1.3rem' }}>
                                        {service.goal.map((step, i) => (
                                            <li key={i}>{step}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services; 