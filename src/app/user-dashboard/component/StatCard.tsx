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
      className={` bg-[#100030] cursor-pointer hover:bg-[#413F54] p-6 rounded-lg w-[px]`}
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
          <p className="text-2xl font-bold mb-1 text-[30px]">{value}</p>
          <p className="text-white text-[13px] md:text-[14px]">{label}</p>
        </div>
      </div>
    </div>
  );
}