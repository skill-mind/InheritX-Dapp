import React, { useState, useRef, RefObject } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

const NationalId: NextPage = () => {
    const [idFile, setIdFile] = useState<File | null>(null);
    const [addressFile, setAddressFile] = useState<File | null>(null);
    const [idFileError, setIdFileError] = useState<string | null>(null);
    const [addressFileError, setAddressFileError] = useState<string | null>(null);

    const idInputRef = useRef<HTMLInputElement>(null);
    const addressInputRef = useRef<HTMLInputElement>(null);

    const validateFile = (file: File): boolean => {
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        const maxSize = 5 * 1024 * 1024;

        if (!allowedTypes.includes(file.type)) {
            return false;
        }

        if (file.size > maxSize) {
            return false;
        }

        return true;
    };

    const handleFileUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFile: React.Dispatch<React.SetStateAction<File | null>>,
        setFileError: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
        setFileError(null);

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            if (!validateFile(file)) {
                setFileError('Invalid file. Please upload a JPG, PNG, or PDF under 5MB.');
                if (e.target) {
                    e.target.value = '';
                }
                return;
            }

            setFile(file);
        }
    };

    const handleIdFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileUpload(e, setIdFile, setIdFileError);
    };

    const handleAddressFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileUpload(e, setAddressFile, setAddressFileError);
    };

   const triggerFileInputStrict = (inputRef: RefObject<HTMLInputElement | null>) => {
    inputRef.current?.click();
  };
  
    function triggerFileInput(idInputRef: React.RefObject<HTMLInputElement | null>): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className=" text-white flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="rounded-lg p-6 bg-[#201F2A] border border-gray-400 w-[400px] h-[200px]">
                    <div>
                        <p className="text-sm text-center mb-2">Front Page</p>
                        <div
                            className="border border-dashed border-gray-600 rounded-lg p-8"
                            onClick={() => triggerFileInput(idInputRef)}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    src="/upload-symbol.svg"
                                    alt="upload symbol"
                                    width={20}
                                    height={20}
                                    className="z-10"
                                />
                                <p className="text-sm text-gray-400">
                                    Drag and Drop Document or <span className="text-white cursor-pointer">Browse</span>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, PDF (Max 5MB)</p>

                                {idFile && (
                                    <p className="text-sm text-gray-400 mt-2">
                                        {idFile.name}
                                    </p>
                                )}

                                {idFileError && (
                                    <p className="text-sm text-gray-400 mt-2">
                                        {idFileError}
                                    </p>
                                )}
                            </div>

                            <input
                                type="file"
                                ref={idInputRef}
                                className="hidden"
                                id="id-upload"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={handleIdFileUpload}
                            />
                        </div>
                    </div>
                </div>

                <div className="rounded-lg p-6 w-2xl bg-[#201F2A] border border-gray-400 w-[400px] h-[300px]">
                    <h2 className="text-lg text-center mb-4">Upload Proof Of Address</h2>
                    <p className="text-xs text-gray-400 text-center mb-6">
                        Government-issued document or a recent financial statement with your name on residential address
                    </p>

                    <div
                        className="border border-dashed border-gray-600 rounded-lg p-8 relative"
                        onClick={() => triggerFileInput(addressInputRef)}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <Image
                                src="/upload-symbol.svg"
                                alt="upload symbol"
                                width={20}
                                height={20}
                                className="z-10"
                            />
                            <p className="text-sm text-gray-400">
                                Drag and Drop Document or <span className="text-white cursor-pointer">Browse</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Supports JPG, PNG, PDF (Max 5MB)</p>

                            {addressFile && (
                                <p className="text-sm text-gray-400 mt-2">
                                    {addressFile.name}
                                </p>
                            )}

                            {addressFileError && (
                                <p className="text-sm text-gray-400 mt-2">
                                    {addressFileError}
                                </p>
                            )}
                        </div>

                        <input
                            type="file"
                            ref={addressInputRef}
                            className="hidden"
                            id="address-upload"
                            accept=".jpg,.jpeg,.png,.pdf"
                            onChange={handleAddressFileUpload}
                        />
                    </div>
                </div>
            </div>
        </div>
    );};

export default NationalId;