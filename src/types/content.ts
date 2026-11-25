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

export type ProgrammeStatus =
  | "Developing flagship initiative"
  | "Active collaboration"
  | "Ongoing activity"
  | "Planned / expanding";

export interface Programme {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  status: ProgrammeStatus;
  statusSummary: string;
  heroIntro: string;
  challenge: string;
  approach: string;
  keyActivities: string[];
  partnershipFocus: string;
  photo: PhotoAsset;
  imageAlt: string;
  imagePosition?: "top" | "center";
}

export interface ImpactStat {
  value: string;
  label: string;
  note: string;
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
  slug: string;
  category: string;
  context: string;
  title: string;
  photo: PhotoAsset;
  imageAlt: string;
  excerpt: string;
  bodyParagraphs: string[];
  status?: "Published concept" | "Draft · Editor review";
}

export interface Collaborator {
  id: string;
  name: string;
  location: string;
  subtitle: string;
  summary: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  biographyPrimary: string;
  biographySecondary: string;
  biographyExtended: string;
  photo: PhotoAsset;
  imageAlt: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  photoSrc: string | null;
  photoAlt: string;
}

export interface CoreValue {
  number: string;
  title: string;
  description: string;
}

export interface ApproachPillar {
  title: string;
  description: string;
}

export interface ContactDetails {
  email: string;
  phoneDisplay: string;
  phoneHref: string;
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
  aboutPreview: string;
  missionTitle: string;
  missionBody: string;
  visionTitle: string;
  visionBody: string;
  flagshipTitlePrefix: string;
  flagshipTitleHighlight: string;
  flagshipDescription: string;
  flagshipCalloutTitle: string;
  flagshipCalloutBody: string;
  footerMission: string;
  reviewNotice: string;
  contact: ContactDetails;
}

export type DashboardTab = "overview" | "news" | "gallery" | "team";

export type StaffRole = "Administrator" | "Editor" | "Contributor";

export type CmsPublishStatus = "Published" | "Draft";

export interface CmsArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  context: string;
  excerpt: string;
  bodyParagraphs: string[];
  imageSrc: string;
  imageAlt: string;
  status: CmsPublishStatus;
  author: string;
  updatedNote: string;
}

export interface GalleryAlbum {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  status: CmsPublishStatus;
  coverSrc: string;
  isIllustrative: boolean;
}

export interface CmsPhotoItem {
  id: string;
  albumId: string;
  src: string;
  filename: string;
  caption: string;
  alt: string;
  status: CmsPublishStatus;
  isIllustrative?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  avatarSrc?: string;
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
