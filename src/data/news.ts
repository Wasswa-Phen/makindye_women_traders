import type { NewsArticle } from "@/types/content";
import { photos } from "./photos";

export const newsArticles: NewsArticle[] = [
  {
    id: "kaazi-tree-grow-collaboration",
    category: "Conservation",
    context: "Makindye Division · Collaboration",
    title: "200 trees planted through local collaboration in Makindye",
    photo: photos.newsTrees,
    imageAlt:
      "East African women tending young tree seedlings in a community reforestation nursery",
    excerpt:
      "Working alongside the Kaazi Tree Grow Project, community volunteers supported the planting of 200 trees in Makindye Division while promoting ongoing stewardship and care.",
    status: "Published concept",
  },
  {
    id: "layibi-gulu-community-outreach",
    category: "Community Outreach",
    context: "Layibi Village, Gulu · 2024",
    title: "Standing with women in Layibi Village, Northern Uganda",
    photo: photos.newsOutreach,
    imageAlt: "Ugandan community education and outreach gathering led by local women",
    excerpt:
      "In 2024, Makindye Women Traders partnered with Sanctuary Church Gulu on a food outreach supporting women of the Layibi Women Society in Northern Uganda.",
    status: "Published concept",
  },
  {
    id: "developing-women-led-recycling",
    category: "Developing Initiative",
    context: "Makindye, Kampala · Concept",
    title: "Developing a women-led plastic & livelihoods framework",
    photo: photos.womenLivelihoods,
    imageAlt:
      "Illustrative concept of women building practical skills and livelihood pathways in Kampala",
    excerpt:
      "Our emerging plastic and waste management initiative brings together environmental awareness, material sorting, skills training and partnership opportunities for women in Kampala.",
    status: "Draft · Editor review",
  },
];
