// components/Education.js
import React from 'react';
import './Education.css'; // Add your styles here

function Education() {
  return (
    <section className="education-section">
      <h2>Education & Certificates</h2>
      
      <div className="education-container">
        <div className="education-box">
          <h3>School</h3>
          <p>Name of your school</p>
          <p>Location: Your School Location</p>
          <p>Year of Graduation: Year</p>
        </div>

        <div className="education-box">
          <h3>College</h3>
          <p>B.Tech in Computer Science Engineering</p>
          <p>Specialization: Big Data Analytics</p>
          <p>University Name</p>
          <p>Expected Graduation: Year</p>
        </div>
      </div>

      <div className="certificates-section">
        <h3>Certificates</h3>
        <ul>
          <li>Certificate in Machine Learning</li>
          <li>Certificate in Web Development</li>
          {/* Add more certificates here */}
        </ul>
      </div>
    </section>
  );
}

export default Education;

