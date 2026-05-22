import React from "react";
import * as styles from "./workspaceShared.module.scss";

const VARIANT_CLASS = {
  light: "sectionLight",
  muted: "sectionMuted",
  dark: "sectionDark",
};

const HEADER_ALIGN_CLASS = {
  left: "sectionHeader",
  right: "sectionHeaderRight",
  center: "sectionHeaderCenter",
};

const WorkspaceSparkSection = ({
  variant = "light",
  eyebrow,
  title,
  titleStyle = "main",
  lead,
  children,
  id,
  align = "left",
  centered = false,
}) => {
  const sectionClass = styles[VARIANT_CLASS[variant] || "sectionLight"];
  const titleClass =
    titleStyle === "sub" ? styles.sectionTitleSub : styles.sectionTitle;
  const resolvedAlign = centered ? "center" : align;
  const headerClass =
    styles[HEADER_ALIGN_CLASS[resolvedAlign] || "sectionHeader"];
  const hasHeader = eyebrow || title || lead;

  return (
    <section id={id} className={sectionClass}>
      <div className={styles.sectionInner}>
        {hasHeader && (
          <div className={headerClass}>
            {eyebrow && (
              <span
                className={
                  variant === "dark" ? styles.eyebrow : styles.eyebrowAccent
                }
              >
                {eyebrow}
              </span>
            )}
            {title && <h2 className={titleClass}>{title}</h2>}
            {lead && <p className={styles.sectionLead}>{lead}</p>}
          </div>
        )}
        {children && <div className={styles.sectionBody}>{children}</div>}
      </div>
    </section>
  );
};

export default WorkspaceSparkSection;
