import React from 'react'

import { Layout } from '../components/Layout'
import { ImgMediaCard } from '../components/ImgMediaCard'
import { cards } from '../constants/Cards'

const Blog = () => {
  return (
    <Layout>
      <section className='blogpage'>
        <h1>Blog</h1>
        <div className='blogpage_cards'>
          {cards && cards.map(item => {
            return (
              <ImgMediaCard item={item}/>
            )  
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Blog