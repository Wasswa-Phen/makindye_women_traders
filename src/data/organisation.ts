import type {
  AccessRole,
  Collaborator,
  DashboardStat,
  FounderProfile,
  NavItem,
  OrganisationInfo,
  QuickActionItem,
} from "@/types/content";
import { photos } from "./photos";

export interface MobileNavGroup {
  heading: string;
  links: NavItem[];
}

export const navigationLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Our Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "News & Updates", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

export const mobileNavigationGroups: MobileNavGroup[] = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Our Work", href: "#work" },
      { label: "Our Impact", href: "#impact" },
    ],
  },
  {
    heading: "Discover",
    links: [
      { label: "Gallery", href: "#gallery" },
      { label: "News & Updates", href: "#news" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "Partner With Us", href: "#contact" },
    ],
  },
];

export const organisationInfo: OrganisationInfo = {
  name: "Makindye Women Traders",
  shortName: "MWT",
  domain: "makindyewomentraders.org",
  tagline: "Rooted in purpose. Growing change.",
  officialTheme: "“Loving nature through women ensures continuity in transformation.”",
  heroTitlePrefix: "Women Leading a ",
  heroTitleHighlight: "Greener",
  heroTitleSuffix: " Tomorrow.",
  heroDescription: "Empowering women to lead a cleaner, greener and waste-free Kampala.",
  aboutLead:
    "Makindye Women Traders is a women-led Community Based Organisation in Makindye Division, Kampala, connecting environmental stewardship with women’s leadership and sustainable livelihoods.",
  aboutBody:
    "Through tree growing, mentorship, skills workshops and community outreach, we equip women and girls to shape healthier neighbourhoods and resilient futures.",
  flagshipTitlePrefix: "Turning waste",
  flagshipTitleHighlight: "possibility.",
  flagshipDescription:
    "We are developing a women-led plastic and waste management programme that transforms household plastics into community income and cleaner streets.",
  flagshipCalloutTitle: "Developing programme · Partnership opportunity",
  flagshipCalloutBody:
    "This flagship initiative is in active development. We welcome technical, funding and market partners to help scale a lasting local system.",
  footerMission: "Empowering women to lead a cleaner, greener and waste-free Kampala.",
  reviewNotice:
    "Prototype for client review — illustrative photography and organisational information remain subject to client approval.",
  contact: {
    email: "mwomentraders@gmail.com",
    phoneDisplay: "+256 752 621 075",
    whatsappUrl: "https://wa.me/256752621075",
    location: "Makindye, Kampala, Uganda",
    registrationNote: "Registered Community Based Organisation · KCCA",
  },
};

export const founderProfile: FounderProfile = {
  name: "Namusoke Fatina",
  role: "Founder & Chief Executive Officer",
  biographyPrimary:
    "Namusoke Fatina founded Makindye Women Traders in Kampala with a clear conviction: lasting environmental action begins when women and girls are trusted to lead.",
  biographySecondary:
    "Her community work connects practical environmental care with mentorship and livelihood pathways for women and young mothers across Makindye Division.",
  photo: photos.founderPlaceholder,
  imageAlt:
    "Neutral portrait placeholder for Founder and CEO Namusoke Fatina pending approved client photograph",
  imageLabel: "",
};

export const collaborators: Collaborator[] = [
  {
    id: "kaazi",
    name: "Kaazi",
    subtitle: "Tree Grow Project",
  },
  {
    id: "sanctuary",
    name: "Sanctuary",
    subtitle: "Church Gulu",
  },
];

export const partnershipInterests: string[] = [
  "Funding partnership",
  "Technical partnership",
  "Volunteering",
  "Media enquiry",
  "Other",
];

export const dashboardNavItems: string[] = [
  "Overview",
  "Stories & Updates",
  "Gallery Albums",
  "Media Library",
  "Drafts",
  "Team & Roles",
];

export const dashboardStats: DashboardStat[] = [
  { value: "6", label: "Core programmes" },
  { value: "5", label: "Gallery highlights" },
  { value: "3", label: "Documented stories" },
  { value: "4", label: "Leadership roles" },
];

export const dashboardQuickActions: QuickActionItem[] = [
  {
    icon: "＋",
    title: "Create a story",
    description: "Write, save draft or publish",
  },
  {
    icon: "□",
    title: "Upload photographs",
    description: "Add approved field imagery",
  },
  {
    icon: "↗",
    title: "Create an album",
    description: "Curate community photography",
  },
];

export const dashboardAccessRoles: AccessRole[] = [
  { role: "Administrator", holder: "Founder" },
  { role: "Editor", holder: "Secretary" },
  { role: "Contributor", holder: "Selected members" },
];
