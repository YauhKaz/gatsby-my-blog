import React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import CardMedia from '@mui/material/CardMedia'

export const ImgMediaCard = ({item}) => {
  const {imageUrl, imageAlt, title, text, author, date} = item;
  return (
    <Card sx={{ maxWidth: 345 }}>
      {imageUrl && <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={imageAlt}
      />}
      {author && <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={date}
      />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {text && <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>}
      </CardContent>
    </Card>
  );
}