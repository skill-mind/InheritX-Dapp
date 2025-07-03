"use client";
import React, { useState, useRef, useEffect } from "react";
import { FileText, ChevronUp, ChevronDown } from "lucide-react";

interface PreviewClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreviewClaimModal: React.FC<PreviewClaimModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [assetsVisible, setAssetsVisible] = useState(true);
  const [filesVisible, setFilesVisible] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  // Hardcoded claim data for testing
  const claim = {
    assetsOwner: "Daniel Ochojis",
    message: "For everyone dear to me",
    transferDate: "28-05-2030",
    assets: {
      tokens: [
        { name: "ETH", amount: "0.51", dollars: "≈$2,523.22" },
        { name: "STARK", amount: "23,450", dollars: "≈$2,523.22" },
      ],
      nfts: ["JASPe2113", "RocketTeddy222"],
      files: ["tribute_and_instructions.mp4", "tribute_and_instructions.mp4"],
    },
  };

  // Scroll to top when modal opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center z-50">
      <div
        ref={modalRef}
        className="bg-[#14141B]  text-white rounded-3xl shadow-lg px-8 py-6 w-11/12 md:w-[828px] my-4 max-h-[921px] overflow-y-auto scrollbar-hide"
      >
        <h2 className="text-center  text-2xl font-semibold sticky top-[-30px] bg-[#14141B] pt-2 pb-6 z-10">
          Preview Claim
        </h2>

        <div className="space-y-4">
          {/* Asset Owner Name */}
          <div className="bg-[#1E1E2A] rounded-lg p-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-300">Asset Owner Name</p>
              <p className="text-sm">{claim.assetsOwner}</p>
            </div>
          </div>

          {/* Message */}
          <div className="bg-[#1E1E2A] rounded-lg p-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-300">Message</p>
              <p className="text-sm">{claim.message}</p>
            </div>
          </div>

          {/* Transfer Date */}
          <div className="bg-[#1E1E2A] rounded-lg p-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-300">Transfer Date</p>
              <p className="text-sm">{claim.transferDate}</p>
            </div>
          </div>

          {/* Assets */}
          <div className="bg-[#1E1E2A] rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-300">Assets</p>
              <div
                className="flex items-center text-xs text-gray-400 cursor-pointer"
                onClick={() => setAssetsVisible(!assetsVisible)}
              >
                <span>{assetsVisible ? "Hide Details" : "Show Details"}</span>
                {assetsVisible ? (
                  <ChevronUp size={16} className="ml-1" />
                ) : (
                  <ChevronDown size={16} className="ml-1" />
                )}
              </div>
            </div>

            {assetsVisible && (
              <>
                {/* Tokens */}
                <div className="bg-[#272730] rounded-lg mb-4">
                  <div className="p-3 border-b border-gray-700">
                    <p className="text-sm">Tokens</p>
                  </div>
                  <div className="p-4 space-y-3">
                    {claim.assets.tokens.map((token, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm">{token.name}</span>
                        <div>
                          <span className="text-sm">{token.amount}</span>
                          <span className="text-xs text-gray-400 ml-1">
                            {token.dollars}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* NFTs */}
                <div className="bg-[#272730] rounded-lg">
                  <div className="p-3 border-b border-gray-700">
                    <p className="text-sm">NFT</p>
                  </div>
                  <div className="p-4 space-y-3">
                    {claim.assets.nfts.map((nft, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm">{nft}</span>
                        <button className="text-indigo-500 text-sm flex items-center">
                          Preview
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Files */}
          <div className="bg-[#1E1E2A] rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-300">Files</p>
              <div
                className="flex items-center text-xs text-gray-400 cursor-pointer"
                onClick={() => setFilesVisible(!filesVisible)}
              >
                <span>{filesVisible ? "Hide Details" : "Show Details"}</span>
                {filesVisible ? (
                  <ChevronUp size={16} className="ml-1" />
                ) : (
                  <ChevronDown size={16} className="ml-1" />
                )}
              </div>
            </div>

            {filesVisible && (
              <div className="space-y-3">
                {claim.assets.files.map((file, index) => (
                  <div
                    key={index}
                    className="bg-[#272730] p-3 rounded-lg flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <FileText size={18} className="mr-3 text-gray-400" />
                      <div>
                        <p className="text-sm">File 1</p>
                        <p className="text-xs text-gray-400">{file}</p>
                      </div>
                    </div>
                    <button className="text-indigo-500 text-sm">Preview</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center pb-2">
          <button
            className="bg-white text-black font-medium px-8 py-2 rounded-full"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewClaimModal;
