'use client';

import { useState, useEffect, useContext, useRef } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import Link from 'next/link';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Notification from '../../../../public/svg/notification.svg';
import Avatar from '../../../../public/svg/Avatar.svg';
import { DashBoardContext } from '../../useContext/dashboardContext';
import { useWalletContext } from '../../useContext/WalletContext';

// Add to props
interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  const { activeSection } = useContext(DashBoardContext);
  const { account, disconnectWallet } = useWalletContext();
  const pathname = usePathname();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Dynamic navigation based on active section
  const getNavigation = () => {
    switch (activeSection) {
      case 'assets':
        return [{ name: 'Assets', href: '/dashboard/assets' }];
      case 'plans':
        return [{ name: 'Plans', href: '/dashboard/plans' }];
      case 'exchange':
        return [{ name: 'Exchange', href: '/dashboard/exchange' }];
      case 'claims':
        return [{ name: 'Claims', href: '/dashboard/claims' }];
      case 'notification':
        return [{ name: 'Notification', href: '/dashboard/notification' }];
      case 'advisory':
        return [{ name: 'Advisory', href: '/dashboard/advisory' }];
      case 'profile':
        return [{ name: 'Profile', href: '/dashboard/profile' }];
      case 'support':
        return [{ name: 'Support', href: '/dashboard/support' }];
      default:
        return [{ name: 'Dashboard', href: '/account/dashboard/dashboard' }];
    }
  };

  useEffect(() => {
    console.log('Updated activeSection:', activeSection);
  }, [activeSection]);
  const navigation = getNavigation();

  return (
    <header className='md:pt-2'>
      <div className='flex justify-between items-center md:pt-2 lg:px-7  md:pr-8    '>
        {/* Mobile menu button */}
        <button
          className='lg:hidden md:hidden text-white'
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className=' '>
          {navigation.map((item, index) => (
            <div key={item.name} className='flex items-center'>
              {index > 0 && (
                <div className='bg-[#1D1D1C] w-[3px] h-4 rounded-lg mx-2'></div>
              )}
              <Link
                href={item.href}
                className={cn(
                  'text-[28px] md:text-[40px] font-normal',
                  pathname === item.href ? 'text-[#FCFCFC]' : 'text-[#ABABAB]'
                )}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className='hidden md:flex items-center gap-4'>
          <Image
            src={Notification}
            width={40}
            height={40}
            className='text-white cursor-pointer'
            alt='Notification'
          />

          {/* Profile Container */}
          <div className='relative' ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className='lg:hidden flex items-center gap-2 hover:bg-[#FFFFFF1A] bg-[#161716] p-2 rounded-full cursor-pointer border'
            >
              <Image
                src={Avatar}
                width={25}
                height={25}
                className='rounded-full'
                alt='Avatar'
              />
              <MdOutlineKeyboardArrowDown className='text-white' />
            </button>

            <div
              className='hidden lg:flex items-center gap-2 hover:bg-[#FFFFFF1A] bg-[#161716] p-2 rounded-full cursor-pointer border'
              onClick={account ? disconnectWallet : undefined}
            >
              <Image
                src={Avatar}
                width={25}
                height={25}
                className='rounded-full'
                alt='Avatar'
              />
              <span className='text-sm text-[#F3F5FF]'>
                {account ? account : 'Not connected'}
              </span>
              <Plus />
              <MdOutlineKeyboardArrowDown />
            </div>

            {/* Dropdown Menu (md to lg) */}
            {/* This can be changed too what we want  */}
            {isProfileOpen && (
              <div className='lg:hidden absolute right-0 mt-2 w-48 bg-[#161716] rounded-lg border border-[#413F54] shadow-lg overflow-hidden z-50'>
                <div className='p-3 border-b border-[#413F54]'>
                  <span className='text-sm text-[#F3F5FF] break-all'>
                    {account ? account : 'Not connected'}
                  </span>
                </div>
                {/* <button
                  onClick={disconnectWallet}
                  className='w-full p-3 text-left text-sm text-[#F3F5FF] hover:bg-[#FFFFFF1A] transition-colors'
                >
                  Disconnect
                </button> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
