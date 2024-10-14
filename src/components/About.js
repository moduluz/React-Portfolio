// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-image">
          <img src="/pngwing.com.png" alt="Your Name" />
          </div>
          <div className="about-text">
            <p>Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. I'm passionate about [Your Interests/Specialties].</p>
            <p>With [X] years of experience in [Your Field], I've had the opportunity to work on a variety of projects, from [Example Project Type] to [Another Example].</p>
            <p>My approach to [Your Field] is [Brief Description of Your Approach or Philosophy]. I'm always eager to take on new challenges and continue learning in this ever-evolving field.</p>
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
              <li>Skill 4</li>
              <li>Skill 5</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;