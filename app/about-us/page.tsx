"use client"
import AboutUs from '@/components/about/AboutUs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <>
     <Navbar />
      <AboutUs />
      <Footer />
    </>
  )
}

export default page