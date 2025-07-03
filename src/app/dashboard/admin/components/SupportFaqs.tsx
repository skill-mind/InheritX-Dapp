"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SupportAddQuestion from "./SupportAddQuestion";
import SupportEditQuestion from "./SupportEditQuestion";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export default function SupportFaqs() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<FAQ | undefined>(
    undefined
  );

  const faqs: FAQ[] = [
    {
      question: "How Secure is the Platform?",
      answer: `InheritX ensures top-tier security with multi-signature validation, time-locked smart contracts, and zero-knowledge proofs for privacy. We conduct regular third-party audits, support hardware wallet integration, and use advanced encryption to protect users' assets.`,
      category: "Security",
    },
    {
      question:
        "What makes InheritX different from traditional inheritance platforms?",
      answer: `InheritX leverages blockchain technology to ensure automated execution of inheritance plans through smart contracts, eliminating the need for intermediaries while maintaining decentralized security. Our platform provides transparent verification of inheritance conditions, enabling beneficiaries to access assets with complete trust. Additionally, immutable record-keeping ensures that all transactions and inheritance plans remain tamper-proof and permanently verifiable on the blockchain.`,
      category: "Security",
    },
  ];

  const handleEditClick = (faq: FAQ) => {
    setSelectedQuestion(faq);
    setIsEditOpen(true);
  };

  return (
    <div className="px-4 sm:px-6 mt-10 pb-10">
      <div className="flex justify-between pb-5">
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-[#1B0055] hover:bg-[#2D1B50] px-6 py-3 border border-[#C0BFC6] rounded-full transition-colors"
        >
          <p>Add Question</p>
          <Image src="/svg/add.svg" alt="Add Icon" width={15} height={15} />
        </button>

        <button className="text-white hover:text-gray-300 flex items-center">
          <Image
            src="/svg/filter.svg"
            alt="Filter Icon"
            width={15}
            height={15}
          />
          <p className="ml-2">Security</p>
        </button>
      </div>

      <SupportAddQuestion isOpen={isAddOpen} setIsOpen={setIsAddOpen} />

      {isEditOpen && (
        <SupportEditQuestion
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          questionData={selectedQuestion}
        />
      )}

      <div className="bg-[#29242F] bg-[linear-gradient(180deg,rgba(41,36,47,1)_55%,rgba(20,16,26,1)_100%)] rounded-lg p-4 sm:p-6 border border-[#413F54]">
        <div className="flex justify-between">
          <h2 className="text-xl lg:text-[32px] mb-4 sm:mb-6 font-[400]">
            FAQs
          </h2>
          <div className="flex">
            <p className="text-[#5000FF] hover:text-[#5100ffb0]">
              View All Questions
            </p>
            <ChevronDown className="w-5 h-5 mt-1 ml-1" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left text-white">
                <th className="pb-4 font-medium w-[27%]">Question</th>
                <th className="pb-4 font-medium w-[48%]">Answer</th>
                <th className="pb-4 font-medium w-[12%]">Category</th>
                <th className="pb-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="font-light">
              {faqs.map((faq, index) => (
                <tr key={index}>
                  <td className="py-3">{faq.question}</td>
                  <td className="py-3">{faq.answer}</td>
                  <td className="py-3 pl-5">{faq.category}</td>
                  <td className="py-3">
                    <button
                      onClick={() => handleEditClick(faq)}
                      className="text-[#6D2BFF] hover:text-[#6e2bffc9]"
                    >
                      Edit
                    </button>
                    <button className="text-[#EC796B] hover:text-[#ec7a6bd0] ml-5">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
