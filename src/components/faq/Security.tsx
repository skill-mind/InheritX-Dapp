"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How secure is the platform?",
    answer:
      "InheritX ensures top-tier security with multi-signature validation, time-locked smart contracts, and zero-knowledge proofs for privacy. We conduct regular third-party audits, support hardware wallet integration, and use advanced encryption to protect user assets.",
  },

  {
    id: 2,
    question: "What happens if I lose my credentials?",
    answer:
      "InheritX offers multiple recovery options, including an emergency contact system, multi-factor authentication backup, and recovery seed phrases. Users can also regain access through a designated guardian approval process or identity verification restoration.",
  },
  {
    id: 3,
    question: "Which wallets and assets are supported?",
    answer:
      "InheritX supports Argent X, Braavos, and other StarkNet-compatible wallets, along with cryptocurrencies, NFTs, and digital collectibles. We also enable cross-chain asset transfers through secure bridges, with plans to expand to additional asset types in the future.",
  },
];

interface SecurityFaqProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Security({
  activeTab,
  setActiveTab,
}: SecurityFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tabs = ["General", "Security", "Account"];

  const handleOpenFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <section className="px-4">
      <div className="max-w-2xl md:max-w-3xl text-center mx-auto mb-10 md:mb-16 py-8">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          Find answers to common questions about InheritX, from security and
          asset support to inheritance planning and regulatory compliance.
        </p>
      </div>
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
      <div className="flex flex-col gap-[60px] items-center justify-center text-center py-5 px-6">
        <div className="flex flex-col items-start gap-1">
          {faqs.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => handleOpenFaq(index)}
              className="cursor-pointer w-full max-w-[948px] py-5 flex flex-col items-start gap-3 border-b-[1px] border-[#413F54]"
            >
              <header className="w-full flex flex-row items-center justify-between">
                <h1 className="text-white text-left font-semibold text-lg">
                  {tab.question}
                </h1>

                <button className="w-5 h-5 rounded-full border-2 border-white relative">
                  <span
                    className={`block w-[12px] h-[2px] bg-white transition duration-300 ease-in-out absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ${
                      openIndex === index ? "rotate-[45deg]" : "rotate-0"
                    }`}
                  ></span>
                  <span
                    className={`block w-[12px] h-[2px] bg-white absolute duration-300 ease-in-out top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ${
                      openIndex === index ? "rotate-[-45deg]" : "rotate-0"
                    }`}
                  ></span>
                </button>
              </header>
              <article
                className={`w-full text-left text-[#D9D9D9] text-sm font-light overflow-hidden ${
                  openIndex === index ? "h-auto" : "h-0"
                }`}
              >
                {tab.answer}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
