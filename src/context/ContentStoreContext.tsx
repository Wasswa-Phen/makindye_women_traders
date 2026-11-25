import { createContext, type ReactNode, useCallback, useContext, useState } from "react";
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
  GalleryAlbum,
  StaffRole,
  TeamMember,
} from "@/types/content";

interface ContentStoreValue {
  articles: CmsArticle[];
  publishedArticles: CmsArticle[];
  albums: GalleryAlbum[];
  publishedAlbums: GalleryAlbum[];
  photos: CmsPhotoItem[];
  publishedPhotos: CmsPhotoItem[];
  members: TeamMember[];
  activities: ActivityLogItem[];
  currentUser: TeamMember;
  saveArticle: (article: CmsArticle, isNew: boolean) => void;
  toggleArticleStatus: (id: string) => void;
  deleteArticle: (id: string) => void;
  addAlbum: (album: GalleryAlbum) => void;
  toggleAlbumStatus: (albumId: string) => void;
  deleteAlbum: (albumId: string) => void;
  uploadPhotos: (newPhotos: CmsPhotoItem[]) => void;
  updatePhoto: (photo: CmsPhotoItem) => void;
  deletePhoto: (photoId: string) => void;
  changeMemberRole: (memberId: string, role: StaffRole) => void;
  toggleMemberActive: (memberId: string) => void;
  addMember: (member: TeamMember) => void;
}

const ContentStoreContext = createContext<ContentStoreValue | null>(null);

export function ContentStoreProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<CmsArticle[]>(initialCmsArticles);
  const [albums, setAlbums] = useState<GalleryAlbum[]>(initialGalleryAlbums);
  const [photos, setPhotos] = useState<CmsPhotoItem[]>(initialCmsPhotos);
  const [members, setMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [activities, setActivities] = useState<ActivityLogItem[]>(initialActivityLog);

  const currentUser = members[0] ?? initialTeamMembers[0];

  const logDemoActivity = useCallback(
    (action: string, target: string) => {
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
    },
    [currentUser.name],
  );

  const saveArticle = useCallback(
    (saved: CmsArticle, isNew: boolean) => {
      setArticles((prev) =>
        isNew ? [saved, ...prev] : prev.map((a) => (a.id === saved.id ? saved : a)),
      );
      logDemoActivity(
        isNew ? "Created story draft" : `Updated story (${saved.status})`,
        saved.title,
      );
    },
    [logDemoActivity],
  );

  const toggleArticleStatus = useCallback(
    (id: string) => {
      setArticles((prev) =>
        prev.map((a) => {
          if (a.id !== id) return a;
          const nextStatus = a.status === "Published" ? "Draft" : "Published";
          logDemoActivity(`Marked story ${nextStatus}`, a.title);
          return { ...a, status: nextStatus };
        }),
      );
    },
    [logDemoActivity],
  );

  const deleteArticle = useCallback(
    (id: string) => {
      setArticles((prev) => {
        const target = prev.find((a) => a.id === id);
        if (target) logDemoActivity("Removed demo story", target.title);
        return prev.filter((a) => a.id !== id);
      });
    },
    [logDemoActivity],
  );

  const addAlbum = useCallback(
    (album: GalleryAlbum) => {
      setAlbums((prev) => [album, ...prev]);
      logDemoActivity("Created gallery album", album.title);
    },
    [logDemoActivity],
  );

  const toggleAlbumStatus = useCallback(
    (albumId: string) => {
      setAlbums((prev) =>
        prev.map((a) => {
          if (a.id !== albumId) return a;
          const nextStatus = a.status === "Published" ? "Draft" : "Published";
          logDemoActivity(`Marked album ${nextStatus}`, a.title);
          return { ...a, status: nextStatus };
        }),
      );
    },
    [logDemoActivity],
  );

  const deleteAlbum = useCallback(
    (albumId: string) => {
      setAlbums((prev) => {
        const target = prev.find((a) => a.id === albumId);
        if (target) logDemoActivity("Removed demo album", target.title);
        return prev.filter((a) => a.id !== albumId);
      });
      setPhotos((prev) => prev.filter((p) => p.albumId !== albumId));
    },
    [logDemoActivity],
  );

  const uploadPhotos = useCallback(
    (newPhotos: CmsPhotoItem[]) => {
      setPhotos((prev) => [...newPhotos, ...prev]);
      logDemoActivity(
        `Uploaded ${newPhotos.length} demonstration photo${newPhotos.length > 1 ? "s" : ""}`,
        newPhotos[0]?.caption ?? "Media library",
      );
    },
    [logDemoActivity],
  );

  const updatePhoto = useCallback(
    (updated: CmsPhotoItem) => {
      setPhotos((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
      logDemoActivity("Updated photo caption", updated.caption);
    },
    [logDemoActivity],
  );

  const deletePhoto = useCallback(
    (photoId: string) => {
      setPhotos((prev) => {
        const target = prev.find((p) => p.id === photoId);
        if (target) logDemoActivity("Removed demo photograph", target.caption);
        return prev.filter((p) => p.id !== photoId);
      });
    },
    [logDemoActivity],
  );

  const changeMemberRole = useCallback((memberId: string, role: StaffRole) => {
    setMembers((prev) => prev.map((m) => (m.id === memberId ? { ...m, role } : m)));
  }, []);

  const toggleMemberActive = useCallback((memberId: string) => {
    setMembers((prev) => prev.map((m) => (m.id === memberId ? { ...m, active: !m.active } : m)));
  }, []);

  const addMember = useCallback(
    (member: TeamMember) => {
      setMembers((prev) => [...prev, member]);
      logDemoActivity(`Added team member (${member.role})`, member.name);
    },
    [logDemoActivity],
  );

  const publishedArticles = articles.filter((a) => a.status === "Published");
  const publishedAlbums = albums.filter((a) => a.status === "Published");
  const publishedAlbumIds = new Set(publishedAlbums.map((a) => a.id));
  const publishedPhotos = photos.filter(
    (p) => p.status === "Published" && publishedAlbumIds.has(p.albumId),
  );

  return (
    <ContentStoreContext.Provider
      value={{
        articles,
        publishedArticles,
        albums,
        publishedAlbums,
        photos,
        publishedPhotos,
        members,
        activities,
        currentUser,
        saveArticle,
        toggleArticleStatus,
        deleteArticle,
        addAlbum,
        toggleAlbumStatus,
        deleteAlbum,
        uploadPhotos,
        updatePhoto,
        deletePhoto,
        changeMemberRole,
        toggleMemberActive,
        addMember,
      }}
    >
      {children}
    </ContentStoreContext.Provider>
  );
}

export function useContentStore(): ContentStoreValue {
  const ctx = useContext(ContentStoreContext);
  if (!ctx) {
    throw new Error("useContentStore must be used inside a ContentStoreProvider");
  }
  return ctx;
}
