import { type FormEvent, useState } from "react";
import { roleDescriptions } from "@/data/dashboard";
import type { StaffRole, TeamMember } from "@/types/content";
import { ExternalIcon, LogoutIcon, PlusIcon } from "./DashboardIcons";

interface TeamProfileManagerProps {
  currentUser: TeamMember;
  members: TeamMember[];
  onChangeRole: (memberId: string, role: StaffRole) => void;
  onToggleActive: (memberId: string) => void;
  onAddMember: (member: TeamMember) => void;
  onExit: () => void;
  onLogout: () => void;
}

const roleBadgeStyles: Record<StaffRole, string> = {
  Administrator: "bg-deep-forest text-white",
  Editor: "bg-botanical text-white",
  Contributor: "bg-earth-gold/30 text-deep-forest",
};

export function TeamProfileManager({
  currentUser,
  members,
  onChangeRole,
  onToggleActive,
  onAddMember,
  onExit,
  onLogout,
}: TeamProfileManagerProps) {
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<StaffRole>("Contributor");
  const [feedback, setFeedback] = useState<string | null>(null);

  function handleAddSubmit(event: FormEvent) {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    if (!cleanName || !cleanEmail) return;

    const parts = cleanName.split(/\s+/);
    const initials = parts
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase() ?? "")
      .join("");

    onAddMember({
      id: `member-${Date.now()}`,
      name: cleanName,
      initials: initials || "MT",
      title: title.trim() || "Team Member",
      email: cleanEmail,
      role,
      active: true,
    });
    setFeedback(`Added ${cleanName} (${role}) to demonstration team directory.`);
    setName("");
    setTitle("");
    setEmail("");
    setRole("Contributor");
    setShowAdd(false);
  }

  return (
    <div className="space-y-6">
      {feedback && (
        <div
          role="status"
          className="flex flex-wrap items-center justify-between gap-3 rounded border border-botanical/30 bg-soft-sage px-4 py-3 text-sm text-deep-forest"
        >
          <span>{feedback}</span>
          <button
            type="button"
            onClick={() => setFeedback(null)}
            className="text-xs font-semibold underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Signed-in Profile Card */}
      <section
        aria-label="My profile"
        className="rounded-md border border-charcoal/10 bg-white p-5 sm:p-6"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            {currentUser.avatarSrc ? (
              <img
                src={currentUser.avatarSrc}
                alt={currentUser.name}
                className="h-14 w-14 shrink-0 rounded-full border border-charcoal/15 object-cover object-top"
              />
            ) : (
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-deep-forest font-serif text-lg text-white">
                {currentUser.initials}
              </span>
            )}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-serif text-2xl text-deep-forest">{currentUser.name}</h2>
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${roleBadgeStyles[currentUser.role]}`}
                >
                  {currentUser.role}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-charcoal/75">{currentUser.title}</p>
              <p className="mt-0.5 text-xs text-charcoal/60 break-all">{currentUser.email}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row sm:shrink-0">
            <button
              type="button"
              onClick={onExit}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded border border-charcoal/20 bg-ivory px-4 text-xs font-semibold uppercase tracking-wider text-deep-forest hover:bg-soft-sage"
            >
              <ExternalIcon /> Return to Website
            </button>
            <button
              type="button"
              onClick={onLogout}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded bg-deep-forest px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-botanical"
            >
              <LogoutIcon /> Log out
            </button>
          </div>
        </div>
      </section>

      {/* Role Permissions Guide */}
      <section aria-label="Role permissions" className="grid gap-3 md:grid-cols-3">
        {(["Administrator", "Editor", "Contributor"] as StaffRole[]).map((roleName) => (
          <div key={roleName} className="rounded-md border border-charcoal/10 bg-ivory p-4">
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${roleBadgeStyles[roleName]}`}
            >
              {roleName}
            </span>
            <p className="mt-2.5 text-xs leading-5 text-charcoal/75">
              {roleDescriptions[roleName]}
            </p>
          </div>
        ))}
      </section>

      {/* Team Members Directory */}
      <section
        aria-label="Team members"
        className="min-w-0 space-y-4 rounded-md border border-charcoal/10 bg-white p-4 sm:p-6"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-xl text-deep-forest">
              Team Directory ({members.length})
            </h2>
            <p className="text-xs text-charcoal/65">
              Demonstration access roles — production permissions will be enforced server-side.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAdd((prev) => !prev)}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded bg-deep-forest px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-botanical"
          >
            <PlusIcon /> Add Member
          </button>
        </div>

        {showAdd && (
          <form
            onSubmit={handleAddSubmit}
            className="grid gap-3 rounded border border-botanical/25 bg-ivory/75 p-4 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="member-name"
                className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
              >
                Full Name
              </label>
              <input
                id="member-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Member full name"
                className="mt-1 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="member-title"
                className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
              >
                Position / Title
              </label>
              <input
                id="member-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Programme Coordinator"
                className="mt-1 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="member-email"
                className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
              >
                Email Address
              </label>
              <input
                id="member-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@makindyewomentraders.org"
                className="mt-1 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="member-role"
                className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
              >
                Portal Role
              </label>
              <select
                id="member-role"
                value={role}
                onChange={(e) => setRole(e.target.value as StaffRole)}
                className="mt-1 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm"
              >
                <option value="Administrator">Administrator</option>
                <option value="Editor">Editor</option>
                <option value="Contributor">Contributor</option>
              </select>
            </div>
            <div className="flex flex-wrap justify-end gap-2 sm:col-span-2">
              <button
                type="button"
                onClick={() => setShowAdd(false)}
                className="inline-flex min-h-11 items-center rounded border border-charcoal/25 bg-white px-4 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center rounded bg-deep-forest px-4 text-xs font-bold uppercase tracking-wider text-white"
              >
                Save Member
              </button>
            </div>
          </form>
        )}

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-charcoal/10 text-[11px] font-bold uppercase tracking-wider text-charcoal/65">
                <th className="py-3 pr-4">Member</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="py-3 pl-4 text-right">Manage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/10">
              {members.map((member) => (
                <tr key={member.id}>
                  <td className="py-3.5 pr-4">
                    <div className="flex items-center gap-3">
                      {member.avatarSrc ? (
                        <img
                          src={member.avatarSrc}
                          alt={member.name}
                          className="h-9 w-9 shrink-0 rounded-full border border-charcoal/15 object-cover object-top"
                        />
                      ) : (
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-soft-sage text-xs font-bold text-deep-forest">
                          {member.initials}
                        </span>
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold text-deep-forest">{member.name}</p>
                        <p className="text-xs text-charcoal/65">
                          {member.title} · {member.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${roleBadgeStyles[member.role]}`}
                    >
                      {member.role}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`text-xs font-semibold ${
                        member.active ? "text-botanical" : "text-charcoal/50"
                      }`}
                    >
                      {member.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-3.5 pl-4">
                    <div className="flex items-center justify-end gap-2">
                      <label className="sr-only" htmlFor={`role-${member.id}`}>
                        Role for {member.name}
                      </label>
                      <select
                        id={`role-${member.id}`}
                        value={member.role}
                        onChange={(e) => onChangeRole(member.id, e.target.value as StaffRole)}
                        className="min-h-9 rounded border border-charcoal/20 bg-white px-2 text-xs text-charcoal"
                      >
                        <option value="Administrator">Administrator</option>
                        <option value="Editor">Editor</option>
                        <option value="Contributor">Contributor</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => onToggleActive(member.id)}
                        className="inline-flex min-h-9 items-center rounded border border-charcoal/20 px-2.5 text-xs font-semibold text-charcoal hover:bg-ivory"
                      >
                        {member.active ? "Deactivate" : "Activate"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Member Cards */}
        <div className="grid min-w-0 gap-3 lg:hidden">
          {members.map((member) => (
            <article
              key={member.id}
              className="min-w-0 space-y-3 rounded border border-charcoal/12 bg-ivory/40 p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-3">
                  {member.avatarSrc ? (
                    <img
                      src={member.avatarSrc}
                      alt={member.name}
                      className="h-10 w-10 shrink-0 rounded-full border border-charcoal/15 object-cover object-top"
                    />
                  ) : (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soft-sage text-xs font-bold text-deep-forest">
                      {member.initials}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold text-deep-forest break-words">{member.name}</p>
                    <p className="text-xs text-charcoal/70">{member.title}</p>
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${roleBadgeStyles[member.role]}`}
                >
                  {member.role}
                </span>
              </div>
              <p className="text-xs text-charcoal/65 break-all">{member.email}</p>
              <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                <select
                  aria-label={`Change role for ${member.name}`}
                  value={member.role}
                  onChange={(e) => onChangeRole(member.id, e.target.value as StaffRole)}
                  className="min-h-11 w-full rounded border border-charcoal/20 bg-white px-3 text-xs font-semibold text-charcoal"
                >
                  <option value="Administrator">Administrator</option>
                  <option value="Editor">Editor</option>
                  <option value="Contributor">Contributor</option>
                </select>
                <button
                  type="button"
                  onClick={() => onToggleActive(member.id)}
                  className="inline-flex min-h-11 items-center justify-center rounded border border-charcoal/20 bg-white px-3 text-xs font-semibold text-charcoal"
                >
                  {member.active ? "Active · Deactivate" : "Inactive · Activate"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
