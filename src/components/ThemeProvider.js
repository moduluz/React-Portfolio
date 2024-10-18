import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const updateTheme = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--background-color', 'var(--joy-palette-neutral-800, #171A1C)');
      root.style.setProperty('--text-color', 'white');
    } else {
      root.style.setProperty('--background-color', 'var(--joy-palette-neutral-100, #F0F4F8)');
      root.style.setProperty('--text-color', 'black');
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    updateTheme(newDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);