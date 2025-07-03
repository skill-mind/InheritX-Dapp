"use client";

import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAccount } from "@starknet-react/core";
import { useEffect } from "react";

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
  const { account } = useAccount()
  
  useEffect(() => {
    if (account) {
      window.location.href = "/dashboard/user";
    }
  },[account?.address])
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}