import React from "react";
import WorkspacePageShell from "../../../workspace/shared/WorkspacePageShell";
import WorkspaceSparkCta from "../../../workspace/shared/WorkspaceSparkCta";
import { WORKSPACE_CTAS } from "../../../workspace/constants/ctaPlaceholders";
import PannellumTour from "./PannellumTour";
import * as workspaceStyles from "../../../workspace/shared/workspaceShared.module.scss";
import * as styles from "./pannellumTour.module.scss";

const WorkspaceTourPage = () => (
  <WorkspacePageShell pageTitle="Virtual Tour">
    <section className={styles.intro}>
      <div className={styles.introInner}>
        <span className={workspaceStyles.eyebrowAccent}>Workspace</span>
        <h1 className={workspaceStyles.sectionTitle}>
          Look Around Awesome Inc
        </h1>
        <p className={workspaceStyles.sectionLead}>
          Drag to look around, use the buttons to jump between spaces, and click
          doorways once hotspots are placed. Schedule an in-person tour when you
          are ready to visit.
        </p>
        <div className={workspaceStyles.ctaRow}>
          <WorkspaceSparkCta cta={WORKSPACE_CTAS.bookTour} variant="primary" />
        </div>
      </div>
    </section>
    <PannellumTour />
  </WorkspacePageShell>
);

export default WorkspaceTourPage;
