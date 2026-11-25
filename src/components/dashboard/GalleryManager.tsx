import { type ChangeEvent, type FormEvent, useState } from "react";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import type { CmsPhotoItem, GalleryAlbum } from "@/types/content";
import { CloseIcon, GalleryIcon, PlusIcon, UploadIcon } from "./DashboardIcons";

interface GalleryManagerProps {
  albums: GalleryAlbum[];
  photos: CmsPhotoItem[];
  onAddAlbum: (album: GalleryAlbum) => void;
  onToggleAlbumStatus: (albumId: string) => void;
  onRequestDeleteAlbum: (album: GalleryAlbum) => void;
  onUploadPhotos: (newPhotos: CmsPhotoItem[]) => void;
  onUpdatePhoto: (photo: CmsPhotoItem) => void;
  onRequestDeletePhoto: (photo: CmsPhotoItem) => void;
}

export function GalleryManager({
  albums,
  photos,
  onAddAlbum,
  onToggleAlbumStatus,
  onRequestDeleteAlbum,
  onUploadPhotos,
  onUpdatePhoto,
  onRequestDeletePhoto,
}: GalleryManagerProps) {
  const [selectedAlbumId, setSelectedAlbumId] = useState<string>("all");
  const [uploadAlbumId, setUploadAlbumId] = useState<string>(albums[0]?.id ?? "");
  const [uploadCaption, setUploadCaption] = useState("");
  const [newAlbumOpen, setNewAlbumOpen] = useState(false);
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumDesc, setAlbumDesc] = useState("");
  const [editingPhoto, setEditingPhoto] = useState<CmsPhotoItem | null>(null);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEscapeKey(() => setEditingPhoto(null), editingPhoto !== null);
  useEscapeKey(() => setNewAlbumOpen(false), newAlbumOpen);

  function handleMultiFileSelect(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const validFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));
    if (validFiles.length === 0) {
      setFeedback({
        type: "error",
        text: "Selected files must be image formats (PNG, JPG, WebP).",
      });
      event.target.value = "";
      return;
    }

    const targetAlbum = uploadAlbumId || albums[0]?.id || "";
    if (!targetAlbum) {
      setFeedback({
        type: "error",
        text: "Please create an album before uploading photographs.",
      });
      event.target.value = "";
      return;
    }

    const targetAlbumStatus = albums.find((a) => a.id === targetAlbum)?.status ?? "Draft";

    const created: CmsPhotoItem[] = validFiles.map((file, idx) => {
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ");
      const captionText = uploadCaption.trim() || cleanName || "Community field photograph";
      return {
        id: `demo-upload-${Date.now()}-${idx}`,
        albumId: targetAlbum,
        src: URL.createObjectURL(file),
        filename: file.name,
        caption: captionText,
        alt: captionText,
        status: targetAlbumStatus,
      };
    });

    onUploadPhotos(created);
    setUploadCaption("");
    setFeedback({
      type: "success",
      text: `${created.length} photograph${created.length > 1 ? "s" : ""} added to demonstration media library.`,
    });
    event.target.value = "";
  }

  function handleCreateAlbum(event: FormEvent) {
    event.preventDefault();
    const cleanTitle = albumTitle.trim();
    if (!cleanTitle) {
      setFeedback({ type: "error", text: "Please enter an album title." });
      return;
    }
    const newAlbum: GalleryAlbum = {
      id: `album-${Date.now()}`,
      title: cleanTitle,
      description: albumDesc.trim() || "Community photography album curated for review.",
      status: "Draft",
      coverSrc: photos[0]?.src ?? "/images/hero/makindye-hero.webp",
    };
    onAddAlbum(newAlbum);
    setUploadAlbumId(newAlbum.id);
    setAlbumTitle("");
    setAlbumDesc("");
    setNewAlbumOpen(false);
    setFeedback({
      type: "success",
      text: `Album “${newAlbum.title}” created in Draft status.`,
    });
  }

  function handleSavePhotoEdit(event: FormEvent) {
    event.preventDefault();
    if (!editingPhoto) return;
    onUpdatePhoto({
      ...editingPhoto,
      caption: editingPhoto.caption.trim() || editingPhoto.filename,
      alt: editingPhoto.alt.trim() || editingPhoto.caption,
    });
    setFeedback({
      type: "success",
      text: "Photograph details updated in demonstration library.",
    });
    setEditingPhoto(null);
  }

  const visiblePhotos =
    selectedAlbumId === "all" ? photos : photos.filter((p) => p.albumId === selectedAlbumId);

  return (
    <div className="space-y-6">
      {feedback && (
        <div
          role={feedback.type === "error" ? "alert" : "status"}
          className={`flex flex-wrap items-center justify-between gap-3 rounded border px-4 py-3 text-sm ${
            feedback.type === "error"
              ? "border-red-300 bg-red-50 text-red-800"
              : "border-botanical/30 bg-soft-sage text-deep-forest"
          }`}
        >
          <span>{feedback.text}</span>
          <button
            type="button"
            onClick={() => setFeedback(null)}
            className="text-xs font-semibold underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Demonstration Multi-Photo Upload Section */}
      <section
        aria-label="Upload photographs"
        className="rounded-md border border-charcoal/10 bg-white p-4 sm:p-6"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-xl text-deep-forest">Upload Photographs</h2>
            <p className="mt-0.5 text-xs text-charcoal/70">
              Select one or multiple photos from your phone or computer (browser demonstration
              preview only).
            </p>
          </div>
          <button
            type="button"
            onClick={() => setNewAlbumOpen((prev) => !prev)}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded border border-deep-forest/25 bg-ivory px-3.5 text-xs font-bold uppercase tracking-wider text-deep-forest hover:bg-soft-sage"
          >
            <PlusIcon /> New Album
          </button>
        </div>

        {newAlbumOpen && (
          <form
            onSubmit={handleCreateAlbum}
            className="mt-4 grid gap-3 rounded border border-botanical/25 bg-ivory/80 p-4 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="new-album-title"
                className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
              >
                Album Name
              </label>
              <input
                id="new-album-title"
                required
                value={albumTitle}
                onChange={(e) => setAlbumTitle(e.target.value)}
                placeholder="e.g. Makindye Clean-Up Day"
                className="mt-1 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm text-charcoal focus:border-botanical focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="new-album-desc"
                className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
              >
                Short Description
              </label>
              <input
                id="new-album-desc"
                value={albumDesc}
                onChange={(e) => setAlbumDesc(e.target.value)}
                placeholder="Optional album summary"
                className="mt-1 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm text-charcoal focus:border-botanical focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2 sm:col-span-2 sm:justify-end">
              <button
                type="button"
                onClick={() => setNewAlbumOpen(false)}
                className="inline-flex min-h-11 items-center rounded border border-charcoal/20 bg-white px-4 text-xs font-semibold text-charcoal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center rounded bg-deep-forest px-4 text-xs font-bold uppercase tracking-wider text-white"
              >
                Create Album
              </button>
            </div>
          </form>
        )}

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
          <div>
            <label
              htmlFor="upload-album-select"
              className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
            >
              Target Album
            </label>
            <select
              id="upload-album-select"
              value={uploadAlbumId}
              onChange={(e) => setUploadAlbumId(e.target.value)}
              className="mt-1.5 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm text-charcoal focus:border-botanical focus:outline-none"
            >
              {albums.map((album) => (
                <option key={album.id} value={album.id}>
                  {album.title} ({album.status})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="upload-caption-input"
              className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
            >
              Default Caption (optional)
            </label>
            <input
              id="upload-caption-input"
              value={uploadCaption}
              onChange={(e) => setUploadCaption(e.target.value)}
              placeholder="e.g. Sorting collected plastics in Lukuli"
              className="mt-1.5 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3.5 text-sm text-charcoal focus:border-botanical focus:outline-none"
            />
          </div>

          <label className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded bg-deep-forest px-5 text-xs font-bold uppercase tracking-wider text-white hover:bg-botanical">
            <UploadIcon className="h-4 w-4 shrink-0" />
            <span>Select Photos</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleMultiFileSelect}
              className="sr-only"
            />
          </label>
        </div>
      </section>

      {/* Albums Overview */}
      <section aria-label="Gallery albums" className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-serif text-xl text-deep-forest">Gallery Albums ({albums.length})</h2>
          {selectedAlbumId !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedAlbumId("all")}
              className="min-h-10 text-xs font-semibold text-botanical underline"
            >
              Show all photographs
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {albums.map((album) => {
            const albumPhotos = photos.filter((p) => p.albumId === album.id);
            const cover = albumPhotos[0]?.src ?? album.coverSrc;
            const isSelected = selectedAlbumId === album.id;

            return (
              <article
                key={album.id}
                className={`flex flex-col overflow-hidden rounded-md border bg-white transition-colors ${
                  isSelected ? "border-deep-forest ring-1 ring-deep-forest" : "border-charcoal/10"
                }`}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-ivory">
                  <img
                    src={cover}
                    alt={album.title}
                    className="h-full w-full object-cover object-top"
                  />
                  <span
                    className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold shadow-xs ${
                      album.status === "Published"
                        ? "bg-soft-sage text-deep-forest"
                        : "bg-ivory text-charcoal"
                    }`}
                  >
                    {album.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg text-deep-forest">{album.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-charcoal/70">{album.description}</p>
                    <p className="mt-2 text-xs font-semibold text-botanical">
                      {albumPhotos.length} photograph
                      {albumPhotos.length === 1 ? "" : "s"}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-charcoal/10 pt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedAlbumId(isSelected ? "all" : album.id)}
                      className="inline-flex min-h-10 flex-1 items-center justify-center rounded border border-charcoal/20 px-2.5 text-xs font-semibold text-charcoal hover:bg-ivory"
                    >
                      {isSelected ? "Showing" : "Filter"}
                    </button>
                    <button
                      type="button"
                      onClick={() => onToggleAlbumStatus(album.id)}
                      className="inline-flex min-h-10 flex-1 items-center justify-center rounded bg-soft-sage px-2.5 text-xs font-semibold text-deep-forest hover:bg-soft-sage/80"
                    >
                      {album.status === "Published" ? "Set Draft" : "Publish"}
                    </button>
                    <button
                      type="button"
                      onClick={() => onRequestDeleteAlbum(album)}
                      className="inline-flex min-h-10 items-center justify-center rounded border border-red-200 px-3 text-xs font-semibold text-red-700 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Photograph Grid */}
      <section aria-label="Photographs" className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-serif text-xl text-deep-forest">
            Photographs ({visiblePhotos.length})
          </h2>
        </div>

        {visiblePhotos.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-charcoal/20 bg-white px-6 py-12 text-center">
            <GalleryIcon className="h-8 w-8 text-botanical" />
            <h3 className="mt-3 font-serif text-xl text-deep-forest">
              No photographs in this album yet
            </h3>
            <p className="mt-1 max-w-sm text-sm text-charcoal/70">
              Use the photo picker above to add community images to this album.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {visiblePhotos.map((photo) => {
              const albumName = albums.find((a) => a.id === photo.albumId)?.title ?? "Unassigned";
              return (
                <article
                  key={photo.id}
                  className="flex min-w-0 flex-col overflow-hidden rounded-md border border-charcoal/10 bg-white"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-ivory">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-3.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-botanical truncate">
                      {albumName}
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm font-medium text-deep-forest break-words">
                      {photo.caption}
                    </p>
                    <p className="mt-1 text-[11px] text-charcoal/55 break-all">{photo.filename}</p>
                    <div className="mt-auto flex gap-2 pt-3">
                      <button
                        type="button"
                        onClick={() => setEditingPhoto({ ...photo })}
                        className="inline-flex min-h-10 flex-1 items-center justify-center rounded border border-charcoal/20 px-2.5 text-xs font-semibold text-deep-forest hover:bg-ivory"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => onRequestDeletePhoto(photo)}
                        className="inline-flex min-h-10 flex-1 items-center justify-center rounded border border-red-200 px-2.5 text-xs font-semibold text-red-700 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Edit Photo Caption Dialog */}
      {editingPhoto && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center bg-charcoal/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Edit photograph details"
        >
          <form
            onSubmit={handleSavePhotoEdit}
            className="max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-md bg-ivory p-6 shadow-xl"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-serif text-2xl text-deep-forest">Edit Photograph</h3>
              <button
                type="button"
                onClick={() => setEditingPhoto(null)}
                aria-label="Close"
                className="inline-flex h-11 w-11 items-center justify-center rounded border border-charcoal/15"
              >
                <CloseIcon />
              </button>
            </div>
            <img
              src={editingPhoto.src}
              alt={editingPhoto.alt}
              className="mt-4 aspect-[16/10] w-full rounded object-cover object-top"
            />
            <div className="mt-4 space-y-3">
              <div>
                <label
                  htmlFor="edit-photo-caption"
                  className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                >
                  Caption
                </label>
                <input
                  id="edit-photo-caption"
                  required
                  value={editingPhoto.caption}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, caption: e.target.value })}
                  className="mt-1 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="edit-photo-alt"
                  className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                >
                  Accessibility Alt Text
                </label>
                <input
                  id="edit-photo-alt"
                  required
                  value={editingPhoto.alt}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, alt: e.target.value })}
                  className="mt-1 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="edit-photo-album"
                  className="block text-xs font-bold uppercase tracking-wider text-deep-forest"
                >
                  Album
                </label>
                <select
                  id="edit-photo-album"
                  value={editingPhoto.albumId}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, albumId: e.target.value })}
                  className="mt-1 min-h-11 w-full rounded border border-charcoal/25 bg-white px-3 text-sm"
                >
                  {albums.map((album) => (
                    <option key={album.id} value={album.id}>
                      {album.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setEditingPhoto(null)}
                className="inline-flex min-h-11 items-center justify-center rounded border border-charcoal/25 bg-white px-4 text-xs font-semibold uppercase tracking-wider"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded bg-deep-forest px-5 text-xs font-bold uppercase tracking-wider text-white"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
