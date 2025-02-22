'use client';

import { useState } from "react";

const faqs = [
  {
    question: "What is InheritX?",
    answer:
      "InheritX is a decentralized digital asset inheritance platform built on StarkNet’s Layer 2 solution. We enable secure, automated transfer of cryptocurrencies and NFTs through smart contracts, providing a trustless solution for digital estate planning.",
  },
  {
    question: "How does InheritX work?",
    answer:
      "InheritX is a decentralized digital asset inheritance platform built on StarkNet’s Layer 2 solution. We enable secure, automated transfer of cryptocurrencies and NFTs through smart contracts, providing a trustless solution for digital estate planning.",
  },
  {
    question: "What makes InheritX different from traditional inheritance solutions?",
    answer:
      "InheritX leverages blockchain technology to ensure automated execution of inheritance plans through smart contracts, eliminating the need for intermediaries while maintaining decentralized security. Our platform provides transparent verification of inheritance conditions, enabling beneficiaries to access assets with complete trust. With cross-chain compatibility, users can secure and transfer various digital assets seamlessly. Additionally, immutable record-keeping ensures that all transactions and inheritance plans remain tamper-proof and permanently verifiable on the blockchain.",
  },
];

export default function General () {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState("General");
  const tabs = ["General", "Security", "Account"];

  return (
    <section className="px-4">
      {/* Heading */}
      <div className="max-w-2xl md:max-w-3xl text-center mx-auto mb-10 md:mb-16 py-8">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300 text-sm md:text-base">
          Find answers to common questions about InheritX, from security and asset support to inheritance planning and regulatory compliance.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 py-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border border-gray-500 text-white transition-colors duration-300 ${
              activeTab === tab ? "bg-[#1B0055]" : "bg-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl md:max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
            >
              <h3 className="text-base md:text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-300 pb-4 text-sm md:text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
