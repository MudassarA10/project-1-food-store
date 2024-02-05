import React from "react";
import "../Sidebar/Sidebar.css";
import logo from "../../assets/images/bethany-badge-logo.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-1">
        <img src={logo} alt="Logo" />
        <h1 className="heading">Browse Our Pies </h1>
      </div>
      <nav className="links">
        <Link to="/Allpie">ALL PIES</Link>
        <a href="#">CHEEZE CAKE</a>
        <a href="#">FRUIT CAKE</a>
        <a href="#">SEASONAL CAKE</a>
        <a href="#">PROMOTONS</a>
      </nav>
    </div>
  );
};

export default Sidebar;
