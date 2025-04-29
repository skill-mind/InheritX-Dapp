import { DirectionAnimation } from "@/motion/Animation";
import { ReactNode } from "react";

interface StatCardProps {
  icon?: ReactNode;
  value?: string;
  label?: string;
  bgCol?: string;
  isAction?: boolean;
  actionText?: string;
  onAction?: () => void;
}

export function ClaimStatCard({
  icon,
  value,
  label,
  isAction = false,
  actionText,
  onAction,
}: StatCardProps) {
  if (isAction) {
    return (
      <div
        onClick={onAction}
        className={`bg-[#4300D4] hover:bg-indigo-800 border border-[#C0BFC6] cursor-pointer p-6 rounded-lg flex items-center justify-center `}
      >
        <div className="flex items-center justify-center">
          <p className="text-white text-[20px] font-bold">{actionText}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-[#100030] cursor-pointer border border-[#413F54] hover:bg-[#413F54]  p-6 rounded-lg `}
    >
      <div className="min-h-[60px] justify-start">
        <div className="min-h-[px]">
          <div
            className={`mb-2 rounded-full h-[30px] w-[64px] hover:bg-opacity-[50%] bg-opacity-[40%]`}
          >
            <DirectionAnimation>{icon}</DirectionAnimation>
          </div>
        </div>

        <div>
          <p className="text-white text-[13px] mb-3 md:text-[14px]">
            <DirectionAnimation delay={0.2}>{label}</DirectionAnimation>
          </p>
          <p className="text-2xl font-bold mb-1 text-[30px]">
            <DirectionAnimation delay={0.4}>{value}</DirectionAnimation>
          </p>
        </div>
      </div>
    </div>
  );
}
