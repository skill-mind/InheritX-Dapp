import { Button } from "@/components/ui/button";
import { plansTableType } from "@/lib/types";
import { DirectionAnimation } from "@/motion/Animation";
import { BTCIcon } from "@/svg/tokenSvg";

export default function PlanTable({
  planTableDetails,
  activeTab,
}: {
  planTableDetails: plansTableType[];
  activeTab: () => void;
}) {
  return (
    <>
      <div className="flex justify-end">
        <DirectionAnimation>
          <Button className="flex gap-3 rounded-full bg-[#1B0055] border border-[#C0BFC6] w-fit py-[10px] px-7 font-normal text-base items-center mt-7">
            Create Plan <BTCIcon />
          </Button>
        </DirectionAnimation>
      </div>
      <DirectionAnimation>
        <table className="border hidden border-[#2B2A38] rounded-[15px] w-full md:flex flex-col bg-gradient-dark p-5 pb-6">
          <thead className="w-full text-[#D9D9DD] font-semibold text-base pb-7">
            <tr className="grid grid-cols-5 w-full text-start">
              <th className="text-start">Plan Name</th>
              <th className="text-start">Total Assets Allocated</th>
              <th className="text-center">Beneficiaries</th>
              <th className="text-center">Time-Lock Status</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody className="flex items-center justify-between w-full text-[#D9D9DD] font-semibold text-base">
            <thead className="w-full text-[#D9D9DD] font-light text-base gap-7 grid">
              {planTableDetails.map((data: plansTableType) => {
                return (
                  <tr className="grid grid-cols-5 w-full">
                    <td>{data.planName}</td>
                    <td className="text-start">{data.totalAssest}</td>
                    <td className="text-center">{data.beneficiaries}</td>
                    <td className="text-center">{data.timeLockStatus}</td>
                    <td
                      className="text-end cursor-pointer text-[#5000FF] font-medium text-base"
                      onClick={activeTab}
                    >
                      {data.action}
                    </td>
                  </tr>
                );
              })}
            </thead>
          </tbody>
        </table>
      </DirectionAnimation>

      <div className="md:hidden w-full space-y-4 mt-4">
        {planTableDetails.map((data: plansTableType, index) => (
          <div
            key={index}
            className="border border-[#2B2A38] rounded-[15px] bg-gradient-dark p-4 text-[#D9D9DD]"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">{data.planName}</h3>
              <span
                className="text-[#5000FF] font-medium text-sm cursor-pointer"
                onClick={activeTab}
              >
                {data.action}
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#D9D9DD]/70">Total Assets:</span>
                <span>{data.totalAssest}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#D9D9DD]/70">Beneficiaries:</span>
                <span>{data.beneficiaries}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#D9D9DD]/70">Time-Lock Status:</span>
                <span>{data.timeLockStatus}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
