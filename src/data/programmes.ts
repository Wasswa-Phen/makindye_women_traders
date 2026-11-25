import type { ImpactStat, Programme } from "@/types/content";
import { photos } from "./photos";

export const programmes: Programme[] = [
  {
    id: "recycling-waste-management",
    number: "01",
    title: "Recycling & Waste Management",
    description:
      "Developing community pathways from sorted plastic waste to dignified livelihoods.",
    photo: photos.womenRecycling,
    imageAlt: "African women in green aprons sorting plastic bottles for recycling in Kampala",
    imagePosition: "top",
  },
  {
    id: "tree-growing-conservation",
    number: "02",
    title: "Tree Growing & Conservation",
    description: "Restoring green spaces through community tree planting and ongoing stewardship.",
    photo: photos.treeGrowing,
    imageAlt: "Ugandan women community members planting a young tree sapling together",
    imagePosition: "top",
  },
  {
    id: "womens-empowerment-livelihoods",
    number: "03",
    title: "Women's Empowerment & Livelihoods",
    description: "Supporting women and young mothers with practical skills and economic dignity.",
    photo: photos.womenLivelihoods,
    imageAlt: "African women participating in a practical sewing and crafts workshop",
    imagePosition: "top",
  },
  {
    id: "mentorship-girls-leadership",
    number: "04",
    title: "Mentorship & Girls' Leadership",
    description:
      "Building confidence, voice and environmental leadership among girls and young women.",
    photo: photos.girlsMentorship,
    imageAlt: "Ugandan young women participating in a leadership and skills training workshop",
    imagePosition: "top",
  },
  {
    id: "school-environmental-clubs",
    number: "05",
    title: "School Environmental Clubs",
    description:
      "Planned school initiatives nurturing lifelong care for nature and climate action.",
    photo: photos.schoolEnvironment,
    imageAlt: "Ugandan students in green school uniforms planting a tree sapling",
    imagePosition: "top",
  },
  {
    id: "community-outreach",
    number: "06",
    title: "Community Outreach",
    description:
      "Bringing environmental learning and solidarity support directly to neighbourhoods.",
    photo: photos.communityOutreach,
    imageAlt: "Women sharing tree seedlings during a community outreach activity",
    imagePosition: "top",
  },
];

export const impactStats: ImpactStat[] = [
  {
    value: "200",
    label: "trees planted",
    note: "With Kaazi Tree Grow Project",
  },
  {
    value: "30+",
    label: "volunteers",
    note: "Supporting community action",
  },
  {
    value: "2024",
    label: "Northern Uganda outreach",
    note: "Layibi Village, Gulu with Sanctuary Church",
    featuredSpan: true,
  },
];

export const impactVerificationNote =
  "Reported figures from early initiatives remain pending final client verification.";
