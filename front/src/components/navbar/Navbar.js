import React from 'react'
import "./navbar.css"
import logo from "../../images/logo.png"
import {Link } from "react-router-dom"
import { useEffect, useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(true);

  const user = true;
  return (
    <header className='header'>
        <nav className='navbar'>
          <div className='container'>
            <div className='navbar_container'>
              <ul className='navbar_left'>
                <div className='navbar_logo'>
                  <img alt="logo" src={logo} />
                </div>
              </ul>
              {
                state ? (
                  <ul className='navbar_right'>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/">Home</Link></li>
                  </ul>
                ) : (
                  <div className='navbar_desk'>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/">Home</Link></li>
                    </ul>
                    </div>
                )}
            </div>
          </div>
          <div onClick={() => setState(!state)} className='toggle'>
          <i class="fas fa-bars"></i>
          </div>
        </nav>
    </header>
  )
}

export default Navbar