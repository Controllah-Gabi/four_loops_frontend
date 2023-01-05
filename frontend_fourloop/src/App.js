import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Posts";
import Profile from "./components/Profile";
import "./App.css";
import IndividualPost from "./components/CreateCode";
import { IndividualPosts } from "./components/IndividualPosts";
import { IndividualCode } from "./components/IndividualCode";
import { PostComments } from "./components/PostComments";
import { CodeComment } from "./components/CodeComment";
import { AddComment } from "./components/AddComment";
import { LoginPage } from "./components/Login";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import Codes from "./components/Codes";
import SignUp from "./components/SignUp";
import SinglePost from "./components/singlePost";
import CreateCode from "./components/CreateCode";


function App() {
  
  return (
    <div>
      <div className="present">
      <Navbar />
        <div className="present-2">
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/posts" element={<Posts />} />
            <Route path="/codes" element={<Codes />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/posts/:post_id" element={<SinglePost />} />
            <Route path="/posts/:post_id/comments" element={<PostComments />} />
            <Route path="/create" element={<Create />} />
            <Route path="/createCode" element={<CreateCode />} />

            {/* <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post" element={<IndividualPost />} />
            <Route path="/posts/:post_id" element={<IndividualPosts />} />
            <Route path="/codes/:code_id" element={<IndividualCode />} />
            <Route path="/codes/:code_id/comments" element={<CodeComment />} />
            <Route path="/posts/:post_id/comments" element={<PostComments />} />
            <Route path="/posts/:post_id/comments" element={<AddComment/>} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
