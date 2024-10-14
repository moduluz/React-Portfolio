// components/Home.js
import React from 'react';
import './Home.css'; // Importing CSS file for styles

function Home() {
  return (
    <div className="home">
      <img 
        src={`${process.env.PUBLIC_URL}/path/to/your/image.png`} // Update with your image path
        alt="Your Greeting" 
        className="greeting-image"
      />
      <h1 className="greeting">Welcome to My Portfolio!</h1>
      <p className="description">
        I'm Aditya Singh Khichi, a B.Tech student specializing in Big Data Analytics. Here you'll find my projects, skills, and contact information. 
      </p>
    </div>
  );
}

export default Home;
