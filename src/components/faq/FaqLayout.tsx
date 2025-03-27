"use client";
import { Search } from "lucide-react";
import { useState } from "react";

interface FaqProps {
  faqs: { id: number; question: string; answer: string }[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["General", "Security", "Account"];

export default function FaqLayout({ faqs, activeTab, setActiveTab }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpenFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="px-4">
      {/* Heading */}
      <div className="max-w-2xl   md:max-w-3xl text-center mx-auto mb-10 md:mb-16 py-8">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          Find answers to common questions about InheritX, from security and
          asset support to inheritance planning and regulatory compliance.
        </p>
      </div>

      {/* Search box */}
      <div className="flex justify-center mb-10 max-w-[948px] mx-auto">
        <div className="relative flex justify-center items-center w-[90%] md:w-[80%]">
          <Search className="absolute top-3 left-3.5" />
          <input
            type="text"
            placeholder="Search for a topic or question"
            className="w-full py-3 px-10 md:px-12 rounded-full border border-gray-100 text-white bg-[#21202A] placeholder:text-sm md:placeholder:text-base"
          />
          <button className="absolute right-2 px-5 py-2 bg-[#4300D4] text-white rounded-full hover:scale-105 transition-transform duration-300">
            Search
          </button>
        </div>
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

      {/* FAQ Items */}
      <div className="flex flex-col gap-[60px] items-center justify-center text-center py-5 px-6">
        <div className="flex flex-col items-start gap-1 max-w-2xl md:max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              onClick={() => handleOpenFaq(index)}
              className="cursor-pointer w-full max-w-[948px] py-5 flex flex-col items-start gap-3 border-b-[1px] border-[#413F54]"
            >
              <header className="w-full flex flex-row items-center justify-between">
                <h1 className="text-white text-left font-semibold text-lg">
                  {faq.question}
                </h1>
                <button className="w-5 h-5 rounded-full border-2 border-white relative shrink-0">
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
                className={`w-full text-left text-[#D9D9D9] text-sm font-light overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {faq.answer}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
