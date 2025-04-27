import AdminStatCards from "./components/AdminStatCards";
import AdminQuickActions from "./components/AdminQuickActions";
import AdminRecentActivities from "./components/AdminRecentActivities";
import { DirectionAnimation } from "@/motion/Animation";

export default function page() {
  return (
    <>
      <AdminStatCards />

      <AdminQuickActions />

      <DirectionAnimation delay={0.4}>
        <AdminRecentActivities />
      </DirectionAnimation>
    </>
  );
}
