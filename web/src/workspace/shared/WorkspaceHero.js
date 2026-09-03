import React from "react";
import { motion } from "framer-motion";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceHero = ({ title, subtitle, primaryCta, secondaryCta }) => (
  <section className={styles.hero}>
    <div className={styles.heroInner}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className={styles.heroActions}>
            {primaryCta && (
              <a href={primaryCta.href}>
                <BrandButton className="text-uppercase">
                  {primaryCta.label}
                </BrandButton>
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href}>
                <BrandButton className="text-uppercase">
                  {secondaryCta.label}
                </BrandButton>
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  </section>
);

export default WorkspaceHero;
