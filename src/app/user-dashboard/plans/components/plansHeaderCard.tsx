import { ClockIcon, Users } from "@/svg/Icons";
import { BTCIcon } from "@/svg/tokenSvg";

const plans = [
  {
    icon: <BTCIcon />,
    detail: "Total value of digital assets:",
    amount: "$8,562.78",
  },
  {
    icon: <ClockIcon />,
    detail: "Total value of digital assets:",
    amount: "$8,562.78",
  },
  {
    icon: <Users />,
    detail: "Total value of digital assets:",
    amount: "$8,562.78",
  },
];


export default function PlanCard() {
  return (
    <div className="flex justify-between flex-wrap">
      {plans.map((data) => {
        return (
          <div className="bg-[#100030] justify-between w-[340px] max-h-[136px] p-3 rounded-xl flex flex-col gap-6 border border-[#413F54]">
            {data.icon}
            <div>
              <h3 className="font-medium text-base">{data.detail}</h3>
              <h2 className="font-normal text-2xl">{data.amount}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}