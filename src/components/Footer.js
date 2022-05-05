import React, {useState} from 'react'
import { Link } from 'gatsby'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import logo from '../assets/images/logo.svg'
import * as styles from '../assets/css/footer.module.css'

export const Footer = () => {

  const [mail, setMail] = useState(''); 
  const [mailError, setMailError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!mailError && mail) {
      alert(`Thanks for your message`);
      window.location.reload();
    }
  }

  const mailHandler = (e) => {
    setMail(e.target.value);
    let result = e.target.value.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');
    result === null && e.target.value ? setMailError(true) : setMailError(false);
  }

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
        <form onSubmit={submitHandler} className={styles.footer_form}>
          <label htmlFor="email">
            Subscribe here and get the latest travel tips  and my insider secrets!
          </label>
          <TextField
            error={mailError}
            id="email" 
            label="Email" 
            variant="filled" 
            onChange={(e) => mailHandler(e)}
            helperText={mailError ? "Pattern: xxx@yyyy.zzz" : ""}
          />
          <Button type='submit' variant="contained">Submit</Button>
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