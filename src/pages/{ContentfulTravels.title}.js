import React from 'react'
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { socials } from '../constants/Cards'

const TravelsTemplate = ({data}) => {

  const {
    author,
    avatarImage,
    content: {text},
    description: { description },
    image,
    readTime,
    title,
    updateDate,
  } = data.contentfulTravels

  return (
    <Layout>
      <Seo title={title} description={description}/>
      <section className='templatePage_wrapper'>
        <Card sx={{ maxWidth: '80%', padding: '10px'}}>
          {author && <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="author">
                {avatarImage && <GatsbyImage image={avatarImage.gatsbyImageData} alt={image.title}/>}
              </Avatar>
            }
            title={author}
            subheader={` · ${updateDate.substr(0,10)} · ${readTime} min`}
          />}
          <h1>{title}</h1>
          <p>{description}</p>
          {image && 
            <GatsbyImage image={image.gatsbyImageData} alt={image.title}/>
          }
          {text && text.map((item, index) => {
          return <p key={index}>{item}</p>
          })}
        </Card>
        <div className='templatePage_socials'>
          <ul className='templatePage_links'>
            {
              socials.map((item, index) => {
              return (
                <li key={index} className='contactpage_socialLink'>
                  <Link to={item.link}>
                    <img src={item.source} alt={item.alternative} className='contactpage_image'/>
                  </Link>
                </li>
              )})
            }
          </ul>
        </div>
      </section>      
    </Layout>
  )
}

export const query = graphql`
  query getSingleTravel($title: String) {
    contentfulTravels(title: {eq: $title}) {
      author
      avatarImage {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        title
      }
      description {
        description
      }
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        title
      }
      updateDate
      title
      readTime
      content {
        text
      }
    }
  }
`

export default TravelsTemplate