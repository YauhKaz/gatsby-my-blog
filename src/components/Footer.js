import React from 'react'
import { Link } from 'gatsby'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import logo from '../assets/images/logo.svg'
import * as styles from '../assets/css/footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_mainPart}>
        <Link to='/'>
          <img src={logo} alt="my blog logo"/>
        </Link>
        <div>
          <Link to='/' className={styles.footer_link} activeClassName={styles.active_link}>
            home
          </Link>
          <Link to='/blog' className={styles.footer_link} activeClassName={styles.active_link}>
            blog
          </Link>
          <Link to='/about' className={styles.footer_link} activeClassName={styles.active_link}>
            about
          </Link>
          <Link to='/contact' className={styles.footer_link} activeClassName={styles.active_link}>
            contact
          </Link>
        </div>
        <form className={styles.footer_form}>
          <label htmlFor="email">
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