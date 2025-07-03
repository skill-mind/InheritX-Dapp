import AdminStatCards from "./components/AdminStatCards";
import AdminQuickActions from "./components/AdminQuickActions";
import AdminRecentActivities from "./components/AdminRecentActivities";

export default function page() {
  return (
    <>
      <AdminStatCards />

      <AdminQuickActions />

      <AdminRecentActivities />
    </>
  );
}
