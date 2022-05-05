import React, {useState} from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import * as styles from '../assets/css/contactForm.module.css'

export const ContactForm = () => {

  const [firstName, setFirstName] = useState(''); 
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState(''); 
  const [lastNameError, setLastNameError] = useState(false);
  const [telNumber, setTelNumber] = useState(''); 
  const [telNumberError, setTelNumberError] = useState(false);
  const [mail, setMail] = useState(''); 
  const [mailError, setMailError] = useState(false);
  const [message, setMessage] = useState(''); 
  const [messageError, setMessageError] = useState(false);

  const submitHandler = (e) => {
    if (!firstNameError && !lastNameError && !telNumberError && !mailError  && !messageError) {
      alert(`Thanks ${firstName, lastName} for your message`);
      setFirstName('');
      setLastName('');
      setTelNumber('');
      setMail('');
      setMessage('');
    }
  }

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    e.target.value.length > 10 ? setFirstNameError(true) : setFirstNameError(false);
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    e.target.value.length > 30 ? setLastNameError(true) : setLastNameError(false);
  }

  const mailHandler = (e) => {
    setMail(e.target.value);
    let result = e.target.value.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');
    result === null && e.target.value ? setMailError(true) : setMailError(false);
  }

  const telNumberHandler = (e) => {
    setTelNumber(e.target.value);
    let result = e.target.value.match('/\d/gm');
    result === null && e.target.value.length!==11 && e.target.value ? setTelNumberError(true) : setTelNumberError(false);
  }

  const messageHandler = (e) => {
    setMessage(e.target.value);
    e.target.value.length > 140 ? setMessageError(true) : setMessageError(false);
  }

  return (
    <div className={styles.contactpage_socials}>
      <h3>Or just drop me a line here</h3>
      <form className={styles.contactpage_form} onSubmit={submitHandler}>
        <div className={styles.contactpage_inputs}>
          <TextField 
            error={firstNameError}
            id="firstName" 
            label="First Name" 
            variant="outlined" 
            onChange={(e) => firstNameHandler(e)}
            helperText={firstNameError ? "Max Length 10 symbols" : ""}
          />
          <TextField 
            error={lastNameError}
            id="lastName" 
            label="Last Name" 
            variant="outlined"
            onChange={(e) => lastNameHandler(e)}
            helperText={lastNameError ? "Max Length 30 symbols" : ""}/>
        </div>
        <div className={styles.contactpage_inputs}>
          <TextField 
            error={mailError}
            id="email" 
            label="Email" 
            variant="outlined" 
            onChange={(e) => mailHandler(e)}
            helperText={mailError ? "Pattern: xxx@yyyy.zzz" : ""}
            required
          />
          <TextField 
            error={telNumberError}
            id="phone" 
            label="Phone" 
            variant="outlined"
            onChange={(e) => telNumberHandler(e)}
            helperText={telNumberError ? "Pattern: ccccxxxxxxx" : ""}
          />
        </div>
        <div className={styles.contactpage_textfieldWrapper}>
          <TextField
            error={messageError}
            className={styles.contactpage_textfield}
            id="message"
            label="Message"
            multiline
            rows={4}
            onChange={(e) => messageHandler(e)}
            helperText={messageError ? "Max length 140 symbols" : ""}
          />
        </div>
        <Button type='submit' variant="contained" className={styles.contactpage_button}>Send</Button>
      </form>
    </div>
  )
}