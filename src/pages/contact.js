import React from 'react'
import {Link} from 'gatsby'

import { Layout } from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <h1>Contact page</h1>
      <button><Link to='/'>Back</Link></button>
    </Layout>
  )
}

export default Contact