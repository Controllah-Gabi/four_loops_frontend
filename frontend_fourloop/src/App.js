import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import IndividualPost from "./components/PostPage";
import { LoginPage } from "./components/LoginPage";
import { IndividualPosts } from "./components/IndividualPosts";
import { IndividualCode } from "./components/IndividualCode";
import { PostComments } from "./components/PostComments";
import { CodeComment } from "./components/CodeComment";
import { AddComment } from "./components/AddComment";
import { Login } from "./Utils/api";

function App() {
  const [login, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  
  return !login ? (
    <LoginPage setLogin={setLogin} setUserInfo={setUserInfo} />
  ) : (
    <div>
      <div className="present">
        <Navbar setLogin={setLogin} />
        <div className="present-2">
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post" element={<IndividualPost />} />
            <Route path="/posts/:post_id" element={<IndividualPosts />} />
            <Route path="/codes/:code_id" element={<IndividualCode />} />
            <Route path="/codes/:code_id/comments" element={<CodeComment />} />
            <Route path="/posts/:post_id/comments" element={<PostComments />} />
            <Route path="/posts/:post_id/comments" element={<AddComment/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
