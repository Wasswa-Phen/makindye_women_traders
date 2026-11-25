import type {
  ActivityLogItem,
  CmsArticle,
  CmsPhotoItem,
  GalleryAlbum,
  StaffRole,
  TeamMember,
} from "@/types/content";
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

export const initialCmsArticles: CmsArticle[] = newsArticles.map((article, idx) => ({
  id: article.id,
  slug: article.slug,
  title: article.title,
  category: article.category,
  context: article.context,
  excerpt: article.excerpt,
  bodyParagraphs: article.bodyParagraphs,
  imageSrc: article.photo.webpSrc ?? article.photo.src,
  imageAlt: article.imageAlt,
  status: idx === 2 ? "Published" : "Published",
  author: idx === 2 ? "Nansubuga Ritah" : "Namusoke Fatina",
  updatedNote: "Demo record · Client review",
}));

export const initialGalleryAlbums: GalleryAlbum[] = [
  {
    id: "album-kampala-action",
    slug: "makindye-community-action",
    title: "Makindye Community Action",
    category: "Recycling & Community",
    description:
      "Illustrative concept scenes of women-led plastic sorting, leadership and neighbourhood solidarity in Kampala.",
    status: "Published",
    coverSrc: photos.hero.webpSrc ?? photos.hero.src,
    isIllustrative: true,
  },
  {
    id: "album-tree-stewardship",
    slug: "tree-growing-outreach",
    title: "Tree Growing & Outreach",
    category: "Conservation & Youth",
    description:
      "Illustrative concepts depicting collaborative tree planting, seedling outreach and school environmental clubs.",
    status: "Published",
    coverSrc: photos.treeGrowing.webpSrc ?? photos.treeGrowing.src,
    isIllustrative: true,
  },
  {
    id: "album-skills-livelihoods",
    slug: "skills-livelihoods-workshops",
    title: "Skills & Livelihoods",
    category: "Empowerment",
    description: "Practical skills training, crafts and women-led enterprise concepts.",
    status: "Published",
    coverSrc: photos.womenLivelihoods.webpSrc ?? photos.womenLivelihoods.src,
    isIllustrative: true,
  },
];

export const initialCmsPhotos: CmsPhotoItem[] = [
  {
    id: "photo-hero-sorting",
    albumId: "album-kampala-action",
    src: photos.hero.webpSrc ?? photos.hero.src,
    filename: "makindye-hero.webp",
    caption: "Women sorting recyclable bottles in Kampala",
    alt: "Ugandan women working together to sort recyclable bottles in Kampala",
    status: "Published",
    isIllustrative: true,
  },
  {
    id: "photo-women-community",
    albumId: "album-kampala-action",
    src: photos.womenCommunity.webpSrc ?? photos.womenCommunity.src,
    filename: "women-community.webp",
    caption: "Women at the heart of Kampala communities",
    alt: "Smiling Ugandan women community members standing together in Makindye",
    status: "Published",
    isIllustrative: true,
  },
  {
    id: "photo-women-recycling",
    albumId: "album-kampala-action",
    src: photos.womenRecycling.webpSrc ?? photos.womenRecycling.src,
    filename: "women-recycling.webp",
    caption: "Plastic sorting and recovery concept",
    alt: "African women in green aprons sorting plastic bottles for recycling",
    status: "Published",
    isIllustrative: true,
  },
  {
    id: "photo-tree-growing",
    albumId: "album-tree-stewardship",
    src: photos.treeGrowing.webpSrc ?? photos.treeGrowing.src,
    filename: "tree-growing.webp",
    caption: "Community tree planting and stewardship",
    alt: "Ugandan women planting a young tree sapling together in rich soil",
    status: "Published",
    isIllustrative: true,
  },
  {
    id: "photo-community-outreach",
    albumId: "album-tree-stewardship",
    src: photos.communityOutreach.webpSrc ?? photos.communityOutreach.src,
    filename: "community-outreach.webp",
    caption: "Community outreach and seedling sharing",
    alt: "Women sharing tree seedlings during a community outreach activity",
    status: "Published",
    isIllustrative: true,
  },
  {
    id: "photo-school-environment",
    albumId: "album-tree-stewardship",
    src: photos.schoolEnvironment.webpSrc ?? photos.schoolEnvironment.src,
    filename: "school-environment.webp",
    caption: "Youth and school environmental clubs",
    alt: "Ugandan students in school uniforms planting a tree sapling",
    status: "Published",
    isIllustrative: true,
  },
  {
    id: "photo-livelihoods-workshop",
    albumId: "album-skills-livelihoods",
    src: photos.womenLivelihoods.webpSrc ?? photos.womenLivelihoods.src,
    filename: "women-livelihoods.webp",
    caption: "Practical sewing and skills workshop",
    alt: "African women participating in a practical sewing and crafts workshop",
    status: "Published",
    isIllustrative: true,
  },
];

export const initialTeamMembers: TeamMember[] = [
  {
    id: "member-fatina",
    name: "Namusoke Fatina",
    initials: "NF",
    avatarSrc: "/images/leadership/fatina.jpg",
    title: "CEO / Founder",
    email: "founder@makindyewomentraders.org",
    role: "Administrator",
    active: true,
  },
  {
    id: "member-ritah",
    name: "Nansubuga Ritah",
    initials: "NR",
    avatarSrc: "/images/leadership/ritah.jpg",
    title: "Secretary",
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
    title: "Publicity",
    email: "publicity@makindyewomentraders.org",
    role: "Contributor",
    active: true,
  },
];

export const initialActivityLog: ActivityLogItem[] = [
  {
    id: "act-1",
    action: "Updated story concept",
    target: "Plastic to Possibility: building a women-led waste model.",
    actor: "Nansubuga Ritah",
    tag: "Demo activity",
  },
  {
    id: "act-2",
    action: "Organised album concept",
    target: "Makindye Community Action (3 photos)",
    actor: "Namusoke Fatina",
    tag: "Demo activity",
  },
  {
    id: "act-3",
    action: "Prepared story preview",
    target: "200 trees. A shared commitment to Makindye.",
    actor: "Namusoke Fatina",
    tag: "Demo activity",
  },
];

export const roleDescriptions: Record<StaffRole, string> = {
  Administrator: "Full access to stories, media albums, publishing controls and team permissions.",
  Editor: "Create, review, edit and publish news stories and curated gallery albums.",
  Contributor: "Draft articles and upload photographs into staging albums for editorial review.",
};
