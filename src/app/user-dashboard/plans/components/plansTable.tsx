import { Button } from "@/components/ui/button";
import { plansTableType } from "@/lib/types";
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
        <Button className="flex gap-3 rounded-full bg-[#1B0055] border border-[#C0BFC6] w-fit py-[10px] px-7 font-normal text-base items-center mt-7">
          Create Plan <BTCIcon />
        </Button>
      </div>
      <table className="border border-[#2B2A38] rounded-[15px] w-full flex flex-col bg-gradient-to-r from-[#7A7879] to-[#4F4E4F] p-5 pb-6">
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
                  <td className="text-end text-[#5000FF] font-medium text-base" onClick={activeTab}>
                    {data.action}
                  </td>
                </tr>
              );
            })}
          </thead>
        </tbody>
      </table>
    </>
  );
}
