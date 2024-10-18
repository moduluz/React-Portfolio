// components/Resume.js
import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <div className="resume-container">
        <div className="resume-box">
          {/* Social Icons */}
        
            <img src="/instagram.png" alt="Instagram" className="social-icon" />
            <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
            <img src="/github.png" alt="GitHub" className="social-icon" />
            <img src="/social.png" alt="Google" className="social-icon" />
         
          <img src="/document.png" alt="Document Icon" className="resume-image" />
          <a href="https://link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
            See My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
