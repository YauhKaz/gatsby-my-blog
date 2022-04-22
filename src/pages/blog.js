import React from 'react'
import {Link} from 'gatsby'

import { Layout } from '../components/Layout'

const Blog = () => {
  return (
    <Layout>
      <h1>Blog page</h1>
      <button><Link to='/'>Back</Link></button>
    </Layout>
  )
}

export default Blog