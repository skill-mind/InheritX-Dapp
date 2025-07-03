"use client";
import { useContext } from "react";
import Notification from "./notification/notification";
import Support from "./support/support";
import Profile from "./profile/profile";
import Dashboard from "./dashboard/dashboard";
import Assets from "./assets/assets";
import Plans from "./plans/plans";
import Claims from "./claims/claims";
import Advisory from "./advisory/advisory";
import Exchange from "./exchanges/exchanges";
import { DashBoardContext } from "@/app/useContext/dashboardContext";

function Page() {
  const { activeSection } = useContext(DashBoardContext);

  return (
    <div className="overflow-y-auto scrollbar-hide scroll-smooth">
      {activeSection === "home" && <Dashboard />}
      {activeSection === "assets" && <Assets />}
      {activeSection === "plans" && <Plans />}
      {activeSection === "exchange" && <Exchange />}
      {activeSection === "claims" && <Claims />}
      {activeSection === "notification" && <Notification />}
      {activeSection === "advisory" && <Advisory />}
      {activeSection === "profile" && <Profile />}
      {activeSection === "support" && <Support />}
    </div>
  );
}

export default Page;