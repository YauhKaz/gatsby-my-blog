import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { ImgMediaCard } from '../components/ImgMediaCard'
import { Seo } from '../components/Seo'

const query = graphql`
  {
    allContentfulTravels(sort: {fields: updateDate, order: DESC}) {
      nodes {
        title
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            height: 200
            width: 345
          )
          title
        }
        avatarImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            height: 400
            width: 400
          )
        }
        id
        author
        description {
          description
        }
        readTime
        updateDate
      }
    }
  }
`

const Blog = () => {

  const {allContentfulTravels:{nodes: travels}} = useStaticQuery(query);

  return (
    <Layout>
      <Seo title='Blog'/>
      <section className='blogpage'>
        <h1>Blog</h1>
        <div className='blogpage_cards'>
          {travels && travels.map(item => {
            return (
              <ImgMediaCard item={item} id={item.id}/>
            )  
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Blog