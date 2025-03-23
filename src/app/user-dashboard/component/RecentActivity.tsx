import React from 'react';
import Link from 'next/link';
import { Calendar, List, Bolt, Zap } from 'lucide-react';

type Activity = {
  date: string;
  type: string;
  details: string;
  actionLabel: string;
  actionLink: string;
};

const activities: Activity[] = [
  {
    date: '24 - 01 - 2025',
    type: 'Plan',
    details: 'Created Inheritance Plan',
    actionLabel: 'View Plan',
    actionLink: '/user-dashboard',
  },
  {
    date: '24 - 01 - 2025',
    type: 'Transaction',
    details: 'Swapped Assets',
    actionLabel: 'View Transaction History',
    actionLink: '/user-dashboard',
  },
];

const RecentActivities: React.FC = () => {
  return (
    <div className='bg-gradient-dark border border-[#413F54] text-white rounded-[20px] p-6 shadow-lg w-full mt-8 mx-auto min-h-[500px]'>
      <h2 className='text-lg font-semibold mb-4 text-center sm:text-left'>
        Recent Activities
      </h2>

      {/* Responsive Table */}
      <div className='overflow-x-auto relative'>
        <div className='min-w-full inline-block align-middle'>
          <div className='overflow-hidden'>
            <table className='w-full text-left'>
              <thead>
                <tr className='hidden md:table-row'>
                  <th className='py-2 px-3 min-w-[100px]'>
                    <div className='flex items-center gap-2'>
                      <Calendar className='w-4 h-4 text-gray-400' />
                      Date
                    </div>
                  </th>
                  <th className='py-2 px-3 min-w-[100px]'>Type</th>
                  <th className='py-2 px-3 min-w-[150px]'>
                    <div className='flex items-center gap-2'>
                      <List className='w-4 h-4 text-gray-400' />
                      Details
                    </div>
                  </th>
                  <th className='py-2 px-3 min-w-[150px]'>
                    <div className='flex items-center gap-2'>
                      <Zap className='w-4 h-4 text-gray-400' />
                      Action
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr
                    key={index}
                    className='hover:bg-[#413F54]/50 hidden md:table-row font-light'
                  >
                    <td className='py-3 px-3 whitespace-nowrap'>
                      {activity.date}
                    </td>
                    <td className='py-3 px-3'>{activity.type}</td>
                    <td className='py-3 px-3'>{activity.details}</td>
                    <td className='py-3 px-3'>
                      <Link
                        href={activity.actionLink}
                        className='text-[#5000FF] hover:underline'
                      >
                        {activity.actionLabel}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View - Cards */}
        <div className='md:hidden'>
          {activities.map((activity, index) => (
            <div
              key={index}
              className='bg-[#413F54] p-4 mb-3 border border-white rounded-lg shadow-md'
            >
              <div className='flex justify-between items-center text-gray-400 text-sm mb-2'>
                <div className='flex items-center gap-2'>
                  <Calendar className='w-4 h-4' />
                  <span>{activity.date}</span>
                </div>
                <span>{activity.type}</span>
              </div>
              <p className='text-white text-sm mb-2'>{activity.details}</p>
              <Link
                href={activity.actionLink}
                className='text-blue-400 text-sm hover:underline'
              >
                {activity.actionLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
