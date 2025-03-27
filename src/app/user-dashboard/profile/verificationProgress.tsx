'use client';
import React from 'react';
import Image from 'next/image';

const VerificationProgress: React.FC = () => {
  return (
    <main className='overflow-hidden'>
      <div className="p-3 w-full flex">
        <div className="text-white text-sm mt-1">Profile</div>
        <div className="mx-2">|</div>
        <div className="font-medium">KYC Verification</div>
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-md w-full bg-gradient-to-b from-[#29262F] via-[#1C1923] to-[#16131D] rounded-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center">
              <Image
                src="/tick-circle.svg"
                alt="green tick circle Outline"
                width={90}
                height={90}
                className="z-10"
              />
            </div>
          </div>

          <h1 className="text-xl font-medium text-white mb-4">Verification in Progress</h1>

          <p className="text-gray-300 text-sm mb-8">
            Your submission has been received! We're reviewing them and will update you shortly. Check your email or dashboard for status updates.
          </p>

          <button
            className="bg-white text-black px-6 py-2 rounded-full text-sm"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </main>
  );
};

export default VerificationProgress;