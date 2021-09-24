import React from '../../../node_modules/react';
import './Login.css'

export default function Login(props) {

    return <div className='login-container'>
        <div className='login-box'>
            <p>XPLORE</p>
            <input placeholder="username" type='text' className="login-input"></input>
            <input placeholder="password" type ='password'className="login-input"></input>
            <button onClick={props.logIn} className="login-button">Login</button>
            <button onClick={props.signUp} className="sign-up-button">Sign up</button>
        </div>
    </div>
}