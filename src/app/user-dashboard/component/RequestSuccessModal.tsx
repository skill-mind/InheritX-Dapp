import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCheckmarkVisible, setIsCheckmarkVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);

      const checkmarkTimer = setTimeout(() => {
        setIsCheckmarkVisible(true);
      }, 300);
      const textTimer = setTimeout(() => {
        setIsTextVisible(true);
      }, 600);
      const buttonTimer = setTimeout(() => {
        setIsButtonVisible(true);
      }, 800);

      return () => {
        clearTimeout(checkmarkTimer);
        clearTimeout(textTimer);
        clearTimeout(buttonTimer);
      };
    } else {
      setIsVisible(false);
      setIsCheckmarkVisible(false);
      setIsTextVisible(false);
      setIsButtonVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#0D0D11E5] z-40 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "bg-opacity-70" : "bg-opacity-0"
      }`}
      onClick={onClose}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="bg-[#2B2A38] text-white rounded-3xl p-3 sm:p-8 max-w-md w-full mx-4 relative z-50 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: isVisible
            ? "scale(1) translateY(0)"
            : "scale(0.9) translateY(20px)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
          onClick={onClose}
        >
          <X />
        </button>

        <div className="flex flex-col pt-4 sm:pt-0 items-center text-center">
          <div
            className=" rounded-full flex items-center justify-center mb-10 transition-all duration-500"
            style={{
              transform: isCheckmarkVisible ? "scale(1)" : "scale(0)",
              opacity: isCheckmarkVisible ? 1 : 0,
            }}
          >
            <div
              className=" relative "
              style={{ opacity: isCheckmarkVisible ? 1 : 0 }}
            >
              <Image src="/svg/tick.svg" alt="" width={140} height={140} />
            </div>
          </div>

          <h2
            className="text-2xl sm:text-[40px] font-bold mb-4 transition-all duration-300"
            style={{
              opacity: isTextVisible ? 1 : 0,
              transform: isTextVisible ? "translateY(0)" : "translateY(10px)",
            }}
          >
            Request Sent
          </h2>

          <p
            className="text-white mb-10 text-xs sm:text-base transition-all duration-300"
            style={{
              opacity: isTextVisible ? 1 : 0,
              transform: isTextVisible ? "translateY(0)" : "translateY(10px)",
              transitionDelay: "0.1s",
            }}
          >
            Your request has been sent successfully. Please check your email
            regularly for updates.
          </p>

          <button
            className="bg-white text-black py-2.5 px-7 rounded-full font-normal hover:bg-gray-200 transition-all duration-300"
            onClick={onClose}
            style={{
              opacity: isButtonVisible ? 1 : 0,
              transform: isButtonVisible ? "translateY(0)" : "translateY(10px)",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
