import type {
  ApproachPillar,
  Collaborator,
  CoreValue,
  FounderProfile,
  LeadershipMember,
  NavItem,
  OrganisationInfo,
} from "@/types/content";
import { photos } from "./photos";

export interface MobileNavGroup {
  heading: string;
  links: NavItem[];
}

export const navigationLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Our Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const mobileNavigationGroups: MobileNavGroup[] = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/our-work" },
      { label: "Our Impact", href: "/impact" },
    ],
  },
  {
    heading: "Discover",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "News & Updates", href: "/news" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Partner With Us", href: "/get-involved" },
    ],
  },
];

export const organisationInfo: OrganisationInfo = {
  name: "Makindye Women Traders",
  shortName: "MWT",
  domain: "makindyewomentraders.org",
  tagline: "Rooted in Purpose. Growing Change.",
  officialTheme: "“Loving nature through women ensures continuity in transformation.”",
  heroTitlePrefix: "Women Leading a ",
  heroTitleHighlight: "Greener",
  heroTitleSuffix: " Tomorrow.",
  heroDescription: "Empowering women to lead a cleaner, greener and waste-free Kampala.",
  aboutPreview:
    "Makindye Women Traders is a women-led Community Based Organisation in Kampala connecting environmental conservation with women’s leadership, mentorship and sustainable livelihoods.",
  missionTitle: "Support women. Strengthen communities. Care for nature.",
  missionBody:
    "To empower girls and women through mentorship, practical livelihood skills and community-led environmental action that protects local ecosystems and strengthens dignity.",
  visionTitle: "A future where every woman can flourish.",
  visionBody:
    "Resilient communities where girls and women live with dignity, lead environmental stewardship and access sustainable opportunities.",
  flagshipTitlePrefix: "Turning Waste",
  flagshipTitleHighlight: "Possibility.",
  flagshipDescription:
    "Our developing women-led recycling initiative links household waste reduction with environmental responsibility and future income opportunities for women in Kampala.",
  flagshipCalloutTitle: "Programme under development · Partnership invitation",
  flagshipCalloutBody:
    "Plastic to Possibility is actively taking shape. We welcome technical, funding and market partners to help build a durable community recycling system.",
  footerMission: "Empowering women to lead a cleaner, greener and waste-free Kampala.",
  reviewNotice:
    "Client review prototype — illustrative photography and organisational information remain subject to client approval.",
  contact: {
    email: "mwomentraders@gmail.com",
    phoneDisplay: "+256 752 621 075",
    phoneHref: "tel:+256752621075",
    whatsappUrl: "https://wa.me/256752621075",
    location: "Makindye, Kampala, Uganda",
    registrationNote: "Registered Community Based Organisation · KCCA",
  },
};

export const founderProfile: FounderProfile = {
  name: "Namusoke Fatina",
  role: "CEO / Founder",
  biographyPrimary:
    "Namusoke Fatina founded Makindye Women Traders in Kampala with a conviction that environmental stewardship and women’s dignity belong together.",
  biographySecondary:
    "A single mother of two and community activist, she is dedicated to encouraging girls, young mothers and women to gain practical skills and lead cleaner neighbourhoods.",
  biographyExtended:
    "Her leadership places practical care at the centre: mentoring young women facing disadvantage while inviting communities to protect trees, manage waste responsibly and build resilient local livelihoods.",
  photo: photos.founder,
  imageAlt: "Portrait of Namusoke Fatina, CEO and Founder of Makindye Women Traders",
};

export const leadershipBoard: LeadershipMember[] = [
  {
    id: "fatina",
    name: "Namusoke Fatina",
    role: "CEO / Founder",
    initials: "NF",
    photoSrc: "/images/leadership/fatina.jpg",
    photoAlt: "Portrait of Namusoke Fatina, CEO and Founder",
  },
  {
    id: "ritah",
    name: "Nansubuga Ritah",
    role: "Secretary",
    initials: "NR",
    photoSrc: "/images/leadership/ritah.jpg",
    photoAlt: "Portrait of Nansubuga Ritah, Secretary",
  },
  {
    id: "sylvia",
    name: "Namukasa Sylvia",
    role: "Treasurer",
    initials: "NS",
    photoSrc: "/images/leadership/sylvia.jpg",
    photoAlt: "Portrait of Namukasa Sylvia, Treasurer",
  },
  {
    id: "joanitah",
    name: "Namara Joanitah",
    role: "Publicity",
    initials: "NJ",
    photoSrc: null,
    photoAlt: "Initials placeholder NJ for Namara Joanitah, Publicity",
  },
];

export const coreValues: CoreValue[] = [
  {
    number: "01",
    title: "Dignity",
    description:
      "Respecting girls and women—including young mothers—as leaders with voice, agency and capability.",
  },
  {
    number: "02",
    title: "Women's Leadership",
    description:
      "Creating practical spaces for women and girls to organise, teach and guide local environmental action.",
  },
  {
    number: "03",
    title: "Shared Stewardship",
    description:
      "Connecting everyday care for neighbourhoods, trees and waste with long-term community responsibility.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "Working alongside schools, faith groups, local agencies and partners to turn intention into lasting action.",
  },
];

export const organisationalApproach: ApproachPillar[] = [
  {
    title: "Build practical awareness",
    description:
      "Connect environmental learning directly with choices families, traders and students make each day.",
  },
  {
    title: "Enable women to lead",
    description:
      "Centre mentorship and peer support so girls and women guide community conservation with confidence.",
  },
  {
    title: "Care beyond one-day events",
    description:
      "Pair tree planting with tree care, plastic education with collection models, and training with real livelihoods.",
  },
];

export const collaborators: Collaborator[] = [
  {
    id: "kaazi",
    name: "Kaazi Tree Grow Project",
    location: "Makindye Division · Kampala",
    subtitle: "Tree Growing Collaboration",
    summary:
      "Supported the collaborative planting of 200 trees in Makindye Division alongside ongoing community stewardship.",
  },
  {
    id: "sanctuary",
    name: "Sanctuary Church Gulu",
    location: "Layibi Village · Northern Uganda",
    subtitle: "2024 Community Outreach",
    summary:
      "Partnered in 2024 on a community food outreach supporting women of the Layibi Women Society.",
  },
];

export const partnershipInterests: string[] = [
  "Organisational partnership",
  "Recycling initiative support",
  "Volunteering",
  "Material contributions",
  "Financial support enquiry",
  "Media or general enquiry",
];
