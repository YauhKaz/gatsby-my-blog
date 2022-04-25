import React from 'react'

import CardMedia from '@mui/material/CardMedia'
import { Link } from 'gatsby'

export const FeaturedPost = () => {
  
  const text = 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading';

  const textTransfotm = (text) => {
    if (text.length > 100) return `${text.substr(0,100)}...`;
    return text
  }

  return (
    <section className='featurePost'>
      <h4>Featured Post</h4>
      <div className='featurePost_wrapper'>
        <Link to='/blog' className='featurePost_imageWrapper'>
          <CardMedia
            component="img"
            image='http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png'
            alt='image'
          />
        </Link>
        <div className='featurePost_textWrapper'>
          <div className='featurePost_articleWrapper'>
            <p className='featurePost_date'><span>21.07.2021</span> · <span>10 min</span></p>
            <Link to='blog' className='featurePost_article'>
              <h4>Title</h4>
              <p className='featurePost_text'>{textTransfotm(text)}</p>
            </Link>
          </div>
          <Link to='blog'>
            <p className='featurePost_comments'>0 comments</p>
          </Link>
        </div>
      </div>
    </section>
  )
}