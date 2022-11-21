import "./h.css";

import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <ul>
          <li>
            <h3 style={{color:'black'}}>ANIME</h3>
          </li>
        </ul>
      </div>
      <span>
        <div className="contact-info">
          <ul>
            <li>abcd@gmail.com</li>
            <li>+1 12 34 56 78</li>
          </ul>
        </div>

        <nav>
          <ul>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </span>
    </header>
  );
};

export default Header;
