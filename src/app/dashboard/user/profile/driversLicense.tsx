import { useState } from 'react';
import Image from 'next/image';
import CompleteDocumentUpload from './Complete';
import IncompleteDocumentUpload from './incompleteUpload';

type DocumentType = 'National ID' | 'Driver\'s License' | 'Passport';
type DocumentSide = 'front' | 'back';

const DriversLicense: React.FC = () => {
    const [uploadedFiles, setUploadedFiles] = useState<{
        frontId?: File;
        backId?: File;
        proofOfAddress?: File;
    }>({});
    
    const handleFileUpload = (files: File[], type: 'frontId' | 'backId' | 'proofOfAddress') => {
        setUploadedFiles(prev => ({
            ...prev,
            [type]: files[0]
        }));
    };
    
    const handleSubmit = () => {
        if (uploadedFiles.frontId && uploadedFiles.backId && uploadedFiles.proofOfAddress) {
            const formData = new FormData();
            formData.append('frontId', uploadedFiles.frontId);
            formData.append('backId', uploadedFiles.backId);
            formData.append('proofOfAddress', uploadedFiles.proofOfAddress);
            
            console.log('Submitting documents:', formData);
        } else {
            alert('Please upload all required documents');
        }
    };

    // Count the number of uploaded files
    const uploadedFileCount = Object.values(uploadedFiles).filter(file => file !== undefined).length;

    return (
        <main>
            <div className="bg-[#16151C] rounded-lg mb-4">
                <div className="flex border border-gray-400 p-4 justify-evenly items-center rounded-lg bg-[#201F2A] mb-3 h-[200px]">
                    <div>
                        <p className="text-xs text-center mb-2">Front of ID</p>
                        <div className="border border-gray-400 border-dotted p-4 flex flex-col items-center justify-center rounded-lg bg-[#201F2A] mb-2">
                    <div className="flex justify-center mb-2">
                        <Image
                            src="/upload-symbol.svg"
                            alt="upload symbol"
                            width={20}
                            height={20}
                            className="z-10"
                        />
                    </div>
                    <label className="cursor-pointer flex flex-col items-center">
                        <p className="text-xs text-gray-400 mb-2">Drag and Drop Document or <span className="text-xs text-white">Browse</span>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*,.pdf"
                                onChange={(e) => {
                                    const files = e.target.files ? Array.from(e.target.files) : [];
                                    handleFileUpload(files, 'proofOfAddress');
                                }}
                            />
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, PDF</p>
                    </label>
                </div>
                    </div>
                    <div>
                        <p className="text-xs text-center mb-2">Back of ID</p>
                        <div className="border border-gray-400 border-dotted p-4 flex flex-col items-center justify-center rounded-lg bg-[#201F2A] mb-2">
                    <div className="flex justify-center mb-2">
                        <Image
                            src="/upload-symbol.svg"
                            alt="upload symbol"
                            width={20}
                            height={20}
                            className="z-10"
                        />
                    </div>
                    <label className="cursor-pointer flex flex-col items-center">
                        <p className="text-xs text-gray-400 mb-2">Drag and Drop Document or <span className="text-xs text-white">Browse</span>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*,.pdf"
                                onChange={(e) => {
                                    const files = e.target.files ? Array.from(e.target.files) : [];
                                    handleFileUpload(files, 'proofOfAddress');
                                }}
                            />
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, PDF</p>
                    </label>
                </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#201F2A] border border-gray-400 rounded-lg p-4 mb-6">
                <h2 className="text-center mb-2">Upload Proof Of Address</h2>
                <p className="text-xs text-gray-400 text-center mb-6">
                    Government issued document or Utility Statement containing your name and residential address
                </p>

                <div className="border border-gray-400 border-dotted p-4 flex flex-col items-center justify-center rounded-lg bg-[#201F2A] mb-2">
                    <div className="flex justify-center mb-2">
                        <Image
                            src="/upload-symbol.svg"
                            alt="upload symbol"
                            width={20}
                            height={20}
                            className="z-10"
                        />
                    </div>
                    <label className="cursor-pointer flex flex-col items-center">
                        <p className="text-xs text-gray-400 mb-2">Drag and Drop Document or <span className="text-xs text-white">Browse</span>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*,.pdf"
                                onChange={(e) => {
                                    const files = e.target.files ? Array.from(e.target.files) : [];
                                    handleFileUpload(files, 'proofOfAddress');
                                }}
                            />
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, PDF</p>
                    </label>
                </div>
            </div>

            {uploadedFileCount === 2 && (
                <div className="min-h-screen py-4">
                    <IncompleteDocumentUpload onFileUpload={handleFileUpload} />
                </div>
            )}
            
            {uploadedFileCount === 3 && (
                <div className="min-h-screen py-4">
                    <CompleteDocumentUpload onFileUpload={handleFileUpload} />
                </div>
            )}
        </main>
    );
};

export default DriversLicense;