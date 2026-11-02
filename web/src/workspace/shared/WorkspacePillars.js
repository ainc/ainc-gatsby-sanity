import React from "react";
import { HUB_PILLARS } from "../data/pageContent";
import * as styles from "./workspaceShared.module.scss";

const WorkspacePillars = () => (
  <div className={styles.pillarGrid}>
    {HUB_PILLARS.map((pillar) => (
      <div key={pillar.title} className={styles.pillar}>
        <h3 className={styles.pillarTitle}>{pillar.title}</h3>
        <p className={styles.pillarText}>{pillar.text}</p>
      </div>
    ))}
  </div>
);

export default WorkspacePillars;
