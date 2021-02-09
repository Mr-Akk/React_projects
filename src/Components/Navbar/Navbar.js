import React from 'react';
import './Navbar.css';
export default function Navbar() {
    return (
        <div className="navbar">
            <h2><i class="fas fa-plane"></i><span className="outerspan"> City <span className="innerspan">Tours</span></span></h2>
            <div>
                <ul>
                
                    <li><a href="">home</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">tour</a></li>
                </ul>
            </div>
        </div>
    )
}
