import React from "react";
import WorkspacePageShell from "../../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../../workspace/shared/WorkspaceSparkSection";
import WorkspaceMembershipBand from "../../workspace/shared/WorkspaceMembershipBand";
import WorkspaceSparkContact from "../../workspace/shared/WorkspaceSparkContact";
import { WORKSPACE_CTAS } from "../../workspace/constants/ctaPlaceholders";

const EVENT_OFFERINGS = [
  {
    eyebrow: "Flexible layouts",
    title: "Workshops & Trainings",
    price: "20–80+ guests",
    body: "Classroom, theater, or reception-style setups with A/V support for presentations and livestreams.",
  },
  {
    eyebrow: "Downtown location",
    title: "Meetups & Showcases",
    price: "Custom packages",
    body: "Pitch nights, community gatherings, and partner events in the heart of Lexington.",
  },
  {
    eyebrow: "Full-service planning",
    title: "Corporate Offsites",
    price: "Let's talk",
    body: "Not sure which space fits? Request to host an event and our team will help you plan the right room flow.",
    cta: WORKSPACE_CTAS.contactUs,
  },
];

const BookEventsPage = () => (
  <WorkspacePageShell>
    <WorkspaceSparkHero
      eyebrow="Events & Programs"
      title="Host Where Innovation Happens"
      lead="Our venue is built for networking, education, and celebration — book space for your next impactful event at Awesome Inc."
      stats="Members and partners receive priority scheduling."
      primaryCta={WORKSPACE_CTAS.bookTour}
    />

    <WorkspaceSparkSection
      variant="light"
      eyebrow="At Awesome Inc"
      title="Event Space Overview"
      lead="From startup showcases to corporate trainings — modern facilities designed for connection."
    >
      {EVENT_OFFERINGS.map((item) => (
        <WorkspaceMembershipBand
          key={item.title}
          eyebrow={item.eyebrow}
          title={item.title}
          price={item.price}
          body={item.body}
          cta={item.cta}
        />
      ))}
    </WorkspaceSparkSection>

    <WorkspaceSparkContact />
  </WorkspacePageShell>
);

export default BookEventsPage;
