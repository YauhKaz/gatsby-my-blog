import React from 'react'
import {Link} from 'gatsby'

import { Layout } from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <h1>About page</h1>
      <button><Link to='/'>Back</Link></button>
    </Layout>
  )
}

export default About