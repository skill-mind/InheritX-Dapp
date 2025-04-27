"use client";
import { Clock, BarChart2 } from "lucide-react";

export default function AdminRecentActivities() {
  return (
    <div className="px-4 sm:px-6 mt-10 pb-10">
      <div className="bg-[#29242F] bg-[linear-gradient(180deg,rgba(41,36,47,1)_55%,rgba(20,16,26,1)_100%)] rounded-lg p-4 sm:p-6 border border-[#413F54]">
        <h2 className="text-xl lg:text-[32px] mb-4 sm:mb-6 font-[400]">
          Recent Activities
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left text-gray-400">
                <th className="pb-4 font-medium whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    Date
                  </div>
                </th>
                <th className="pb-4 font-medium">Type</th>
                <th className="pb-4 font-medium whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <BarChart2 size={16} />
                    Details
                  </div>
                </th>
                <th className="pb-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="font-light">
              <tr>
                <td className="py-3">24 - 01 - 2025</td>
                <td className="py-3">Support</td>
                <td className="py-3">Responded to support ticket</td>
                <td className="py-3">
                  <a href="#" className="text-purple-500 hover:text-purple-400">
                    View Ticket
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">24 - 01 - 2025</td>
                <td className="py-3">Claims</td>
                <td className="py-3">Approved Claim</td>
                <td className="py-3">
                  <a href="#" className="text-purple-500 hover:text-purple-400">
                    View Claim
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3">24 - 01 - 2025</td>
                <td className="py-3">Support</td>
                <td className="py-3">Added FAQ</td>
                <td className="py-3">
                  <a href="#" className="text-purple-500 hover:text-purple-400">
                    View FAQs
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
