import type { ImpactStat, Programme } from "@/types/content";
import { photos } from "./photos";

export const programmes: Programme[] = [
  {
    id: "recycling-waste-management",
    slug: "recycling-waste-management",
    number: "01",
    title: "Recycling and Waste Management",
    shortDescription:
      "Developing community pathways from sorted plastic waste to dignified women-led livelihoods.",
    status: "Developing flagship initiative",
    statusSummary:
      "Plastic to Possibility is an emerging flagship programme under active development. Implementation depends on technical partnerships, community mobilisation and sustainable recycling market links.",
    heroIntro:
      "A women- and girl-led framework turning household plastic waste awareness, sorting and collection into cleaner neighbourhoods and practical economic opportunity.",
    challenge:
      "Uncollected single-use plastics strain neighbourhood drainage and public spaces across urban Kampala, while women and young mothers often lack structured entry points into circular-economy value chains.",
    approach:
      "Through Plastic to Possibility, Makindye Women Traders is designing a practical community model centred on household sorting education, women-managed collection hubs, school engagement and partnerships with responsible recycling processors.",
    keyActivities: [
      "Community awareness on plastic separation and responsible waste habits",
      "Developing safe women-led collection and sorting points in Makindye",
      "Connecting school environmental clubs with practical plastic reduction activities",
      "Building transparent buyer and technical partner relationships for recycled materials",
    ],
    partnershipFocus:
      "Seeking technical advisors, collection equipment support, recycling processors and seed funding partners.",
    photo: photos.womenRecycling,
    imageAlt: "African women in green aprons sorting plastic bottles for recycling in Kampala",
    imagePosition: "top",
  },
  {
    id: "tree-growing-stewardship",
    slug: "tree-growing-stewardship",
    number: "02",
    title: "Tree Growing and Environmental Stewardship",
    shortDescription:
      "Restoring urban green cover through collaborative tree planting and long-term care.",
    status: "Active collaboration",
    statusSummary:
      "Supported the planting of 200 trees in Makindye Division in collaboration with the Kaazi Tree Grow Project. Long-term care and future planting phases remain ongoing.",
    heroIntro:
      "Planting is only the beginning; long-term stewardship by neighbours, women leaders and youth is what helps urban trees thrive.",
    challenge:
      "Rapid urban growth in Kampala reduces tree canopy cover, worsens heat and weakens soil stability across neighbourhoods.",
    approach:
      "We pair local planting exercises with shared community responsibility—working alongside local partners and volunteers so every tree receives ongoing attention after planting day.",
    keyActivities: [
      "Collaborative planting of 200 trees in Makindye Division with Kaazi Tree Grow Project",
      "Community tree-care follow-up and neighbour stewardship",
      "Integrating seedling education into outreach and youth mentoring",
    ],
    partnershipFocus:
      "Welcoming seedling nurseries, conservation partners and local schools to expand urban tree cover.",
    photo: photos.treeGrowing,
    imageAlt: "Ugandan women community members planting a young tree sapling together",
    imagePosition: "top",
  },
  {
    id: "womens-empowerment-livelihoods",
    slug: "womens-empowerment-livelihoods",
    number: "03",
    title: "Women's Empowerment and Sustainable Livelihoods",
    shortDescription:
      "Equipping women and young mothers with practical skills and economic agency.",
    status: "Ongoing activity",
    statusSummary:
      "Ongoing grassroots support connecting practical skills training and peer encouragement with environmental stewardship.",
    heroIntro:
      "When women gain practical skills and steady livelihood options, they strengthen their families and lead environmental progress in their communities.",
    challenge:
      "Young mothers and women facing economic disadvantage often carry household responsibilities without access to supportive peer networks or vocational training.",
    approach:
      "Makindye Women Traders centres dignity and practical capability—creating supportive spaces where women learn hands-on skills, share business experience and take leadership roles in local green initiatives.",
    keyActivities: [
      "Peer support and practical skills sessions for women and young mothers",
      "Linking livelihood skills such as tailoring and crafts with green enterprise",
      "Preparing women leaders to coordinate local environmental activities",
    ],
    partnershipFocus:
      "Welcoming vocational trainers, equipment sponsors and women’s enterprise partners.",
    photo: photos.womenLivelihoods,
    imageAlt: "African women participating in a practical sewing and crafts workshop",
    imagePosition: "top",
  },
  {
    id: "mentorship-girls-leadership",
    slug: "mentorship-girls-leadership",
    number: "04",
    title: "Mentorship and Girls' Leadership",
    shortDescription:
      "Building confidence, voice and environmental leadership among girls and young mothers.",
    status: "Ongoing activity",
    statusSummary:
      "Core ongoing mentorship pillar focused on confidence, dignity and community leadership.",
    heroIntro:
      "Encouraging girls and young mothers to recognise their worth, stay engaged in learning and lead care for the natural world around them.",
    challenge:
      "Early motherhood and limited mentorship frequently narrow opportunities for adolescent girls and young women.",
    approach:
      "Through honest dialogue and positive women role models, we nurture confidence, practical decision-making and leadership in schools and community spaces.",
    keyActivities: [
      "Guided mentorship circles for girls and young mothers",
      "Confidence-building and life-skills conversations led by women role models",
      "Encouraging girl-led participation in community conservation projects",
    ],
    partnershipFocus:
      "Seeking educators, mentors and community spaces supporting girls’ leadership.",
    photo: photos.girlsMentorship,
    imageAlt: "Ugandan young women participating in a leadership and skills training workshop",
    imagePosition: "top",
  },
  {
    id: "school-environmental-clubs",
    slug: "school-environmental-clubs",
    number: "05",
    title: "School Environmental Clubs",
    shortDescription:
      "Planned school initiatives nurturing lifelong habits of environmental care and climate action.",
    status: "Planned / expanding",
    statusSummary:
      "Developing school partnership framework prepared for expansion alongside local schools and educators.",
    heroIntro:
      "Partnering with primary and secondary schools to help young people turn environmental awareness into daily habits.",
    challenge:
      "Students learn best when environmental care goes beyond textbooks into hands-on gardening, clean school compounds and waste separation.",
    approach:
      "We are developing structured school club guidelines combining tree care, plastic awareness and student leadership so environmental stewardship becomes part of school culture.",
    keyActivities: [
      "Student-led tree planting and school compound care activities",
      "Practical classroom and yard awareness on plastic reduction",
      "Inter-generational learning linking school clubs with women community leaders",
    ],
    partnershipFocus:
      "Inviting school headteachers, environmental teachers and educational sponsors.",
    photo: photos.schoolEnvironment,
    imageAlt: "Ugandan students in green school uniforms planting a tree sapling",
    imagePosition: "top",
  },
  {
    id: "community-outreach",
    slug: "community-outreach",
    number: "06",
    title: "Community Outreach",
    shortDescription:
      "Extending practical environmental education and solidarity support directly to communities.",
    status: "Active collaboration",
    statusSummary:
      "Includes the 2024 food outreach collaboration in Layibi Village, Gulu with Sanctuary Church Gulu, alongside local outreach in Kampala.",
    heroIntro:
      "Environmental action cannot be separated from immediate human needs; our outreach meets women and families with practical solidarity and shared learning.",
    challenge:
      "Vulnerable households often face overlapping economic and environmental pressures that require compassionate, community-rooted collaboration.",
    approach:
      "Working alongside trusted local partners—such as churches, community societies and volunteer teams—we mobilise support and environmental awareness where communities gather.",
    keyActivities: [
      "2024 food outreach supporting women of the Layibi Women Society in Layibi Village, Gulu",
      "Collaborating with faith-based and community groups on local mobilisation",
      "Sharing accessible environmental awareness with families and local traders",
    ],
    partnershipFocus:
      "Welcoming local community associations, churches and outreach logistics partners.",
    photo: photos.communityOutreach,
    imageAlt: "Women sharing tree seedlings during a community outreach activity",
    imagePosition: "top",
  },
];

export const impactStats: ImpactStat[] = [
  {
    value: "200",
    label: "trees planted",
    note: "Through collaboration with Kaazi Tree Grow Project in Makindye Division",
  },
  {
    value: "30+",
    label: "volunteers",
    note: "Mobilised to support local environmental and community activities",
  },
];

export const impactVerificationNote =
  "Reported figures from earlier initiatives remain pending final client verification.";
