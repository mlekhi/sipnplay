// Navigation bar component for Sip & Play website, handling menu state and responsive menu toggle.
import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false); // State variable to track if menu is open or closed

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      {/* Left side of the navigation bar with logo and brand name */}
      <a className="links" href="/">
        <div className="left">
          <img
            src="logo512.png"
            className="menu-item width-[200px]"
            alt="Logo"
          />
          <a href="/">Sip & Play</a>
        </div>
      </a>
      {/* Right side of the navigation bar */}
      <div className="right">
        {/* Menu links displayed normally on larger screens */}
        <div className="menu-links">
          <a href="/about" className="links">
            About
          </a>
          <a href="/menu" className="links">
            Menu
          </a>
          <a href="/events" className="links">
            Events
          </a>
          <a href="/games" className="links">
            Games
          </a>
          <a href="https://www.exploretock.com/sipnplay" className="links">
            Make a Reservation
          </a>
        </div>

        {/* Menu toggle icon for smaller screens */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>

        {/* Collapsible menu for smaller screens, shown when menuOpen state is true */}
        {menuOpen && (
          <div className="collapsible-menu">
            <div className="close-btn" onClick={toggleMenu}>
              <i className="fas fa-times"></i>
            </div>
            <a href="/about" onClick={toggleMenu}>
              About 🎲
            </a>
            <a href="/menu" onClick={toggleMenu}>
              Menu ☕
            </a>
            <a href="/events" onClick={toggleMenu}>
              Events 📅
            </a>
            <a href="/games" onClick={toggleMenu}>
              Games ♟️
            </a>
            <a href="https://www.exploretock.com/sipnplay" onClick={toggleMenu}>
              Reservations 📙
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
