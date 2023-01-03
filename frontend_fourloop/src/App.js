import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import React, { useState } from "react";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import IndividualPost from "./components/PostPage";
import { LoginPage } from "./components/LoginPage";



function App() {
  const [login,setLogin] = useState(false)
  
  return !login  ? (<LoginPage setLogin={setLogin}/>):( 
    <div>
      <div className="present">
          <Navbar />
        <div className="present-2">
          <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<IndividualPost/>}/>
      </Routes>
        </div>
      </div>
    </div>
);
}
export default App;
