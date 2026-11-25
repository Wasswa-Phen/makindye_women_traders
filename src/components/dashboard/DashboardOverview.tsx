import type {
  ActivityLogItem,
  CmsArticle,
  CmsPhotoItem,
  DashboardTab,
  GalleryAlbum,
} from "@/types/content";
import { GalleryIcon, NewsIcon, PlusIcon, TeamIcon, UploadIcon } from "./DashboardIcons";

interface DashboardOverviewProps {
  userName: string;
  articles: CmsArticle[];
  albums: GalleryAlbum[];
  photos: CmsPhotoItem[];
  activities: ActivityLogItem[];
  onNavigate: (tab: DashboardTab) => void;
  onQuickCreateArticle: () => void;
}

export function DashboardOverview({
  userName,
  articles,
  albums,
  photos,
  activities,
  onNavigate,
  onQuickCreateArticle,
}: DashboardOverviewProps) {
  const firstName = userName.split(/\s+/)[0] || userName;
  const publishedNewsCount = articles.filter((a) => a.status === "Published").length;
  const draftNewsCount = articles.filter((a) => a.status === "Draft").length;

  const stats = [
    {
      label: "Published news",
      value: publishedNewsCount,
      note: "Demo articles ready",
      Icon: NewsIcon,
      tab: "news" as DashboardTab,
    },
    {
      label: "Draft articles",
      value: draftNewsCount,
      note: "Awaiting review",
      Icon: NewsIcon,
      tab: "news" as DashboardTab,
    },
    {
      label: "Gallery albums",
      value: albums.length,
      note: "Curated collections",
      Icon: GalleryIcon,
      tab: "gallery" as DashboardTab,
    },
    {
      label: "Uploaded photos",
      value: photos.length,
      note: "Concept & demo media",
      Icon: UploadIcon,
      tab: "gallery" as DashboardTab,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <section className="flex flex-col gap-4 rounded-md border border-botanical/20 bg-white p-5 lg:flex-row lg:items-center lg:justify-between sm:p-6">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-botanical">
            Content Management Prototype · Demonstration Data
          </p>
          <h2 className="mt-1 font-serif text-2xl text-deep-forest sm:text-3xl">
            Welcome back, {firstName}.
          </h2>
          <p className="mt-1 text-sm text-charcoal/75">
            Prepare news stories, curate field photography albums and review team access before
            publishing.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 sm:shrink-0">
          <button
            type="button"
            onClick={onQuickCreateArticle}
            className="inline-flex min-h-11 items-center gap-2 rounded bg-deep-forest px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-botanical"
          >
            <PlusIcon /> New Story
          </button>
          <button
            type="button"
            onClick={() => onNavigate("gallery")}
            className="inline-flex min-h-11 items-center gap-2 rounded border border-deep-forest/25 bg-ivory px-4 text-xs font-bold uppercase tracking-wider text-deep-forest hover:bg-soft-sage"
          >
            <UploadIcon className="h-4 w-4" /> Upload Photos
          </button>
        </div>
      </section>

      {/* Compact Responsive Statistic Cards (1 col @320px, 2 col @360px+, 4 col @1280px+) */}
      <section
        aria-label="Workspace statistics"
        className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map(({ label, value, note, Icon, tab }) => (
          <button
            key={label}
            type="button"
            onClick={() => onNavigate(tab)}
            className="flex min-w-0 flex-col justify-between rounded-md border border-charcoal/10 bg-white p-4 text-left transition-colors hover:border-botanical/40 hover:bg-ivory/40 sm:p-5"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">
                {label}
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-soft-sage text-deep-forest">
                <Icon className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-3">
              <strong className="block font-serif text-3xl font-normal text-deep-forest sm:text-4xl">
                {value}
              </strong>
              <span className="mt-0.5 block text-xs text-charcoal/60">{note}</span>
            </div>
          </button>
        ))}
      </section>

      {/* Main Content Split */}
      <div className="grid gap-6 lg:grid-cols-[1.45fr_.85fr]">
        {/* Recent Stories */}
        <section
          aria-label="Recent stories"
          className="min-w-0 rounded-md border border-charcoal/10 bg-white p-4 sm:p-6"
        >
          <div className="flex items-center justify-between gap-3 border-b border-charcoal/10 pb-3">
            <h3 className="font-serif text-xl text-deep-forest">Stories &amp; Drafts</h3>
            <button
              type="button"
              onClick={() => onNavigate("news")}
              className="min-h-10 text-xs font-semibold uppercase tracking-wider text-botanical hover:text-deep-forest"
            >
              Manage all →
            </button>
          </div>
          <div className="divide-y divide-charcoal/10">
            {articles.slice(0, 4).map((article) => (
              <div key={article.id} className="flex items-center gap-3.5 py-3.5">
                <img
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  className="h-14 w-16 shrink-0 rounded object-cover object-top sm:w-20"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-deep-forest">{article.title}</p>
                  <p className="mt-0.5 truncate text-xs text-charcoal/65">
                    {article.category} · {article.context}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    article.status === "Published"
                      ? "bg-soft-sage text-deep-forest"
                      : "bg-earth-gold/25 text-charcoal"
                  }`}
                >
                  {article.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions & Recent Activity */}
        <div className="min-w-0 space-y-6">
          <section
            aria-label="Quick actions"
            className="rounded-md border border-charcoal/10 bg-white p-4 sm:p-6"
          >
            <h3 className="border-b border-charcoal/10 pb-3 font-serif text-xl text-deep-forest">
              Quick Actions
            </h3>
            <div className="mt-3 space-y-2.5">
              <button
                type="button"
                onClick={onQuickCreateArticle}
                className="flex min-h-12 w-full items-center gap-3 rounded border border-charcoal/10 bg-ivory/60 px-3.5 py-2.5 text-left hover:border-botanical/40 hover:bg-soft-sage/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-deep-forest text-white">
                  <PlusIcon />
                </span>
                <div className="min-w-0">
                  <strong className="block text-sm font-semibold text-deep-forest">
                    Create a News Story
                  </strong>
                  <span className="block text-xs text-charcoal/65">
                    Draft, preview or publish updates
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate("gallery")}
                className="flex min-h-12 w-full items-center gap-3 rounded border border-charcoal/10 bg-ivory/60 px-3.5 py-2.5 text-left hover:border-botanical/40 hover:bg-soft-sage/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-botanical text-white">
                  <UploadIcon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <strong className="block text-sm font-semibold text-deep-forest">
                    Upload Field Photographs
                  </strong>
                  <span className="block text-xs text-charcoal/65">
                    Add photos and organise albums
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate("team")}
                className="flex min-h-12 w-full items-center gap-3 rounded border border-charcoal/10 bg-ivory/60 px-3.5 py-2.5 text-left hover:border-botanical/40 hover:bg-soft-sage/50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-earth-gold text-deep-forest">
                  <TeamIcon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <strong className="block text-sm font-semibold text-deep-forest">
                    Review Team &amp; Roles
                  </strong>
                  <span className="block text-xs text-charcoal/65">
                    Administrator, Editor &amp; Contributor access
                  </span>
                </div>
              </button>
            </div>
          </section>

          <section
            aria-label="Recent activity"
            className="rounded-md border border-charcoal/10 bg-white p-4 sm:p-6"
          >
            <div className="flex items-center justify-between gap-2 border-b border-charcoal/10 pb-3">
              <h3 className="font-serif text-xl text-deep-forest">Recent Activity</h3>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal/55">
                Demo log
              </span>
            </div>
            <ul className="mt-3 space-y-3">
              {activities.slice(0, 5).map((item) => (
                <li key={item.id} className="border-l-2 border-earth-gold pl-3 text-xs">
                  <p className="font-semibold text-deep-forest">{item.action}</p>
                  <p className="mt-0.5 text-charcoal/75 break-words">{item.target}</p>
                  <p className="mt-0.5 text-[11px] text-charcoal/55">
                    {item.actor} · {item.tag}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
