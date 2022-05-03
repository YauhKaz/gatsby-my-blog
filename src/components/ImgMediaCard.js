import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'

export const ImgMediaCard = ({item}) => {

  const {image, avatarImage, title, text, author, updateDate} = item;
  const slug = slugify(title, { lower: true })

  const textTransfotm = (text) => {
    if (text.length > 100) return `${text.substr(0,100)}...`;
    return text
  }

  return (
    <Card sx={{ maxWidth: 345, margin: '5px'}}>
      {image && 
        <Link to={`/${slug}`}>
          <GatsbyImage image={image.gatsbyImageData} alt={image.title}/>
        </Link>
      }
      {author && <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="author">
            {avatarImage && <GatsbyImage image={avatarImage.gatsbyImageData} alt={image.title}/>}
          </Avatar>
        }
        title={author}
        subheader={updateDate.substr(0,10)}
      />}
      <Link to={`/${slug}`} className='imgMediaCard_link'>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            {text && <Typography variant="body2" color="text.secondary">
              {textTransfotm(text)}
            </Typography>}
        </CardContent>
      </Link>
    </Card>
  );
}