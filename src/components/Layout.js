import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

import "normalize.css"
import "../assets/css/main.css"

export const Layout = ({children}) => {
  return(
    <>
      <Header/>
      <main className='hero'>
        {children}
      </main>
      <Footer/>
    </>
  )
}