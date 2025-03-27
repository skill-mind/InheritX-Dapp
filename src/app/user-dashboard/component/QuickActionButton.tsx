import { DashBoardContext } from '../../useContext/dashboardContext';
import { useContext } from 'react';
import { ReactNode } from 'react';

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
      className='flex w-fit items-center gap-1 px-6 py-3 bg-[#1B0055] border border-[#C0BFC6] hover:bg-[#413F54] rounded-full transition-colors'
    >
      <div className='h-[20px] w-[20px]'>{icon}</div>
      <span className='whitespace-nowrap'>{label}</span>
    </button>
  );
}
