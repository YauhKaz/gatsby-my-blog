import React from 'react'
import { Link } from 'gatsby'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import logo from '../assets/images/logo.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_mainPart'>
        <Link to='/'>
          <img src={logo} alt="my blog logo"/>
        </Link>
        <div>
          <Link to='/' className="nav-link" activeClassName='active-link'>
            home
          </Link>
          <Link to='/blog' className="nav-link" activeClassName='active-link'>
            blog
          </Link>
          <Link to='/about' className="nav-link" activeClassName='active-link'>
            about
          </Link>
          <Link to='/contact' className="nav-link" activeClassName='active-link'>
            contact
          </Link>
        </div>
        <form className='footer_form'>
          <label for="email">
            Subscribe here and get the latest travel tips  and my insider secrets!
          </label>
          <input type='email' id="email" placeholder='Email' pattern=".+@globex\.com" size="30" required/>
          <Button variant="contained">Submit</Button>
        </form>
      </div>
      <Typography align="center">
        {'Copyright © '}
        <Link to="/">
          My blog
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  )
}