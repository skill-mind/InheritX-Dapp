"use client";

import React, { useState } from "react";

interface AccountsFaqProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Accounts: React.FC<AccountsFaqProps> = ({ activeTab, setActiveTab }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tabs = ["General", "Security", "Account"];

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const FaqTabs = [
    {
      id: 1,
      heading: "Can I modify my inheritance plan?",
      content:
        "Active account holders can update beneficiary information, adjust asset allocation, modify time-lock periods, change security settings, and add or remove assets from their inheritance plan.",
      category: "Account",
    },
    {
      id: 2,
      heading: "What happens to my plan if regulations change?",
      content:
        "InheritX ensures regular compliance updates, automated policy adjustments, and user notifications of changes, while providing grace periods for plan updates and legal compliance support.",
      category: "Account",
    },
    {
      id: 3,
      heading: "How are disputes handled?",
      content:
        "InheritX’s dispute resolution process includes automated verification systems, a multi-step review process, third-party arbitration options, legal compliance verification, and transparent documentation for fair and secure conflict resolution.",
      category: "Account",
    },
  ];

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
          {FaqTabs.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => toggleOpen(index)}
              className="cursor-pointer w-full max-w-[948px] py-5 flex flex-col items-start gap-3 border-b-[1px] border-[#413F54]"
            >
              <header className="w-full flex flex-row items-center justify-between">
                <h1 className="text-white text-left font-semibold text-lg">
                  {tab.heading}
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
                {tab.content}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accounts;
