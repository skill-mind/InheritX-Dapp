"use client";
import { DirectionAnimation } from "@/motion/Animation";
import Image from "next/image";

interface Stat {
  icon: string;
  label: string;
  value: string;
}

const stats: Stat[] = [
  {
    icon: "/svg/plansIcon.svg",
    label: "Total Inheritance Plans",
    value: "325",
  },
  {
    icon: "/svg/claimsIcons.svg",
    label: "Total Claims",
    value: "325",
  },
  {
    icon: "/svg/ticket.svg",
    label: "Unanswerd Support Tickets",
    value: "45",
  },
];

const AdminStatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#100030] p-[18px] rounded-lg border border-[#413F54]"
        >
          <div className="mb-2">
            <div className="w-8 h-8">
              <DirectionAnimation>
                <Image
                  src={stat.icon}
                  alt={`${stat.label} icon`}
                  width={20}
                  height={20}
                />
              </DirectionAnimation>
            </div>
          </div>
          <div>
            <span className="text-gray-300 text-[13px]">
              <DirectionAnimation delay={0.2}>{stat.label}</DirectionAnimation>
            </span>
            <p className="text-2xl font-normal">
              <DirectionAnimation>{stat.value}</DirectionAnimation>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStatCards;
