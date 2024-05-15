import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
function Navbar() {
  return (
    <div className="container">
      <div className="a">
        <div className="a1">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>Shop All</NavLink>
          <NavLink to={"/"}>Blog</NavLink>
        </div>
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <div className="a2">
          <NavLink to={"/contact"}>Contact Us</NavLink>
          <div className="a3">
            <input type="search" placeholder="Search Product" />
            <img src={search} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
