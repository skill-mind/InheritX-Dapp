"use client";
import AboutUs from '@/components/about/AboutUs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const metadata = {
  title: "About Us - InheritX | Secure Digital Asset Inheritance",
  description:
    "Learn about InheritX, a blockchain-powered platform dedicated to securing and seamlessly transferring digital assets, including cryptocurrencies and NFTs, across generations.",
  keywords: [
    "digital asset inheritance",
    "blockchain estate planning",
    "crypto inheritance",
    "NFT security",
    "secure digital wealth",
    "trustless asset transfer",
    "decentralized estate planning",
  ],
};

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