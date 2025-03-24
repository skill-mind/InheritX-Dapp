"use client";

import React, { FC, ReactNode } from 'react'


interface ModalMessage {
  icon: ReactNode;
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
      <div className="bg-[#363546] text-white p-8 px-32 rounded-lg w-10/12 md:w-6/12 text-center border border-white">
        <div className="flex justify-center mb-8" >{modalData.icon}</div> 
        <h2 className="text-xl font-semibold">{modalData.title}</h2>
        <p className="text-sm mt-4 text-[#C0BFC6]">{modalData.message}</p>
        <button onClick={onClose} className="mt-8 bg-white text-black px-8 py-2 rounded-3xl">
          Close
        </button>
      </div>
    </div>

  )
}

export default ClaimModal;