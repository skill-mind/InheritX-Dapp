"use client";

import { useState } from "react";
import type { Plan } from "../lib/types";
import { ChevronUp, X } from "lucide-react";

interface PlanDetailModalProps {
  plan: Plan;
  isOpen: boolean;
  onClose: () => void;
  onViewKyc: (email: string) => void;
}

export function PlanDetailModal({
  plan,
  isOpen,
  onClose,
  onViewKyc,
}: PlanDetailModalProps) {
  const [isBeneficiariesExpanded, setIsBeneficiariesExpanded] = useState(true);

  if (!isOpen) return null;

  // Define the fields to display
  const fields = [
    { label: "Asset Owner", value: plan.assetOwner },
    { label: "Plan ID", value: plan.id },
    { label: "Plan Name", value: plan.name },
    { label: "Plan Status", value: plan.status },
    { label: "Description", value: plan.description },
    { label: "Transfer Date", value: plan.transferDate },
    { label: "Inactivity activation criteria", value: plan.inactivityCriteria },
    { label: "Multi-Signature Approval", value: plan.multiSignatureApproval },
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
            Plan Details
          </h2>

          <div className="space-y-4 font-light text-[13px]">
            {fields.map((field, index) => (
              <div
                key={index}
                className="bg-[#2B2A38] border border-[#413F54] rounded-xl py-3.5 px-5 flex justify-between items-center"
              >
                <span className="font-light text-lg md:text-xl">{field.label}</span>
                <span>{field.value}</span>
              </div>
            ))}

            <div className="bg-[#2B2A38] border border-[#413F54] rounded-xl px-5 py-3.5">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setIsBeneficiariesExpanded(!isBeneficiariesExpanded)
                }
              >
                <span className="font-light text-lg md:text-xl">
                  Beneficiaries ({plan.beneficiaries.length})
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-light text-[13px]">
                    {isBeneficiariesExpanded ? "Hide Details" : "Show Details"}
                  </span>
                  <ChevronUp
                    className={`h-4 w-4 transition-transform ${
                      isBeneficiariesExpanded ? "" : "rotate-180"
                    }`}
                  />
                </div>
              </div>

              {isBeneficiariesExpanded && (
                <div className="mt-4 space-y-4">
                  {plan.beneficiaries.map((beneficiary, index) => (
                    <div
                      key={index}
                      className="bg-[#21202A] rounded-md p-4 space-y-2 font-normal text-sm"
                    >
                      <div className="flex justify-between">
                        <span className="text-base font-semibold">
                          Full Name
                        </span>
                        <span>{beneficiary.name}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-base font-semibold">Email</span>
                        <span>{beneficiary.email}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-base font-semibold">
                          Allocation
                        </span>
                        <span>{beneficiary.allocation}</span>
                      </div>

                      {beneficiary.nfts && (
                        <div className="flex justify-between">
                          <span className="text-base font-semibold">
                            Number of NFTs
                          </span>
                          <span>{beneficiary.nfts}</span>
                        </div>
                      )}

                      <div className="flex justify-center mt-2">
                        <button
                          className="text-[#5000FF] hover:text-[#5000FF]/70 focus:outline-none"
                          onClick={() => onViewKyc(beneficiary.email)}
                        >
                          View KYC Detail
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
