import React from "react";
import { useState } from "react";
import { Login } from "../Utils/api";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === "" || password === ""){
      alert("Invalid Email/Password! Try again")
    } else {
      Login(email, password).then((data) => {
        setEmail("");
        setPassword("");
        setIsLoggedIn(true);
        if(isLoggedIn) {
          navigate("/posts");
        }
        console.log(data)
        return data;
      }).catch(err => {
        setErr(err);
        isLoggedIn(false);
      });
    }
  };
  
  return err ? <h3>{err}</h3> : (
    <div className="Sign-page">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input 
          placeholder="Enter your password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="signinbtn">Signin</button>
        <p className="suggest-signup">Not user?
           <Link className="signup-link" to={"/signup"}> SignUp now</Link>
        </p>
      </form>
    </div>
  );
};
