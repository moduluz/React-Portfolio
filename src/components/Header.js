import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1));

  const handleTabClick = (tab) => {
    setActiveTab(tab.toLowerCase());
  };

  return (
    <header>
      <nav>
        <h1>Your Portfolio</h1>
        <ul>
          {[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: 'Education & Certificates', path: '/education-certificates' },
            { name: 'Resume', path: '/resume' },
            { name: 'Contact', path: '/contact' }
          ].map((tab) => (
            <li key={tab.name}>
              <Link
                to={tab.path}
                className={activeTab === tab.name.toLowerCase() ? 'active' : ''}
                onClick={() => handleTabClick(tab.name)}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;