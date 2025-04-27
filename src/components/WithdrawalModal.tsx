"use client";
import { useState } from "react";
import { Check, CircleCheck, User } from "lucide-react";
import Image from "next/image";
import moneyBagIcon from "../../public/modalIcon/moneyIcon.svg";
import strkImg from "../../public/modalIcon/strk.svg";
import ethImg from "../../public/modalIcon/ethIcon.png";
import btcImg from "../../public/modalIcon/bcIcon.png";

interface WithdrawalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (amount: string, token: string) => void;
}

const tokens = [
  { name: "STRK", icon: strkImg },
  { name: "ETH", icon: ethImg },
  { name: "BTC", icon: btcImg },
];

export default function WithdrawalModal({
  isOpen,
  onClose,
  onSubmit,
}: WithdrawalModalProps) {
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState(tokens[0]);
  const [showTokenDropdown, setShowTokenDropdown] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(amount, selectedToken.name);
  };

  const toggleDropdown = () => {
    setShowTokenDropdown((prev) => !prev);
  };

  const handleSelectToken = (token: { name: string; icon: any }) => {
    setSelectedToken(token);
    setShowTokenDropdown(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-[#1B1A27] rounded-lg p-8 w-full max-w-[834px] relative overflow-y-auto max-h-[90vh] scrollbar-hide">
        {/* Title */}
        <h2 className="text-[40px] font-bold text-white text-center mb-6">
          Withdraw Funds
        </h2>

        {/* Available Funds Card */}
        <div className="bg-[#16151C] border min-h-[167px] border-[#24232a] rounded-[20px] p-4 mb-4 mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex flex-col gap-2 items-start">
              <div>
                <Image
                  src={moneyBagIcon}
                  alt="Money Bag"
                  width={34}
                  height={34}
                />
              </div>
              <p className="text-[28px] font-bold text-white">2,500</p>
              <p className="text-[16px] font-thin text-gray-400">
                Available For Withdrawal
              </p>
            </div>

            {/* Token Selection */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-none border border-[#312d2f] px-3 py-1 rounded-md flex items-center"
              >
                <Image
                  src={selectedToken.icon}
                  alt={selectedToken.name}
                  width={24}
                  height={24}
                />
                <span className="text-white ml-2">{selectedToken.name}</span>
                <svg
                  className="w-4 h-4 text-white ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              {showTokenDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-[#24232a] border border-gray-700 rounded-md shadow-lg z-10">
                  {tokens.map((token) => (
                    <div
                      key={token.name}
                      onClick={() => handleSelectToken(token)}
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#312d2f]"
                    >
                      <Image
                        src={token.icon}
                        alt={token.name}
                        width={24}
                        height={24}
                      />
                      <span className="text-white">{token.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recepient Card */}
        <div className="bg-[#16151C] border min-h-[167px] border-[#24232a] rounded-[20px] p-4 py-6 mb-4 mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex flex-col gap-6 items-start">
              <div className="text-[18px] font-[600]">Recipient</div>
              <div className="flex gap-2 items-center">
                <User size={32} />
                <div className="flex flex-col">
                  <div>0x0596....0fe3</div>
                  <div className="flex items-center gap-2 text-[16px] text-[#38DA38]">
                    <CircleCheck size={18} />
                    Valid Address
                  </div>
                </div>
              </div>
              <div className="text-[12px] font-thin text-[#6B6668]">
                Account Address
              </div>
            </div>
          </div>
        </div>

        {/* Withdrawal Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-[#16151C] border min-h-[167px] border-[#24232a] rounded-[20px] p-4 mb-4">
            <p className="text-white text-[14px] mb-2">
              Enter Withdrawal Amount:
            </p>
            <div className="flex mb-2 py-3">
              {/* Token Display (again in form) */}
              <div
                className="cursor-pointer px-3 py-2 border border-gray-200 rounded-md mr-2 flex items-center"
                onClick={toggleDropdown}
              >
                <div className="flex items-center bg-white m-1 p-2 rounded-md">
                  <Image
                    src={selectedToken.icon}
                    alt={selectedToken.name}
                    width={24}
                    height={24}
                  />
                  <span className="text-black ml-2 ">{selectedToken.name}</span>
                  <svg
                    className="w-4 h-4 text-black ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="text"
                className="flex-1 border border-gray-200 rounded-md bg-[#16151C] focus:ring-0 text-white px-4 py-2"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <p className="text-[16px] text-gray-400">
              Minimum Withdrawal Amount:{" "}
              <span className="text-[#0000FF] text-[16px]">
                00 {selectedToken.name}
              </span>
            </p>

            <button
              type="submit"
              className="w-full bg-[#1B0055] h-[57px] rounded-full mt-10 hover:bg-[#4338ca] text-white font-medium py-3 px-4 transition"
            >
              Submit Withdrawal Request
            </button>
          </div>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
