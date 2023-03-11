import React from 'react'
import "./navbar.css"
import logo from "../../images/logo.png"
import {Link } from "react-router-dom"
import { useEffect, useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(true);

  const user = true;
  return (
    <header>
        <div className='header-container'>
        <h1 className="text-3xl font-bold underline">
        Hello world!
    </h1>

        </div>

    </header>
  )
}

export default Navbar