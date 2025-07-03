import React, { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';

type DocumentType = 'frontId' | 'backId' | 'proofOfAddress';

interface DocumentUploadProps {
    onFileUpload: (files: File[], type: DocumentType) => void;
}

const IncompleteDocumentUpload: React.FC<DocumentUploadProps> = ({ onFileUpload }) => {
    const [uploadedFiles, setUploadedFiles] = useState<Record<DocumentType, File | null>>({
        frontId: null,
        backId: null,
        proofOfAddress: null
    });

    const inputRefs = {
        frontId: useRef<HTMLInputElement>(null),
        backId: useRef<HTMLInputElement>(null),
        proofOfAddress: useRef<HTMLInputElement>(null)
    };

    const handleFileRemove = (type: DocumentType) => {
        const newUploadedFiles = { ...uploadedFiles, [type]: null };
        setUploadedFiles(newUploadedFiles);

        const inputRef = inputRefs[type];
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const renderFileUploadSection = (
        type: DocumentType,
        title: string
    ) => {
        const currentFile = uploadedFiles[type];
        const inputRef = inputRefs[type];

        return (
            <div className="mb-4 bg-[#16151C] p-8 my-5">
                <div className='bg-[#201F2A] border border-gray-600 rounded-lg mb-4 min-h-auto p-6'>
                    <div className="bg-[#363446] rounded-xl p-4 flex items-center justify-between mb-4">
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

                    <p className="text-white text-sm mb-2 text-center">Back of ID</p>
                    <div className="border border-dashed border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center">
                    <Image
                        src="/upload-symbol.svg"
                        alt="upload symbol"
                        width={20}
                        height={20}
                        className="z-10"
                    />
                    <p className="text-sm text-gray-400">Drag and Drop Document or <span className="text-white">Browse</span></p>
                    <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, PDF</p>
                </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen p-6 mx-auto my-6 justify-center rounded-xl max-w-2xl">
            <div className="space-y-4">
                <div>
                    {renderFileUploadSection('frontId', 'Front of ID')}
                </div>

                <div className="flex flex-col items-center justify-center bg-[#16151C] border border-gray-600 rounded-lg mb-4 min-h-auto p-6">
                    <h2 className="text-white text-xl font-semibold mb-2">Upload Proof Of Address</h2>
                    <p className="text-gray-400 text-xs mb-6">
                        Government-issued document or Bank Statement containing your name and residential address
                    </p>
                    <p className="text-white text-sm mb-2">Upload Document</p>
                   <div className='border border-dashed border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center'>
                    <Image
                        src="/upload-symbol.svg"
                        alt="upload symbol"
                        width={20}
                        height={20}
                        className="z-10"
                    />
                    <p className="text-sm text-gray-400">Drag and Drop Document or <span className="text-white">Browse</span></p>
                    <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, PDF</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncompleteDocumentUpload;