"use client";

import Accounts from "@/components/faq/Accounts";
import General from "@/components/faq/General";
import Security from "@/components/faq/Security";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("General");
  return (
    <div>
      <Navbar />
      {activeTab === "General" && (
        <General activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {activeTab === "Security" && (
        <Security activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {activeTab === "Account" && (
        <Accounts activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <Footer />
    </div>
  );
}
