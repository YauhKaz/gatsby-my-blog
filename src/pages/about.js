import React from 'react'

import { Layout } from '../components/Layout'
import { AboutPageCard } from '../components/AboutPageCard'

const About = () => {
  return (
    <Layout>
      <section className='about_wrapper'>
        <h1 className='about_title'>About Me</h1>
        <AboutPageCard/>
      </section>
    </Layout>
  )
}

export default About