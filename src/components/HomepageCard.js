import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import * as styles from '../assets/css/homepageCard.module.css'

export const HomepageCard = ({item}) => {
  
  const {image, title} = item;
  const slug = slugify(title, { lower: true })

  return (
    <Card sx={{ maxWidth: 240, marginRight: '20px', marginBottom: '20px' }}>
      {image && 
        <Link to={`/${slug}`}>
          <GatsbyImage image={image.gatsbyImageData} alt={image.title}/>
        </Link>
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/${slug}`} className={styles.homepageCard_link}>{title}</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}