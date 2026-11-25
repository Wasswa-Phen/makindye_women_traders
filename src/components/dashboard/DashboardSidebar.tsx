import { useEffect, useRef } from "react";
import { LeafMark } from "@/components/ui/LeafMark";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import type { DashboardTab, TeamMember } from "@/types/content";
import {
  CloseIcon,
  CollapseIcon,
  ExternalIcon,
  GalleryIcon,
  LogoutIcon,
  NewsIcon,
  OverviewIcon,
  TeamIcon,
} from "./DashboardIcons";

interface NavItemConfig {
  id: DashboardTab;
  label: string;
  badge?: number;
  Icon: typeof OverviewIcon;
}

interface DashboardSidebarProps {
  activeTab: DashboardTab;
  onSelectTab: (tab: DashboardTab) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  onExit: () => void;
  onLogout: () => void;
  currentUser: TeamMember;
  draftCount: number;
  albumCount: number;
}

export function DashboardSidebar({
  activeTab,
  onSelectTab,
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
  onExit,
  onLogout,
  currentUser,
  draftCount,
  albumCount,
}: DashboardSidebarProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEscapeKey(onCloseMobile, mobileOpen);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  const navItems: NavItemConfig[] = [
    { id: "overview", label: "Overview", Icon: OverviewIcon },
    { id: "news", label: "News & Stories", badge: draftCount, Icon: NewsIcon },
    {
      id: "gallery",
      label: "Gallery & Media",
      badge: albumCount,
      Icon: GalleryIcon,
    },
    { id: "team", label: "Team & Profile", Icon: TeamIcon },
  ];

  const handleMobileSelect = (tab: DashboardTab) => {
    onSelectTab(tab);
    onCloseMobile();
  };

  return (
    <>
      {/* Tablet & Desktop Sticky Sidebar */}
      <aside
        aria-label="Dashboard navigation"
        className={`hidden md:flex md:sticky md:top-0 md:h-dvh md:shrink-0 md:flex-col bg-deep-forest text-ivory border-r border-white/10 transition-[width] duration-200 ${
          collapsed ? "md:w-20" : "md:w-56 lg:w-64"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-2 border-b border-white/10 px-4">
          {!collapsed ? (
            <div className="min-w-0">
              <LeafMark light />
            </div>
          ) : (
            <span className="mx-auto text-sm font-bold tracking-wider text-earth-gold">MWT</span>
          )}
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-white/20 text-soft-sage hover:bg-white/10 hover:text-white"
          >
            <CollapseIcon
              className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <nav className="flex-1 space-y-1.5 overflow-y-auto px-3 py-5">
          {navItems.map(({ id, label, badge, Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelectTab(id)}
                aria-current={isActive ? "page" : undefined}
                title={collapsed ? label : undefined}
                className={`flex min-h-11 w-full items-center gap-3 rounded px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/15 text-white shadow-xs"
                    : "text-soft-sage/80 hover:bg-white/10 hover:text-white"
                } ${collapsed ? "justify-center px-2" : ""}`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && (
                  <>
                    <span className="min-w-0 flex-1 truncate">{label}</span>
                    {typeof badge === "number" && badge > 0 && (
                      <span className="rounded-full bg-earth-gold/20 px-2 py-0.5 text-[11px] font-semibold text-earth-gold">
                        {badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        <div className="space-y-1.5 border-t border-white/10 p-3">
          {!collapsed && (
            <div className="mb-2 flex items-center gap-2.5 rounded bg-white/5 px-3 py-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-earth-gold text-xs font-bold text-deep-forest">
                {currentUser.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-white">{currentUser.name}</p>
                <p className="truncate text-[11px] text-soft-sage/80">{currentUser.role}</p>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={onExit}
            title={collapsed ? "Return to Website" : undefined}
            className={`flex min-h-11 w-full items-center gap-3 rounded px-3 py-2 text-left text-xs font-medium text-soft-sage hover:bg-white/10 hover:text-white ${
              collapsed ? "justify-center px-2" : ""
            }`}
          >
            <ExternalIcon className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Return to Website</span>}
          </button>
          <button
            type="button"
            onClick={onLogout}
            title={collapsed ? "Log out" : undefined}
            className={`flex min-h-11 w-full items-center gap-3 rounded px-3 py-2 text-left text-xs font-medium text-soft-sage/85 hover:bg-white/10 hover:text-white ${
              collapsed ? "justify-center px-2" : ""
            }`}
          >
            <LogoutIcon className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Full-Viewport Drawer */}
      <div
        id="dashboard-mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Staff portal navigation"
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-60 flex h-dvh flex-col bg-deep-forest text-ivory transition-all duration-200 md:hidden ${
          mobileOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/15 px-4">
          <LeafMark light />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onCloseMobile}
            tabIndex={mobileOpen ? 0 : -1}
            aria-label="Close navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/30 text-ivory hover:bg-white/10"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile workspace links">
          <p className="mb-3 px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-earth-gold">
            Workspace
          </p>
          <ul className="space-y-1.5">
            {navItems.map(({ id, label, badge, Icon }) => {
              const isActive = activeTab === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleMobileSelect(id)}
                    tabIndex={mobileOpen ? 0 : -1}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-12 w-full items-center gap-3.5 rounded px-3.5 py-3 text-left text-base font-medium transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-soft-sage hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="min-w-0 flex-1">{label}</span>
                    {typeof badge === "number" && badge > 0 && (
                      <span className="rounded-full bg-earth-gold/25 px-2.5 py-0.5 text-xs font-semibold text-earth-gold">
                        {badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-white/15 bg-black/15 px-4 py-5">
          <div className="flex items-center gap-3 px-1">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-earth-gold text-xs font-bold text-deep-forest">
              {currentUser.initials}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{currentUser.name}</p>
              <p className="truncate text-xs text-soft-sage/85">
                {currentUser.role} · {currentUser.title}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
            <button
              type="button"
              onClick={() => {
                onCloseMobile();
                onExit();
              }}
              tabIndex={mobileOpen ? 0 : -1}
              className="flex min-h-11 items-center justify-center gap-2 rounded border border-white/30 px-3 text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-white/10"
            >
              <ExternalIcon /> Return to Website
            </button>
            <button
              type="button"
              onClick={() => {
                onCloseMobile();
                onLogout();
              }}
              tabIndex={mobileOpen ? 0 : -1}
              className="flex min-h-11 items-center justify-center gap-2 rounded bg-earth-gold px-3 text-xs font-bold uppercase tracking-wider text-deep-forest hover:bg-earth-gold/90"
            >
              <LogoutIcon /> Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
