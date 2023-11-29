import './hamburger.css'

import React, { useState } from 'react';
import './hamburger.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <header>
        <div className="logo">Your Logo</div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰ Menu
        </button>
      </header>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div className="hamburger-menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

      {/* Your main content goes here */}
      <div className="main-content">
        <p>Your main content goes here.</p>
      </div>
    </div>
  );
};

export default Navbar;
