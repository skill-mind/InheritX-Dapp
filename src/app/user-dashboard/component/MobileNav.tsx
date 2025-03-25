'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';
import { X, Plus } from 'lucide-react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { DashBoardContext } from '../../useContext/dashboardContext';
import { useWalletContext } from '../../useContext/WalletContext';
import dashboardIcon from '../../../../public/svg/dashboardIcon.svg';
import assetsIcon from '../../../../public/svg/assetsIcon.svg';
import plansIcon from '../../../../public/svg/plansIcon.svg';
import exchangeIcon from '../../../../public/svg/exchangeIcon.svg';
import claimsIcon from '../../../../public/svg/claimsIcons.svg';
import notificationIcon from '../../../../public/svg/bell.svg';
import advisoryIcon from '../../../../public/svg/advisoryIcons.svg';
import ProfileIcon from '../../../../public/svg/profileIcon.svg';
import SupportIcon from '../../../../public/svg/SupportIcon.svg';
import Avatar from '../../../../public/svg/Avatar.svg';
import Logo from '../../../../public/svg/whitelogo.svg';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { activeSection, setActiveSection: onSectionChange } =
    useContext(DashBoardContext);
  const { account, disconnectWallet } = useWalletContext();

  const menuItems = [
    { icon: dashboardIcon, label: 'Dashboard', section: 'home' },
    { icon: assetsIcon, label: 'Assets', section: 'assets' },
    { icon: plansIcon, label: 'Plans', section: 'plans' },
    { icon: exchangeIcon, label: 'Exchange', section: 'exchange' },
    { icon: claimsIcon, label: 'Claims', section: 'claims' },
    { icon: notificationIcon, label: 'Notification', section: 'notification' },
    { icon: advisoryIcon, label: 'Advisory', section: 'advisory' },
    { icon: ProfileIcon, label: 'Profile', section: 'profile' },
    { icon: SupportIcon, label: 'Support', section: 'support' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 z-40'
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed left-0 top-0 bottom-0 w-[280px] bg-[#1A1A1A] z-50 border-r border-[#413F54] flex flex-col'
          >
            <div className='p-4 flex-1'>
              <div className='flex items-center justify-between mb-6'>
                <Image src={Logo} alt='InheritX Logo' height={40} width={120} />
                <button onClick={onClose} className='p-2'>
                  <X className='text-white' size={24} />
                </button>
              </div>

              <nav className='space-y-4'>
                {menuItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => {
                      onSectionChange(item.section);
                      onClose();
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.section
                        ? 'bg-[#100033] border border-[#807F8D]'
                        : 'hover:bg-[#FFFFFF1A]'
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      height={20}
                      width={20}
                    />
                    <span className='text-white'>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* User Profile Section at Bottom */}
            <div className='p-4 border-t border-[#413F54]'>
              <div
                className='flex items-center gap-2 hover:bg-[#FFFFFF1A] bg-[#161716] p-2 rounded-lg cursor-pointer'
                onClick={account ? disconnectWallet : undefined}
              >
                <Image
                  src={Avatar}
                  width={25}
                  height={25}
                  className='rounded-full'
                  alt='Avatar'
                />
                <span className='text-sm text-[#F3F5FF] flex-1 truncate'>
                  {account ? account : 'Not connected'}
                </span>
                <Plus size={16} className='text-white' />
                <MdOutlineKeyboardArrowDown className='text-white' size={16} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
