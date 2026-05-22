import React from "react";
import { motion } from "framer-motion";
import WorkspaceSparkCta from "./WorkspaceSparkCta";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceSparkHero = ({
  eyebrow,
  title,
  lead,
  stats,
  primaryCta,
  secondaryCta,
}) => (
  <section className={styles.hero}>
    <div className={styles.heroInner}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.heroTitle}>{title}</h1>
        {lead && <p className={styles.heroLead}>{lead}</p>}
        {stats && <p className={styles.heroStats}>{stats}</p>}
        {(primaryCta || secondaryCta) && (
          <div className={styles.heroActions}>
            {primaryCta && (
              <WorkspaceSparkCta cta={primaryCta} variant="primary" />
            )}
            {secondaryCta && (
              <WorkspaceSparkCta cta={secondaryCta} variant="ghost" />
            )}
          </div>
        )}
      </motion.div>
    </div>
  </section>
);

export default WorkspaceSparkHero;
