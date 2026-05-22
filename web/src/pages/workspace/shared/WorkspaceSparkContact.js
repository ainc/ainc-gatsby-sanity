import React from "react";
import { WORKSPACE_CTAS } from "../constants/ctaPlaceholders";
import WorkspaceSparkSection from "./WorkspaceSparkSection";
import WorkspaceSparkCta from "./WorkspaceSparkCta";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceSparkContact = () => {
  const contact = WORKSPACE_CTAS.contactUs;

  return (
    <WorkspaceSparkSection
      id="workspace-contact"
      variant="dark"
      align="center"
      eyebrow="Let's Talk"
      title="Ready to See the Space?"
      lead="Book a tour, ask about availability, or tell us what you need — our team will follow up shortly."
    >
      <div className={styles.contactBlock}>
        <div className={`${styles.ctaRow} ${styles.contactCtaRow}`}>
          <WorkspaceSparkCta cta={WORKSPACE_CTAS.bookTour} variant="primary" />
          <WorkspaceSparkCta cta={contact} variant="ghost" />
        </div>
        <div className={styles.contactPlaceholder}>
          Zoho contact form embed will replace this block. Placeholder:{" "}
          {contact.note}
        </div>
      </div>
    </WorkspaceSparkSection>
  );
};

export default WorkspaceSparkContact;
