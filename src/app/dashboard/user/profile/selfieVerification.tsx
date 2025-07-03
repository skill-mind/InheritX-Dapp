import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const SelfieVerification: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isFaceProcessed, setIsFaceProcessed] = useState(false);
  const [isTooLightBright, setIsTooLightBright] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startVerification = async () => {
    setIsProcessing(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setTimeout(() => {
        setIsFaceProcessed(true);
        setIsTooLightBright(true);
      }, 2000);

    } catch (error) {
      console.error('Error accessing camera:', error);
      setIsProcessing(false);
    }
  };

  const handleBack = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleComplete = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg min-h-fit text-white">
      <div className="w-80 rounded-lg overflow-hidden shadow-lg bg-gray-900">
        <div className="relative aspect-square flex items-center justify-center">
          {isProcessing ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute w-full h-full object-cover"
            />
          ) : null}

          <div className="flex items-center justify-center">
            <Image
              src="/selfieverification.svg"
              alt="Selfie Verification Outline"
              width={200}
              height={200}
              className="z-10"
            />
          </div>
        </div>

        <div className="p-4 flex justify-center space-x-6">
          <div className="flex items-center">
            <div>
              <Image
                src="/face-line.svg"
                alt="Selfie Verification Outline"
                width={20}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
            <span className="text-xs pl-1">Processed Face</span>
          </div>

          <div className="flex items-center">
            <div>
              <Image
                src="/light-up.svg"
                alt="Selfie light up"
                width={20}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
            <span className="text-xs pl-1">Too Bright Lighting</span>
          </div>
        </div>

        <div className="px-4 pb-6 pt-2">
          <button
            onClick={startVerification}
            disabled={isProcessing}
            className="w-full py-2 px-4 bg-[#211A1D] border border-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition duration-200"
          >
            <Image
              src="/selfie_camera.svg"
              alt="Selfie camera"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            />
            Start Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfieVerification;