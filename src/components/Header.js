// components/Header.js
import React, { useState } from 'react';
import './Header.css';  // Importing the CSS file

function Header() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Your Portfolio</h1>
        <nav>
          <ul className="nav-list">
            {['home', 'about', 'projects', 'contact'].map((tab) => (
              <li key={tab}>
                <a 
                  href={`#${tab}`} 
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
