import React from 'react'
import { Link } from 'gatsby';

import { Avatar } from '@mui/material'

import image from '../assets/images/Leo.jpg'

export const AboutMeCard = () => {
  return (
    <Link to='/blog' className='aboutMeCard'>
      <Avatar sx={{ width: 140, height: 144 }} alt="Remy Sharp" src={image} />
      <p className='aboutMeCard_title'>
        Welcome!
      </p>
      <p className='aboutMeCard_text'>
        Join my journey
      </p>
    </Link> 
  )
}