import React from 'react'

import { Layout } from '../components/Layout'
import { AboutPageCard } from '../components/AboutPageCard'
import { Seo } from '../components/Seo'

const About = () => {
  return (
    <Layout>
      <Seo title='About me'/>
      <section className='about_wrapper'>
        <h1 className='about_title'>About Me</h1>
        <AboutPageCard/>
      </section>
    </Layout>
  )
}

export default About