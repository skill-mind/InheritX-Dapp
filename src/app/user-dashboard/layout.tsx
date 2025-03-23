'use client';

import { useState } from 'react';
import Header from './component/DashboardHeader';
import { Sidebar } from './component/UserDashboardSidebar';
import { MobileNav } from './component/MobileNav';
import DashBoardContextProvider from '../useContext/dashboardContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <DashBoardContextProvider>
      <div className='flex h-screen'>
        <div className='h-full'>
          <div className='w-[282px] py-2 px-5 hidden md:block h-full'>
            <Sidebar />
          </div>
        </div>
        <div className='flex-1 p-4 overflow-auto'>
          <Header onMenuClick={() => setIsMobileNavOpen(true)} />
          {children}
        </div>
      </div>
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </DashBoardContextProvider>
  );
}
