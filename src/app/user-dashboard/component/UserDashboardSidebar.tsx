"use client";
import Image from "next/image";
import React, { ReactNode, useContext } from "react";
import dashboardIcon from "../../../../public/svg/dashboardIcon.svg";
import assetsIcon from "../../../../public/svg/assetsIcon.svg";
import plansIcon from "../../../../public/svg/plansIcon.svg";
import exchangeIcon from "../../../../public/svg/exchangeIcon.svg";
import claimsIcon from "../../../../public/svg/claimsIcons.svg";
import notificationIcon from "../../../../public/svg/bell.svg";
import advisoryIcon from "../../../../public/svg/advisoryIcons.svg";
import ProfileIcon from "../../../../public/svg/profileIcon.svg";
import SupportIcon from "../../../../public/svg/SupportIcon.svg";
import { DashBoardContext } from "../../useContext/dashboardContext";
import Logo from "../../../../public/svg/whitelogo.svg";
import Link from "next/link";


interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
  //console.log(active)
  return (
    <button
      onClick={onClick}
      className={`flex items-center  gap-3 w-full px-4 py-3 rounded-lg transition-colors ${active ? "bg-[#100033] border border-[#e8e7eb] px-4 py-2" : "hover:bg-[#FFFFFF1A]"
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
    <aside className=" h-screen sticky top-0 bg-gradient-to-b from-[#29262F] via-[#1C1923] to-[#16131D] rounded-[12px]">
      <div className="p-4 w-[272px] ">
        <div className="py-3">
          <Link href="/">
            <Image
              src={Logo}
              className="w-[300px] h-[40px]"
              alt="Logo"
            />
          </Link>
        </div>
        <div
          onClick={() => onSectionChange("home")}
          className={`flex relative cursor-pointer items-center gap-3 mb-2 rounded-lg p-3 hover:bg-[#100033] 
    ${activeSection === "home" ? "bg-[#100033] rounded-lg border" : "border-none bg-transparent"}
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

        <nav className=" flex flex-col gap-[2rem] justify-between">
          <div>


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
                  alt="Notification"
                  height={20}
                  width={20}
                />
              }
              label="Notification"
              active={activeSection === "notification"}
              onClick={() => onSectionChange("notification")}
            />
            <NavItem
              icon={
                <Image src={advisoryIcon} alt="Advisory" height={20} width={20} />
              }
              label="Advisory"
              active={activeSection === "advisory"}
              onClick={() => onSectionChange("advisory")}
            />
          </div>
          <div className="mt-[1rem]">
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
          </div>

        </nav>
      </div>
    </aside>
  );
}
