import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./NavBar.css";
const coinIcon = require("../../img/icon-budget.png")

const NavBar = () => {
    return (
        <div className="main-navbar">
            <div className="navbar-buttons">
                <Link className="link" to="/"><img className="icon-budget" src={coinIcon} /><span>Home</span></Link>
                <Link className="link" to="/about"><img className="icon-budget" src={coinIcon} /><span>About</span></Link>
                <Link className="link" to="/resources"><img className="icon-budget" src={coinIcon} /><span>Resources</span></Link>
            </div>
        </div>
    )
}

export default NavBar; 