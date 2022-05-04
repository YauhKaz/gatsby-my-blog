import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'
import cn from 'classnames'

import * as styles from '../assets/css/navbar.module.css'
import logo from '../assets/images/logo.svg'

export const Navbar = () => {

  const [show, setShow] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to='/'>
            <img src={logo} alt="my blog logo"/>
          </Link>
          <button className={styles.navBtn} onClick={() => setShow(!show)}>
            <FiAlignJustify/>
          </button>
        </div>
        <div className={show ? cn(`${styles.navLinks} ${styles.showLinks}`) : `${styles.navLinks}`}>
          <Link to='/' className={styles.navLink} activeClassName={styles.activeLink} onClick={() => setShow(false)}>
            home
          </Link>
          <Link to='/blog' className={styles.navLink} activeClassName={styles.activeLink} onClick={() => setShow(false)}>
            blog
          </Link>
          <Link to='/about' className={styles.navLink} activeClassName={styles.activeLink} onClick={() => setShow(false)}>
            about
          </Link>
          <Link to='/contact' className={styles.navLink} activeClassName={styles.activeLink} onClick={() => setShow(false)}>
            contact
          </Link>
        </div>
      </div>
    </nav>
  )
}