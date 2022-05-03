import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const query = graphql`
  {
    allContentfulTravels(sort: {fields: updateDate, order: DESC}) {
      nodes {
        title
        id
        author
        description {
          description
        }
        readTime
        updateDate
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, height: 240, width: 300)
          title
        }        
      }
    }
  }
`

export const FeaturedPost = () => {

  const {allContentfulTravels:{nodes: travels}} = useStaticQuery(query);

  const blog = travels[0];
  const slug = slugify(blog.title, { lower: true })

  const textTransform = (text) => {
    if (text.length > 100) return `${text.substr(0,120)}...`;
    return text
  }

  return (
    <section className='featurePost'>
      <h4>Featured Post</h4>
      <div className='featurePost_wrapper'>
        <Link to={`/${slug}`} className='featurePost_imageWrapper'>
          <GatsbyImage image={blog.image.gatsbyImageData} alt={blog.image.title}/>
        </Link>
        <div className='featurePost_textWrapper'>
          <div className='featurePost_articleWrapper'>
            <p className='featurePost_date'><span>{blog.updateDate.substr(0,10)}</span> · <span>{blog.readTime} min</span></p>
            <Link to={`/${slug}`} className='featurePost_article'>
              <h4>{blog.title}</h4>
              <p className='featurePost_text'>{textTransform(blog.description.description)}</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}