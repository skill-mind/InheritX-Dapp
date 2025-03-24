"use client";

import React from "react";
import Notification from "../../../../public/svg/notification.svg";
import Avatar from "../../../../public/svg/Avatar.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Menu, Plus } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AdminDashboardHeader({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: any;
}) {
  const pathname = usePathname();

  const normalizedPathname = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  const pageTitles: { [key: string]: string } = {
    "/admin-dashboard": "Dashboard",
    "/admin-dashboard/support": "Support",
    "/admin-dashboard/plans": "Plans",
    "/admin-dashboard/claims": "Claims",
  };

  const pageTitle = pageTitles[normalizedPathname] || "Dashboard";

  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="lg:text-3xl text-2xl font-semibold">{pageTitle}</h1>

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
          <span className="lg:text-sm text-xs text-[#F3F5FF]">Not Connected</span>
          <Plus />
          <MdOutlineKeyboardArrowDown />
        </div>

        <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu />
        </button>
      </div>
    </header>
  );
}
