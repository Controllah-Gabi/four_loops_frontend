import React from "react";
import { useState } from "react";
import { postUser } from "../Utils/api";


export default function SignUp() {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if(firstname === "" || lastname === "" || email === "" || password === "") {
            alert("Please fill the required fields!");
        } else {
            postUser(firstname, lastname, email, password).then(data => {
                setFirstname("");
                setLastname("");
                setEmail("");
                setPassword("");
                return data.result
            }).catch(err => {
                return err.result;
            })
        }
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Firstname"
                className="form-input"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                required={true}
            />

            <input
                type="text"
                placeholder="Lastname"
                className="form-input"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                required={true}
            />

            <input
                type="email"
                placeholder="Email"
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required={true}
            />

            <input
                type="password"
                placeholder="Password"
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required={true}
            />

            <button className="signup-btn">submit</button>
        </form>
    );
}