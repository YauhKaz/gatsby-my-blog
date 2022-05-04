import React from 'react'
import { Link } from 'gatsby';

import { Avatar } from '@mui/material'

import image from '../assets/images/Leo.jpg'
import * as styles from '../assets/css/aboutMeCard.module.css'

export const AboutMeCard = () => {
  return (
    <Link to='/blog' className={styles.aboutMeCard}>
      <Avatar sx={{ width: 140, height: 144 }} alt="Welcome from Leo image" src={image} />
      <p className={styles.aboutMeCard_title}>
        Welcome!
      </p>
      <p className={styles.aboutMeCard_text}>
        Join my journey
      </p>
    </Link> 
  )
}