import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Login, postUser } from "../Utils/api";

export const LoginPage = (props) => {
  const [signUp, setSignUp] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    Login(event.target[0].value, event.target[1].value).then((data) => {
      if (data.status === "ok") {
        props.setLogin(true);
      }
    });
    //joelaliyu1@gmail.com
    //joelali4
  };
  const handleClick = () => {
    setSignUp(!signUp);
  };
  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (
      event.target[0].value === "" ||
      event.target[1].value === "" ||
      event.target[2].value === "" ||
      event.target[3].value === ""
    ) {
      alert("Please fill all fields of the form");
    } else {
      postUser(
        event.target[0].value,
        event.target[1].value,
        event.target[2].value,
        event.target[3].value
      ).then((data) => {
        if (data.status === "ok") {
          props.setSignup(!signUp);
        }
      });
    }
  };
  return signUp ? (
    <div className="present" id="present-form">
      <form onSubmit={handleSignUpSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" className="signup-text" />
        <hr />
        <label htmlFor="firstname">Firstname</label>
        <input type="text" className="signup-text" />
        <hr />
        <label htmlFor="surname">Surname</label>
        <input type="text" className="signup-text" />
        <hr />
        <label htmlFor="password">Password</label>
        <input type="text" className="signup-text" />
        <hr />
        <button>Submit</button>
      </form>
    </div>
  ) : (
    <div className="present">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>

        <input type="text" />
        <br />
        <label htmlFor="Password">Password</label>

        <input type="password" />
        <button>Login</button>
      </form>

      <button className="button" onClick={handleClick}>
        Sign up
      </button>
    </div>
  );
};
