import React from "react";
import WorkspacePageShell from "../../workspace/shared/WorkspacePageShell";
import WorkspaceSparkHero from "../../workspace/shared/WorkspaceSparkHero";
import WorkspaceSparkSection from "../../workspace/shared/WorkspaceSparkSection";
import WorkspaceSparkAmenities from "../../workspace/shared/WorkspaceSparkAmenities";
import WorkspaceSparkContact from "../../workspace/shared/WorkspaceSparkContact";
import WorkspaceSparkCta from "../../workspace/shared/WorkspaceSparkCta";
import { WORKSPACE_CTAS } from "../../workspace/constants/ctaPlaceholders";
import * as styles from "../../workspace/shared/workspaceShared.module.scss";

const PrivateOfficePage = () => (
  <WorkspacePageShell>
    <WorkspaceSparkHero
      eyebrow="Private Offices"
      title="Your Workspace, Tailored for Focus"
      lead="Lockable offices with 24/7 access, conference privileges, and a downtown Lexington address."
      primaryCta={WORKSPACE_CTAS.joinOfficeWaitlist}
      secondaryCta={WORKSPACE_CTAS.bookTour}
    />

    <WorkspaceSparkSection
      variant="light"
      eyebrow="Space Designed for Growing Teams"
      title="Office Availability"
      lead="Private offices start at $600 / month. None are available right now — join the waitlist and we'll reach out as offices open up."
    >
      <div className={styles.ctaRow}>
        <WorkspaceSparkCta
          cta={WORKSPACE_CTAS.joinOfficeWaitlist}
          variant="primary"
        />
      </div>
    </WorkspaceSparkSection>

    <WorkspaceSparkAmenities />
    <WorkspaceSparkContact contactCta={null} />
  </WorkspacePageShell>
);

export default PrivateOfficePage;
