import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Grid,
  Clock,
  RefreshCw,
  FileText,
  User,
  Headphones,
  Bitcoin,
  Users,
  UserPlus,
  BarChart2,
} from "lucide-react";
import AdminDashboardHeader from "./components/AdminDashboardHeader";

interface Button {
  icon: any;
  label: string;
}

const buttons: Button[] = [
  { icon: <UserPlus size={20} />, label: "Create an Inheritance Plan" },
  { icon: <RefreshCw size={20} />, label: "Swap Assets" },
  { icon: <Users size={20} />, label: "View Plans" },
];

interface Stat {
  icon: any;
  label: string;
  value: string;
}
const stats: Stat[] = [
  {
    icon: <Bitcoin size={16} />,
    label: "Total value of digital assets:",
    value: "$2,500",
  },
  {
    icon: <Clock size={16} />,
    label: "Number of Active Plans",
    value: "3",
  },
  {
    icon: <Users size={16} />,
    label: "Number of Beneficiaries",
    value: "16",
  },
];

interface NavItem {
  href: string;
  icon: any;
  label: string;
  className?: string;
}
const navItems: NavItem[] = [
  {
    href: "#",
    icon: Grid,
    label: "Dashboard",
    className: "bg-[#1E0B40]",
  },
  {
    href: "#",
    icon: BarChart2,
    label: "Assets",
  },
  {
    href: "#",
    icon: Clock,
    label: "Plans",
  },
  {
    href: "#",
    icon: RefreshCw,
    label: "Exchange",
  },
  {
    href: "#",
    icon: Users,
    label: "Claims",
  },
  {
    href: "#",
    icon: FileText,
    label: "Advisory",
  },
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-[#06010e] text-white">
      {/* Sidebar */}
      <div className="p-4">
        <div className="w-64 rounded-xl h-full border border-[#413F54] bg-[#29242F] bg-[linear-gradient(180deg,rgba(41,36,47,1)_52%,rgba(20,16,26,1)_100%)] flex flex-col">
          <div className="p-6">
            <h1 className="text-2xl font-bold">InheritX</h1>
          </div>

          {/* navitems */}
          <nav className="flex-1 px-4 space-y-2">
            {navItems.map(({ href, icon: Icon, label, className }) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 p-3 ${className} text-white  hover:bg-[#1E0B40] rounded-md transition-colors`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-4 pb-6 space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 p-3 text-white hover:text-white hover:bg-[#1E0B40] rounded-md transition-colors"
            >
              <User size={20} />
              <span>Profile</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 p-3 text-white hover:text-white hover:bg-[#1E0B40] rounded-md transition-colors"
            >
              <Headphones size={20} />
              <span>Support</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-[#1E0B40]">
              <Bell size={20} />
            </button>

            <div className="flex items-center gap-2 bg-[#1E0B40] px-3 py-2 rounded-full">
              <div className="w-8 h-8 rounded-full bg-[#2D1B50] flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="text-sm">0x8a53...3279</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#100030] p-[18px] rounded-lg border-[#413F54] border"
            >
              <div className="mb-4">
                <div className="w-8 h-8 rounded-full bg-[#2D1B50] flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div>
                <span className="text-gray-300 font-[13px]">{stat.label}</span>
                <p className="text-2xl font-[400]">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Quick Actions */}
        <div className="px-6 mt-10">
          <h2 className="text-[32px] font-[400] mb-6">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            {buttons.map((button, index) => (
              <button
                key={index}
                className="flex items-center gap-2 bg-[#1B0055] hover:bg-[#2D1B50] px-6 py-3 border border-[#C0BFC6] rounded-full transition-colors"
              >
                {button.icon}
                <span>{button.label}</span>
              </button>
            ))}
          </div>{" "}
        </div>

        {/* Recent Activities */}
        <div className="px-6 mt-10 pb-10">
          <div className="bg-[#29242F] bg-[linear-gradient(180deg,rgba(41,36,47,1)_55%,rgba(20,16,26,1)_100%)] rounded-lg p-6  border border-[#413F54]">
            <h2 className="text-[32px] mb-6 font-[400]">Recent Activities</h2>

            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="pb-4 font-medium flex items-center gap-2">
                    <Clock size={16} />
                    Date
                  </th>
                  <th className="pb-4 font-medium">Type</th>
                  <th className="pb-4 font-medium flex items-center gap-2">
                    <BarChart2 size={16} />
                    Details
                  </th>
                  <th className="pb-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="font-light">
                <tr>
                  <td className="py-3">24 - 01 - 2025</td>
                  <td className="py-3">Plan</td>
                  <td className="py-3">Created Inheritance Plan</td>
                  <td className="py-3">
                    <a
                      href="#"
                      className="text-purple-500 hover:text-purple-400"
                    >
                      View Plan
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">24 - 01 - 2025</td>
                  <td className="py-3">Transaction</td>
                  <td className="py-3">Swapped Assets</td>
                  <td className="py-3">
                    <a
                      href="#"
                      className="text-purple-500 hover:text-purple-400"
                    >
                      View Transaction History
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
