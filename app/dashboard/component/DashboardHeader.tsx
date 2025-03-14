"use client";

import { useState, useEffect, useContext } from "react";
import { Menu, X, Plus } from "lucide-react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "../../../public/Logo.png";
import Notification from "../../../public/svg/notification.svg";
import Avatar from "../../../public/svg/Avatar.svg";
import { Button } from "@headlessui/react";
import { DashBoardContext } from "../../useContext/dashboardContext";
import { useWalletContext } from "../../useContext/WalletContext";

function Header() {
  const { activeSection } = useContext(DashBoardContext);
  const { account, disconnectWallet } = useWalletContext();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dynamic navigation based on active section
  const getNavigation = () => {
    switch (activeSection) {
      // case "home":
      //   return [{ name: "Home", href: "/dashboard/dashboard" }];
      case "assets":
        return [{ name: "Assets", href: "/dashboard/assets" }];
      case "plans":
        return [{ name: "Plans", href: "/dashboard/plans" }];
      case "exchange":
        return [{ name: "Exchange", href: "/dashboard/exchange" }];
      case "claims":
        return [{ name: "Claims", href: "/dashboard/claims" }];
      case "notification":
        return [{ name: "Notification", href: "/dashboard/notification" }];
      case "advisory":
        return [{ name: "Advisory", href: "/dashboard/advisory" }];
      case "profile":
        return [{ name: "Profile", href: "/dashboard/profile" }];
      case "support":
        return [{ name: "Support", href: "/dashboard/support" }];
      default:
        return [{ name: "Home", href: "/account/dashboard/dashboard" }];
    }
  };

  useEffect(() => {
    console.log("Updated activeSection:", activeSection);
  }, [activeSection]);
  const navigation = getNavigation();

  return (
    <header className="bg-[#101110] py-5">
      <div className="flex  pl-4 md:px-24 pr-8 px-3 py-3 sm:px-6 ">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center ">
            <Image
              src={Logo}
              width={100}
              height={40}
              className="w-[100px] h-[40px]"
              alt="Logo"
            />
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="lg:hidden md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex  gap-4">
          {navigation.map((item, index) => (
            <div key={item.name} className="flex items-center">
              {index > 0 && (
                <div className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg mx-2"></div>
              )}
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium",
                  pathname === item.href ? "text-[#FCFCFC]" : "text-[#ABABAB]"
                )}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 ">
          <Image
            src={Notification}
            width={40}
            height={40}
            className="text-white cursor-pointer "
            alt="Notification"
          />

          <div
            className="flex items-center gap-2 hover:bg-[#FFFFFF1A] bg-[#161716] p-2 rounded-full cursor-pointer border"
            onClick={account ? disconnectWallet : undefined}
          >
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
            <Plus />
            <MdOutlineKeyboardArrowDown />
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
              <Plus />
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
