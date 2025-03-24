"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

interface QuestionData {
  question: string;
  answer: string;
  category: string;
}

interface SupportEditQuestionProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  questionData?: QuestionData; 
}

export default function SupportEditQuestion({ isOpen, setIsOpen, questionData }: SupportEditQuestionProps) {
  const [question, setQuestion] = useState(questionData?.question || "");
  const [answer, setAnswer] = useState(questionData?.answer || "");
  const [category, setCategory] = useState(questionData?.category || "");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (questionData) {
      setQuestion(questionData.question);
      setAnswer(questionData.answer);
      setCategory(questionData.category);
    }
  }, [questionData]);

  const handleApplyChanges = () => {
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsOpen(false);
      setIsSuccess(false);
    }, 10000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#21202A] p-6 rounded-lg max-w-2xl shadow-lg w-full border border-[#615F71]">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center h-full py-20 rounded-xl">
            <CheckCircle className="text-green-500 w-28 h-28" />
            <h2 className="text-4xl font-bold mt-4">Changes Saved</h2>
            <p className="text-center text-sm mt-4">Question Edited successfully.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-white text-black px-10 py-2 rounded-2xl hover:bg-zinc-300"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <button onClick={() => setIsOpen(false)} className="text-white mb-4 text-xl">
              ← Go Back
            </button>
            <h2 className="text-3xl font-bold mb-4 text-center">Edit Question</h2>

            <label className="block mb-2 text-white">Question</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-2 rounded-xl bg-[#21202A] border border-[#D9D9DD] text-white mb-4 outline-none"
            />

            <label className="block mb-2 text-white">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded-xl bg-[#21202A] border border-[#D9D9DD] text-white mb-4 outline-none"
            >
              <option value="Security">Security</option>
              <option value="General">General</option>
              <option value="Technical">Technical</option>
            </select>

            <label className="block mb-2 text-white">Answer</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full p-2 rounded-xl bg-[#21202A] border border-[#D9D9DD] text-white mb-4 pb-16 outline-none"
            />

            <button
              onClick={handleApplyChanges}
              className="bg-[#1B0055] text-white px-8 py-2 rounded-2xl border border-[#C0BFC6]"
            >
              Apply Changes
            </button>
          </>
        )}
      </div>
    </div>
  );
}
