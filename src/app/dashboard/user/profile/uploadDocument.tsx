'use client';
import React, { useState } from 'react';
import DriversLicense from './driversLicense';
import PassportUpload from './passport';
import NationalId from './nationalID';

const tabs = [
    { id: 'National-ID', label: 'National ID' },
    { id: 'Driver\'s-License', label: 'Driver\'s License' },
    { id: 'Passport', label: 'Passport' },
] as const;

type UploadSteps = (typeof tabs)[number]['id'];

const UploadDocuments: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<UploadSteps>('National-ID');

    const handleTabChange = (tabId: UploadSteps) => {
        setCurrentStep(tabId);
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 'National-ID':
                return <NationalId />;
            case 'Driver\'s-License':
                return <DriversLicense />;
            case 'Passport':
                return <PassportUpload />;
            default:
                return null;
        }
    };

    return (
        <main>
            <div className='bg-[#16151C] border border-gray-400 rounded-lg flex justify-center items-center w-full'>
                <div className="min-h-screen text-white">
                    <div className="w-full rounded-lg p-6">
                        <h2 className="text-center text-xl font-semibold mb-4">Upload ID Proof</h2>
                        <div className="flex justify-between mb-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`py-2 px-4 text-sm ${
                                        currentStep === tab.id 
                                            ? 'bg-[#1B0055] text-white border rounded-full border-gray-400'
                                            : 'text-gray-400 border rounded-full border-gray-400'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <div className="mb-8">
                            {renderStepContent()}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UploadDocuments;  