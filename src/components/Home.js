import React from 'react';
import { Link } from 'react-router-dom'; // Import Router and Link from react-router-dom
import '../Style/home.css';

function Home() {
  return (
   
      <div className="app-container">
        <div className="text-content">
          <h1 className="typing-effect">Welcome to CodeNook!</h1>
          <p>Your gateway to free, comprehensive learning in web development! Our platform offers a range of courses on JavaScript, CSS, HTML, React, Node.js, and Python Flask, all at no cost.</p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Track Your Progress</strong>: Keep track of your learning journey with our progress-saving features.</li>
            <li><strong>Interactive Tests</strong>: Run tests directly in your terminal to apply what you've learned in real-time.</li>
            <li><strong>Launch Your Career</strong>: Start building the skills you need to begin a new career in tech.</li>
          </ul>
          <p>While we can't guarantee specific career outcomes, we believe that hard work and dedication will enhance your opportunities and prepare you for success in the tech world.</p>
          <p>Join us today and take the first step towards achieving your goals!</p>
        </div>
        <div className="squares-container">
          <div className="square javascript" style={{ backgroundColor: '#E9B149' }}>
            JavaScript
            <div className="overlay">
              <Link to="/login">Login/Register</Link> 
            </div>
          </div>
          <div className="square" style={{ backgroundColor: '#D44902' }}>
            React.js
            <div className="overlay">Coming Soon</div>
          </div>
          <div className="square" style={{ backgroundColor: '#D44902' }}>
            HTML
            <div className="overlay">Coming Soon</div>
          </div>
          <div className="square" style={{ backgroundColor: '#EF601E' }}>
            CSS
            <div className="overlay">Coming Soon</div>
          </div>
          <div className="square" style={{ backgroundColor: '#CAAACD' }}>
            Node.js
            <div className="overlay">Coming Soon</div>
          </div>
          <div className="square" style={{ backgroundColor: '#D6E8F7' }}>
            Flask
            <div className="overlay">Coming Soon</div>
          </div>
        </div>
      </div>

  );
}

export default Home;
