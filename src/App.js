// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Ensure the path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education-certificates" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Place Footer inside the main App div */}
      </div>
    </Router>
  );
}

export default App;
