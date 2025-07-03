import React from 'react';
import { X } from 'lucide-react'; // For the X close button

// Define token interface
interface Token {
    symbol: string;
    // Add other token properties that you use
    id?: string;
    name?: string;
    balance?: number;
    value?: number;
  }
  
  // Define props interface with proper types
  interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    fromAmount: string | number;
    fromToken: Token;
    toAmount: string | number;
    toToken: Token;
  }
  
  const SuccessModal: React.FC<SuccessModalProps> = ({ 
    isOpen, 
    onClose, 
    fromAmount, 
    fromToken, 
    toAmount, 
    toToken 
  }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
          ></div>
      
          <div className="bg-[#2D2D3D] text-white rounded-2xl max-w-lg w-full mx-6 relative z-10 overflow-hidden p-10">
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={onClose}
            >
              <X size={40} />
            </button>
      
            <div className="flex flex-col items-center text-center">
              {/*Green Checkmark */}
              <div className="w-30 h-30 rounded-full border-4 border-green-500 flex items-center justify-center mb-8 mt-8">
                <svg width="100" height="100" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10L11 19L28 2" stroke="#00FF29" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
      
              <h3 className="text-4xl font-semibold mb-5">
                Transaction Successful
              </h3>
      
              <p className="text-gray-300 mb-8 text-lg">
                Your tokens have been swapped successfully! Check your wallet to see your updated balance. Happy trading!
              </p>
      
              <button
                className="py-4 px-8 bg-white text-black text-lg rounded-full font-medium hover:bg-gray-200 transition"
                onClick={onClose}
              >
                Check Balance
              </button>
            </div>
          </div>
        </div>
      );
    };      

export default SuccessModal;