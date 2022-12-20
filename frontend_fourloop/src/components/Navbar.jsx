import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navBar">
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
