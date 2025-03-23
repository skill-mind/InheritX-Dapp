"use client";

import React, { useEffect, useState } from "react";
import Notification from "../../../../public/svg/notification.svg";
import Avatar from "../../../../public/svg/Avatar.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Menu, Plus } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin-dashboard", label: "Dashboard" },
  { href: "/admin-dashboard/plans", label: "Inheritance Plans" },
  { href: "/admin-dashboard/claims", label: "Claims" },
  { href: "/admin-dashboard/support", label: "Support" },
];

export default function AdminDashboardHeader({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: any;
}) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("Dashboard");

  useEffect(() => {
    const matchedPage =
      navItems.find((item) => pathname === item.href)?.label || "Dashboard";
    setCurrentPage(matchedPage);
  }, [pathname]);

  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="lg:text-3xl text-2xl font-semibold">{currentPage}</h1>

      <div className="flex items-center gap-4">
        <Image
          src={Notification}
          width={40}
          height={40}
          className="text-white cursor-pointer"
          alt="Notification"
        />

        <div className="flex items-center gap-2 hover:bg-[#FFFFFF1A] bg-[#161716] lg:p-2 p-1 rounded-full cursor-pointer border">
          <Image
            src={Avatar}
            width={25}
            height={25}
            className="rounded-full"
            alt="Avatar"
          />
          <span className="lg:text-sm text-xs text-[#F3F5FF]">
            Not Connected
          </span>
          <Plus />
          <MdOutlineKeyboardArrowDown />
        </div>
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
