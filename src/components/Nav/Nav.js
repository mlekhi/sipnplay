import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className='menu'>
      <a href="/crm">
        <div className='left'>
          <img src="logo512.png" className='menu-item' alt="Logo" />
          <p>sipnplay</p>
        </div>
      </a>
      <div className='right'>
        <div>
        <button className='login-button'>Notifications</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;