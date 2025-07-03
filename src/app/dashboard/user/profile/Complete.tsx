import React, { useState } from 'react';
import Image from 'next/image';

interface DocumentUploadProps {
    onFileUpload: (files: File[], type: 'frontId' | 'backId' | 'proofOfAddress') => void;
}

const CompleteDocumentUpload: React.FC<DocumentUploadProps> = ({ onFileUpload }) => {
    const [frontId, setFrontId] = useState<File | null>(null);
    const [backId, setBackId] = useState<File | null>(null);
    const [proofOfAddress, setProofOfAddress] = useState<File | null>(null);

    const handleFileRemove = (type: 'frontId' | 'backId' | 'proofOfAddress') => {
        switch (type) {
            case 'frontId':
                setFrontId(null);
                break;
            case 'backId':
                setBackId(null);
                break;
            case 'proofOfAddress':
                setProofOfAddress(null);
                break;
        }
    };

    const renderFileUploadSection = (
        title: string,
        type: 'frontId' | 'backId' | 'proofOfAddress',
        currentFile: File | null
    ) => {
        return (
            <div className=" rounded-lg p-4 flex items-center justify-between mb-4 max-w-3xl">
                <div className="flex items-center space-x-4">
                    <Image
                        src="/document-outline.svg"
                        alt="document outline"
                        width={25}
                        height={25}
                        className="z-10"
                    />
                    <span className="text-white">
                        {currentFile ? currentFile.name : title}
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => handleFileRemove(type)}
                    >
                        <Image
                            src="/trash-bin.svg"
                            alt="trash bin"
                            width={20}
                            height={20}
                            className="z-10"
                        />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="mx-auto p-6  my-6 justify-center rounded-xl max-w-3xl">
            <div className='bg-[#16151C] p-8 my-5'>
                <div className='bg-[#201F2A] border border-gray-600 rounded-lg mb-4 min-h-auto p-6'>
                    <div className='bg-[#363446] rounded-xl'>
                        {renderFileUploadSection('Front of ID', 'frontId', frontId)}
                    </div>
                    <div className='bg-[#363446] rounded-xl'>
                        {renderFileUploadSection('Back of ID', 'backId', backId)}
                    </div>

                </div>
            </div>

            <div className=" bg-[#16151C] border border-gray-600 rounded-lg mb-4 min-h-auto p-6">
                <h3 className="text-white  text-center text-lg mb-2">Upload Proof Of Address</h3>
                <p className="text-gray-400 text-sm mb-4 text-center">
                    Government-issued document, Utility Bill or Bank Statement containing your name and residential address
                </p>

                <div className='bg-[#363446] rounded-xl'>
                    {renderFileUploadSection('Proof of Address', 'proofOfAddress', proofOfAddress)}
                </div>
            </div>

        </div>
    );
};

export default CompleteDocumentUpload;