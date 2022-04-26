import React from 'react'
import { AboutMeCard } from '../components/AboutMeCard'
import { FeaturedPost } from '../components/FeaturedPost'

import { Layout } from '../components/Layout'
import { Video } from '../components/Video'
import { HomepageCard } from '../components/HomepageCard'
import { InfoLine } from '../components/InfoLine'
import {cards} from '../constants/Cards'
import { HomepageImageList } from '../components/HomepageImageList'

export default function Home() {
  return (
    <Layout>
      <>
        <section className='videoSection'>
          <Video poster='http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png'/>
          <AboutMeCard/>
        </section> 
        <FeaturedPost/>
        <section className='recentPosts'>
          <h3>Recent Posts</h3>
          <div className='homepageCardWrapper'>
            {cards && cards.map(item => {
              return <HomepageCard item={item}/>
            })}
          </div>
        </section>
        <InfoLine/>
        <HomepageImageList/>
      </>
    </Layout>
  )
}
