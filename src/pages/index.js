import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { AboutMeCard } from '../components/AboutMeCard'
import { FeaturedPost } from '../components/FeaturedPost'
import { Layout } from '../components/Layout'
import { Video } from '../components/Video'
import { HomepageCard } from '../components/HomepageCard'
import { InfoLine } from '../components/InfoLine'
import { HomepageImageList } from '../components/HomepageImageList'
import { Seo } from '../components/Seo'

const query = graphql`
  {
    allContentfulTravels(sort: {fields: updateDate, order: DESC}) {
      nodes {
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, height: 200, width: 250)
          title
        }
        id
      }
    }
  }
`

export default function Home() {

  const {allContentfulTravels:{nodes: travels}} = useStaticQuery(query);

  return (
    <Layout>
      <>
        <Seo title='Home'/>
        <section className='videoSection'>
          <Video poster='http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png'/>
          <AboutMeCard/>
        </section> 
        <FeaturedPost />
        <section className='recentPosts'>
          <h3>Recent Posts</h3>
          <div className='homepageCardWrapper'>
            {travels && travels.map((item, index) => {
              return <HomepageCard key={index} id={item.id} item={item}/>
            })}
          </div>
        </section>
        <InfoLine/>
        <HomepageImageList/>
      </>
    </Layout>
  )
}
