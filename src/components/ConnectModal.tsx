"use client";

import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";

interface ConnectModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const walletOptions = [
  { id: "argent-mobile", src: "/argent.svg", name: "Argent (Mobile)" },
  { id: "argent-web", src: "/argent.svg", name: "Argent (Website)" },
  { id: "bravos", src: "/bravos.svg", name: "Bravos" },
];

export default function ConnectModal({
  isModalOpen,
  setIsModalOpen,
}: ConnectModalProps) {
  const [activeWallet, setActiveWallet] = useState("argent-mobile");

  return (
    <div
      className={`fixed inset-0 bg-black/70 items-center justify-center z-50 p-4 ${
        isModalOpen ? "flex" : "hidden"
      }`}
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="bg-gradient-to-b from-[#565455] via-[#302F30] to-[#1A1819] flex flex-col justify-between p-4 sm:p-6 lg:p-7 w-full max-w-[95%] md:max-w-[600px] rounded-2xl sm:rounded-3xl min-h-[450px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-start w-full">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Connect Wallet</h1>
              <p className="font-light text-sm sm:text-base mt-1">
                Select the wallet you want to connect below
              </p>
            </div>
            <button
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <MdClose className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-3 mt-6 sm:mt-8">
            {walletOptions.map((wallet) => (
              <div
                key={wallet.id}
                onClick={() => setActiveWallet(wallet.id)}
                className={`flex items-center sm:flex-col sm:items-center justify-start sm:justify-center p-3 sm:p-4 space-x-3 sm:space-x-0 sm:space-y-2 rounded-xl border border-gray-400 cursor-pointer transition-all duration-200 hover:shadow-lg w-full ${
                  activeWallet === wallet.id
                    ? "bg-[#21202A] border-2"
                    : "bg-[#615F71]"
                }`}
              >
                <Image
                  src={wallet.src}
                  alt={wallet.name}
                  height={40}
                  width={40}
                  className="sm:h-[50px] sm:w-[50px]"
                />
                <p className="text-sm sm:text-base text-center">
                  {wallet.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-3 mt-6">
          <p className="text-sm">
            Don't have a wallet?
            <button className="text-[#5000FF] hover:underline font-medium">
              Create One
            </button>
          </p>
          <button className="bg-[#1B0055] border border-gray-400 py-3 px-6 w-full rounded-full hover:scale-[1.02] transition duration-200 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl active:scale-[0.98]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
