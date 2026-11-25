import type { ImpactStat, Programme } from "@/types/content";
import { photos } from "./photos";

export const programmes: Programme[] = [
  {
    id: "recycling-waste-management",
    number: "01",
    title: "Recycling & Waste Management",
    description:
      "Developing practical community pathways from sorted recyclable plastics to dignified livelihoods.",
    photo: photos.womenRecycling,
    imageAlt:
      "Illustrative concept showing African women in green aprons sorting plastic bottles for recycling",
    imagePosition: "top",
  },
  {
    id: "tree-growing-conservation",
    number: "02",
    title: "Tree Growing & Conservation",
    description:
      "Restoring green spaces through community tree planting, long-term care and local collaboration.",
    photo: photos.treeGrowing,
    imageAlt:
      "Illustrative concept showing Ugandan women community members planting a young tree sapling together",
    imagePosition: "top",
  },
  {
    id: "womens-empowerment-livelihoods",
    number: "03",
    title: "Women's Empowerment & Livelihoods",
    description:
      "Supporting women and young mothers with practical skills, confidence and economic opportunity.",
    photo: photos.womenLivelihoods,
    imageAlt:
      "Illustrative concept showing African women in a practical sewing and crafts skills workshop",
    imagePosition: "top",
  },
  {
    id: "mentorship-girls-leadership",
    number: "04",
    title: "Mentorship & Girls' Leadership",
    description:
      "Helping girls and young women build confidence, voice and environmental leadership.",
    photo: photos.girlsMentorship,
    imageAlt:
      "Ugandan young women participating in a community leadership and skills training workshop",
    imagePosition: "top",
  },
  {
    id: "school-environmental-clubs",
    number: "05",
    title: "School Environmental Clubs",
    description:
      "Planned school initiatives nurturing lifelong habits of environmental care and climate action.",
    photo: photos.schoolEnvironment,
    imageAlt:
      "Illustrative concept showing Ugandan students in school uniforms planting a tree sapling",
    imagePosition: "top",
  },
  {
    id: "community-outreach",
    number: "06",
    title: "Community Outreach",
    description:
      "Taking practical environmental education and solidarity support directly into communities.",
    photo: photos.communityOutreach,
    imageAlt:
      "Illustrative concept showing women sharing tree seedlings during a community outreach event",
    imagePosition: "top",
  },
];

export const impactStats: ImpactStat[] = [
  {
    value: "200",
    label: "trees planted",
    note: "In collaboration with Kaazi Tree Grow Project",
  },
  {
    value: "30+",
    label: "volunteers",
    note: "Supporting community-led work",
  },
  {
    value: "2024",
    label: "Northern Uganda outreach",
    note: "Layibi Village, Gulu with Sanctuary Church",
    featuredSpan: true,
  },
];

export const impactVerificationNote =
  "Client review note: Previously reported achievements (200 trees planted through collaboration, 30+ volunteers and the 2024 Northern Uganda outreach) remain pending client verification prior to public launch. No additional statistics have been invented.";
