"use client";
import React from "react";
import { FileText } from 'lucide-react';



interface PreviewClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
  
}

const AcceptedModal: React.FC<PreviewClaimModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  

  // Hardcoded claim data for testing
  const claim = {
    assetsOwner: "Daniel Ochojis",
    message: "For everyone dear to me",
    transferDate: "28-05-2030",
    assets: {
      tokens: [
        { name: "ETH", amount: "0.51", dollas:"≈$2.523.22" },
        { name: "STARK", amount: "23.450", dollas:"≈$2.523.22"},
      ],
      nfts: ["JASPe2113", "RocketTeddy222"],
      files: ["tribute_and_instuctions.mp4", "tribute_and_instuctions.mp4"],
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-[#21202a] text-white rounded-lg shadow-lg px-10 py-2 w-10/12 md:w-6/12 max-w-full mt-2">
        <h2 className="text-center text-xl font-semibold mb-4">Preview Claim</h2>
        

            <div  className="space-y-1">
              <div className="flex justify-between bg-[#2B2A38] rounded-md text-xs p-2 border border-zinc-600">
                <p className="">Asset Owner Name</p>
                <div className="text-gray-300 text-xs">{claim.assetsOwner}</div>
              </div>
              <div className="flex justify-between bg-[#2B2A38] rounded-md text-xs p-2  border border-zinc-600">
                <p className="">Message</p>
                <div className="text-gray-300 text-xs">For everyone dear to me</div>
              </div>
              <div className="flex justify-between bg-[#2B2A38] rounded-md text-xs p-2  border border-zinc-600">
                <p className="">Transfer Date</p>
                <div className="text-gray-300 text-xs">{claim.transferDate}</div>
              </div>
              
              <div className="bg-[#2B2A38] rounded-md space-y-2 text-xs p-2">
                <p className="">Assets</p>
                <div className="px-2">
                  <div className="bg-[#413F54] px-4 py-2 rounded-md space-y-1 mb-2">
                  <p className="">Tokens</p>
                  <div className="border border-b-[1px] border-neutral-600"/>
                  {claim.assets.tokens.map((token, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{token.name}</span>
                      <div>
                      <span>{token.amount}</span>
                      <span className="text-gray-300 pl-1 text-[10px]">{token.dollas}</span>
                      </div>

                    </div>
                  ))}
                  </div>

                  <div className="bg-[#413F54] px-4 py-2 rounded-md space-y-2 text-xs">
                  <p className="">NFTs</p>
                  <div className="border border-b-[1px] border-neutral-600"/>
                  {claim.assets.nfts.map((nft, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{nft}</span>
                      <button className="text-[#8A55FF] underline">Preview</button>
                    </div>
                  ))}
                  </div>

                </div>

              </div>
              <div className="bg-[#2B2A38] px-4 py-2 rounded-md space-y-2 text-xs">
                <p className="text-gray-300">Files</p>
                  {claim.assets.files.map((file, index) => (
                    <div key={index} className="bg-[#413F54] p-2 rounded-md flex justify-between">
                      <div className="flex items-center gap-3">
                        <div>
                          <FileText size={16} />
                        </div>
                        <div>
                          <p>File 1</p>
                          <p>{file}</p>
                        </div>

                      </div>

                      <button className="text-[#8A55FF] underline">Preview</button>
                    </div>
                  ))}
                </div>
            </div>
     

        

        <div className="mt-4 flex justify-center text-xs">
          <button className="bg-white text-black px-10 py-1 rounded-xl" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptedModal;
