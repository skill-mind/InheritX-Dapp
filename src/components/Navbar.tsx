"use client";

import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { usePathname } from "next/navigation";
import { useAccount } from "@starknet-react/core";
import { useDisconnect } from "@starknet-react/core";
import { Plus, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ConnectModal from "./ConnectModal";
import navLogo from "@/svg/Logo.svg";

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  onConnectWallet?: () => void;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "FAQ", href: "/faq" },
];

const Navbar: React.FC<NavbarProps> = ({ onConnectWallet }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect({});

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleConnectWallet = () => {
    setIsModalOpen(true);
    onConnectWallet?.();
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full py-10 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-center ">
        <div className="flex items-center justify-between  bg-[#413F54]/50 rounded-full border border-[#413F54] px-6 py-3  w-[1063px]">
          {/* Logo */}
          <Link href={"/"}>
            <div className="text-white h-[38.67px] w-[110px]">
              <Image
                src={navLogo}
                width={60}
                height={50}
                alt="Logo"
                className="w-full h-full object-fill"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base transition-colors animated-underline ${
                  isActive(link.href)
                    ? "text-white font-bold"
                    : "text-[#FFFFFF]/30 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            {" "}
            <button
              onClick={() => {
                handleConnectWallet();
                if (isConnected) {
                  disconnect();
                }
              }}
              className="border border-[#413F54] bg-[#211A1D]  text-white hover:bg-black  px-3 py-2 rounded-full transition-colors"
            >
              {isConnected ? (
                <div className="flex items-center gap-[16px] justify-between">
                  <div className="flex items-center gap-[5px]">
                    <div>
                      <img
                        src="/placeholder-wallet.svg"
                        alt="placeholder-wallet"
                      />
                    </div>

                    <div>
                      {address?.slice(0, 6)}....${address?.slice(-4)}
                    </div>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <Plus />
                    <ChevronDown />
                  </div>
                </div>
              ) : (
                "Connect Wallet"
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <ImCancelCircle size={24} /> : <IoIosMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
    md:hidden absolute top-full left-0 w-full bg-[#06020E]/95 backdrop-blur-md transition-all duration-300 ease-in-out
    ${
      isOpen
        ? "opacity-100 visible max-h-[50vh] py-5"
        : "opacity-0 invisible max-h-0"
    }
  `}
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors text-lg ${
                  isActive(link.href)
                    ? "text-white font-medium border-b border-white"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                handleConnectWallet();
                setIsOpen(false);
                if (isConnected) {
                  disconnect();
                }
              }}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors text-base mt-2"
            >
              {isConnected ? (
                <div className="flex items-center gap-[16px] justify-between">
                  <div className="flex items-center gap-[5px]">
                    <div>
                      <img
                        src="/placeholder-wallet.svg"
                        alt="placeholder-wallet"
                      />
                    </div>

                    <div>
                      {address?.slice(0, 6)}....${address?.slice(-4)}
                    </div>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <Plus />
                    <ChevronDown />
                  </div>
                </div>
              ) : (
                "Connect Wallet"
              )}
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ConnectModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
