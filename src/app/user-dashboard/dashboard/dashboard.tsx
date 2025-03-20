"use client";

import { StatCard } from "../component/StatCard";
import Image from "next/image";
import { QuickActionButton } from "../component/QuickActionButton";
import bitcoinIcon from "../../../../public/svg/bitcoin.svg"
import clockIcon from "../../../../public/svg/plansIcon.svg"
import peopleIcon from "../../../../public/svg/people.svg"
import midClockIcon from "../../../../public/svg/mdi_clock-plus.svg"
import swapIcon from "../../../../public/svg/swap-icon.svg"
import RecentActivities  from "../component/RecentActivity"

const stats = [
  {
    value: "$2,500",
    icon: <Image src={bitcoinIcon} alt="Assets" height={20} width={20} />,
    label: "Total value of digital assets:",
    bgCol: "bg-white-500",
  },
  {
    value: "12",
    label: "Number of Active plans ",
    icon: <Image src={clockIcon} alt="Assets" height={20} width={20} />,
    bgCol: "bg-white-500",
  },
  {
    value: "12",
    label: "Numbers of Beneficiaries",
    icon: <Image src={peopleIcon} alt="Assets" height={20} width={20} />,
    bgCol: "bg-white-500",
  },

];

const quickActions = [
  {
    label: "Create an Inheritance Plan",
    icon: <Image src={midClockIcon} alt="Assets" height={20} width={20} />,
    sectionName: "plans",
  },
  {
    label: "Swap Assets",
    icon: <Image src={swapIcon} alt="Assets" height={20} width={20} />,
    sectionName: "assets",
  },
  {
    label: "View Plans",
    icon: <Image src={peopleIcon} alt="Assets" height={20} width={20} />,
    sectionName: "plans",
  },
];

function Dashboard() {
  return (
    <main className="flex-1 px-8 pb-8 pt-2 mt-2 mb-4 overflow-scroll scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <section>
        <h2 className="text-2xl font-semibold mb-7">Quick Actions</h2>
        {/* grid grid-cols-1  */}
        <div className="flex  gap-4 mb-5">
          {quickActions.map((action, index) => (
            <QuickActionButton
              key={index}
              icon={action.icon}
              label={action.label}
              sectionName={action.sectionName}
            />
          ))}
        </div>
        <RecentActivities />
      </section>
    </main>
  );
}

export default Dashboard;





