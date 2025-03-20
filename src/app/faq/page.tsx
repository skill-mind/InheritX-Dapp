"use client";
import Accounts from "@/components/faq/Accounts";
import General from "@/components/faq/General";
import Security from "@/components/faq/Security";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

 const metadata = {
  title: "FAQs - InheritX | Your Digital Asset Inheritance Solution",
  description:
    "Find answers to common questions about InheritX, including security, account management, and inheritance planning. Learn how our decentralized platform ensures seamless and secure asset transfers.",
  keywords: [
    "InheritX",
    "FAQs",
    "digital asset inheritance",
    "crypto estate planning",
    "blockchain security",
    "smart contracts",
    "StarkNet",
    "NFT inheritance",
    "crypto security",
    "decentralized finance",
  ],
};


export default function page() {
  const [activeTab, setActiveTab] = useState("General");
  return (
    <div>
      <Navbar />
      {activeTab === "General" && (
        <General activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {activeTab === "Security" && (
        <Security activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {activeTab === "Account" && (
        <Accounts activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <Footer />
    </div>
  );
}
