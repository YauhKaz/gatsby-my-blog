import React from 'react'

import { Layout } from '../components/Layout'
import { ContactHeader } from '../components/ContactHeader'
import { ContactForm } from '../components/ContactForm'

const Contact = () => {
  return (
    <Layout>
      <section className='contactpage'>
        <ContactHeader/>
        <ContactForm/>
      </section>      
    </Layout>
  )
}

export default Contact