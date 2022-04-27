import React from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const ContactForm = () => {
  return (
    <div className='contactpage_socials'>
      <h3>Or just drop me a line here</h3>
      <form className='contactpage_form'>
        <div className='contactpage_inputs'>
          <TextField id="firstName" label="First Name" variant="outlined" />
          <TextField id="lastName" label="Last Name" variant="outlined" />
        </div>
        <div className='contactpage_inputs'>
          <TextField id="email" label="Email" variant="outlined" required/>
          <TextField id="phone" label="Phone" variant="outlined" />
        </div>
        <TextField
          className='contactpage_textfield'
          id="message"
          label="Message"
          multiline
          rows={4}
          defaultValue="Hi"
        />
        <Button variant="contained" className='contactpage_button'>Send</Button>
      </form>
    </div>
  )
}