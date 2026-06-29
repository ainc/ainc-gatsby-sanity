import React from "react";
import WorkspacePillars from "./WorkspacePillars";
import startupsImage from "../../images/bootcampteampic.jpg";
import * as styles from "./workspaceShared.module.scss";

const STARTUPS_COPY = {
  eyebrow: "Coworking & Collaboration",
  title: "Startups & High-Growth Teams",
  lead: "Builders and doers who need flexible space, community, and room to grow.",
  imageAlt: "Entrepreneurs collaborating at Awesome Inc Workspace",
};

const WorkspaceStartupsSection = () => (
  <section className={styles.sectionDark}>
    <div className={styles.sectionInner}>
      <div className={styles.contentSplit}>
        <div className={styles.contentSplitMedia}>
          <img src={startupsImage} alt={STARTUPS_COPY.imageAlt} />
        </div>
        <div className={styles.contentSplitBody}>
          <div className={styles.sectionHeaderRight}>
            <span className={styles.eyebrow}>{STARTUPS_COPY.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{STARTUPS_COPY.title}</h2>
            <p className={styles.sectionLead}>{STARTUPS_COPY.lead}</p>
          </div>
          <WorkspacePillars />
        </div>
      </div>
    </div>
  </section>
);

export default WorkspaceStartupsSection;
