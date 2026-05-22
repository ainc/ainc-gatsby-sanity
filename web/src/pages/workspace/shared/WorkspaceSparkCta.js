import React from "react";
import { Link } from "gatsby";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import * as styles from "./workspaceShared.module.scss";

const isInternal = (href) => href?.startsWith("/") && !href.startsWith("//");

const VARIANT_BUTTON_CLASS = {
  primary: "",
  secondary: "secondary",
  ghost: "white--dark-text",
  ghostDark: "secondary",
};

const WorkspaceSparkCta = ({ cta, variant = "primary", className = "" }) => {
  const label = cta.label || cta.ctaLabel;
  const href = cta.href || cta.path;
  const buttonClass = VARIANT_BUTTON_CLASS[variant] || "";

  const button = (
    <BrandButton
      className={`text-uppercase ${buttonClass} ${className}`.trim()}
    >
      {label}
    </BrandButton>
  );

  const wrap = (node) => (
    <span className={styles.inlineCtaWrap}>
      {node}
      {cta.note && <span className={styles.ctaNote}>{cta.note}</span>}
    </span>
  );

  if (!href) return wrap(button);

  if (isInternal(href)) {
    return wrap(<Link to={href}>{button}</Link>);
  }

  return wrap(<a href={href}>{button}</a>);
};

export default WorkspaceSparkCta;
