import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'gatsby'

export const Footer = () => {
  return (
    <footer className='footer'>
<     Typography align="center">
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