import React from "react";
import './style.css';

const Navigationbar = () => {
  return (
    <div className="navigation-bar">
      <h1 className="heading">Foodlie</h1>
      <nav className="links">
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Offer">Offer</a>
          </li>
          <li>
            <a href="Service">Service</a>
          </li>
          <li>
            <a href="About">About us</a>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="login-button">Log in</button>
        <button className="signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Navigationbar;
