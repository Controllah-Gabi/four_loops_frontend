import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navBar">
      <ul className="navList">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </ul>
    </nav>
  );
}
