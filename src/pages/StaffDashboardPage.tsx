import { useState } from "react";
import { ConfirmDialog } from "@/components/dashboard/ConfirmDialog";
import { ExternalIcon, LogoutIcon, MenuIcon } from "@/components/dashboard/DashboardIcons";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { GalleryManager } from "@/components/dashboard/GalleryManager";
import { NewsManager } from "@/components/dashboard/NewsManager";
import { TeamProfileManager } from "@/components/dashboard/TeamProfileManager";
import { Arrow } from "@/components/ui/Arrow";
import { LeafMark } from "@/components/ui/LeafMark";
import {
  initialActivityLog,
  initialCmsArticles,
  initialCmsPhotos,
  initialGalleryAlbums,
  initialTeamMembers,
} from "@/data/dashboard";
import type {
  ActivityLogItem,
  CmsArticle,
  CmsPhotoItem,
  DashboardTab,
  GalleryAlbum,
  StaffRole,
  TeamMember,
} from "@/types/content";

interface StaffDashboardPageProps {
  onExit: () => void;
}

type PendingConfirm =
  | { type: "article"; item: CmsArticle }
  | { type: "album"; item: GalleryAlbum }
  | { type: "photo"; item: CmsPhotoItem }
  | null;

const tabTitles: Record<DashboardTab, string> = {
  overview: "Dashboard Overview",
  news: "News & Stories",
  gallery: "Gallery & Media",
  team: "Team & Profile",
};

