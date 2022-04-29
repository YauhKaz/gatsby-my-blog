import React from 'react'
import "normalize.css"

import { Footer } from './Footer'
import { Header } from './Header'

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