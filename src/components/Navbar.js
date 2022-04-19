import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'
import logo from '../assets/images/logo.svg'

export const Navbar = () => {

  const [show, setShow] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} alt="my blog logo"/>
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify/>
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to='/' className="nav-link" activeClassName='active-link' onClick={() => setShow(false)}>
            home
          </Link>
          <Link to='/blog' className="nav-link" activeClassName='active-link' onClick={() => setShow(false)}>
            blog
          </Link>
          <Link to='/about' className="nav-link" activeClassName='active-link' onClick={() => setShow(false)}>
            about
          </Link>
          <Link to='/contact' className="nav-link" activeClassName='active-link' onClick={() => setShow(false)}>
            contact
          </Link>
        </div>
      </div>
    </nav>
  )
}