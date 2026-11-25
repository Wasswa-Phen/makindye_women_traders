import { useCallback, useEffect, useState } from "react";

const STAFF_HASH = "#staff";

/**
 * Manages whether the prototype Staff Portal view (`#staff`) is active,
 * keeping state synchronised with browser URL hash changes.
 */
export function useStaffPortalView() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(() => window.location.hash === STAFF_HASH);

  useEffect(() => {
    const handleHashChange = () => {
      setIsDashboardOpen(window.location.hash === STAFF_HASH);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openDashboard = useCallback(() => {
    setIsDashboardOpen(true);
    window.scrollTo(0, 0);
  }, []);

  const exitDashboard = useCallback(() => {
    setIsDashboardOpen(false);
    window.location.hash = "home";
  }, []);

  return {
    isDashboardOpen,
    openDashboard,
    exitDashboard,
  };
}
