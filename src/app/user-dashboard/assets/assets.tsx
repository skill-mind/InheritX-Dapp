import React, { useState } from 'react';
import { ChevronDown, Files, QrCode } from 'lucide-react';
import NftIcon from "../../../../public/svg/NFT.svg";
import Image from 'next/image';


interface AssetData {
  name: string;
  symbol: string;
  network: string;
  balance: string;
  balanceUSD: string;
  price: string;
  pnl: string;
  pnlPercent: string;
  isPositive: boolean;
  chartData: number[];
}

interface NftData {
  id: string;
  name: string;
  collection: string;
  tokenId: string;
  blockchain: string;
  image: string;
}

const Assets = () => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'nfts'>('tokens');
  const totalBalance = "$2,521.23";
  
  const assets: AssetData[] = [
    {
      name: "Ethereum",
      symbol: "ETH",
      network: "Eth on Ethereum Mainnet",
      balance: "0.5 ETH",
      balanceUSD: "$1,202",
      price: "$2,405.22",
      pnl: "+0.25%",
      pnlPercent: "+0.25%",
      isPositive: true,
      chartData: [10, 13, 15, 14, 12, 15, 17, 19, 18, 20]
    },
    {
      name: "USDT",
      symbol: "USDT",
      network: "USDT on Ethereum Mainnet",
      balance: "231.45 USDT",
      balanceUSD: "$231.45",
      price: "$2,405.22",
      pnl: "-$2,405.22",
      pnlPercent: "-1.2%",
      isPositive: false,
      chartData: [14, 16, 15, 17, 16, 18, 17, 19, 18, 20]
    },
    {
      name: "USDC",
      symbol: "USDC",
      network: "USDC on Base",
      balance: "0.5 USDC",
      balanceUSD: "$0.50",
      price: "$2,405.22",
      pnl: "-$2,405.22",
      pnlPercent: "-0.8%",
      isPositive: false,
      chartData: [15, 17, 16, 18, 17, 19, 16, 18, 17, 19]
    },
    {
      name: "USDC",
      symbol: "USDC",
      network: "USDC on Base",
      balance: "0.5 USDC",
      balanceUSD: "$0.50",
      price: "$2,405.22",
      pnl: "-$2,405.22",
      pnlPercent: "-1.5%",
      isPositive: false,
      chartData: [20, 18, 16, 15, 13, 11, 9, 7, 5, 4]
    }
  ];

  const nfts: NftData[] = [
    {
      id: "1",
      name: "SteerPunk1455",
      collection: "BoredApesYachtClub",
      tokenId: "#1234",
      blockchain: "Ethereum",
      image: "/api/placeholder/48/48"
    },
    {
      id: "2",
      name: "SteerPunk1455",
      collection: "ArtBlocks",
      tokenId: "#1233",
      blockchain: "Ethereum",
      image: "/api/placeholder/48/48"
    },
    {
      id: "3",
      name: "SteerPunk1455",
      collection: "N/A",
      tokenId: "#12134",
      blockchain: "Ethereum",
      image: "/api/placeholder/48/48"
    },
    {
      id: "4",
      name: "SteerPunk1455",
      collection: "N/A",
      tokenId: "#1235",
      blockchain: "Ethereum",
      image: "/api/placeholder/48/48"
    }
  ];

  // Function to render mini chart
  const renderChart = (data: number[], isPositive: boolean) => {
    const maxVal = Math.max(...data);
    const minVal = Math.min(...data);
    const range = maxVal - minVal;
    
    // Scale the points to fit in the available space
    const points = data.map((val, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((val - minVal) / range) * 100;
      return `${x},${y}`;
    }).join(' ');
    
    return (
      <svg width="100" height="30" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <polyline
          points={points}
          fill="none"
          stroke={isPositive ? "#4CAF50" : "#F44336"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  return (
    <div className="flex justify-center items-start w-full min-h-screen bg-[#06020E] p-4">
      <div className="w-full flex flex-col items-start">
        {/* Order Card - Left aligned with specific dimensions */}
        <div className="w-[198px] h-[183px] bg-[#06020E] rounded-[20px] p-4 flex flex-col items-center justify-center shadow-lg border border-gray-700 mb-6 self-start">
          <div className="flex flex-col items-center">
            <div className="p-2 rounded-full mb-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.0001 5.33366C14.1344 5.33332 12.3013 5.82231 10.6837 6.75183C9.06611 7.68135 7.72058 9.01888 6.78145 10.6309C5.84232 12.243 5.34242 14.0731 5.33165 15.9388C5.32088 17.8044 5.79963 19.6402 6.7201 21.263C7.34224 20.4544 8.142 19.7998 9.05754 19.3496C9.97308 18.8995 10.9799 18.6659 12.0001 18.667H20.0001C21.0203 18.6659 22.0271 18.8995 22.9426 19.3496C23.8582 19.7998 24.6579 20.4544 25.2801 21.263C26.2006 19.6402 26.6793 17.8044 26.6685 15.9388C26.6578 14.0731 26.1579 12.243 25.2187 10.6309C24.2796 9.01888 22.9341 7.68135 21.3165 6.75183C19.6989 5.82231 17.8658 5.33332 16.0001 5.33366ZM26.5908 24.1017C26.7579 23.8839 26.9179 23.6608 27.0708 23.4323C28.5489 21.2359 29.3369 18.6478 29.3334 16.0003C29.3334 8.63633 23.3641 2.66699 16.0001 2.66699C8.6361 2.66699 2.66676 8.63633 2.66676 16.0003C2.66256 18.9293 3.62681 21.7776 5.40943 24.1017L5.40276 24.1257L5.8761 24.6763C7.12661 26.1383 8.67927 27.3118 10.4271 28.1158C12.1749 28.9199 14.0762 29.3354 16.0001 29.3337C16.2881 29.3337 16.5743 29.3248 16.8588 29.307C19.2646 29.1553 21.5837 28.3509 23.5668 26.9803C24.5152 26.326 25.3748 25.5516 26.1241 24.6763L26.5974 24.1257L26.5908 24.1017ZM16.0001 8.00033C14.9392 8.00033 13.9218 8.42175 13.1717 9.1719C12.4215 9.92204 12.0001 10.9395 12.0001 12.0003C12.0001 13.0612 12.4215 14.0786 13.1717 14.8288C13.9218 15.5789 14.9392 16.0003 16.0001 16.0003C17.061 16.0003 18.0784 15.5789 18.8285 14.8288C19.5787 14.0786 20.0001 13.0612 20.0001 12.0003C20.0001 10.9395 19.5787 9.92204 18.8285 9.1719C18.0784 8.42175 17.061 8.00033 16.0001 8.00033Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center text-gray-400 text-sm mb-2">
              0x8a53...3279
              <Files className="w-4 h-4 ml-1 cursor-pointer" />
            </div>
          </div>
          <div className="text-white font-bold text-2xl">{totalBalance}</div>
          <div className="text-gray-400 mt-1">
            <div className="inline-flex items-center justify-center w-7 h-7 border border-[#413F54] rounded-full">
              <QrCode size={14} />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-6 w-full">
          <div className="mr-2">
            <button
              className={`${
                activeTab === "tokens" ? "bg-[#100033]" : "bg-gray-800"
              } hover:bg-purple-700 text-white px-4 py-2 border border-[#C0BFC6] border-solid border-1 rounded-full text-sm`}
              onClick={() => setActiveTab("tokens")}
            >
              Tokens
            </button>
          </div>
          <div>
            <button
              className={`${
                activeTab === "nfts" ? "bg-purple-800" : "bg-gray-800"
              } hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm  `}
              onClick={() => setActiveTab("nfts")}
            >
              NFTs
            </button>
          </div>
          <div className="ml-auto">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm flex items-center">
              USD <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Main Wallet Panel - Contents change based on active tab */}
        <div className="w-full md:w-[1055px] h-[505px] bg-gray-800 rounded-[20px] p-6 shadow-lg border border-gray-700 overflow-y-auto overflow-x-auto">
          {activeTab === "tokens" ? (
            <>
              <div className="flex items-center mb-6">
                <h2 className="text-white text-lg font-medium">
                  Wallet • {totalBalance}
                </h2>
              </div>

              {/* Table with minimum width to ensure horizontal scroll when needed */}
              <div className="min-w-[800px]">
                {/* Table Headers */}
                <div className="grid grid-cols-5 mb-4 text-gray-400 text-sm">
                  <div>Asset</div>
                  <div>Balance</div>
                  <div>Price</div>
                  <div>PNL</div>
                  <div>Chart</div>
                </div>

                {/* Asset Rows */}
                <div className="space-y-4">
                  {assets.map((asset, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-5 items-center py-2 border-t border-gray-700"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full mr-2 flex items-center justify-center ${
                            asset.symbol === "ETH"
                              ? "bg-blue-600"
                              : asset.symbol === "USDT"
                              ? "bg-green-600"
                              : "bg-blue-400"
                          }`}
                        >
                          {asset.symbol === "ETH" ? (
                            // Ethereum SVG (Updated)
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                            >
                              <path
                                fill="white"
                                d="M12 2L5 12L12 17L19 12L12 2Z"
                              />
                              <path
                                fill="white"
                                d="M5 13L12 22L19 13L12 17L5 13Z"
                              />
                            </svg>
                          ) : asset.symbol === "USDT" ? (
                            <span className="text-white text-xs">T</span>
                          ) : (
                            // USDC SVG
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                            >
                              <path
                                d="M16.4667 4.14457C15.2189 2.64868 13.5075 1.61205 11.6038 1.19897C9.70009 0.785887 7.71297 1.01999 5.95738 1.86417C4.20178 2.70835 2.77815 4.11431 1.91212 5.85923C1.04609 7.60414 0.787193 9.58819 1.17647 11.4969M18.2666 7.7385C18.726 9.6769 18.5101 11.7141 17.6546 13.5131C16.7991 15.3122 15.3553 16.7654 13.5618 17.6325C11.7683 18.4996 9.73259 18.7286 7.79126 18.2817C5.84993 17.8348 4.11924 16.7388 2.88537 15.1748"
                                stroke="white"
                                strokeLinecap="round"
                              />
                              <path
                                d="M16.8961 2.16992V4.50289H14.5631M4.93966 15.0012H2.60669V17.3342"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.75146 5.08594V14.4178"
                                stroke="white"
                                strokeLinecap="round"
                              />
                              <path
                                d="M11.8628 7.5965C11.7228 6.97826 10.9261 6.29004 9.75842 6.29004C8.59077 6.29004 7.69374 7.04825 7.69374 8.00477C7.69374 10.1791 12.0226 9.0616 12.0226 11.5859C12.0226 12.4969 10.9261 13.2703 9.75958 13.2703C8.5931 13.2703 7.78356 12.5529 7.54443 11.7842"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <div className="text-white text-sm">{asset.name}</div>
                          <div className="text-gray-500 text-xs">
                            {asset.network}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-white text-sm">
                          {asset.balance}
                        </div>
                        <div className="text-gray-500 text-xs">
                          ${asset.balanceUSD}
                        </div>
                      </div>

                      <div className="text-white text-sm">{asset.price}</div>

                      <div
                        className={`text-sm ${
                          asset.isPositive ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {asset.pnl}
                      </div>

                      <div className="w-full">
                        {renderChart(asset.chartData, asset.isPositive)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center mb-6">
                <h2 className="text-white text-lg font-medium">NFTs</h2>
              </div>

              {/* NFTs Table */}
              <div className="min-w-[800px]">
                {/* Table Headers */}
                <div className="grid grid-cols-6 mb-4 text-gray-400 text-sm">
                  <div>Image</div>
                  <div>Name</div>
                  <div>Collection</div>
                  <div>Token ID</div>
                  <div>Blockchain</div>
                  <div>Action</div>
                </div>

                
                {/* NFT Rows */}
                <div className="space-y-4">
                  {nfts.map((nft) => (
                    <div
                      key={nft.id}
                      className="grid grid-cols-6 items-center py-2 border-t border-gray-700"
                    >
                      <div>
                        {/* Using SVG with image tag */}
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <image
                            href={NftIcon.src}
                            x="0"
                            y="0"
                            width="48"
                            height="48"
                          />
                        </svg>
                      </div>
                      <div className="text-white text-sm">{nft.name}</div>
                      <div className="text-white text-sm">{nft.collection}</div>
                      <div className="text-white text-sm">{nft.tokenId}</div>
                      <div className="text-white text-sm">{nft.blockchain}</div>
                      <div>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assets;