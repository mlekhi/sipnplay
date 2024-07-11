import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="menu">
      <a href="/">
        <div className="left">
          <img src="logo512.png" className="menu-item" alt="Logo" />
          <p>Sip & Play</p>
        </div>
      </a>
      <div className="right">
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
        <a href="/events">Events</a>
        <a href="/games">Games</a>
      </div>
    </div>
  );
}

export default Nav;
