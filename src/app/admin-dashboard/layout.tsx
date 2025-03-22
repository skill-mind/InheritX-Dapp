import AdminDashboardHeader from "./components/AdminDashboardHeader";
import AdminDashboardSidebar from "./components/AdminDashboardSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#06010e] text-white">
      <AdminDashboardSidebar />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <AdminDashboardHeader />
        {children}
      </div>
    </div>
  );
}
