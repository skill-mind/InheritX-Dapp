
'use client';

import { useState } from 'react';
import Header from './component/DashboardHeader';
import { Sidebar } from './component/UserDashboardSidebar';
import DashBoardContextProvider from '../useContext/dashboardContext';
import { Logs } from 'lucide-react';


const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <DashBoardContextProvider>
      <main className='h-screen py-2 max-h-screen flex gap-2 w-full'>
        <div className='mx-5'>
          {/* <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='md:hidden px-8'
          >
            <Logs size={30} className='text-white' />
          </div> */}
          <div className='flex h-full text-white overflow-y-auto scrollbar-hide scroll-smooth'>
            {/* {isSidebarOpen && (
              <section className='h-full'>
                {' '}
                <Sidebar />
              </section>
            )} */}

            <section className=' hidden md:block'>
              {' '}
              <Sidebar />
            </section>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <Header />
          <main className='flex-grow overflow-y-scroll scrollbar-hide h-full hide-scrollbar w-full'>
            {children}
          </main>
        </div>
      </main>
    </DashBoardContextProvider>
  );
};

export default Layout;
