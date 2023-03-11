import React from 'react'
import "./navbar.css"
import logo from "../../images/logo.png"
import {Link } from "react-router-dom"
import { useEffect, useState } from "react";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)

  const user = true;
  return (
    <header>
      <nav>
        <div className='top_left'>
          <span>Blog Spot</span>
        </div>
        <div className='top_center'>
        <ul className={Mobile ? "nav-links-mobile" : "topList"} onClick={() => setMobile(false)}>
        <li className='topListItem'><Link id="topListItem" to="/">Home</Link></li>
            <li className='topListItem'><Link id="topListItem" to="/about">About</Link></li>
            <li className='topListItem'><Link id="topListItem" to="/contact">Contact</Link></li>
            {user && <li className="topListItem">Logout</li>}
        </ul>
        </div>
        <div className='top_left'>
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>


        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
        </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar