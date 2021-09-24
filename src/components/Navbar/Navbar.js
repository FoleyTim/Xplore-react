import React from '../../../node_modules/react';
import './Navbar.css'

export default function Navbar() {
    const sayHello = () => {
        alert('don\'t click here');
    }

    return <div onClick={sayHello}className='nav-bar-container'>
        <p>XPLORE</p>
        <div class="logged-in"></div>
    </div>
}