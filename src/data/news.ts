import type { NewsArticle } from "@/types/content";
import { photos } from "./photos";

export const newsArticles: NewsArticle[] = [
  {
    id: "kaazi-tree-grow-collaboration",
    slug: "200-trees-makindye-kaazi-collaboration",
    category: "Conservation",
    context: "Makindye Division · Collaboration",
    title: "200 trees. A shared commitment to Makindye.",
    photo: photos.newsTrees,
    imageAlt:
      "East African women tending young tree seedlings in a community reforestation nursery",
    excerpt:
      "Through our collaboration with Kaazi Business Concepts and the Kaazi Tree Grow Project, 200 trees were planted across Makindye Division.",
    bodyParagraphs: [
      "Makindye Women Traders partnered with Kaazi Business Concepts through the Kaazi Tree Grow Project to support the planting of 200 trees within Makindye Division, starting in Lukuli.",
      "Beyond the act of planting, our shared focus centres on stewardship: encouraging residents, women leaders and youth to care for young trees so they survive and strengthen neighbourhood green cover.",
      "This collaboration demonstrates what local community organisations and business partners can achieve together. Tree survival follow-up and future expansion remain ongoing priorities pending further client verification.",
    ],
    status: "Published concept",
  },
  {
    id: "layibi-gulu-community-outreach",
    slug: "standing-with-women-of-layibi-northern-uganda",
    category: "Community Outreach",
    context: "Layibi Village, Gulu · 2024",
    title: "Standing with the women of Layibi Village.",
    photo: photos.newsOutreach,
    imageAlt: "Ugandan community education and outreach gathering led by local women",
    excerpt:
      "In 2024, we collaborated with Sanctuary Church Gulu on a food outreach supporting women of the Layibi Women Society in Northern Uganda.",
    bodyParagraphs: [
      "Care for the environment grows strongest alongside care for people. In 2024, Makindye Women Traders partnered with Sanctuary Church Gulu to reach women of the Layibi Women Society in Layibi Village, Northern Uganda.",
      "Working alongside local organisers, the outreach brought practical food support and community encouragement directly to women sustaining households in the area.",
      "Our collaboration in Layibi reflects our conviction that grassroots partnerships across regions can unite dignity, solidarity and long-term community resilience.",
    ],
    status: "Published concept",
  },
  {
    id: "developing-women-led-recycling",
    slug: "plastic-to-possibility-women-led-recycling",
    category: "Developing Initiative",
    context: "Makindye, Kampala · Developing",
    title: "Plastic to Possibility: building a women-led waste model.",
    photo: photos.womenLivelihoods,
    imageAlt: "African women building practical skills and livelihood pathways in Kampala",
    excerpt:
      "Our developing Plastic to Possibility initiative connects community plastic sorting with women’s leadership and future livelihood pathways.",
    bodyParagraphs: [
      "Across Kampala, discarded plastics create daily environmental challenges for families, schools and neighbourhood markets. At the same time, women and young mothers seek reliable income opportunities close to home.",
      "Makindye Women Traders is developing Plastic to Possibility as a women- and girl-led response: combining household waste awareness, community collection, sorting practices and school club activities.",
      "We present this initiative transparently as a programme under active development. Technical partners, recycling processors and community supporters are warmly invited to help shape it into a durable local system.",
    ],
    status: "Published concept",
  },
];
