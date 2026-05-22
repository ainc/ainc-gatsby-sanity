import React from "react";
import WorkspacePageShell from "../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../workspace/shared/WorkspaceSparkSection";
import WorkspaceMembershipBand from "../workspace/shared/WorkspaceMembershipBand";
import WorkspaceSparkAmenities from "../workspace/shared/WorkspaceSparkAmenities";
import WorkspaceSparkContact from "../workspace/shared/WorkspaceSparkContact";
import { WORKSPACE_CTAS } from "../workspace/constants/ctaPlaceholders";
import * as styles from "../workspace/shared/workspaceShared.module.scss";

const PLANS = [
  {
    eyebrow: "Drop in for a day",
    title: "Day Pass",
    price: "$35 / day",
    body: "Same-day access to open desk areas, Wi-Fi, and breakroom. Book conference rooms à la carte when you need them.",
    cta: WORKSPACE_CTAS.buyDayPass,
  },
  {
    eyebrow: "Collaborate and thrive",
    title: "Open Desk Member",
    price: "$199 / month",
    body: "24/7 access, conference room privileges, and member-exclusive events. Our most popular plan for full-time builders.",
    cta: WORKSPACE_CTAS.bookTour,
  },
  {
    eyebrow: "Work from anywhere, mail from downtown",
    title: "Virtual Member",
    price: "$75 / month",
    body: "Downtown mailing address, conference access, and programming — without a dedicated desk.",
    cta: WORKSPACE_CTAS.bookTour,
  },
];

const CoworkingPage = () => (
  <WorkspacePageShell>
    <WorkspaceSparkHero
      eyebrow="Co-working"
      title="Collaborate in Shared Workspace"
      lead="Flexible memberships and day passes for founders, freelancers, and remote teams at Awesome Inc."
      stats="Purchase a day pass to try the space, or choose a monthly membership with conference access included."
      primaryCta={WORKSPACE_CTAS.buyDayPass}
      secondaryCta={WORKSPACE_CTAS.bookTour}
    />

    <WorkspaceSparkSection
      variant="light"
      eyebrow="For Every Stage of Growth"
      title="Memberships"
      lead="Co-working at Awesome Inc emphasizes connection — a vibrant space where ideas flourish and entrepreneurs meet."
    >
      <div className={styles.membershipStack}>
        {PLANS.map((plan) => (
          <WorkspaceMembershipBand
            key={plan.title}
            eyebrow={plan.eyebrow}
            title={plan.title}
            price={plan.price}
            body={plan.body}
            cta={plan.cta}
          />
        ))}
      </div>
    </WorkspaceSparkSection>

    <WorkspaceSparkSection
      variant="muted"
      eyebrow="Need a Room?"
      title="Conference + Meeting Space"
      lead="Members can book thinking rooms and conference space by the hour."
      align="center"
    >
      <WorkspaceMembershipBand
        eyebrow="Book online"
        title="Schedule a Room"
        price="From $25 / hour"
        body="Paid scheduling through Zoho will connect here — reserve space for clients, workshops, or team syncs."
        cta={WORKSPACE_CTAS.scheduleConferenceRoom}
      />
    </WorkspaceSparkSection>

    <WorkspaceSparkAmenities />
    <WorkspaceSparkContact />
  </WorkspacePageShell>
);

export default CoworkingPage;
