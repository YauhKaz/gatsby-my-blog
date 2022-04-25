import React from 'react'
import {Link} from 'gatsby'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

export const HomepageCard = ({item}) => {
  const {imageUrl, imageAlt, title} = item;
  return (
    <Card sx={{ maxWidth: 240, marginRight: '20px' }}>
      {imageUrl && 
        <Link to='/blog'>
          <CardMedia
            component="img"
            height="194"
            image={imageUrl}
            alt={imageAlt}
          />
        </Link>
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to='/blog' className='homepageCard_link'>{title}</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}