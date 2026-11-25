import type {
  ActivityLogItem,
  CmsArticle,
  CmsPhotoItem,
  GalleryAlbum,
  StaffRole,
  TeamMember,
} from "@/types/content";
import { galleryItems } from "./gallery";
import { newsArticles } from "./news";
import { photos } from "./photos";

export interface ImagePresetOption {
  label: string;
  src: string;
  alt: string;
}

export const imagePresetOptions: ImagePresetOption[] = [
  {
    label: "Women Community (Kampala)",
    src: photos.womenCommunity.webpSrc ?? photos.womenCommunity.src,
    alt: "Smiling Ugandan women in a Kampala community gathering",
  },
  {
    label: "Community Recycling Team",
    src: photos.womenRecycling.webpSrc ?? photos.womenRecycling.src,
    alt: "African women sorting recyclable plastic bottles in Kampala",
  },
  {
    label: "Tree Growing & Conservation",
    src: photos.treeGrowing.webpSrc ?? photos.treeGrowing.src,
    alt: "Ugandan women planting a young tree sapling together",
  },
  {
    label: "Women Empowerment Workshop",
    src: photos.womenLivelihoods.webpSrc ?? photos.womenLivelihoods.src,
    alt: "Women building practical sewing and crafts skills",
  },
  {
    label: "School Environmental Club",
    src: photos.schoolEnvironment.webpSrc ?? photos.schoolEnvironment.src,
    alt: "Ugandan students planting a tree sapling in school uniform",
  },
  {
    label: "Community Outreach",
    src: photos.communityOutreach.webpSrc ?? photos.communityOutreach.src,
    alt: "Women sharing tree seedlings during community outreach",
  },
];

export const initialCmsArticles: CmsArticle[] = newsArticles.map((article) => ({
  id: article.id,
  title: article.title,
  category: article.category,
  context: article.context,
  excerpt: article.excerpt,
  imageSrc: article.photo.webpSrc ?? article.photo.src,
  imageAlt: article.imageAlt,
  status: article.status === "Draft · Editor review" ? "Draft" : "Published",
  author: article.status === "Draft · Editor review" ? "Nansubuga Ritah" : "Namusoke Fatina",
  updatedNote: "Demo record · Pending client review",
}));

export const initialGalleryAlbums: GalleryAlbum[] = [
  {
    id: "album-kampala-action",
    title: "Makindye Community Action",
    description: "Community waste sorting, women-led stewardship and everyday neighbourhood care.",
    status: "Published",
    coverSrc: photos.hero.webpSrc ?? photos.hero.src,
  },
  {
    id: "album-tree-stewardship",
    title: "Tree Growing & Outreach",
    description:
      "Collaborative tree planting, seedling sharing and school environmental club concepts.",
    status: "Published",
    coverSrc: photos.treeGrowing.webpSrc ?? photos.treeGrowing.src,
  },
  {
    id: "album-skills-draft",
    title: "Skills & Livelihoods Drafts",
    description: "Work-in-progress album curated for upcoming empowerment stories.",
    status: "Draft",
    coverSrc: photos.womenLivelihoods.webpSrc ?? photos.womenLivelihoods.src,
  },
];

export const initialCmsPhotos: CmsPhotoItem[] = [
  ...galleryItems.map((item, idx) => ({
    id: item.id,
    albumId:
      idx === 1 || idx === 2 || idx === 4 ? "album-tree-stewardship" : "album-kampala-action",
    src: item.photo.webpSrc ?? item.photo.src,
    filename: `${item.id}-community-concept.webp`,
    caption: item.caption,
    alt: item.alt,
    status: "Published" as const,
  })),
  {
    id: "photo-livelihoods-draft",
    albumId: "album-skills-draft",
    src: photos.womenLivelihoods.webpSrc ?? photos.womenLivelihoods.src,
    filename: "women-empowerment-sewing-workshop-concept.webp",
    caption: "Practical sewing and crafts training concept",
    alt: "African women participating in a sewing workshop",
    status: "Draft",
  },
];

export const initialTeamMembers: TeamMember[] = [
  {
    id: "member-fatina",
    name: "Namusoke Fatina",
    initials: "NF",
    avatarSrc: "/images/leadership/fatina.jpg",
    title: "Founder & Chief Executive Officer",
    email: "founder@makindyewomentraders.org",
    role: "Administrator",
    active: true,
  },
  {
    id: "member-ritah",
    name: "Nansubuga Ritah",
    initials: "NR",
    avatarSrc: "/images/leadership/ritah.jpg",
    title: "Organisation Secretary",
    email: "secretary@makindyewomentraders.org",
    role: "Editor",
    active: true,
  },
  {
    id: "member-sylvia",
    name: "Namukasa Sylvia",
    initials: "NS",
    avatarSrc: "/images/leadership/sylvia.jpg",
    title: "Treasurer",
    email: "treasurer@makindyewomentraders.org",
    role: "Contributor",
    active: true,
  },
  {
    id: "member-joanitah",
    name: "Namara Joanitah",
    initials: "NJ",
    title: "Publicity Coordinator",
    email: "publicity@makindyewomentraders.org",
    role: "Contributor",
    active: true,
  },
];

export const initialActivityLog: ActivityLogItem[] = [
  {
    id: "act-1",
    action: "Updated draft summary",
    target: "Developing a women-led plastic & livelihoods framework",
    actor: "Nansubuga Ritah",
    tag: "Demo activity",
  },
  {
    id: "act-2",
    action: "Organised album concept",
    target: "Makindye Community Action (2 photos)",
    actor: "Namusoke Fatina",
    tag: "Demo activity",
  },
  {
    id: "act-3",
    action: "Prepared story preview",
    target: "200 trees planted through local collaboration in Makindye",
    actor: "Namusoke Fatina",
    tag: "Demo activity",
  },
];

export const roleDescriptions: Record<StaffRole, string> = {
  Administrator: "Full access to stories, media albums, publishing controls and team permissions.",
  Editor: "Create, review, edit and publish news stories and curated gallery albums.",
  Contributor: "Draft articles and upload photographs into staging albums for editorial review.",
};
