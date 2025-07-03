import React from "react";
import SupportStatCard from "../components/SupportStatCard";
import SupportQuickAction from "../components/SupportQuickAction";
import SupportSearchBar from "../components/SupportSearchBar";
import SupportTicket from "../components/SupportTicket";
import SupportFaqs from "../components/SupportFaqs";
import { DirectionAnimation } from "@/motion/Animation";

export default function support() {
  return (
    <>
      <SupportStatCard />

      <SupportQuickAction />

      <DirectionAnimation delay={0.6}>
        <SupportSearchBar />
      </DirectionAnimation>

      <DirectionAnimation delay={0.8}>
        {" "}
        <SupportTicket />
      </DirectionAnimation>

      <DirectionAnimation delay={1}>
        {" "}
        <SupportFaqs />
      </DirectionAnimation>
    </>
  );
}
