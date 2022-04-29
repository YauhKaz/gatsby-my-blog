import React from 'react'

import { Layout } from '../components/Layout'
import { ContactHeader } from '../components/ContactHeader'
import { ContactForm } from '../components/ContactForm'
import { Seo } from '../components/Seo'

const Contact = () => {
  return (
    <Layout>
      <Seo title='Contact'/>
      <section className='contactpage'>
        <ContactHeader/>
        <ContactForm/>
      </section>      
    </Layout>
  )
}

export default Contact