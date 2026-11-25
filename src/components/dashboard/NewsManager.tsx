import { type ChangeEvent, type FormEvent, useState } from "react";
import { imagePresetOptions } from "@/data/dashboard";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import type { CmsArticle, CmsPublishStatus } from "@/types/content";
import { CloseIcon, NewsIcon, PlusIcon } from "./DashboardIcons";

interface NewsManagerProps {
  articles: CmsArticle[];
  onSaveArticle: (article: CmsArticle, isNew: boolean) => void;
  onToggleStatus: (id: string) => void;
  onRequestDelete: (article: CmsArticle) => void;
  initialCreateOpen?: boolean;
  onClearCreateTrigger?: () => void;
}

type StatusFilter = "All" | CmsPublishStatus;

export function NewsManager({
  articles,
  onSaveArticle,
  onToggleStatus,
  onRequestDelete,
  initialCreateOpen = false,
  onClearCreateTrigger,
}: NewsManagerProps) {
  const [filter, setFilter] = useState<StatusFilter>("All");
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<CmsArticle | null>(
    initialCreateOpen
      ? {
          id: "",
          title: "",
          category: "Field Notes",
          context: "Makindye Division · Draft",
          excerpt: "",
          imageSrc: imagePresetOptions[0].src,
          imageAlt: imagePresetOptions[0].alt,
          status: "Draft",
          author: "Namusoke Fatina",
          updatedNote: "Just added · Demonstration entry",
        }
      : null,
  );
  const [isNewMode, setIsNewMode] = useState(initialCreateOpen);
  const [previewArticle, setPreviewArticle] = useState<CmsArticle | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEscapeKey(() => setPreviewArticle(null), previewArticle !== null);
  useEscapeKey(() => closeEditor(), editing !== null);

  function openNewEditor() {
    setErrorMsg(null);
    setIsNewMode(true);
    setEditing({
      id: "",
      title: "",
      category: "Field Notes",
      context: "Makindye Division · Draft",
      excerpt: "",
      imageSrc: imagePresetOptions[0].src,
      imageAlt: imagePresetOptions[0].alt,
      status: "Draft",
      author: "Namusoke Fatina",
      updatedNote: "Just added · Demonstration entry",
    });
  }

  function openEditEditor(article: CmsArticle) {
    setErrorMsg(null);
    setIsNewMode(false);
    setEditing({ ...article });
  }

  function closeEditor() {
    setEditing(null);
    setErrorMsg(null);
    onClearCreateTrigger?.();
  }

  function handleLocalImagePick(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file || !editing) return;
    if (!file.type.startsWith("image/")) {
      setErrorMsg("Please choose a valid image file (PNG, JPG or WebP).");
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setErrorMsg(null);
    setEditing({
      ...editing,
      imageSrc: objectUrl,
      imageAlt: editing.imageAlt || `Featured photograph: ${file.name}`,
    });
  }

  function submitEditor(targetStatus: CmsPublishStatus, event?: FormEvent) {
    event?.preventDefault();
    if (!editing) return;
    const trimmedTitle = editing.title.trim();
    const trimmedExcerpt = editing.excerpt.trim();
    if (!trimmedTitle || !trimmedExcerpt) {
      setErrorMsg("Please enter both a story headline and a short summary.");
      return;
    }

    const saved: CmsArticle = {
      ...editing,
      id: editing.id || `story-${Date.now()}`,
      title: trimmedTitle,
      excerpt: trimmedExcerpt,
      category: editing.category.trim() || "Updates",
      context: editing.context.trim() || "Makindye, Kampala",
      status: targetStatus,
      updatedNote:
        targetStatus === "Published"
          ? "Published in demo workspace"
          : "Saved as draft in demo workspace",
    };

    onSaveArticle(saved, isNewMode);
    setFeedback(
      targetStatus === "Published"
        ? `Story “${saved.title}” published to demonstration view.`
        : `Draft “${saved.title}” saved.`,
    );
    closeEditor();
  }

  const filtered = articles.filter((item) => {
    const matchesStatus = filter === "All" || item.status === filter;
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.context.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

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

      {/* Controls Bar */}
      <div className="flex flex-col gap-3 rounded-md border border-charcoal/10 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {(["All", "Published", "Draft"] as StatusFilter[]).map((tab) => {
            const count =
              tab === "All" ? articles.length : articles.filter((a) => a.status === tab).length;
            const active = filter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`inline-flex min-h-10 items-center gap-1.5 rounded px-3.5 text-xs font-semibold transition-colors ${
                  active
                    ? "bg-deep-forest text-white"
                    : "bg-ivory text-charcoal/80 hover:bg-soft-sage"
                }`}
              >
                <span>{tab}</span>
                <span className="opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <label className="sr-only" htmlFor="news-search-input">
            Search articles
          </label>
          <input
            id="news-search-input"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stories..."
            className="min-h-11 w-full rounded border border-charcoal/20 bg-ivory/60 px-3.5 text-sm text-charcoal placeholder:text-charcoal/50 focus:border-botanical focus:outline-none sm:w-56"
          />
          <button
            type="button"
            onClick={openNewEditor}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded bg-deep-forest px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-botanical"
          >
            <PlusIcon /> Create Article
          </button>
        </div>
      </div>

      {/* Article Editor Panel */}
      {editing && (
        <section
          aria-label={isNewMode ? "Create new article" : "Edit article"}
          className="rounded-md border border-botanical/30 bg-white p-4 shadow-sm sm:p-6"
        >
          <div className="flex items-center justify-between gap-3 border-b border-charcoal/10 pb-4">
            <h2 className="font-serif text-2xl text-deep-forest">
              {isNewMode ? "New Story Draft" : "Edit Story"}
            </h2>
            <button
              type="button"
              onClick={closeEditor}
              aria-label="Close editor"
              className="inline-flex h-11 w-11 items-center justify-center rounded border border-charcoal/15 text-charcoal hover:bg-ivory"
            >
              <CloseIcon />
            </button>
          </div>

          {errorMsg && (
            <p
              role="alert"
              className="mt-4 rounded border border-red-300 bg-red-50 px-4 py-2.5 text-sm text-red-800"
            >
              {errorMsg}
            </p>
          )}

          <form
            onSubmit={(e) => submitEditor(editing.status, e)}
            className="mt-5 grid gap-6 lg:grid-cols-[1.3fr_.7fr]"
          >
            <div className="min-w-0 space-y-4">
              <div>
                <label
                  htmlFor="article-title"
                  className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                >
                  Headline
                </label>
                <input
                  id="article-title"
                  required
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  placeholder="Enter a clear, descriptive story headline"
                  className="mt-1.5 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3.5 text-sm text-charcoal focus:border-botanical focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="article-category"
                    className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                  >
                    Category
                  </label>
                  <input
                    id="article-category"
                    value={editing.category}
                    onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                    placeholder="e.g. Conservation, Outreach"
                    className="mt-1.5 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3.5 text-sm text-charcoal focus:border-botanical focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="article-context"
                    className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                  >
                    Location / Context
                  </label>
                  <input
                    id="article-context"
                    value={editing.context}
                    onChange={(e) => setEditing({ ...editing, context: e.target.value })}
                    placeholder="e.g. Makindye Division"
                    className="mt-1.5 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3.5 text-sm text-charcoal focus:border-botanical focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="article-excerpt"
                  className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                >
                  Summary / Editorial Copy
                </label>
                <textarea
                  id="article-excerpt"
                  required
                  rows={4}
                  value={editing.excerpt}
                  onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                  placeholder="Write factual summary details for readers..."
                  className="mt-1.5 w-full rounded border border-charcoal/25 bg-white p-3.5 text-sm leading-6 text-charcoal focus:border-botanical focus:outline-none"
                />
              </div>
            </div>

            <div className="min-w-0 space-y-4">
              <div>
                <label
                  htmlFor="article-preset"
                  className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                >
                  Featured Photograph
                </label>
                <select
                  id="article-preset"
                  value={editing.imageSrc}
                  onChange={(e) => {
                    const matched = imagePresetOptions.find((o) => o.src === e.target.value);
                    setEditing({
                      ...editing,
                      imageSrc: e.target.value,
                      imageAlt: matched?.alt ?? editing.imageAlt,
                    });
                  }}
                  className="mt-1.5 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm text-charcoal focus:border-botanical focus:outline-none"
                >
                  {imagePresetOptions.map((opt) => (
                    <option key={opt.src} value={opt.src}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="overflow-hidden rounded border border-charcoal/15 bg-ivory">
                <img
                  src={editing.imageSrc}
                  alt={editing.imageAlt}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>

              <label className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded border border-dashed border-botanical/60 bg-soft-sage/40 px-3 text-xs font-semibold text-deep-forest hover:bg-soft-sage">
                <span>Upload Local Photo Preview</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLocalImagePick}
                  className="sr-only"
                />
              </label>

              <div>
                <label
                  htmlFor="article-alt"
                  className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                >
                  Image Alt Description
                </label>
                <input
                  id="article-alt"
                  value={editing.imageAlt}
                  onChange={(e) => setEditing({ ...editing, imageAlt: e.target.value })}
                  placeholder="Describe the photograph for screen readers"
                  className="mt-1.5 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3.5 text-sm text-charcoal focus:border-botanical focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-2.5 border-t border-charcoal/10 pt-4 sm:flex-row sm:items-center sm:justify-between lg:col-span-2">
              <button
                type="button"
                onClick={closeEditor}
                className="inline-flex min-h-11 items-center justify-center rounded border border-charcoal/25 px-4 text-xs font-semibold uppercase tracking-wider text-charcoal hover:bg-ivory"
              >
                Cancel
              </button>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setPreviewArticle(editing)}
                  className="inline-flex min-h-11 items-center justify-center rounded border border-deep-forest px-4 text-xs font-semibold uppercase tracking-wider text-deep-forest hover:bg-soft-sage"
                >
                  Preview
                </button>
                <button
                  type="button"
                  onClick={() => submitEditor("Draft")}
                  className="inline-flex min-h-11 items-center justify-center rounded bg-soft-sage px-4 text-xs font-bold uppercase tracking-wider text-deep-forest hover:bg-soft-sage/80"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  onClick={() => submitEditor("Published")}
                  className="inline-flex min-h-11 items-center justify-center rounded bg-deep-forest px-5 text-xs font-bold uppercase tracking-wider text-white hover:bg-botanical"
                >
                  Publish
                </button>
              </div>
            </div>
          </form>
        </section>
      )}

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-charcoal/20 bg-white px-6 py-12 text-center">
          <NewsIcon className="h-8 w-8 text-botanical" />
          <h3 className="mt-3 font-serif text-xl text-deep-forest">No matching stories found</h3>
          <p className="mt-1 max-w-sm text-sm text-charcoal/70">
            Adjust your filter or create a new story draft for review.
          </p>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto rounded-md border border-charcoal/10 bg-white lg:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-charcoal/10 bg-ivory/70 text-[11px] font-bold uppercase tracking-wider text-charcoal/70">
                  <th className="px-4 py-3.5">Story</th>
                  <th className="px-4 py-3.5">Status</th>
                  <th className="px-4 py-3.5">Context</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-ivory/40">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="h-14 w-20 shrink-0 rounded object-cover object-top"
                        />
                        <div className="min-w-0 max-w-md">
                          <p className="font-semibold text-deep-forest">{item.title}</p>
                          <p className="mt-0.5 text-xs text-charcoal/65">
                            {item.category} · {item.author}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 align-middle">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                          item.status === "Published"
                            ? "bg-soft-sage text-deep-forest"
                            : "bg-earth-gold/25 text-charcoal"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-charcoal/75">{item.context}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex flex-wrap justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setPreviewArticle(item)}
                          className="inline-flex min-h-9 items-center rounded border border-charcoal/20 px-2.5 text-xs font-semibold text-charcoal hover:bg-ivory"
                        >
                          Preview
                        </button>
                        <button
                          type="button"
                          onClick={() => openEditEditor(item)}
                          className="inline-flex min-h-9 items-center rounded border border-charcoal/20 px-2.5 text-xs font-semibold text-deep-forest hover:bg-soft-sage/50"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => onToggleStatus(item.id)}
                          className="inline-flex min-h-9 items-center rounded bg-soft-sage px-2.5 text-xs font-semibold text-deep-forest hover:bg-soft-sage/75"
                        >
                          {item.status === "Published" ? "Move to Draft" : "Publish"}
                        </button>
                        <button
                          type="button"
                          onClick={() => onRequestDelete(item)}
                          className="inline-flex min-h-9 items-center rounded border border-red-200 px-2.5 text-xs font-semibold text-red-700 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Article Cards */}
          <div className="grid min-w-0 gap-4 lg:hidden">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-md border border-charcoal/10 bg-white"
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
                <div className="space-y-3 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-botanical">
                      {item.category}
                    </span>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        item.status === "Published"
                          ? "bg-soft-sage text-deep-forest"
                          : "bg-earth-gold/25 text-charcoal"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug text-deep-forest">{item.title}</h3>
                  <p className="text-xs text-charcoal/70">
                    {item.context} · {item.author}
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setPreviewArticle(item)}
                      className="inline-flex min-h-11 items-center justify-center rounded border border-charcoal/20 px-3 text-xs font-semibold text-charcoal"
                    >
                      Preview
                    </button>
                    <button
                      type="button"
                      onClick={() => openEditEditor(item)}
                      className="inline-flex min-h-11 items-center justify-center rounded border border-charcoal/20 px-3 text-xs font-semibold text-deep-forest"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onToggleStatus(item.id)}
                      className="inline-flex min-h-11 items-center justify-center rounded bg-soft-sage px-3 text-xs font-semibold text-deep-forest"
                    >
                      {item.status === "Published" ? "Save Draft" : "Publish"}
                    </button>
                    <button
                      type="button"
                      onClick={() => onRequestDelete(item)}
                      className="inline-flex min-h-11 items-center justify-center rounded border border-red-200 px-3 text-xs font-semibold text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {/* Article Preview Modal */}
      {previewArticle && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center bg-charcoal/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview: ${previewArticle.title}`}
        >
          <div className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-md bg-ivory shadow-2xl">
            <div className="relative">
              <img
                src={previewArticle.imageSrc}
                alt={previewArticle.imageAlt}
                className="aspect-[16/9] w-full object-cover object-top"
              />
              <button
                type="button"
                onClick={() => setPreviewArticle(null)}
                aria-label="Close preview"
                className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory/95 text-deep-forest shadow"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-botanical">
                <span>{previewArticle.category}</span>
                <span>·</span>
                <span>{previewArticle.context}</span>
                <span className="ml-auto rounded-full bg-soft-sage px-2.5 py-0.5 text-[11px] text-deep-forest">
                  {previewArticle.status}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-deep-forest">
                {previewArticle.title}
              </h3>
              <p className="mt-4 leading-7 text-charcoal/85">{previewArticle.excerpt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
