"use client"
import FAQ from '@/components/faq/FAQ'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <>
     <Navbar />
      <FAQ />
      <Footer />
    </>
  )
}

export default page