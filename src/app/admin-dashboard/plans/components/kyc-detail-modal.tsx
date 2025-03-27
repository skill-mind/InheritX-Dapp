"use client";

import { FileText, Link2, X } from "lucide-react";
import type { User } from "../lib/types";

interface KycDetailModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
}

export function KycDetailModal({ user, isOpen, onClose }: KycDetailModalProps) {
  if (!isOpen) return null;

  // Define the fields to display
  const fields = [
    { label: "Name", value: user.name },
    { label: "Email", value: user.email },
    { label: "Date of Birth", value: user.dateOfBirth },
    { label: "Nationality", value: user.nationality },
    { label: "Residential Address", value: user.address },
    { label: "Identity Document Type", value: user.idType },
  ];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#21202A] border border-[#413F54] rounded-[20px] w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>

          <h2 className="text-4xl font-semibold text-center mb-6">
            KYC Details
          </h2>

          <div className="space-y-4 font-light text-[13px] text-right">
            {fields.map((field, index) => (
              <div
                key={index}
                className="bg-[#2B2A38] border border-[#413F54] rounded-xl py-3.5 px-5 flex justify-between items-center"
              >
                <span className="font-light text-lg md:text-xl text-left">
                  {field.label}
                </span>
                <span>{field.value}</span>
              </div>
            ))}

            <div className="bg-[#2B2A38] border border-[#413F54] rounded-xl px-5 py-3.5">
              <span className="font-light text-lg md:text-xl text-left block mb-4">
                Preview Documents
              </span>

              <div className="space-y-3">
                {user.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-[#21202A] p-3 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <FileText />

                      <div className="space-y-1 text-left">
                        <div className="text-sm font-semibold">{doc.title}</div>
                        <div className="text-[10px] font-light">
                          {doc.filename}
                        </div>
                      </div>
                    </div>
                    <button className="text-[#5000FF] hover:text-[#5000FF]/70 focus:outline-none">
                      <Link2 className="h-6 w-6" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              Suspend User
            </button>
            <button
              className="border border-gray-700 py-2 px-4 rounded-xl bg-[#211A1D] hover:bg-[#211A1D]/10 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              onClick={onClose}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
