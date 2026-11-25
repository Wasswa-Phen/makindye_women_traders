import type { GalleryItem } from "@/types/content";
import { photos } from "./photos";

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    photo: photos.hero,
    caption: "Women sorting recyclable bottles in Kampala",
    alt: "Illustrative concept of Ugandan women working together to sort recyclable bottles in Kampala",
    imagePosition: "top",
  },
  {
    id: "gallery-2",
    photo: photos.treeGrowing,
    caption: "Community tree planting and stewardship",
    alt: "Illustrative concept of women planting a young tree sapling together in rich soil",
    imagePosition: "top",
  },
  {
    id: "gallery-3",
    photo: photos.communityOutreach,
    caption: "Community outreach and seedling sharing",
    alt: "Illustrative concept of community outreach workers sharing tree seedlings with a local elder",
    imagePosition: "top",
  },
  {
    id: "gallery-4",
    photo: photos.womenCommunity,
    caption: "Women at the heart of Kampala communities",
    alt: "Illustrative concept of smiling Ugandan women community members together in Makindye",
    imagePosition: "top",
  },
  {
    id: "gallery-5",
    photo: photos.schoolEnvironment,
    caption: "Youth and school environmental clubs",
    alt: "Illustrative concept of Ugandan students planting a tree as part of a school environmental club",
    imagePosition: "top",
  },
];
