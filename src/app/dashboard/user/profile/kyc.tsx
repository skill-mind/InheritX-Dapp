'use client';
import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import SelfieVerification from './selfieVerification';
import UploadDocuments from './uploadDocument';
import VerificationProgress from './verificationProgress';


const tabs = [
  { id: 'personal-details', label: 'Personal Details' },
  { id: 'upload-documents', label: 'Upload Documents' },
  { id: 'selfie-verification', label: 'Selfie Verification' },
] as const;

type KYCStep = (typeof tabs)[number]['id'];

const KYCVerification: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<KYCStep>('personal-details');

  const goToNextStep = () => {
    if (currentStep === 'personal-details') {
      setCurrentStep('upload-documents');
    } else if (currentStep === 'upload-documents') {
      setCurrentStep('selfie-verification');
    }
  };

  const goToPreviousStep = () => {
    if (currentStep === 'upload-documents') {
      setCurrentStep('personal-details');
    } else if (currentStep === 'selfie-verification') {
      setCurrentStep('upload-documents');
    }
  };

const[showVerification, setShowVerification] = useState(false);
  const handleComplete = () => {
   setShowVerification(true);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'personal-details':
        return <PersonalDetails />;
      case 'upload-documents':
        return <UploadDocuments />;
      case 'selfie-verification':
        return <SelfieVerification />;
      default:
        return null;
    }
  };

  return (
    <main>
      {showVerification ? (
        <VerificationProgress />
      ) : (
        <>
        <div className="p-3 w-full flex">
        <div className="text-white text-sm mt-1">Profile</div>
        <div className="mx-2">|</div>
        <div className="font-medium">KYC Verification</div>
      </div>
  <div className='flex m-4 justify-center items-center w-full'>
    <div className="min-h-screen text-white">          
      <div className="max-w-full mx-auto bg-gradient-to-b from-[#29262F] via-[#1C1923] to-[#16131D] rounded-lg p-6">
        <h1 className="text-xl font-medium text-center mb-6">KYC Verification</h1>
        
        <div className="flex justify-center mb-8">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              className={`pb-2 px-4 text-sm ${currentStep === tab.id ? 'border-b-2 border-white' : 'border-b-2 border-gray-200'}`}
              onClick={() => setCurrentStep(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="mb-8">
          {renderStepContent()}
        </div>
        
        <div className="flex justify-end space-x-4">
          <button 
            className="bg-[#211A1D] border border-gray-600 text-[#D5D4D4] px-6 py-2 rounded-full"
            onClick={goToPreviousStep}
            disabled={currentStep === 'personal-details'}
          >
            Back
          </button>
          {currentStep === 'selfie-verification' ? (
            <button 
              className="bg-white text-black px-6 py-2 rounded-full"
              onClick={handleComplete}
            >
              Complete
            </button>
          ) : (
            <button 
              className="bg-white text-black px-6 py-2 rounded-full"
              onClick={goToNextStep}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
  </>
      )}
     
    </main>
  );
};

export default KYCVerification;