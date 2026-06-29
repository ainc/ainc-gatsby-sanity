import React from "react";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceCtaButton = ({ cta, className = "" }) => (
  <span className={styles.inlineCtaWrap}>
    <a href={cta.href}>
      <BrandButton className={`text-uppercase ${className}`}>
        {cta.label}
      </BrandButton>
    </a>
    {cta.note && <span className={styles.ctaNote}>{cta.note}</span>}
  </span>
);

export default WorkspaceCtaButton;
