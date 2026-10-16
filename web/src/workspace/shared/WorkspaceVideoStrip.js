import React from "react";
import WorkspaceSparkCta from "./WorkspaceSparkCta";
import { WORKSPACE_CTAS } from "../constants/ctaPlaceholders";
import PannellumTour from "../../pages/workspace/tour/_PannellumTour";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceVideoStrip = () => (
  <section className={styles.videoStrip}>
    <div className={styles.videoStripInner}>
      <div className={styles.videoStripCopy}>
        <span className={styles.eyebrowAccent}>The Building</span>
        <h2 className={styles.sectionTitle}>See the Space</h2>
        <p className={styles.prose}>
          Drag to look around Awesome Inc Workspace. Use the buttons to jump
          between rooms, or click a doorway to walk through.
        </p>
        <WorkspaceSparkCta cta={WORKSPACE_CTAS.bookTour} variant="primary" />
      </div>
      <PannellumTour embedded />
    </div>
  </section>
);

export default WorkspaceVideoStrip;
