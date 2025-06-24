import React, { useState } from 'react';
import '../style.css';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Call backend API for registration
        alert(`Registration attempted for ${fullName}, ${phone}, ${age}, ${weight}, ${height}, ${email}`);
    };

    return (
        <div className="auth-outer">
            <div className="auth-card">
                <div className="auth-icon">
                    <span role="img" aria-label="register" style={{ fontSize: '5rem', backgroundColor: 'gray' }}>📝</span>
                </div>
                <h1 className="auth-title">Create Account</h1>
                <h2 className="auth-subtitle">Join Royal Fitness and start your transformation!</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        min="1"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Weight (kg)"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        min="1"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Height (cm)"
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                        min="1"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn">Register</button>
                </form>
                <h1 className="auth-switch">Already have an account? <a href="/login">Login</a></h1>
            </div>
        </div>
    );
};

export default Register; 