import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { LeafMark } from "@/components/ui/LeafMark";
import { SafeImage } from "@/components/ui/SafeImage";
import { newsArticles } from "@/data/news";
import {
  dashboardAccessRoles,
  dashboardNavItems,
  dashboardQuickActions,
  dashboardStats,
} from "@/data/organisation";

interface StaffDashboardPageProps {
  onExit: () => void;
}

export function StaffDashboardPage({ onExit }: StaffDashboardPageProps) {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <main className="dashboard-login">
        <button
          type="button"
          onClick={onExit}
          className="absolute left-6 top-6 flex min-h-11 items-center gap-2 text-sm text-deep-forest"
        >
          <Arrow direction="left" /> Return to website
        </button>
        <div className="w-full max-w-md">
          <LeafMark />
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-botanical">
            Staff portal prototype
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-deep-forest">Welcome back.</h1>
          <p className="mt-4 leading-7 text-charcoal/70">
            Manage stories, gallery albums and the organisation’s public content.
          </p>
          <form
            className="mt-9 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              setLoggedIn(true);
            }}
          >
            <label className="dashboard-field">
              Email address
              <input required type="email" defaultValue="founder@makindyewomentraders.org" />
            </label>
            <label className="dashboard-field">
              Password
              <input required type="password" defaultValue="prototype" />
            </label>
            <div className="flex items-center justify-between text-sm">
              <label className="flex min-h-10 items-center gap-2">
                <input type="checkbox" /> Keep me signed in
              </label>
              <a href="#staff" className="text-botanical underline">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="button button-dark w-full justify-center">
              Sign in securely <Arrow />
            </button>
          </form>
          <p className="mt-6 text-xs leading-5 text-charcoal/65">
            Interactive concept only. Production access will use server-side authentication and
            role-based permissions.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <aside>
        <LeafMark light />
        <nav aria-label="Staff workspace navigation">
          {dashboardNavItems.map((item, index) => (
            <button type="button" className={index === 0 ? "active" : ""} key={item}>
              {item}
              <span>›</span>
            </button>
          ))}
        </nav>
        <button
          type="button"
          onClick={onExit}
          className="mt-auto inline-flex min-h-11 items-center text-left text-sm text-white/80 hover:text-white"
        >
          ← View public website
        </button>
      </aside>
      <section className="dashboard-main">
        <header>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-botanical">
              Organisation workspace concept
            </p>
            <h1>Good morning, Fatina.</h1>
          </div>
          <div className="avatar" aria-label="Namusoke Fatina">
            NF
          </div>
        </header>
        <div className="dashboard-banner">
          <div>
            <p>Complete your organisation profile</p>
            <span>
              Supply approved photography and verify reported impact figures before public launch.
            </span>
          </div>
          <button type="button">Review details</button>
        </div>
        <div className="dashboard-stats">
          {dashboardStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-panel">
            <div className="panel-head">
              <h2>Recent content</h2>
              <button type="button">View all</button>
            </div>
            {newsArticles.map((item) => (
              <div className="content-row" key={item.id}>
                <SafeImage asset={item.photo} alt={item.imageAlt} />
                <div>
                  <strong>{item.title}</strong>
                  <span>
                    {item.status ?? "Concept"} · {item.context}
                  </span>
                </div>
                <button type="button" aria-label={`More actions for ${item.title}`}>
                  •••
                </button>
              </div>
            ))}
          </div>
          <div className="dashboard-panel quick-actions">
            <div className="panel-head">
              <h2>Quick actions</h2>
            </div>
            {dashboardQuickActions.map((action) => (
              <button type="button" key={action.title}>
                <span>{action.icon}</span>
                <div>
                  <strong>{action.title}</strong>
                  <small>{action.description}</small>
                </div>
              </button>
            ))}
            <div className="roles">
              <p>Planned access roles</p>
              {dashboardAccessRoles.map((entry) => (
                <span key={entry.role}>
                  {entry.role} · {entry.holder}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
