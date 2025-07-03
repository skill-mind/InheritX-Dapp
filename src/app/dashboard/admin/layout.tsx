"use client";
import AdminDashboardHeader from "./components/AdminDashboardHeader";
import AdminDashboardSidebar from "./components/AdminDashboardSidebar";
import { useState } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex h-screen bg-[#06010e] text-white">
      <AdminDashboardSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <AdminDashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {children}
      </div>
    </div>
  );
}
