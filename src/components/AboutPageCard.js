import React from 'react'
import { Link } from 'gatsby';

import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

import { aboutMeParagraphs } from '../constants/Cards';

export const AboutPageCard = () => {
  return (
    <section className='aboutpageCard_wrapper'>
      <figure className='aboutpageCard_image'>
        <CardMedia
          component="img"
          image='http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png'
          alt='image'
        />
      </figure>
      <div className='aboutpageCard_article'>
        <h4 className='aboutpageCard_title'>
          Hi, thanks for dropping by!
        </h4>
        {aboutMeParagraphs.map(item => {
          return(
            <p className='aboutpageCard_text'>
              {item}
            </p>)})}
        <Button variant="contained">
          <Link to='/contact' className='aboutpageCard_button'>
            Let’s work together
          </Link>
        </Button>
      </div>
    </section> 
  )
}