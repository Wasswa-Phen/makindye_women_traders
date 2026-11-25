import { useStaffPortalView } from "@/hooks/useStaffPortalView";
import { HomePage } from "@/pages/HomePage";
import { StaffDashboardPage } from "@/pages/StaffDashboardPage";

export default function App() {
  const { isDashboardOpen, openDashboard, exitDashboard } = useStaffPortalView();

  if (isDashboardOpen) {
    return <StaffDashboardPage onExit={exitDashboard} />;
  }

  return <HomePage onOpenDashboard={openDashboard} />;
}
