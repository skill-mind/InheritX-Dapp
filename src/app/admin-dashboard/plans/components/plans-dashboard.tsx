"use client";

import { useState } from "react";
import { PlanDetailModal } from "./plan-detail-modal";
import { KycDetailModal } from "./kyc-detail-modal";
import type { Plan, User } from "../lib/types";
import { plans, users } from "../lib/data";

import { ChevronDown, Download, ListFilter, Search } from "lucide-react";
import AdminStatCards from "../../components/AdminStatCards";
import { DirectionAnimation } from "@/motion/Animation";

export function PlansDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isKycModalOpen, setIsKycModalOpen] = useState(false);

  const activePlans = plans.filter((plan) => plan.status === "Active");
  const completedPlans = plans.filter((plan) => plan.status === "Completed");

  const handleViewPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsPlanModalOpen(true);
  };

  const handleViewKyc = (email: string) => {
    const user = users.find((user) => user.email === email);
    if (user) {
      setSelectedUser(user);
      setIsKycModalOpen(true);
    }
  };

  const filteredPlans = plans.filter(
    (plan) =>
      plan.id.toString().includes(searchQuery) ||
      plan.assetOwner.includes(searchQuery)
  );

  return (
    <div className="max-w-7xl mx-auto">
      <AdminStatCards />

      <DirectionAnimation>
        {/* Search and Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 mt-16 xl:mt-28 gap-4 px-6">
          <div className="relative w-full lg:w-auto flex-1 max-w-xl text-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />

            <input
              className="pl-10 font-semibold border border-gray-700 rounded-full h-10 w-full focus:outline-none focus:ring-1 focus:ring-[#4300D4]/70 focus:border-transparent bg-[#21202A]"
              placeholder="Find using Plan ID or Asset owner's email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-8 m-1 rounded-full bg-[#4300D4] hover:bg-[#4300D4]/60 px-4 text-white focus:outline-none">
              Search
            </button>
          </div>
          <div className="flex gap-4 w-full lg:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4300D4]">
              <Download className="h-4 w-4" />
              <span className="font-base font-normal"> Download CSV</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4300D4]">
              <ListFilter className="h-4 w-4" />{" "}
              <span className="font-base font-normal"> All</span>
            </button>
          </div>
        </div>

        {/* Plans Table */}
        <div className="bg-[linear-gradient(180deg,rgba(41,36,47,1)_52%,rgba(20,16,26,1)_100%)] border border-[#2B2A38] rounded-lg overflow-hidden mx-6">
          <div className="p-6 flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Plans</h2>
            <button className="text-[#5000FF] text-base flex items-center gap-1 focus:outline-none hover:text-[#5000FF]/70">
              View All Plans
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-2 md:p-4 text-[#D9D9DD] font-semibold text-sm">
                    Plan ID
                  </th>
                  <th className="text-left p-2 md:p-4 text-[#D9D9DD] font-semibold text-sm">
                    Plan Name
                  </th>
                  <th className="text-left p-2 md:p-4 text-[#D9D9DD] font-semibold text-sm">
                    Asset Owner
                  </th>
                  <th className="text-left p-2 md:p-4 text-[#D9D9DD] font-semibold text-sm">
                    Beneficiaries
                  </th>
                  <th className="text-left p-2 md:p-4 text-[#D9D9DD] font-semibold text-sm">
                    Time-Lock Status
                  </th>
                  <th className="text-left p-2 md:p-4 text-[#D9D9DD] font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-left p-2 md:p-4 text-[#D9D9DD] font-semibold text-sm">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPlans.map((plan) => (
                  <tr
                    key={plan.id}
                    className="border-b border-gray-800 text-[#D9D9DD]/70 text-[13px] font-light"
                  >
                    <td className="p-2 md:p-4">{plan.id}</td>
                    <td className="p-2 md:p-4">{plan.name}</td>
                    <td className="p-2 md:p-4">{plan.assetOwner}</td>
                    <td className="p-2 md:p-4">{plan.beneficiaries.length}</td>
                    <td className="p-2 md:p-4">{plan.timeLockStatus}</td>
                    <td className="p-2 md:p-4">{plan.status}</td>
                    <td className="p-2 md:p-4">
                      <button
                        className="text-[#5000FF] hover:text-[#5000FF]/70 focus:outline-none"
                        onClick={() => handleViewPlan(plan)}
                      >
                        View Plan
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DirectionAnimation>

      {/* Modals */}
      {selectedPlan && (
        <PlanDetailModal
          plan={selectedPlan}
          isOpen={isPlanModalOpen}
          onClose={() => setIsPlanModalOpen(false)}
          onViewKyc={handleViewKyc}
        />
      )}

      {selectedUser && (
        <KycDetailModal
          user={selectedUser}
          isOpen={isKycModalOpen}
          onClose={() => setIsKycModalOpen(false)}
        />
      )}
    </div>
  );
}
