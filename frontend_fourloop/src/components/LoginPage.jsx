import React from "react";
import { Login } from "../Utils/api";

export const LoginPage = (props) => {
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
  return (
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
      <button>Sign Up</button>
    </div>
  );
};
