import React from 'react';
import './NavigationStyle.css';
// import { useState, useContext } from 'react';
function Navigation() {
    

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        {/* Leave space for logo */}
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#festival">Festival</a></li>
        <li><a href="#discover">Discover</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#updates">Updates</a></li>
        <li><a href="#help">Help</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
      <button className="theme-toggle border border-red-200">
        ThemeButton
      </button>
    </nav>
  );
}

export default Navigation;