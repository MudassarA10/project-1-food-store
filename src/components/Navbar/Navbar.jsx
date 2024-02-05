// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo from "../../assets/images/bethany-horizontal-logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-box">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <Link to="/Home">HOME</Link>
          <Link to="/About">ABOUT</Link>
          <Link to="/Allpie">PIES</Link>
          <Link to="/Contact">CONTACT US</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
