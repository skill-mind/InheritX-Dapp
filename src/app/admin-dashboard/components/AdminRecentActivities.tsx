import React from "react";
import {
    Bell,
    ChevronDown,
    Grid,
    Clock,
    RefreshCw,
    FileText,
    User,
    Headphones,
    Bitcoin,
    Users,
    UserPlus,
    BarChart2,
  } from "lucide-react";

export default function AdminRecentActivities() {
  return (
    <div className="px-6 mt-10 pb-10">
      <div className="bg-[#29242F] bg-[linear-gradient(180deg,rgba(41,36,47,1)_55%,rgba(20,16,26,1)_100%)] rounded-lg p-6  border border-[#413F54]">
        <h2 className="text-[32px] mb-6 font-[400]">Recent Activities</h2>

        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400">
              <th className="pb-4 font-medium flex items-center gap-2">
                <Clock size={16} />
                Date
              </th>
              <th className="pb-4 font-medium">Type</th>
              <th className="pb-4 font-medium flex items-center gap-2">
                <BarChart2 size={16} />
                Details
              </th>
              <th className="pb-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="font-light">
            <tr>
              <td className="py-3">24 - 01 - 2025</td>
              <td className="py-3">Plan</td>
              <td className="py-3">Created Inheritance Plan</td>
              <td className="py-3">
                <a href="#" className="text-purple-500 hover:text-purple-400">
                  View Plan
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3">24 - 01 - 2025</td>
              <td className="py-3">Transaction</td>
              <td className="py-3">Swapped Assets</td>
              <td className="py-3">
                <a href="#" className="text-purple-500 hover:text-purple-400">
                  View Transaction History
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
