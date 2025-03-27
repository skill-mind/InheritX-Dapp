'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface VerifiedProps {
    fullName: string;
    emailAddress: string;
    dateOfBirth: string;
    address: string;
    nationality: string;
    identityDocumentType: string;
}

const VerifiedDetails: React.FC<VerifiedProps> = ({
    fullName,
    emailAddress,
    dateOfBirth,
    address,
    nationality,
    identityDocumentType
}) => {

    const [showKyc, setShowKyc] = useState(false);

    const handleStartKYC = () => {
        setShowKyc(true);
    }


    return (
        <div className='max-w-4xl'>
            <div className="bg-gradient-to-b from-[#29262F] via-[#1C1923] to-[#16131D] mb-4 rounded-lg p-6 w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white text-xl font-semibold">Profile Details</h2>
                    <div className="bg-[#16131D] flex border border-gray-600 text-[#D5D4D4] px-6 py-2 rounded-full text-sm">
                        Verified
                        <span>
                            <Image
                                src="/verified.svg"
                                alt="verified outline"
                                width={15}
                                height={15}
                                className="z-10"
                            /></span>
                    </div>
                </div>

                <div className="space-y-4">
                    {[
                        { label: 'Full Name', value: fullName },
                        { label: 'Email Address', value: emailAddress },
                        { label: 'Date of Birth', value: dateOfBirth },
                        { label: 'Address', value: address },
                        { label: 'Nationality', value: nationality },
                        { label: 'Identity Document Type', value: identityDocumentType }
                    ].map(({ label, value }) => (
                        <div key={label} className="border-b border-gray-400 pb-2 flex">
                            <p className="text-sm text-white mb-1 flex-item-center  w-1/2">{label}</p>
                            <p className="text-gray-400 flex-item-center text-center">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button
              onClick={handleStartKYC}
              className="bg-[#1B0055] text-[#8D7FAA] border border-[#8D7FAA] rounded-full px-4 py-2 text-sm">
              Edit Profile
            </button>
        </div>
    );
};

export default VerifiedDetails;
