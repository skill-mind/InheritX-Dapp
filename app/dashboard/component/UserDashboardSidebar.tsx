"use client";
import Image from "next/image";
import React, { ReactNode, useContext } from "react";
import dashboardIcon from "../../../public/svg/dashboardIcon.svg";
import assetsIcon from "../../../public/svg/assetsIcon.svg";
import plansIcon from "../../../public/svg/plansIcon.svg";
import exchangeIcon from "../../../public/svg/exchangeIcon.svg";
import claimsIcon from "../../../public/svg/claimsIcons.svg";
import notificationIcon from "../../../public/svg/bell.svg";
import advisoryIcon from "../../../public/svg/advisoryIcons.svg";
import ProfileIcon from "../../../public/svg/profileIcon.svg";
import SupportIcon from "../../../public/svg/SupportIcon.svg";
import { DashBoardContext } from "../../useContext/dashboardContext";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active , onClick }: NavItemProps) {
  console.log(active)
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
        active ? "text-red-700 bg-[#FFFFFF1A]" : "hover:bg-[#FFFFFF1A]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export function Sidebar() {
  const { activeSection, setActiveSection: onSectionChange } =
    useContext(DashBoardContext);

  return (
    <aside className="w-64 border-r min-h-[90vh] bg-[#413F54] border-[#413F54] overflow-y-auto rounded-[20px]">
      <div className="p-4 h-[100%] overflow-y-auto scrollbar-hide scroll-smooth">
        <div
          onClick={() => onSectionChange("home")}
          className={`flex relative cursor-pointer items-center gap-3 mb-8 border rounded-lg p-2 border-[#100033] hover:bg-[#100033] ${
            activeSection === "home" ? "bg-[#100033] rounded-lg" : ""
          }`}
        >
          <div className="relative w-10 h-10  overflow-hidden">
          
              <Image src={dashboardIcon} alt="Dashboard"  height={20} width={20} />
      
          </div>
          <div>
            <h2 className="font-semibold">Dashboard</h2>
          </div>

        </div>

        <nav className="space-y-2">
          <NavItem
            label="Assets"
            active={activeSection === "assets"}
            icon={
              <Image src={assetsIcon} alt="Assets" height={20} width={20} />
            }
            onClick={() => onSectionChange("assets")}
          />
          <NavItem
            icon={<Image src={plansIcon} alt="Plans" height={20} width={20} />}
            label="Plans"
            active={activeSection === "plans"}
            onClick={() => onSectionChange("plans")}
          />
          <NavItem
            icon={
              <Image src={exchangeIcon} alt="Exchange" height={20} width={20} />
            }
            label="Exchange"
            active={activeSection === "exchange"}
            onClick={() => onSectionChange("exchange")}
          />
          <NavItem
            icon={
              <Image src={claimsIcon} alt="Claims" height={20} width={20} />
            }
            label="Claims"
            active={activeSection === "claims"}
            onClick={() => onSectionChange("claims")}
          />
          <NavItem
            icon={
              <Image
                src={notificationIcon}
                alt="Notifications"
                height={20}
                width={20}
              />
            }
            label="Notifications"
            active={activeSection === "notifications"}
            onClick={() => onSectionChange("notifications")}
          />
          <NavItem
            icon={
              <Image src={advisoryIcon} alt="Advisory" height={20} width={20} />
            }
            label="Advisory"
            active={activeSection === "advisory"}
            onClick={() => onSectionChange("advisory")}
          />

          <NavItem
            icon={
              <Image src={ProfileIcon} alt="Profile" height={20} width={20} />
            }
            label="Profile"
            active={activeSection === "profile"}
            onClick={() => onSectionChange("profile")}
          />

          <NavItem
            icon={
              <Image src={SupportIcon} alt="Support" height={20} width={20} />
            }
            label="Support"
            active={activeSection === "support"}
            onClick={() => onSectionChange("support")}
          />
        </nav>
      </div>
    </aside>
  );
}
