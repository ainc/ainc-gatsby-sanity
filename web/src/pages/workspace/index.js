import React from "react";
import WorkspacePageShell from "../../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../../workspace/shared/WorkspaceSparkSection";
import WorkspaceOfferingTiles from "../../workspace/shared/WorkspaceOfferingTiles";
import WorkspaceStartupsSection from "../../workspace/shared/WorkspaceStartupsSection";
import WorkspaceMembershipBand from "../../workspace/shared/WorkspaceMembershipBand";
import WorkspaceVideoStrip from "../../workspace/shared/WorkspaceVideoStrip";
import WorkspaceSparkAmenities from "../../workspace/shared/WorkspaceSparkAmenities";
import WorkspaceSparkContact from "../../workspace/shared/WorkspaceSparkContact";
import WorkspaceSparkCta from "../../workspace/shared/WorkspaceSparkCta";
import { WORKSPACE_CTAS } from "../../workspace/constants/ctaPlaceholders";
import {
  HUB_HERO,
  HUB_STORY,
  HUB_MEMBERSHIPS,
} from "../../workspace/data/pageContent";
import * as styles from "../../workspace/shared/workspaceShared.module.scss";

const WorkspacePage = () => (
  <WorkspacePageShell>
    <WorkspaceSparkHero
      eyebrow={HUB_HERO.eyebrow}
      title={HUB_HERO.title}
      lead={HUB_HERO.lead}
      stats={HUB_HERO.stats}
      primaryCta={WORKSPACE_CTAS.bookTour}
      secondaryCta={WORKSPACE_CTAS.buyDayPass}
    />

    <WorkspaceSparkSection
      variant="light"
      eyebrow={HUB_STORY.eyebrow}
      title={HUB_STORY.title}
      titleStyle="sub"
    >
      <p className={styles.prose}>{HUB_STORY.body}</p>
    </WorkspaceSparkSection>

    <WorkspaceSparkSection
      variant="muted"
      eyebrow="A Place to Start. A Place to Stay."
      title="Explore Our Workspace"
      lead="Coworking, private offices, meeting rooms, and event space — each with its own page and pricing."
    >
      <WorkspaceOfferingTiles />
    </WorkspaceSparkSection>

    <WorkspaceStartupsSection />

    <WorkspaceSparkSection
      variant="light"
      eyebrow="Memberships"
      title="Find the Right Fit"
      lead="Compare options below or visit each offering for full details."
    >
      <div className={styles.membershipStack}>
        {HUB_MEMBERSHIPS.map((item) => (
          <WorkspaceMembershipBand
            key={item.title}
            eyebrow={item.eyebrow}
            title={item.title}
            price={item.price}
            body={item.body}
            linkCta={{ label: item.ctaLabel, path: item.path }}
          />
        ))}
        <WorkspaceMembershipBand
          eyebrow="Built for Community"
          title="Book Events"
          price="Custom packages"
          body="Host meetups, trainings, and community gatherings in our event-ready spaces."
          linkCta={{ label: "Book event space", path: "/book-events" }}
        />
      </div>
    </WorkspaceSparkSection>

    <WorkspaceVideoStrip />
    <WorkspaceSparkAmenities />
    <WorkspaceSparkContact />
  </WorkspacePageShell>
);

export default WorkspacePage;
