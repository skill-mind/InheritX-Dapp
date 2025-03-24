"use client";

import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function AddQuestionModal({ isOpen, setIsOpen }) {
  const [isAddingQuestion, setIsAddingQuestion] = useState(true); 
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false); 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  if (!isOpen) return null;

  const handleApplyChanges = () => {
    setIsAddingQuestion(false); 
    setIsConfirmationVisible(true); 

    setTimeout(() => {
      setIsOpen(false);
      setIsAddingQuestion(true); 
      setIsConfirmationVisible(false);
    }, 15000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#21202A] p-8 rounded-3xl max-w-xl w-full text-white border border-[#615F71]">
      
        <button onClick={() => setIsOpen(false)} className="text-gray-400 text-xl hover:text-white">
          &larr; Go Back
        </button>

        {isAddingQuestion ? (
          <>
            <h2 className="text-3xl font-bold text-center mt-5">Add Question</h2>

            <div className="mt-4">
              <label className="block text-sm">Question</label>
              <input 
                type="text" 
                className="w-full p-3 mt-1 text-sm bg-[#2B2A38] border border-[#D9D9DD] rounded-md outline-none" 
                placeholder="Enter your question"
              />

              <label className="block mt-3 text-sm">Category</label>
              <select className="w-full p-3 mt-1 text-sm bg-[#2B2A38] border border-[#D9D9DD] rounded-md outline-none">
                <option>Security</option>
                <option>Account</option>
                <option>Billing</option>
              </select>

              <label className="block mt-3 text-sm">Answer</label>
              <textarea 
                className="w-full p-2 mt-1 bg-[#2B2A38] text-sm border border-[#D9D9DD] rounded-md h-28 outline-none"
                placeholder="Enter your answer"
              ></textarea>
            </div>

            <button 
              onClick={handleApplyChanges} 
              className="mt-4 lg:w-[35%] bg-[#1B0055] px-6 py-2 border border-[#C0BFC6] rounded-2xl hover:bg-[#290080a4]"
            >
              Apply Changes
            </button>
          </>
        ) : isConfirmationVisible ? (
          <div className="flex flex-col items-center justify-center h-full">
            <CheckCircle className="text-green-500 w-28 h-28" />
            <h2 className="text-4xl font-bold mt-4">Question Added</h2>
            <p className="text-center text-sm mt-4">
              Question Added Sucessfully
            </p>
            <button 
              onClick={() => setIsOpen(false)} 
              className="mt-4 bg-white text-black px-10 py-2 rounded-2xl hover:bg-zinc-300"
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
