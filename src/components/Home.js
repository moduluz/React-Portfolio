// components/Home.js
import React from 'react';
import './Home.css'; 



function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <img 
          src={`/pngwing.com (2).png`}
          alt="Your Greeting" 
          className="greeting-image"
        />
        <h1 className="greeting">Yo!</h1>
        <p className="description">
          I'm <span className="name-highlight">Aditya Singh Khichi</span>, a B.Tech student specializing in Big Data Analytics. Here you'll find my projects, skills, and contact information.
        </p>
        <div className="social-icons">
          <img src="/instagram.png" alt="Instagram" className="social-icon" />
          <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
          <img src="/github.png" alt="Github" className="social-icon" />
          <img src="/social.png" alt="Google" className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;