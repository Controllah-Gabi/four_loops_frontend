import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/coders-logo.png";

export default function Navbar() {
  return (
    <nav className="navBar">
      <div className="logo">
        <img src={logo} alt="coders-logo" id="logo" />
      </div>
      <ul className="navList">
        <li className="navlink">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navlink">
          <NavLink to="/create">Create</NavLink>
        </li>
        <li className="navlink">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="navlink">
          <NavLink to="/post">Post</NavLink>
        </li>
        <li className="navlink">
          <NavLink to="/code">Code</NavLink>
        </li>
        <li className="navlink">
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}
