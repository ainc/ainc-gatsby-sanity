import React from "react";
import WorkspaceSparkCta from "./WorkspaceSparkCta";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceMembershipBand = ({
  eyebrow,
  title,
  price,
  body,
  cta,
  linkCta,
}) => (
  <article className={styles.membershipBand}>
    <div className={styles.membershipBandMeta}>
      {eyebrow && <p className={styles.membershipBandEyebrow}>{eyebrow}</p>}
      <h3 className={styles.membershipBandTitle}>{title}</h3>
      {price && <p className={styles.membershipBandPrice}>{price}</p>}
    </div>
    <div>
      {body && <p className={styles.membershipBandBody}>{body}</p>}
      {cta && <WorkspaceSparkCta cta={cta} variant="primary" />}
      {linkCta && (
        <WorkspaceSparkCta
          cta={{ label: linkCta.label, path: linkCta.path, note: "" }}
          variant="secondary"
        />
      )}
    </div>
  </article>
);

export default WorkspaceMembershipBand;
