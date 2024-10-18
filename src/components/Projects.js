// components/Projects.js
import React from 'react';
import './Projects.css'; // Assuming you have some specific CSS for Projects

function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-list">
        {/* List your projects here */}
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of project 1...</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of project 2...</p>
        </div>
        {/* Add more projects */}
      </div>
    </section>
  );
}

export default Projects;
