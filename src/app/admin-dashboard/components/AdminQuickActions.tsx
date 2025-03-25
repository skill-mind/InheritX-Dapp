import React from "react";
import Image from "next/image";

interface Button {
  icon: string;
  label: string;
}

const buttons: Button[] = [
  { icon: "/svg/people.svg", label: "View All Plans" },
  { icon: "/svg/claimsIcons.svg", label: "View All Claims" },
  { icon: "/svg/ticket.svg", label: "View All Support Tickets" },
];

export default function AdminQuickActions() {
  return (
    <div className="px-6 mt-10">
      <h2 className="lg:text-[32px] text-xl font-[400] mb-6">Quick Actions</h2>
      <div className="flex flex-wrap gap-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="flex items-center gap-2 bg-[#1B0055] hover:bg-[#2D1B50] px-6 py-3 border border-[#C0BFC6] rounded-full transition-colors"
          >
            <Image
              src={button.icon}
              alt={`${button.label} icon`}
              width={20}
              height={20}
            />
            <span>{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
