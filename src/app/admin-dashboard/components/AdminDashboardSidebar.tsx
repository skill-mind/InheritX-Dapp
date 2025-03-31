import { DirectionAnimation } from "@/motion/Animation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  icon: string; // now this is a string path
  label: string;
  id: number;
  // className?: string;
}

const navItems: NavItem[] = [
  {
    href: "/admin-dashboard",
    icon: "/svg/dashboardIcon.svg",
    label: "Dashboard",
    id: 1,
  },
  {
    href: "/admin-dashboard/plans",
    icon: "/svg/plansIcon.svg", // "bg-[#1E0B40] border border-[#807F8D]"
    label: "Plans",
    id: 2,
  },
  {
    href: "/admin-dashboard/claims",
    icon: "/svg/claimsIcons.svg",
    label: "Claims",
    id: 3,
  },
  {
    href: "/admin-dashboard/support",
    icon: "/svg/supportIcon.svg",
    label: "Support",
    id: 4,
  },
];

export default function AdminDashboardSidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: any;
}) {
  const pathname = usePathname();

  return (
    <nav
      className={`p-4 md:static fixed ${
        sidebarOpen ? "" : "left-[-100vw]"
      } transition-all left-0 top-0 bottom-0 h-full`}
    >
      <div className="w-64 rounded-xl h-full border border-[#413F54] bg-[#29242F] bg-[linear-gradient(180deg,rgba(41,36,47,1)_52%,rgba(20,16,26,1)_100%)] flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold">
            {" "}
            <Link href="/">
              <Image
                src="/svg/whitelogo.svg"
                width={19}
                height={6}
                className=" h-[40px]  w-fit"
                alt="Logo"
              />
            </Link>
          </h1>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map(({ href, icon, label, id }) => (
            <DirectionAnimation direction="left-to-right" delay={id * 0.1}>
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 p-3  text-white hover:bg-[#1E0B40] rounded-md transition-colors ${
                  pathname === href
                    ? "bg-[#1E0B40] border border-[#807F8D]"
                    : ""
                }`}
              >
                <Image
                  src={icon}
                  alt={`${label} icon`}
                  width={20}
                  height={20}
                />
                <span>{label}</span>
              </Link>
            </DirectionAnimation>
          ))}
        </nav>

        {/* Bottom links */}
        {/* <div className="mt-auto px-4 pb-6 space-y-2">
          <Link
            href="#"
            className="flex items-center gap-3 p-3 text-white hover:bg-[#1E0B40] rounded-md transition-colors"
          >
            <Image
              src="/svg/profileIcon.svg"
              alt="Profile Icon"
              width={20}
              height={20}
            />
            <span>Profile</span>
          </Link>

          <Link
            href="/admin-dashboard/support"
            className="flex items-center gap-3 p-3 text-white hover:bg-[#1E0B40] rounded-md transition-colors"
          >
            <Image
              src="/svg/supportIcon.svg"
              alt="Support Icon"
              width={20}
              height={20}
            />
            <span>Support</span>
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
