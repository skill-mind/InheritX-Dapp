import Image from "next/image";

interface Stat {
  icon: string;
  label: string;
  value: string;
}

const stats: Stat[] = [
  {
    icon: "/svg/bitcoin.svg",
    label: "Total value of digital assets:",
    value: "$2,500",
  },
  {
    icon: "/svg/plansIcon.svg",
    label: "Number of Active Plans",
    value: "3",
  },
  {
    icon: "/svg/people.svg",
    label: "Number of Beneficiaries",
    value: "16",
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
              <Image
                src={stat.icon}
                alt={`${stat.label} icon`}
                width={20}
                height={20}
              />
            </div>
          </div>
          <div>
            <span className="text-gray-300 text-[13px]">{stat.label}</span>
            <p className="text-2xl font-normal">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStatCards;
