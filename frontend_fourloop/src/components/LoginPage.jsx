import axios from 'axios'
import React from 'react'
import { Login } from '../Utils/api'

export const LoginPage = (props) => {
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        Login(event.target[0].value,event.target[1].value)
        
    }
    // <form className="comment-form" id="comment-form" onSubmit={handleSubmit}>
    //     <label htmlFor="">Post comment here:</label>
    //     <textarea
    //       name="comment-text"
    //       id="comment-text"
    //       cols="30"
    //       rows="3"
    //     ></textarea>
    //     <button type="submit">Submit</button>
    //   </form>
  return (
    <div className='present'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>

        <label htmlFor="Email">Email</label>
                
                <input type="text"/>
        <br/>
                <label htmlFor="Email">Password</label>
                
                <input type="text" />
        <button>Login</button>
        </form>
        <button>Sign Up</button>
        </div>
  )
}
