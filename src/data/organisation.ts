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

export const navigationLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stories", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export const organisationInfo: OrganisationInfo = {
  name: "Makindye Women Traders",
  shortName: "MWT",
  domain: "makindyewomentraders.org",
  tagline: "Rooted in purpose. Growing change.",
  officialTheme: "“Loving nature through women ensures continuity in transformation.”",
  heroTitlePrefix: "Women leading a ",
  heroTitleHighlight: "greener",
  heroTitleSuffix: " tomorrow.",
  heroDescription:
    "A women-led Community Based Organisation turning environmental responsibility into cleaner communities, stronger livelihoods and a more hopeful Kampala.",
  aboutLead:
    "Makindye Women Traders is a women-led Community Based Organisation in Makindye Division, Kampala, Uganda, advancing environmental conservation, community outreach and sustainable livelihoods.",
  aboutBody:
    "We place women and girls at the centre of practical environmental action—supporting tree stewardship, mentorship, skills training and an emerging women-led recycling initiative.",
  flagshipTitlePrefix: "Turning waste",
  flagshipTitleHighlight: "possibility.",
  flagshipDescription:
    "We are developing a women-led plastic and waste management programme designed to create dignified income, reduce neighbourhood waste and make environmental care part of everyday community life.",
  flagshipCalloutTitle: "Developing programme · Partnership invitation",
  flagshipCalloutBody:
    "This is an emerging initiative under active development—not a completed achievement. We welcome technical, funding and market partners who can help build a durable local system.",
  footerMission: "Empowering women to lead a cleaner, greener and waste-free Kampala.",
  reviewNotice:
    "Client review concept · Illustrative photography and figures remain subject to final client verification.",
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
    "Namusoke Fatina founded Makindye Women Traders Community Based Organisation in Kampala with a commitment to connecting women’s leadership, community dignity and environmental care.",
  biographySecondary:
    "Her work places practical responsibility at the centre: supporting girls, young mothers and women through mentorship, livelihood skills and community-led environmental stewardship.",
  photo: photos.founderPlaceholder,
  imageAlt:
    "Neutral placeholder frame for Founder and CEO Namusoke Fatina pending approved portrait",
  imageLabel: "Founder placeholder · Approved portrait pending client permission",
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
