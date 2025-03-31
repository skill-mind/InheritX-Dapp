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
    <div className=" gap-5 w-[100%] grid grid-flow-row md:grid-flow-col">
      {plans.map((data) => {
        return (
          <div
            className={`bg-[#100030] grid-cols-2 border border-[#413F54] cursor-pointer hover:bg-[#413F54] p-6 rounded-lg `}
          >
            <div className=" min-h-[60px] justify-start ">
              <div className="">
                <div
                  className={`mb-2  rounded-full h-[30px] w-[64px]  hover:bg-opacity-[50%] bg-opacity-[40%] `}
                >
                  {data.icon}
                </div>
              </div>

              <div>
                <div className="text-white mb-3 font-extralight text-[13px] md:text-[14px]">
                  {data.detail}
                </div>
                <p className="text-2xl font-bold  text-[30px]">{data.amount}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