export function StaffDashboardPage({ onExit }: StaffDashboardPageProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<DashboardTab>("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [createArticleTrigger, setCreateArticleTrigger] = useState(false);

  const [articles, setArticles] = useState<CmsArticle[]>(initialCmsArticles);
  const [albums, setAlbums] = useState<GalleryAlbum[]>(initialGalleryAlbums);
  const [photos, setPhotos] = useState<CmsPhotoItem[]>(initialCmsPhotos);
  const [members, setMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [activities, setActivities] = useState<ActivityLogItem[]>(initialActivityLog);
  const [pendingConfirm, setPendingConfirm] = useState<PendingConfirm>(null);

  const currentUser = members[0] ?? initialTeamMembers[0];

  function logDemoActivity(action: string, target: string) {
    setActivities((prev) => [
      {
        id: `act-${Date.now()}`,
        action,
        target,
        actor: currentUser.name,
        tag: "Demo session",
      },
      ...prev,
    ]);
  }

  function handleSaveArticle(saved: CmsArticle, isNew: boolean) {
    setArticles((prev) =>
      isNew ? [saved, ...prev] : prev.map((a) => (a.id === saved.id ? saved : a)),
    );
    logDemoActivity(isNew ? "Created story draft" : `Updated story (${saved.status})`, saved.title);
  }

  function handleToggleArticleStatus(id: string) {
    setArticles((prev) =>
      prev.map((a) => {
        if (a.id !== id) return a;
        const nextStatus = a.status === "Published" ? "Draft" : "Published";
        logDemoActivity(`Marked story ${nextStatus}`, a.title);
        return { ...a, status: nextStatus };
      }),
    );
  }

  function handleAddAlbum(album: GalleryAlbum) {
    setAlbums((prev) => [album, ...prev]);
    logDemoActivity("Created gallery album", album.title);
  }

  function handleToggleAlbumStatus(albumId: string) {
    setAlbums((prev) =>
      prev.map((a) => {
        if (a.id !== albumId) return a;
        const nextStatus = a.status === "Published" ? "Draft" : "Published";
        logDemoActivity(`Marked album ${nextStatus}`, a.title);
        return { ...a, status: nextStatus };
      }),
    );
  }

  function handleUploadPhotos(newPhotos: CmsPhotoItem[]) {
    setPhotos((prev) => [...newPhotos, ...prev]);
    logDemoActivity(
      `Uploaded ${newPhotos.length} demonstration photo${newPhotos.length > 1 ? "s" : ""}`,
      newPhotos[0]?.caption ?? "Media library",
    );
  }

  function handleUpdatePhoto(updated: CmsPhotoItem) {
    setPhotos((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    logDemoActivity("Updated photo caption", updated.caption);
  }

  function handleChangeMemberRole(memberId: string, role: StaffRole) {
    setMembers((prev) => prev.map((m) => (m.id === memberId ? { ...m, role } : m)));
  }

  function handleToggleMemberActive(memberId: string) {
    setMembers((prev) => prev.map((m) => (m.id === memberId ? { ...m, active: !m.active } : m)));
  }

  function handleAddMember(member: TeamMember) {
    setMembers((prev) => [...prev, member]);
    logDemoActivity(`Added team member (${member.role})`, member.name);
  }

  function handleConfirmDelete() {
    if (!pendingConfirm) return;
    if (pendingConfirm.type === "article") {
      setArticles((prev) => prev.filter((a) => a.id !== pendingConfirm.item.id));
      logDemoActivity("Removed demo story", pendingConfirm.item.title);
    } else if (pendingConfirm.type === "album") {
      const targetId = pendingConfirm.item.id;
      setAlbums((prev) => prev.filter((a) => a.id !== targetId));
      setPhotos((prev) => prev.filter((p) => p.albumId !== targetId));
      logDemoActivity("Removed demo album", pendingConfirm.item.title);
    } else if (pendingConfirm.type === "photo") {
      setPhotos((prev) => prev.filter((p) => p.id !== pendingConfirm.item.id));
      logDemoActivity("Removed demo photograph", pendingConfirm.item.caption);
    }
    setPendingConfirm(null);
  }

  if (!loggedIn) {
    return (
      <main className="min-h-dvh bg-ivory lg:grid lg:grid-cols-[1.1fr_.9fr]">
        <div className="flex flex-col justify-between p-5 sm:p-10 lg:p-14">
          <div className="flex items-center justify-between gap-4">
            <LeafMark />
            <button
              type="button"
              onClick={onExit}
              className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-wider text-deep-forest hover:text-botanical"
            >
              <Arrow direction="left" /> Return to Website
            </button>
          </div>

          <div className="mx-auto my-10 w-full max-w-md lg:my-auto">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
              Staff Portal Prototype
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-deep-forest sm:text-5xl">
              Content workspace.
            </h1>
            <p className="mt-3 text-sm leading-6 text-charcoal/75 sm:text-base">
              Manage stories, field gallery albums and organisation content.
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setLoggedIn(true);
              }}
            >
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                >
                  Email address
                </label>
                <input
                  id="login-email"
                  required
                  type="email"
                  defaultValue="founder@makindyewomentraders.org"
                  className="mt-1.5 min-h-12 w-full rounded border border-charcoal/25 bg-white px-4 text-sm text-charcoal focus:border-botanical focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  required
                  type="password"
                  defaultValue="prototype"
                  className="mt-1.5 min-h-12 w-full rounded border border-charcoal/25 bg-white px-4 text-sm text-charcoal focus:border-botanical focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <label className="flex min-h-11 items-center gap-2 text-charcoal/80">
                  <input type="checkbox" className="h-4 w-4 accent-botanical" />
                  <span>Keep me signed in</span>
                </label>
                <span className="text-xs text-botanical">Demo sign-in enabled</span>
              </div>

              <button type="submit" className="button button-dark w-full justify-center rounded">
                Sign in to Workspace <Arrow />
              </button>
            </form>

            <p className="mt-5 rounded border border-charcoal/10 bg-soft-sage/50 px-3.5 py-2.5 text-xs leading-5 text-deep-forest/85">
              Client-review prototype only. No real authentication or database storage is connected
              yet.
            </p>
          </div>

          <p className="text-xs text-charcoal/60">
            Makindye Women Traders · Makindye Division, Kampala
          </p>
        </div>

        <div className="hidden bg-deep-forest p-14 text-ivory lg:flex lg:flex-col lg:justify-between">
          <div className="ml-auto rounded-full border border-white/20 px-3.5 py-1 text-xs uppercase tracking-widest text-soft-sage">
            CMS Preview
          </div>
          <div className="max-w-md space-y-4">
            <p className="font-serif text-3xl leading-snug text-ivory">
              “Loving nature through women ensures continuity in transformation.”
            </p>
            <p className="text-sm leading-6 text-soft-sage/85">
              Built for community leaders, secretaries and contributors to publish updates and field
              photography with ease across phone, tablet and desktop.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 border-t border-white/15 pt-6 text-xs text-soft-sage/85">
            <div>
              <strong className="block text-sm text-earth-gold">Administrator</strong>
              Founder
            </div>
            <div>
              <strong className="block text-sm text-earth-gold">Editor</strong>
              Secretary
            </div>
            <div>
              <strong className="block text-sm text-earth-gold">Contributor</strong>
              Members
            </div>
          </div>
        </div>
      </main>
    );
  }

  const draftCount = articles.filter((a) => a.status === "Draft").length;

  return (
    <div className="flex min-h-dvh bg-[#f5f4ef] text-charcoal">
      <DashboardSidebar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          if (tab !== "news") setCreateArticleTrigger(false);
        }}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
        onExit={onExit}
        onLogout={() => {
          setLoggedIn(false);
          setActiveTab("overview");
        }}
        currentUser={currentUser}
        draftCount={draftCount}
        albumCount={albums.length}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Compact Sticky Top Bar */}
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between gap-3 border-b border-charcoal/10 bg-white px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="dashboard-mobile-drawer"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded border border-charcoal/20 text-deep-forest hover:bg-ivory md:hidden"
            >
              <MenuIcon />
            </button>
            <div className="min-w-0">
              <h1 className="truncate font-serif text-xl text-deep-forest sm:text-2xl">
                {tabTitles[activeTab]}
              </h1>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <span className="hidden rounded-full bg-soft-sage px-3 py-1 text-[11px] font-semibold text-deep-forest xl:inline-flex">
              Review Prototype
            </span>
            <button
              type="button"
              onClick={onExit}
              className="hidden min-h-10 items-center gap-1.5 rounded border border-charcoal/20 px-3 text-xs font-semibold text-deep-forest hover:bg-ivory lg:inline-flex"
            >
              <ExternalIcon className="h-3.5 w-3.5" /> Website
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("team")}
              aria-label={`Profile: ${currentUser.name} (${currentUser.role})`}
              className="flex min-h-11 items-center gap-2.5 rounded-full border border-charcoal/10 bg-ivory/80 py-1 pl-1 pr-1 lg:pr-3 hover:bg-soft-sage/60"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deep-forest text-xs font-bold text-white">
                {currentUser.initials}
              </span>
              <span className="hidden text-left lg:block">
                <strong className="block text-xs leading-tight text-deep-forest">
                  {currentUser.name}
                </strong>
                <span className="block text-[10px] leading-tight text-botanical">
                  {currentUser.role}
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setLoggedIn(false)}
              aria-label="Log out"
              className="hidden min-h-10 items-center gap-1.5 rounded bg-deep-forest px-3 text-xs font-semibold text-white hover:bg-botanical md:inline-flex"
            >
              <LogoutIcon className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">Log out</span>
            </button>
          </div>
        </header>

        {/* Main Workspace Container */}
        <main className="mx-auto w-full max-w-[1380px] min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {activeTab === "overview" && (
            <DashboardOverview
              userName={currentUser.name}
              articles={articles}
              albums={albums}
              photos={photos}
              activities={activities}
              onNavigate={(tab) => setActiveTab(tab)}
              onQuickCreateArticle={() => {
                setCreateArticleTrigger(true);
                setActiveTab("news");
              }}
            />
          )}

          {activeTab === "news" && (
            <NewsManager
              articles={articles}
              onSaveArticle={handleSaveArticle}
              onToggleStatus={handleToggleArticleStatus}
              onRequestDelete={(item) => setPendingConfirm({ type: "article", item })}
              initialCreateOpen={createArticleTrigger}
              onClearCreateTrigger={() => setCreateArticleTrigger(false)}
            />
          )}

          {activeTab === "gallery" && (
            <GalleryManager
              albums={albums}
              photos={photos}
              onAddAlbum={handleAddAlbum}
              onToggleAlbumStatus={handleToggleAlbumStatus}
              onRequestDeleteAlbum={(item) => setPendingConfirm({ type: "album", item })}
              onUploadPhotos={handleUploadPhotos}
              onUpdatePhoto={handleUpdatePhoto}
              onRequestDeletePhoto={(item) => setPendingConfirm({ type: "photo", item })}
            />
          )}

          {activeTab === "team" && (
            <TeamProfileManager
              currentUser={currentUser}
              members={members}
              onChangeRole={handleChangeMemberRole}
              onToggleActive={handleToggleMemberActive}
              onAddMember={handleAddMember}
              onExit={onExit}
              onLogout={() => {
                setLoggedIn(false);
                setActiveTab("overview");
              }}
            />
          )}
        </main>
      </div>

      <ConfirmDialog
        open={pendingConfirm !== null}
        title={
          pendingConfirm?.type === "article"
            ? "Delete Story?"
            : pendingConfirm?.type === "album"
              ? "Delete Album?"
              : "Delete Photograph?"
        }
        message={
          pendingConfirm?.type === "article"
            ? `Remove “${pendingConfirm.item.title}” from the demonstration workspace?`
            : pendingConfirm?.type === "album"
              ? `Remove album “${pendingConfirm.item.title}” and its associated demo photographs?`
              : pendingConfirm?.type === "photo"
                ? `Remove “${pendingConfirm.item.caption}” from the demonstration media library?`
                : ""
        }
        onConfirm={handleConfirmDelete}
        onCancel={() => setPendingConfirm(null)}
      />
    </div>
  );
}
