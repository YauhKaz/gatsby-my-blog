import React from 'react'
import { Link } from 'gatsby'

import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

import { aboutMeParagraphs } from '../constants/Cards'
import * as styles from '../assets/css/aboutPageCard.module.css'

export const AboutPageCard = () => {
  return (
    <section className={styles.aboutpageCard_wrapper}>
      <figure className={styles.aboutpageCard_image}>
        <CardMedia
          component="img"
          image='https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D1%80%D1%82%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D0%B6%D0%B5%D0%BD%D0%B0%D1%82%D0%BE%D0%B3%D0%BE-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B2%D0%B8%D0%B4%D0%BE%D0%BC-232969048.jpg'
          alt='image'
        />
      </figure>
      <div className={styles.aboutpageCard_article}>
        <h4 className={styles.aboutpageCard_title}>
          Hi, thanks for dropping by!
        </h4>
        {aboutMeParagraphs.map((item,index) => {
          return(
            <p key={index} className={styles.aboutpageCard_text}>
              {item}
            </p>)})}
        <Button variant="contained">
          <Link to='/contact' className={styles.aboutpageCard_button}>
            Let’s work together
          </Link>
        </Button>
      </div>
    </section> 
  )
}