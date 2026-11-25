import type { PhotoAsset } from "@/types/content";

/**
 * Centralised photography registry.
 *
 * Local PNG assets live in their semantic folders under `public/images/`,
 * accompanied by optimised WebP variants for faster delivery and graceful fallback.
 * External fallback URLs are Wikimedia Commons Public Domain / CC-licensed Ugandan
 * and East African community photographs with automatic local WebP fallbacks.
 */
export const photos: Record<
  | "hero"
  | "womenCommunity"
  | "womenRecycling"
  | "treeGrowing"
  | "womenLivelihoods"
  | "schoolEnvironment"
  | "communityOutreach"
  | "girlsMentorship"
  | "newsTrees"
  | "newsOutreach"
  | "founder",
  PhotoAsset
> = {
  hero: {
    src: "/images/hero/makindye-hero.png",
    webpSrc: "/images/hero/makindye-hero.webp",
    fallbackSrc: "/images/hero/makindye-hero.png",
    sourceNote: "Local project hero asset (makindye-hero.png)",
    approvalStatus: "approved-local-concept",
  },
  womenCommunity: {
    src: "/images/about/women-community.png",
    webpSrc: "/images/about/women-community.webp",
    fallbackSrc: "/images/about/women-community.png",
    sourceNote: "Local asset: Smiling Women in Kampala Community Market.png",
    approvalStatus: "approved-local-concept",
  },
  womenRecycling: {
    src: "/images/programmes/women-recycling.png",
    webpSrc: "/images/programmes/women-recycling.webp",
    fallbackSrc: "/images/programmes/women-recycling.png",
    sourceNote: "Local asset: Community Recycling Team at Work.png",
    approvalStatus: "approved-local-concept",
  },
  treeGrowing: {
    src: "/images/programmes/tree-growing.png",
    webpSrc: "/images/programmes/tree-growing.webp",
    fallbackSrc: "/images/programmes/tree-growing.png",
    sourceNote: "Local asset: African Women Planting Hope Together.png",
    approvalStatus: "approved-local-concept",
  },
  womenLivelihoods: {
    src: "/images/programmes/women-livelihoods.png",
    webpSrc: "/images/programmes/women-livelihoods.webp",
    fallbackSrc: "/images/programmes/women-livelihoods.png",
    sourceNote: "Local asset: Women’s Empowerment Sewing Workshop.png",
    approvalStatus: "approved-local-concept",
  },
  schoolEnvironment: {
    src: "/images/programmes/school-environment.png",
    webpSrc: "/images/programmes/school-environment.webp",
    fallbackSrc: "/images/programmes/school-environment.png",
    sourceNote: "Local asset: School Environmental Club Tree Planting.png",
    approvalStatus: "approved-local-concept",
  },
  communityOutreach: {
    src: "/images/programmes/community-outreach.png",
    webpSrc: "/images/programmes/community-outreach.webp",
    fallbackSrc: "/images/programmes/community-outreach.png",
    sourceNote: "Local asset: Growing Green Communities Together.png",
    approvalStatus: "approved-local-concept",
  },
  girlsMentorship: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wiki_Loves_Women_Editathon_and_Training_with_GirlUp_Intiative_Uganda_07.jpg/1280px-Wiki_Loves_Women_Editathon_and_Training_with_GirlUp_Intiative_Uganda_07.jpg",
    fallbackSrc: "/images/about/women-community.webp",
    sourceNote:
      "Wikimedia Commons (CC BY-SA 4.0) — GirlUp Initiative Uganda training workshop by Kateregga1",
    approvalStatus: "illustrative-remote",
  },
  newsTrees: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Women_with_seedlings_for_reforestation_in_Tanzania_%285984894513%29.jpg/1280px-Women_with_seedlings_for_reforestation_in_Tanzania_%285984894513%29.jpg",
    fallbackSrc: "/images/programmes/tree-growing.webp",
    sourceNote:
      "Wikimedia Commons (Public Domain) — USAID Africa Bureau / African Wildlife Foundation women tree nursery",
    approvalStatus: "illustrative-remote",
  },
  newsOutreach: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/School_Health_Reading_Program%2C_Uganda_%2824768454277%29.jpg/1280px-School_Health_Reading_Program%2C_Uganda_%2824768454277%29.jpg",
    fallbackSrc: "/images/programmes/community-outreach.webp",
    sourceNote:
      "Wikimedia Commons (Public Domain) — USAID Uganda community education session by Helen Manson",
    approvalStatus: "illustrative-remote",
  },
  founder: {
    src: "/images/leadership/fatina.jpg",
    fallbackSrc: "/images/leadership/fatina.jpg",
    sourceNote: "Leadership portrait supplied in public/images/leadership/fatina.jpg",
    approvalStatus: "approved-local-concept",
  },
};
