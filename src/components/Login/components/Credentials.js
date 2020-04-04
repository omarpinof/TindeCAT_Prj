import React from "react";
import {
    Link
} from 'react-router-dom'

export const Credentials = () => (
    <>
        <div className = "input-custom">
            <label>Username</label>
            <input type="email" />
        </div>
        <div className="input-custom">
            <label>Password</label>
            <input type="password" />
        </div>
        <Link to = "/">
        <div className = "button-primary">
            <input type="button" value="Login" />
        </div>
        </Link>
        <br />
        <p className = "signup-Link">
            ¿Not member yet?
            <Link to = "/signup">
                Signup
            </Link> 
        </p>
    </>
)