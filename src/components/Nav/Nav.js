import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      <a href="/">
        <div className="left">
          <img src="logo512.png" className="menu-item" alt="Logo" />
          <p>Sip & Play</p>
        </div>
      </a>
      <div className="right">
        {/* Show menu links normally on larger screens */}
        <div className="menu-links">
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/events">Events</a>
          <a href="/games">Games</a>
          <a href="https://www.exploretock.com/sipnplay">Reservations</a>
        </div>

        {/* Show collapsible menu icon on smaller screens */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>

        {/* Collapsible menu for smaller screens */}
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
