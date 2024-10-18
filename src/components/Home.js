import React, { useEffect, useRef } from 'react';
import './Home.css'; // We'll need to combine styles from Home.css and About.css

function Home() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      
      if (aboutSection && imageRef.current && textRef.current) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
          imageRef.current.classList.add('animate');
          textRef.current.classList.add('animate');
        } else {
          imageRef.current.classList.remove('animate');
          textRef.current.classList.remove('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-grid">
            <div ref={imageRef} className="about-image">
              <img src="/pngwing.com.png" alt="Aditya Singh Khichi" />
            </div>
            <div ref={textRef} className="about-text">
              <p>Hello! I'm Aditya Singh Khichi, a Big Data Analytics enthusiast based in India. I'm passionate about web development, machine learning, and AI-based projects.</p>
              <p>With 2+ years of experience, I've worked on a variety of projects, ranging from web applications to machine learning models.</p>
              <p>My approach to development is driven by a focus on scalability, performance, and modern design principles.</p>

              <h3>Skills</h3>

              <h4 className="skills-heading">Full Stack Development</h4>
              <ul className="skills-list">
                <li>React</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>

              <h4 className="skills-heading">Data Science & AI</h4>
              <ul className="skills-list">
                <li>Pandas</li>
                <li>PyTorch</li>
                <li>TensorFlow</li>
                <li>Keras</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;