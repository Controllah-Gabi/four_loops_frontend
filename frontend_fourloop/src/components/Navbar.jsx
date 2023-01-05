import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/coders-logo.png";
import Home from "../assets/icons8-home-page-64.png"
import Plus from "../assets/icons8-plus-key-50.png"
import Profile from "../assets/icons8-test-account-50.png"
import Post from "../assets/icons8-post-box-80.png"
import Code from "../assets/icons8-source-code-30.png"
import Blog from "../assets/icons8-google-blog-search-50.png"
import { Logout } from "../Utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn ] = useState(true);
  const navigate = useNavigate();

  const handleLogout =()=>{
   Logout().then((data) => {
    if(isLoggedIn){
      setIsLoggedIn(false);
      navigate("/");
    }
    return data.message;
   });
  }

  return (
    <nav className="navBar">
      <div className="logo">
        <img src={logo} alt="coders-logo" id="logo" />
      </div>
      <ul className="navList">
        <li className="navlink">
          <img src={Home}></img><NavLink to="/posts">Posts</NavLink>
        </li>
        <li className="navlink">
          <img src={Code}></img><NavLink to="/codes">Codes</NavLink>
        </li>
        <li className="navlink">
          <img src={Plus}></img><NavLink to="/create">Create Post</NavLink>
        </li>
        <li className="navlink">
          <img src={Plus}></img><NavLink to="/code">Create Code</NavLink>
        </li>
        <li className="navlink">
          <img src={Profile}></img><NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="navlink">
          <img src={Post}></img><NavLink to="/post">Post</NavLink>
        </li>
        <li className="navlink">
          <p className="logout-btn" onClick={handleLogout}>Logout</p>
        </li>
      </ul>
    </nav>
  );
}
