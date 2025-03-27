'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import KYCVerification from './kyc';
import PendingVerification from './pending';
import VerifiedDetails from './verified';


enum VerificationStatus {
  NotStarted = 'NOT_STARTED',
  Pending = 'PENDING',
  Verified = 'VERIFIED'
}

interface ProfileField {
  label: string;
  value: string;
}

const Profile: React.FC = () => {
  const router = useRouter();
  const [showKyc, setShowKyc] = useState(false);
  
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>(
    VerificationStatus.NotStarted
  );

  const profileData = {
    fullName: 'DANIEL OCHOJA',
    emailAddress: 'danielochoja@gmail.com',
    dateOfBirth: '24-05-1998',
    address: 'No.22, Hawk Street Highway, Ikeja, Lagos',
    nationality: 'NIGERIAN',
    identityDocumentType: "DRIVER'S LICENSE"
  };

  const profileFields: ProfileField[] = [
    { label: 'Full Name', value: 'N/A' },
    { label: 'Email Address', value: 'N/A' },
    { label: 'Date of Birth', value: 'N/A' },
    { label: 'Address', value: 'N/A' },
    { label: 'Nationality', value: 'N/A' },
    { label: 'Identity Document Type', value: 'N/A' },
  ];

  const handleStartKYC = () => {
    setShowKyc(true);
    setVerificationStatus(VerificationStatus.Pending);
  };

  const renderVerificationComponent = () => {
    switch(verificationStatus) {
      case VerificationStatus.NotStarted:
        return (
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-xl font-medium mb-1">No Information Yet</h1>
              <p className="text-gray-400 text-sm mb-4">Start KYC to add profile information</p>
              <button
                onClick={handleStartKYC}
                className="bg-[#1B0055] text-[#8D7FAA] border border-[#8D7FAA] rounded-full px-4 py-2 text-sm">
                Start KYC
              </button>
            </div>

            <div className="bg-gradient-to-b from-[#29262F] via-[#1C1923] to-[#16131D] rounded-lg p-6 w-full">
              <h2 className="text-lg font-medium mb-6">Profile Details</h2>
              <div className="space-y-4">
                {profileFields.map((field) => (
                  <div key={field.label} className="border-b border-gray-300 pb-2 flex">
                    <p className="text-sm text-white mb-1 flex-item-center w-1/2">{field.label}</p>
                    <p className="text-gray-300 flex-item-center text-center">{field.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case VerificationStatus.Pending:
        return showKyc ? <KYCVerification /> : <PendingVerification {...profileData} />;
      case VerificationStatus.Verified:
        return <VerifiedDetails {...profileData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-white p-4">
      {renderVerificationComponent()}
    </div>
  );
};

export default Profile;