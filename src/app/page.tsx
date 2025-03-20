"use client";

import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

 const metadata = {
  title: "Landing page | InheritX",
  description:
    "InheritX revolutionizes digital asset inheritance by offering a secure and automated platform for transferring cryptocurrencies and NFTs to your heirs. Protect your digital legacy with cutting-edge blockchain technology.",
  keywords: [
    "digital inheritance",
    "blockchain",
    "cryptocurrency",
    "NFTs",
    "StarkNet",
    "secure legacy",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}