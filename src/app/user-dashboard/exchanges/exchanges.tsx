import React, { useState } from "react";
import Image from "next/image";
import SuccessModal from "./SuccessModal";
import { ChevronDown, ArrowUpDown } from "lucide-react";
import btc from "../../../../public/assets/btc.png";
import eth from "../../../../public/assets/Eth.png";
import strk from "../../../../public/assets/strk.png";
import usdc from "../../../../public/assets/usdc.png";
import usdt from "../../../../public/assets/usdt.png";

// Token type definition
interface Token {
  id: string;
  name: string;
  symbol: string;
  logo: any; // Changed to accept imported image
  isStable: boolean;  
  balance: number;
  value: number;
}

// Transaction type definition
interface Transaction {
  id: string;
  date: string;
  fromToken: string;
  fromAmount: number;
  toToken: string;
  toAmount: number;
  status: "Completed" | "Pending" | "Failed";
}

const Exchange = () => {
  // Sample token data with actual imported logo images
  const tokens: Token[] = [
    {
      id: "1",
      name: "Stark",
      symbol: "STARK",
      logo: strk,
      isStable: false,
      balance: 25231.34,
      value: 2.18,
    },
    {
      id: "2",
      name: "USD Tether",
      symbol: "USDT",
      logo: usdt,
      isStable: true,
      balance: 12553.67,
      value: 1,
    },
    {
      id: "3",
      name: "Ethereum",
      symbol: "ETH",
      logo: eth,
      isStable: false,
      balance: 5.76,
      value: 2950,
    },
    {
      id: "4",
      name: "USD Coin",
      symbol: "USDC",
      logo: usdc,
      isStable: true,
      balance: 8765.43,
      value: 1,
    },
    {
      id: "5",
      name: "Bitcoin",
      symbol: "BTC",
      logo: btc,
      isStable: false,
      balance: 0.25,
      value: 63500,
    },
  ];

  // Sample transaction data
  const transactions: Transaction[] = [
    {
      id: "0x1234...5678",
      date: "24-01-2025",
      fromToken: "STARK",
      fromAmount: 11325.75,
      toToken: "USDT",
      toAmount: 2342.22,
      status: "Completed",
    },
    {
      id: "0xabcd...ef12",
      date: "23-01-2025",
      fromToken: "ETH",
      fromAmount: 1.5,
      toToken: "STARK",
      toAmount: 5238.7,
      status: "Completed",
    },
    {
      id: "0x9876...5432",
      date: "22-01-2025",
      fromToken: "USDT",
      fromAmount: 1000,
      toToken: "BTC",
      toAmount: 0.015,
      status: "Completed",
    },
  ];

  // State management
  const [fromToken, setFromToken] = useState<Token>(tokens[0]);
  const [toToken, setToToken] = useState<Token>(tokens[1]);
  const [fromAmount, setFromAmount] = useState<string>("11549.95");
  const [toAmount, setToAmount] = useState<string>("2521.24");
  const [showFromDropdown, setShowFromDropdown] = useState<boolean>(false);
  const [showToDropdown, setShowToDropdown] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [filterStable, setFilterStable] = useState<boolean | null>(null);

  // Handle amount changes with conversion
  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    const numericValue = parseFloat(value) || 0;
    const convertedValue = (
      (numericValue * fromToken.value) /
      toToken.value
    ).toFixed(2);
    setToAmount(convertedValue);
  };

  const handleToAmountChange = (value: string) => {
    setToAmount(value);
    const numericValue = parseFloat(value) || 0;
    const convertedValue = (
      (numericValue * toToken.value) /
      fromToken.value
    ).toFixed(2);
    setFromAmount(convertedValue);
  };

  // Handle token selection
  const selectFromToken = (token: Token) => {
    if (token.id === toToken.id) {
      setToToken(fromToken);
    }
    setFromToken(token);
    setShowFromDropdown(false);
    handleFromAmountChange(fromAmount);
  };

  const selectToToken = (token: Token) => {
    if (token.id === fromToken.id) {
      setFromToken(toToken);
    }
    setToToken(token);
    setShowToDropdown(false);
    handleFromAmountChange(fromAmount);
  };

  // Swap tokens function
  const swapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  // Execute swap
  const executeSwap = () => {
    setShowSuccessModal(true);
  };

  // Filter tokens by stable/unstable
  const filteredTokens = tokens.filter(
    (token) => filterStable === null || token.isStable === filterStable
  );

  // Helper function to get token by symbol
  const getTokenImageBySymbol = (symbol: string) => {
    const token = tokens.find((t) => t.symbol === symbol);
    return token ? token.logo : null;
  };

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-8">
      <div className="max-w-2xl mx-auto p-3 sm:p-6 rounded-lg shadow-lg bg-[#29252f]">
        {/* From Section */}
        <div className="relative p-3 sm:p-6 bg-[#201f2a] text-white border rounded-[18px] border-[#A09FA9]">
          <div className="flex justify-between items-center mb-4">
            <span>From</span>
            <div className="relative">
              <button
                className="flex items-center gap-1 sm:gap-2 bg-white text-black rounded-full py-1 px-2 sm:px-4 text-sm sm:text-base"
                onClick={() => setShowFromDropdown(!showFromDropdown)}
              >
                {/* Replaced text with Image component */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={fromToken.logo}
                    alt={fromToken.symbol}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>{fromToken.symbol}</span>
                <ChevronDown size={16} className="sm:hidden" />
                <ChevronDown size={20} className="hidden sm:block" />
              </button>

              {/* From Token Dropdown */}
              {showFromDropdown && (
                <div className="absolute right-0 top-12 w-48 sm:w-64 bg-white rounded-lg shadow-lg z-10 text-gray-900">
                  <div className="p-2 sm:p-3 border-b">
                    <div className="flex space-x-1 sm:space-x-2">
                      <button
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                          filterStable === null
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100"
                        }`}
                        onClick={() => setFilterStable(null)}
                      >
                        All
                      </button>
                      <button
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                          filterStable === true
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100"
                        }`}
                        onClick={() => setFilterStable(true)}
                      >
                        Stable
                      </button>
                      <button
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                          filterStable === false
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100"
                        }`}
                        onClick={() => setFilterStable(false)}
                      >
                        Unstable
                      </button>
                    </div>
                  </div>
                  <div className="max-h-48 sm:max-h-60 overflow-y-auto">
                    {filteredTokens.map((token) => (
                      <div
                        key={token.id}
                        className={`p-2 sm:p-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between ${
                          token.id === fromToken.id ? "bg-gray-50" : ""
                        }`}
                        onClick={() => selectFromToken(token)}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          {/* Replaced text with Image component */}
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            <Image
                              src={token.logo}
                              alt={token.symbol}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-sm sm:text-base">
                              {token.name}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-900">
                              {token.symbol}
                            </div>
                          </div>
                        </div>
                        <div className="text-right text-sm sm:text-base">
                          <div>{token.balance.toLocaleString()}</div>
                          <div className="text-xs sm:text-sm text-gray-900">
                            ${(token.balance * token.value).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div
              contentEditable="true"
              suppressContentEditableWarning={true}
              onInput={(e) =>
                handleFromAmountChange(e.currentTarget.textContent || "")
              }
              className="bg-transparent text-2xl sm:text-3xl md:text-4xl font-bold outline-none"
            >
              {fromAmount}
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {fromToken.symbol}
            </div>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-400">
              ≈${(parseFloat(fromAmount) * fromToken.value).toLocaleString()}
            </div>
          </div>

          <div className="pt-2 text-sm sm:text-base">
            Balance: {fromToken.balance.toLocaleString()} {fromToken.symbol}
            <span className="ml-1">
              (${(fromToken.balance * fromToken.value).toLocaleString()})
            </span>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center relative h-0 z-10 mt-2 mb-2">
          <button
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black border shadow-lg flex items-center justify-center"
            onClick={swapTokens}
          >
            <ArrowUpDown size={20} className="sm:hidden" />
            <ArrowUpDown size={30} className="hidden sm:block" />
          </button>
        </div>

        {/* To Section */}
        <div className="relative p-3 sm:p-6 bg-[#201f2a] text-white border rounded-[18px] border-[#A09FA9]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">To</span>
            <div className="relative">
              <button
                className="flex items-center gap-1 sm:gap-2 bg-white text-black rounded-full py-1 px-2 sm:px-4 text-sm sm:text-base"
                onClick={() => setShowToDropdown(!showToDropdown)}
              >
                {/* Replaced text with Image component */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={toToken.logo}
                    alt={toToken.symbol}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>{toToken.symbol}</span>
                <ChevronDown size={16} className="sm:hidden" />
                <ChevronDown size={20} className="hidden sm:block" />
              </button>

              {/* To token dropdown */}
              {showToDropdown && (
                <div className="absolute right-0 top-12 w-48 sm:w-64 bg-white rounded-lg shadow-lg z-10 text-gray-900">
                  <div className="p-2 sm:p-3 border-b">
                    <div className="flex space-x-1 sm:space-x-2">
                      <button
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                          filterStable === null
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100"
                        }`}
                        onClick={() => setFilterStable(null)}
                      >
                        All
                      </button>
                      <button
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                          filterStable === true
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100"
                        }`}
                        onClick={() => setFilterStable(true)}
                      >
                        Stable
                      </button>
                      <button
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                          filterStable === false
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100"
                        }`}
                        onClick={() => setFilterStable(false)}
                      >
                        Unstable
                      </button>
                    </div>
                  </div>
                  <div className="max-h-48 sm:max-h-60 overflow-y-auto">
                    {filteredTokens.map((token) => (
                      <div
                        key={token.id}
                        className={`p-2 sm:p-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between ${
                          token.id === toToken.id ? "bg-gray-50" : ""
                        }`}
                        onClick={() => selectToToken(token)}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          {/* Replaced text with Image component */}
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            <Image
                              src={token.logo}
                              alt={token.symbol}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-sm sm:text-base">
                              {token.name}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-900">
                              {token.symbol}
                            </div>
                          </div>
                        </div>
                        <div className="text-right text-sm sm:text-base">
                          <div>{token.balance.toLocaleString()}</div>
                          <div className="text-xs sm:text-sm text-gray-900">
                            ${(token.balance * token.value).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div
              contentEditable="true"
              suppressContentEditableWarning={true}
              onInput={(e) =>
                handleToAmountChange(e.currentTarget.textContent || "")
              }
              className="bg-transparent text-2xl sm:text-3xl md:text-4xl font-bold outline-none"
            >
              {toAmount}
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {toToken.symbol}
            </div>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-400">
              ≈${(parseFloat(toAmount) * toToken.value).toLocaleString()}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 text-sm sm:text-base">
            <div>Gas Fee: 0.001 ETH</div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="pt-4">
          <button
            className="w-full py-4 sm:py-6 bg-white text-black rounded-[38px] text-lg sm:text-xl md:text-[24px] font-normal"
            onClick={executeSwap}
          >
            Swap Tokens
          </button>
        </div>
      </div>

      {/* Activity log */}
      <div className="bg-[#201f2a] rounded-[24px] shadow-md overflow-hidden mt-4 sm:mt-8">
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl">Activity Log</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs sm:text-sm">
                <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-white tracking-wider">
                  Date
                </th>
                <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-white tracking-wider">
                  From
                </th>
                <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-white tracking-wider">
                  To
                </th>
                <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-white tracking-wider">
                  Transaction ID
                </th>
                <th className="px-2 sm:px-6 py-2 sm:py-3 text-left font-medium text-white tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    {transaction.date}
                  </td>
                  <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      {/* Added logo to transaction history */}
                      <div className="w-4 h-4 rounded-full overflow-hidden">
                        {getTokenImageBySymbol(transaction.fromToken) && (
                          <Image
                            src={getTokenImageBySymbol(transaction.fromToken)}
                            alt={transaction.fromToken}
                            width={16}
                            height={16}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      {transaction.fromAmount.toLocaleString()}{" "}
                      {transaction.fromToken}
                    </div>
                  </td>
                  <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      {/* Added logo to transaction history */}
                      <div className="w-4 h-4 rounded-full overflow-hidden">
                        {getTokenImageBySymbol(transaction.toToken) && (
                          <Image
                            src={getTokenImageBySymbol(transaction.toToken)}
                            alt={transaction.toToken}
                            width={16}
                            height={16}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      {transaction.toAmount.toLocaleString()}{" "}
                      {transaction.toToken}
                    </div>
                  </td>
                  <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    <span className="hidden sm:inline">{transaction.id}</span>
                    <span className="sm:hidden">
                      {transaction.id.substring(0, 8)}...
                    </span>
                  </td>
                  <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : transaction.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        fromAmount={fromAmount}
        fromToken={fromToken}
        toAmount={toAmount}
        toToken={toToken}
      />
    </div>
  );
};

export default Exchange;
