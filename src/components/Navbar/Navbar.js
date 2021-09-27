import React, {useState} from '../../../node_modules/react';
import './Navbar.css'

export default function Navbar(props) {
    return <div className='nav-bar-container'>
        <p className="upload" onClick={()=>{props.showUpload(true)}} > Upload </p>
        <p className="logo">XPLORE</p>
        <p  className="log-out" onClick={props.logOut} >Log out</p>
    </div>
}

