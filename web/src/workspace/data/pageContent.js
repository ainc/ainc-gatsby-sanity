import { WORKSPACE_PAGES } from "../constants/ctaPlaceholders";
import coworkingImg from "../../images/workspace/offering-coworking.jpg";
import privateOfficeImg from "../../images/workspace/offering-private-office.jpg";
import conferenceImg from "../../images/workspace/offering-conference.jpg";
import eventsImg from "../../images/workspace/offering-events.jpg";

/** Stock placeholders (Unsplash) — replace with Awesome Inc photography when ready */
const OFFERING_MEDIA_BY_PATH = {
  "/coworking": {
    image: coworkingImg,
    imageAlt: "Team collaborating in a coworking space",
  },
  "/private-office": {
    image: privateOfficeImg,
    imageAlt: "Professionals working in a modern office",
  },
  "/conference-rooms": {
    image: conferenceImg,
    imageAlt: "Colleagues in a conference meeting",
  },
  "/book-events": {
    image: eventsImg,
    imageAlt: "Audience at a professional event",
  },
};

export const HUB_HERO = {
  eyebrow: "Awesome Inc Workspace",
  title: "Get Your Best Work Done Here",
  lead: "We exist to create and grow high-tech startups — with community events, education, and a shared workspace environment downtown.",
  stats:
    "15,000 sq ft of coworking space, 25 private offices, meeting + conference rooms, and event space.",
};

export const HUB_STORY = {
  eyebrow: "Our Mission",
  title: "Help People Pursue Their Definition of Awesome",
  body: `Awesome Inc Workspace brings entrepreneurs, remote teams, and local companies together under one roof. From a day pass to a private suite, you get the infrastructure to focus, meet clients, and scale — without the overhead of a traditional lease.`,
};

export const HUB_PILLARS = [
  {
    title: "Startups",
    text: "Early-stage and venture-backed founders who need space to build, pitch, and hire.",
  },
  {
    title: "Remote Teams",
    text: "Distributed groups that want a professional Lexington hub for offsites and deep work.",
  },
  {
    title: "Local Business",
    text: "Established companies adding flexible overflow space, meeting rooms, and downtown presence.",
  },
];

export const HUB_OFFERINGS = [
  ...WORKSPACE_PAGES.map((page) => ({
    ...page,
    ...OFFERING_MEDIA_BY_PATH[page.path],
  })),
  {
    title: "Virtual Office / Mailing",
    path: "/coworking",
    description:
      "A downtown Lexington mailing address and member perks — without a desk.",
    image: privateOfficeImg,
    imageAlt: "Downtown mailing address and virtual office services",
  },
];

export const HUB_MEMBERSHIPS = [
  {
    eyebrow: "Collaborate in shared space",
    title: "Coworking",
    price: "From $75 / month · Day pass $35",
    body: "Hot desks, open seating, and member events. Add conference time as you need it.",
    path: "/coworking",
    ctaLabel: "Explore coworking",
  },
  {
    eyebrow: "Tailored for focus",
    title: "Private Offices",
    price: "Starting at $720 / month",
    body: "Lockable offices with 24/7 access. Join the waitlist for upcoming availability.",
    path: "/private-office",
    ctaLabel: "View offices",
  },
  {
    eyebrow: "Convenient and affordable",
    title: "Meetings & Events",
    price: "Rooms from $25 / hour",
    body: "Conference rooms, thinking space, and event venues bookable by the hour or day.",
    path: "/conference-rooms",
    ctaLabel: "See rooms",
  },
];
