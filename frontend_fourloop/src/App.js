import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import React from "react";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import "./App.css";
import logo from "./assets/coders-logo.png";
import Card from "./components/Card";
import PostPage from "./components/PostPage";

function App() {
  return (
    <div>
      <img src={logo} alt="coders-logo" id="logo" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </div>
  );
}
export default App;
