import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Call backend API for login
        alert(`Login attempted for ${email}`);
        navigate('/'); // Redirect to home page after login
    };

    return (
        <div className="auth-outer">
            <div className="auth-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="auth-form">
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
                    <button type="submit" className="btn">Login</button>
                </form>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    );
};

export default Login; 