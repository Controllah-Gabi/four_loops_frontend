import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/coders-logo.png";
import Home from "../assets/icons8-home-page-64.png";
import Plus from "../assets/icons8-plus-key-50.png";
import Profile from "../assets/icons8-test-account-50.png";
import Post from "../assets/icons8-post-box-80.png";
import Code from "../assets/icons8-source-code-30.png";
import Blog from "../assets/icons8-google-blog-search-50.png";
import { Logout } from "../Utils/api";

export default function Navbar(props) {
  const handleLogout = () => {
    props.setLogin(false);
    Logout();
    //api
  };
  return (
    <nav className="navBar">
      <div className="logo">
        <img src={logo} alt="coders-logo" id="logo" />
      </div>
      <ul className="navList">
        <li className="navlink">
          <img src={Home}></img>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navlink">
          <img src={Plus}></img>
          <NavLink to="/create">Create</NavLink>
        </li>
        <li className="navlink">
          <img src={Profile}></img>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="navlink">
          <img src={Code}></img>
          <NavLink to="/code">Code</NavLink>
        </li>
        <li className="navlink">
          <img src={Post}></img>
          <NavLink to="/post">Coding time?</NavLink>
        </li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
