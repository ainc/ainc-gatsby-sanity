/**
 * ───────────────────────────────────────────────────────────────────────────
 * ZOHO EMBED URLS — paste live URLs here as they become available.
 *
 * Each value should be the full embeddable URL:
 *   • Zoho Bookings  → the booking page URL (e.g. https://<org>.zohobookings.com/#/<service>)
 *   • Zoho Forms     → the public "formperma" URL
 *   • Zoho Checkout/Subscriptions → the hosted checkout/subscribe URL
 *
 * When a value is set, the matching CTA button opens that URL in a popup modal.
 * While a value is "" the button falls back to its placeholder `href` and shows
 * the placeholder note.
 * ───────────────────────────────────────────────────────────────────────────
 */
/**
 * Zoho Bookings share one subdomain — pass just the service ID (the part after
 * `portal-embed#/` in the URL Zoho gives you) and this builds the embed URL.
 */
const ZOHO_BOOKINGS_SUBDOMAIN = "awesomeu-awesomeinc";
export const bookingsEmbed = (serviceId) =>
  `https://${ZOHO_BOOKINGS_SUBDOMAIN}.zohobookings.com/portal-embed#/${serviceId}`;

export const ZOHO_EMBEDS = {
  // Zoho Bookings — Book a Tour
  bookTour: bookingsEmbed("4078485000002477056"),
  // Zoho Bookings (paid) — Schedule a Conference Room
  scheduleConferenceRoom: bookingsEmbed("4078485000002477034"),
  // Zoho Bookings — Buy a Day Pass (booked online, invoiced after the fact)
  buyDayPass: bookingsEmbed("4078485000002477172"),
  // TODO: Zoho Checkout/Subscriptions — Buy Virtual Membership
  buyVirtualMembership: "",
  // TODO: Zoho Form — Private Office Waitlist
  joinOfficeWaitlist: "",
  // TODO: Zoho Form — Book Event Space
  bookEventSpace: "",
  // Existing live Contact Us form (used on /contact). Uncomment to embed here too.
  // contactUs: "https://forms.zohopublic.com/virtualoffice9155/form/ContactUs/formperma/IeqkRsD8Ln0iv4eefk7Oy91FbZ-TlWCtSJO3Yc6n0aA",
  contactUs: "",
};

export const WORKSPACE_CTAS = {
  bookTour: {
    label: "Book a Tour",
    href: "#zoho-book-tour",
    note: "Zoho booking — placeholder",
    embedUrl: ZOHO_EMBEDS.bookTour,
    modalTitle: "Book a Tour",
  },
  scheduleConferenceRoom: {
    label: "Schedule a Conference Room",
    href: "#zoho-schedule-conference-room",
    note: "Zoho paid scheduling — placeholder",
    embedUrl: ZOHO_EMBEDS.scheduleConferenceRoom,
    modalTitle: "Schedule a Conference Room",
  },
  buyDayPass: {
    label: "Buy a Day Pass",
    href: "#zoho-day-pass",
    note: "Zoho checkout — placeholder",
    embedUrl: ZOHO_EMBEDS.buyDayPass,
    modalTitle: "Buy a Day Pass",
  },
  buyVirtualMembership: {
    label: "Buy Virtual Membership",
    href: "#zoho-virtual-membership",
    note: "Zoho checkout — placeholder",
    embedUrl: ZOHO_EMBEDS.buyVirtualMembership,
    modalTitle: "Buy Virtual Membership",
  },
  joinOfficeWaitlist: {
    label: "Join the Waitlist",
    href: "#zoho-private-office-waitlist",
    note: "Zoho waitlist — placeholder",
    embedUrl: ZOHO_EMBEDS.joinOfficeWaitlist,
    modalTitle: "Join the Private Office Waitlist",
  },
  bookEventSpace: {
    label: "Book Event Space",
    href: "#zoho-book-events",
    note: "Zoho events inquiry — placeholder",
    embedUrl: ZOHO_EMBEDS.bookEventSpace,
    modalTitle: "Book Event Space",
  },
  contactUs: {
    label: "Contact Us",
    href: "#workspace-contact",
    note: "Zoho contact form — placeholder",
    embedUrl: ZOHO_EMBEDS.contactUs,
    modalTitle: "Contact Us",
  },
};

export const WORKSPACE_PAGES = [
  {
    title: "Coworking",
    path: "/coworking",
    description:
      "Flexible desk memberships and day passes in downtown Lexington.",
  },
  {
    title: "Private Office",
    path: "/private-office",
    description:
      "Dedicated offices with 24/7 access and conference room privileges.",
  },
  {
    title: "Conference + Meeting Rooms",
    path: "/conference-rooms",
    description: "Book by the hour for teams, clients, and workshops.",
  },
  {
    title: "Book Events",
    path: "/book-events",
    description:
      "Host meetups, trainings, and celebrations in our event-ready spaces.",
  },
];
