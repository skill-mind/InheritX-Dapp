'use client';

import { useState, useEffect, useContext, useRef } from "react";
import { Menu, X, Plus, Bell } from "lucide-react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Avatar from "../../../../public/svg/Avatar.svg";
import Notification from "../../../../public/svg/notification.svg";
import { DashBoardContext } from "../../useContext/dashboardContext";
import { useWalletContext } from "../../useContext/WalletContext";
import NotificationDropdown from "./NotificationDropdown";


// Add to props
interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  const { activeSection } = useContext(DashBoardContext);
  const { account, disconnectWallet } = useWalletContext();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

  // Toggle notification dropdown
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (hasUnreadNotifications) {
      setHasUnreadNotifications(false);
    }
  };

  // Close dropdown when clicking outside or changing page
  useEffect(() => {
    setIsNotificationOpen(false);
  }, [pathname]);

 return (
  <header className="pt-2 relative">
    <div className="flex justify-between items-center pt-2 md:px-7 pr-8 sm:px-6">
      {/* Mobile menu button */}
      <button className="lg:hidden md:hidden text-white" onClick={onMenuClick}>
        <Menu size={24} />
      </button>

      {/* Dashboard Title or Navigation */}
      <nav className="">
        {pathname === "/dashboard" ? (
          <h1 className="text-[40px] font-normal text-[#FCFCFC]">Dashboard</h1>
        ) : (
          navigation.map((item, index) => (
            <div key={item.name} className="flex items-center">
              {index > 0 && (
                <div className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg mx-2"></div>
              )}
              <Link
                href={item.href}
                className={cn(
                  "text-[40px] font-normal",
                  pathname === item.href ? "text-[#FCFCFC]" : "text-[#ABABAB]"
                )}
              >
                {item.name}
              </Link>
            </div>
          ))
        )}
      </nav>

      <div className="hidden lg:flex items-center gap-4 relative">
        {/* Notification Icon */}
        <div className="relative">
          <button
            onClick={toggleNotification}
            className="w-10 h-10 rounded-full bg-[#121217] flex items-center justify-center border border-[#1D1D1C] hover:bg-[#1D1D1C] transition-colors"
          >
            <Bell size={20} className="text-white" />
            {hasUnreadNotifications && (
              <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full" />
            )}
          </button>

          <NotificationDropdown
            isOpen={isNotificationOpen}
            setIsNotificationOpen={setIsNotificationOpen}
            onClose={() => setIsNotificationOpen(false)}
          />
        </div>

        {/* Profile Container */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 hover:bg-[#FFFFFF1A] bg-[#161716] p-2 rounded-full cursor-pointer border"
          >
            <Image
              src={Avatar}
              width={25}
              height={25}
              className="rounded-full"
              alt="Avatar"
            />
            <MdOutlineKeyboardArrowDown className="text-white" />
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#161716] rounded-lg border border-[#413F54] shadow-lg overflow-hidden z-50">
              <div className="p-3 border-b border-[#413F54]">
                <span className="text-sm text-[#F3F5FF] break-all">
                  {account ? account : "Not connected"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="lg:hidden mt-4 px-4 sm:px-6">
        <nav className="flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium py-2",
                pathname === item.href ? "text-[#FCFCFC]" : "text-[#ABABAB]"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between bg-[#161716] p-2 rounded-lg border">
            <div className="flex items-center gap-2">
              <Image
                src={Avatar}
                width={25}
                height={25}
                className="rounded-full"
                alt="Avatar"
              />
              <span className="text-sm text-[#F3F5FF]">
                {account ? account : "Not connected"}
              </span>
            </div>
            <Plus size={18} />
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
    )}
  </header>
  );
}
