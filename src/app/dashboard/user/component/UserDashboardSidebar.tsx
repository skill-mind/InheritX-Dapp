"use client";
import Image from "next/image";
import React, { MouseEventHandler, useContext } from "react";
import { DashBoardContext } from "../../../useContext/dashboardContext";
import Link from "next/link";

// Import icons
import Logo from "../../../../../public/svg/whitelogo.svg";
import dashboardIcon from "../../../../../public/svg/dashboardIcon.svg";
import assetsIcon from "../../../../../public/svg/assetsIcon.svg";
import plansIcon from "../../../../../public/svg/plansIcon.svg";
import exchangeIcon from "../../../../../public/svg/exchangeIcon.svg";
import claimsIcon from "../../../../../public/svg/claimsIcons.svg";
import notificationIcon from "../../../../../public/svg/bell.svg";
import advisoryIcon from "../../../../../public/svg/advisoryIcons.svg";
import ProfileIcon from "../../../../../public/svg/profileIcon.svg";
import SupportIcon from "../../../../../public/svg/SupportIcon.svg";
import { DirectionAnimation } from "@/motion/Animation";

// NavItem component
const NavItem = ({
  icon,
  label,
  active,
  onClick,
  customId,
}: {
  icon: string;
  label: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  customId: number;
}) => {
  return (
    <button
      onClick={onClick}
      data-custom-id={customId}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors ${
        active
          ? "bg-[#100033] border border-[#e8e7eb] px-4 py-2"
          : "hover:bg-[#FFFFFF1A]"
      }`}
    >
      <Image src={icon} alt={label} height={20} width={20} />
      <span>{label}</span>
    </button>
  );
};

// Define navigation items with custom IDs
const navigationItems = [
  {
    section: "main",
    items: [
      {
        id: "home",
        label: "Dashboard",
        icon: dashboardIcon,
        special: true,
        customId: 1,
      },
      { id: "assets", label: "Assets", icon: assetsIcon, customId: 2 },
      { id: "plans", label: "Plans", icon: plansIcon, customId: 3 },
      { id: "exchange", label: "Exchange", icon: exchangeIcon, customId: 4 },
      { id: "claims", label: "Claims", icon: claimsIcon, customId: 5 },
      {
        id: "notification",
        label: "Notification",
        icon: notificationIcon,
        customId: 6,
      },
      { id: "advisory", label: "Advisory", icon: advisoryIcon, customId: 7 },
    ],
  },
  {
    section: "footer",
    items: [
      { id: "profile", label: "Profile", icon: ProfileIcon, customId: 8 },
      { id: "support", label: "Support", icon: SupportIcon, customId: 9 },
    ],
  },
];

export function Sidebar() {
  const { activeSection, setActiveSection: onSectionChange } =
    useContext(DashBoardContext);

  return (
    <aside className="min-h-screen sticky min-w-[272px] top-0 bg-gradient-to-b from-[#29262F] via-[#1C1923] to-[#16131D] rounded-[12px]">
      <div className="p-4 w-[272px]">
        <div className="py-3 md:mb-[50px]">
          <Link href="/">
            <Image
              src={Logo}
              className="w-[300px] md:left-[-20%] md:absolute h-[40px]"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Special treatment for Dashboard */}
        <div
          onClick={() => onSectionChange("home")}
          data-custom-id={1}
          className={`flex relative cursor-pointer items-center gap-3 mb-2 rounded-lg p-3 hover:bg-[#100033] 
            ${
              activeSection === "home"
                ? "bg-[#100033] rounded-lg border border-[#807F8D]"
                : "border-none bg-transparent"
            }
          `}
          style={{ marginTop: "5px" }}
        >
          <div className="relative overflow-hidden">
            <Image src={dashboardIcon} alt="Dashboard" height={20} width={20} />
          </div>
          <div>
            <h2 className="font-semibold">Dashboard</h2>
          </div>
        </div>

        <nav className="flex flex-col gap-[2rem] justify-between">
          {/* Main navigation items */}
          <div className="space-y-2">
            {navigationItems[0].items.slice(1).map((item) => (
              <DirectionAnimation
                direction="left-to-right"
                delay={item.customId * 0.05}
              >
                <NavItem
                  key={item.id}
                  label={item.label}
                  icon={item.icon}
                  customId={item.customId}
                  active={activeSection === item.id}
                  onClick={() => onSectionChange(item.id)}
                />
              </DirectionAnimation>
            ))}
          </div>

          {/* Footer navigation items */}
          <div className="mt-[1rem]">
            {navigationItems[1].items.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                icon={item.icon}
                customId={item.customId}
                active={activeSection === item.id}
                onClick={() => onSectionChange(item.id)}
              />
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
