'use client'
import React, { useState } from 'react';

// Dashboard component
const Dashboard = () => {
  const [showModal, setShowModal] = useState<"received" | "invalid" | "pending" | "preview" | "payment-success" | "payment-failed" | null>(null);
  const [claims, setClaims] = useState([
    {
      date: "24-01-2025",
      assetOwner: "Daniel Ochoja",
      assets: "Tokens, NFTs",
      status: "Accepted",
      id: "1"
    },
    {
      date: "24-01-2025",
      assetOwner: "Jasper Stones Lakeview",
      assets: "Tokens",
      status: "Pending",
      id: "2"
    },
    {
      date: "24-01-2025",
      assetOwner: "Jasper Stones Lakeview",
      assets: "Tokens",
      status: "Rejected",
      id: "3"
    }
  ]);
  
  const [claimCode, setClaimCode] = useState("");
  const [totalClaimed, setTotalClaimed] = useState("$452.35");
  const [claimedInheritance, setClaimedInheritance] = useState(1);
  const [unclaimedInheritance, setUnclaimedInheritance] = useState(2);
  
  const handleClaimNow = () => {
    if (claimCode.trim() === "") {
      setShowModal("invalid");
      return;
    }
    
    setShowModal("received");
    
    // Simulate processing
    setTimeout(() => {
      setShowModal("pending");
    }, 2000);
  };
  
  const viewClaim = (id: string) => {
    setShowModal("preview");
  };
  
  return (
    <div className="min-h-screen bg-[#06010e] text-white p-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-[#100030] p-6 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center">
              <span className="text-white">₿</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">Total amount of claimed assets:</p>
          <p className="text-2xl font-bold">{totalClaimed}</p>
        </div>
        
        <div className="bg-[#100030] p-6 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center">
              <span className="text-white">⏱</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">Claimed Inheritance</p>
          <p className="text-2xl font-bold">{claimedInheritance}</p>
        </div>
        
        <div className="bg-[#100030] p-6 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center">
              <span className="text-white">🔒</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">Unclaimed Inheritance</p>
          <p className="text-2xl font-bold">{unclaimedInheritance}</p>
        </div>
      </div>
      
      {/* Claim Input */}
      <div className="mb-4">
        <div className="p-4 rounded-lg mb-2">
          <input 
            type="text" 
            placeholder="Enter Claim Code" 
            className="py-4 pr-24 pl-2 border rounded-xl bg-[#21202A] text-white outline-none"
            value={claimCode}
            onChange={(e) => setClaimCode(e.target.value)}
          />
        </div>
        <button 
          onClick={handleClaimNow} 
          className="bg-[#100030] text-white font-medium p-4 rounded-full border border-white px-24  transition-colors"
        >
          Claim Now
        </button>
      </div>
      
      {/* Claims Table */}
      <div className="bg-[#7A7879] bg-opacity-10 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-bold mb-4">Claims</h2>
        
        {claims.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400">
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Asset Owner's Name</th>
                  <th className="pb-4">Inherited Assets</th>
                  <th className="pb-4">Claim Status</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {claims.map((claim) => (
                  <tr key={claim.id} className="border-t border-gray-700">
                    <td className="py-4 text-gray-400">{claim.date}</td>
                    <td className="py-4 text-gray-400">{claim.assetOwner}</td>
                    <td className="py-4 text-gray-400">{claim.assets}</td>
                    <td className="py-4 text-gray-400">{claim.status}</td>
                    <td className="py-4">
                      <button 
                        className="text-indigo-400 hover:text-indigo-300"
                        onClick={() => viewClaim(claim.id)}
                      >
                        View Claim
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            No Claims Yet, Enter Claim Code to Claim Inheritance
          </div>
        )}
      </div>
      
      {/* Modals */}
      {showModal === "received" && (
        <SuccessModal 
          title="Claim Request Received" 
          message="Your submissions have been received! We're reviewing them and will update you shortly. Check your email or dashboard for status updates."
          onClose={() => setShowModal(null)}
        />
      )}
      
      {showModal === "invalid" && (
        <ErrorModal 
          title="Invalid Claim Code" 
          message="Claim code is not associated with your account or does not exist. Please check claim code and try again." 
          onClose={() => setShowModal(null)}
        />
      )}
      
      {showModal === "pending" && (
        <PendingModal 
          title="Claim Pending" 
          message="Claim under review, please check your mailbox and dashboard regularly for status updates." 
          onClose={() => setShowModal(null)}
        />
      )}
      
      {showModal === "preview" && (
        <PreviewClaimModal 
          onClose={() => setShowModal(null)}
        />
      )}
      
      {showModal === "payment-success" && (
        <SuccessModal 
          title="Payment Successful" 
          message="Your payment has been processed successfully. You will receive a confirmation email shortly."
          onClose={() => setShowModal(null)}
        />
      )}
      
      {showModal === "payment-failed" && (
        <ErrorModal 
          title="Payment Failed" 
          message="We couldn't process your payment. Please check your payment details and try again." 
          onClose={() => setShowModal(null)}
          buttonText="Retry Payment"
        />
      )}
    </div>
  );
};

// Success Modal Component
const SuccessModal = ({ title, message, onClose }: { title: string; message: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#363546] rounded-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-300 mb-6">{message}</p>
          
          <button
            onClick={onClose}
            className="bg-white text-indigo-950 font-medium py-2 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Error Modal Component
const ErrorModal = ({ title, message, onClose, buttonText = "Close" }: { title: string; message: string; onClose: () => void; buttonText?: string }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#363546] rounded-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-300 mb-6">{message}</p>
          
          <button
            onClick={onClose}
            className="bg-white text-indigo-950 font-medium py-2 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Pending Modal Component
const PendingModal = ({ title, message, onClose }: { title: string; message: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#363546] rounded-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
              <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="currentColor"/>
              <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-300 mb-6">{message}</p>
          
          <button
            onClick={onClose}
            className="bg-white text-indigo-950 font-medium py-2 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Preview Claim Modal Component
const PreviewClaimModal = ({ onClose }: { onClose: () => void }) => {
  const [showAssetsDetails, setShowAssetsDetails] = useState(true);
  const [showFilesDetails, setShowFilesDetails] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-[#363546] rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-semibold text-center mb-6">Preview Claim</h2>
        
        <div className="space-y-4 mb-6">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Asset Owner Name</span>
              <span>Daniel Ochoja</span>
            </div>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Message</span>
              <span>For everyone dear to me</span>
            </div>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Transfer Date</span>
              <span>28-05-2030</span>
            </div>
          </div>
        </div>
        
        {/* Assets Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Assets</h3>
            <button 
              className="text-gray-400 flex items-center"
              onClick={() => setShowAssetsDetails(!showAssetsDetails)}
            >
              {showAssetsDetails ? "Hide Details" : "Show Details"}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
          </div>
          
          {showAssetsDetails && (
            <div className="bg-gray-800 bg-opacity-30 rounded-lg p-4">
              <h4 className="mb-3">Tokens</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>ETH</span>
                  <div className="text-right">
                    <span>0.51</span>
                    <span className="text-xs text-gray-400 ml-1">≈$2,523.22</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>STARK</span>
                  <div className="text-right">
                    <span>23,450</span>
                    <span className="text-xs text-gray-400 ml-1">≈$2,523.22</span>
                  </div>
                </div>
              </div>
              
              <h4 className="mt-6 mb-3">NFT</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>JASPe2113</span>
                  <a href="#" className="text-indigo-400 flex items-center">
                    Preview
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span>RocketTeddy222</span>
                  <a href="#" className="text-indigo-400 flex items-center">
                    Preview
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Files Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Files</h3>
            <button 
              className="text-gray-400 flex items-center"
              onClick={() => setShowFilesDetails(!showFilesDetails)}
            >
              {showFilesDetails ? "Hide Details" : "Show Details"}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
          </div>
          
          {showFilesDetails && (
            <div className="bg-gray-800 bg-opacity-30 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <div>
                      <p className="text-sm">File 1</p>
                      <p className="text-xs text-gray-400">tribute_and_instructions.mp4</p>
                    </div>
                  </div>
                  <a href="#" className="text-indigo-400 flex items-center">
                    Preview
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                  </a>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <div>
                      <p className="text-sm">File 1</p>
                      <p className="text-xs text-gray-400">tribute_and_instructions.mp4</p>
                    </div>
                  </div>
                  <a href="#" className="text-indigo-400 flex items-center">
                    Preview
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-white text-indigo-950 font-medium py-2 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;