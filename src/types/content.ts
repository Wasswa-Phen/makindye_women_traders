export interface NavItem {
  label: string;
  href: string;
}

export interface PhotoAsset {
  src: string;
  webpSrc?: string;
  fallbackSrc: string;
  sourceNote: string;
  approvalStatus: "approved-local-concept" | "illustrative-remote" | "neutral-placeholder";
}

export interface Programme {
  id: string;
  number: string;
  title: string;
  description: string;
  photo: PhotoAsset;
  imageAlt: string;
  imagePosition?: "top" | "center";
}

export interface ImpactStat {
  value: string;
  label: string;
  note: string;
  featuredSpan?: boolean;
}

export interface GalleryItem {
  id: string;
  photo: PhotoAsset;
  caption: string;
  alt: string;
  imagePosition?: "top" | "center";
}

export interface NewsArticle {
  id: string;
  category: string;
  context: string;
  title: string;
  photo: PhotoAsset;
  imageAlt: string;
  excerpt: string;
  status?: "Published concept" | "Draft · Editor review";
}

export interface Collaborator {
  id: string;
  name: string;
  subtitle: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  biographyPrimary: string;
  biographySecondary: string;
  photo: PhotoAsset;
  imageAlt: string;
  imageLabel: string;
}

export interface ContactDetails {
  email: string;
  phoneDisplay: string;
  whatsappUrl: string;
  location: string;
  registrationNote: string;
}

export interface OrganisationInfo {
  name: string;
  shortName: string;
  domain: string;
  tagline: string;
  officialTheme: string;
  heroTitlePrefix: string;
  heroTitleHighlight: string;
  heroTitleSuffix: string;
  heroDescription: string;
  aboutLead: string;
  aboutBody: string;
  flagshipTitlePrefix: string;
  flagshipTitleHighlight: string;
  flagshipDescription: string;
  flagshipCalloutTitle: string;
  flagshipCalloutBody: string;
  footerMission: string;
  reviewNotice: string;
  contact: ContactDetails;
}

export interface DashboardStat {
  value: string;
  label: string;
}

export interface QuickActionItem {
  icon: string;
  title: string;
  description: string;
}

export interface AccessRole {
  role: string;
  holder: string;
}

export type DashboardTab = "overview" | "news" | "gallery" | "team";

export type StaffRole = "Administrator" | "Editor" | "Contributor";

export type CmsPublishStatus = "Published" | "Draft";

export interface CmsArticle {
  id: string;
  title: string;
  category: string;
  context: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  status: CmsPublishStatus;
  author: string;
  updatedNote: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  description: string;
  status: CmsPublishStatus;
  coverSrc: string;
}

export interface CmsPhotoItem {
  id: string;
  albumId: string;
  src: string;
  filename: string;
  caption: string;
  alt: string;
  status: CmsPublishStatus;
}

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  title: string;
  email: string;
  role: StaffRole;
  active: boolean;
}

export interface ActivityLogItem {
  id: string;
  action: string;
  target: string;
  actor: string;
  tag: string;
}
