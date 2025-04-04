import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer/footer'
import Header from './components/Header/Header'

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
 
