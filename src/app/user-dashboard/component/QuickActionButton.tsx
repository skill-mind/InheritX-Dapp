import { DashBoardContext } from "../../useContext/dashboardContext";
import { useContext } from "react";
import { ReactNode } from "react";

interface QuickActionButtonProps {
  icon: ReactNode;
  label: string;
  sectionName: string;
}

export function QuickActionButton({
  label,
  icon,
  sectionName,
}: QuickActionButtonProps) {
  const { setActiveSection: onSectionChange } = useContext(DashBoardContext);

  const handleClick = () => {
    onSectionChange(sectionName);
  };

  return (
    <button
      onClick={handleClick}
      className="flex gap-1 px-6 py-3 bg-[#100030] border border-white hover:bg-[#413F54] rounded-full transition-colors"
    >
         <span>
        {icon}
      </span>
      {label}
    </button>
  );
}