"use client";

import React, { FC } from "react";

interface ModalMessage {
  icon: any;
  title: string;
  message: string;
}

interface ClaimListProps {
  modalData: ModalMessage | null;
  onClose: () => void;
}

const ClaimModal: FC<ClaimListProps> = ({ modalData, onClose }) => {
  if (!modalData) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 ">
      <div className="bg-[#363546] text-white p-8 px-32 rounded-[20px] w-10/12 md:w-6/12 text-center border border-[#7d7c7f]">
        <div className="flex justify-center   align-middle items-center mb-8">
          {modalData.icon}
        </div>
        <h2 className="text-[40px] font-semibold">{modalData.title}</h2>
        <p className="text-[16px] max-w-[520px] mx-auto mt-4 text-[#C0BFC6]">
          {modalData.message}
        </p>
        <button
          onClick={onClose}
          className="mt-[80px] bg-white text-black px-8 py-2 rounded-3xl min-w-[143px]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ClaimModal;
