"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DirectionAnimation } from "@/motion/Animation";

interface Claim {
  id: string;
  planId: string;
  planName: string;
  assetOwner: string;
  beneficiary: string;
  status: "Pending" | "Validated" | "Rejected";
}

interface ClaimsTableProps {
  claims: Claim[];
}

export default function ClaimsTable({ claims }: ClaimsTableProps) {
  const [activeTab, setActiveTab] = useState("all");

  // Sample data based on the image
  const claimsData: Claim[] = [
    {
      id: "1",
      planId: "24322",
      planName: "Family Plan",
      assetOwner: "darklordchip@gmail.com",
      beneficiary: "jedipadawan@gmail.com",
      status: "Pending",
    },
    {
      id: "2",
      planId: "24332",
      planName: "To Friends and Loved Ones",
      assetOwner: "darklordchip@yahoo.com",
      beneficiary: "jedipadawan@gmail.com",
      status: "Validated",
    },
    {
      id: "3",
      planId: "24332",
      planName: "To Friends and Loved Ones",
      assetOwner: "darklordchip@yahoo.com",
      beneficiary: "jedipadawan@gmail.com",
      status: "Rejected",
    },
  ];

  return (
    <div className="bg-[#121218] rounded-lg overflow-hidden border border-gray-800">
      {/* Header with view all */}
      <div className="flex justify-between items-center p-3 md:p-4 px-4 md:px-6">
        <h2 className="text-lg md:text-xl font-medium text-white">Claims</h2>
        <div className="flex items-center">
          <button className="flex items-center gap-1 text-indigo-500 hover:text-indigo-400 text-sm md:text-base">
            <span>View All Claims</span>
            <ChevronDown className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px]">
          {" "}
          {/* Minimum width to prevent squishing on small screens */}
          <div className="grid grid-cols-6 text-left text-gray-400 border-b border-gray-800 px-4 md:px-6 py-2 md:py-3">
            <div className="font-medium text-xs md:text-sm">Plan ID</div>
            <div className="font-medium text-xs md:text-sm">Plan Name</div>
            <div className="font-medium text-xs md:text-sm">Asset Owner</div>
            <div className="font-medium text-xs md:text-sm">Beneficiary</div>
            <div className="font-medium text-xs md:text-sm">Status</div>
            <div className="font-medium text-xs md:text-sm">Action</div>
          </div>
          <DirectionAnimation delay={0.6}>
            {" "}
            <div className="divide-y divide-gray-800">
              {claimsData.map((claim) => (
                <div
                  key={claim.id}
                  className="grid grid-cols-6 px-4 md:px-6 py-3 md:py-4 text-gray-300 hover:bg-gray-800/50"
                >
                  <div className="text-xs md:text-sm truncate">
                    {claim.planId}
                  </div>
                  <div className="text-xs md:text-sm truncate">
                    {claim.planName}
                  </div>
                  <div className="text-xs md:text-sm truncate">
                    {claim.assetOwner}
                  </div>
                  <div className="text-xs md:text-sm truncate">
                    {claim.beneficiary}
                  </div>
                  <div>
                    <span className="text-xs md:text-sm">{claim.status}</span>
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <button className="text-indigo-500 hover:text-indigo-400 text-xs md:text-sm">
                      View
                    </button>
                    {claim.status !== "Rejected" &&
                      claim.status !== "Validated" && (
                        <button className="text-indigo-500 hover:text-indigo-400 text-xs md:text-sm">
                          Validate
                        </button>
                      )}
                    {claim.status !== "Rejected" && (
                      <button className="text-red-500 hover:text-red-400 text-xs md:text-sm">
                        Reject
                      </button>
                    )}
                    {claim.status === "Rejected" && (
                      <button className="text-indigo-500 hover:text-indigo-400 text-xs md:text-sm">
                        Validate
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </DirectionAnimation>
        </div>
      </div>
    </div>
  );
}
