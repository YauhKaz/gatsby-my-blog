import React from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import * as styles from '../assets/css/contactForm.module.css'

export const ContactForm = () => {
  return (
    <div className={styles.contactpage_socials}>
      <h3>Or just drop me a line here</h3>
      <form className={styles.contactpage_form}>
        <div className={styles.contactpage_inputs}>
          <TextField id="firstName" label="First Name" variant="outlined" />
          <TextField id="lastName" label="Last Name" variant="outlined" />
        </div>
        <div className={styles.contactpage_inputs}>
          <TextField id="email" label="Email" variant="outlined" required/>
          <TextField id="phone" label="Phone" variant="outlined" />
        </div>
        <div className={styles.contactpage_textfieldWrapper}>
          <TextField
            className={styles.contactpage_textfield}
            id="message"
            label="Message"
            multiline
            rows={4}
            defaultValue="Hi"
          />
        </div>
        <Button variant="contained" className={styles.contactpage_button}>Send</Button>
      </form>
    </div>
  )
}