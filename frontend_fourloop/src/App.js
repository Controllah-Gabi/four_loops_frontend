import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import React from "react";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <p>hi</p>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
