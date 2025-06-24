import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Services />
            <About />
            <Pricing />
            <Reviews />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
