import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  bgCol?: string;
}

export function StatCard({ icon, value, label, bgCol }: StatCardProps) {
  return (
    <div
      className={` bg-[#100030] border border-[#413F54] cursor-pointer hover:bg-[#413F54] p-6 rounded-lg w-[px]`}
    >
      <div className=" min-h-[60px] justify-start ">
        <div className="min-h-[px] ">
          <div
            className={`mb-2  rounded-full h-[30px] w-[64px]  hover:bg-opacity-[50%] bg-opacity-[40%] ${bgCol}`}
          >
            {icon}
          </div>
        </div>

        <div>
          <div className="text-white mb-3 font-extralight text-[13px] md:text-[14px]">
            {label}
          </div>
          <p className="text-2xl font-bold  text-[30px]">{value}</p>
        </div>
      </div>
    </div>
  );
}
