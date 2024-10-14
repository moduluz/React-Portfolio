// components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {/* Add your projects here */}
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;